import { Button, CircularProgress } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { FC, Fragment, useMemo, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import { IState } from "../../../types";
import InfoBox from "../infoBox/InfoBox";
import { initialFilter, initialFilterFields } from "./consts";
import { ExamFilterForm } from "./filter/ExamFilterForm";
import "./styles.scss";
import { ExamTable } from "./table/ExamTable";
import checkIcon from "../../../assets/check-icon.png";
import { useEffect } from "react";
import {
  getFromFields,
  updateFilterFields,
} from "../../../libraries/formDataHandling/functions";
import {
  deleteLab,
  deleteLabReset,
  searchLabs,
  updateLabStatus,
} from "../../../state/laboratories/actions";
import { getExams } from "../../../state/exams/actions";
import { ILaboratoriesState } from "../../../state/laboratories/types";
import { LaboratoryDTO, LaboratoryDTOStatusEnum } from "../../../generated";
import ConfirmationDialog from "../confirmationDialog/ConfirmationDialog";
import { getPatientThunk } from "../../../state/patients/actions";
import isEmpty from "lodash.isempty";
import { EditLaboratoryContent } from "./EditLaboratoryContent";
import { PATHS } from "../../../consts";
import { Permission } from "../../../libraries/permissionUtils/Permission";
import { TFilterValues } from "./filter/types";
import { ChangeLabStatus } from "./ChangeLabStatus";

export const Exams: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [filter, setFilter] = useState(initialFilter as TFilterValues);
  const infoBoxRef = useRef<HTMLDivElement>(null);
  const [deletedObjCode, setDeletedObjCode] = useState("");

  const [showStatusChangeModal, setShowStatusChangeModal] = useState(false);
  const [selectedExamRow, setSelectedExamRow] =
    useState<LaboratoryDTO | undefined>(undefined);

  const data = useSelector(
    (state: IState) => state.laboratories.searchLabs.data
  );

  const fields = useMemo(
    () => updateFilterFields(initialFilterFields, filter),
    [filter]
  );
  const labStore = useSelector<IState, ILaboratoriesState>(
    (state: IState) => state.laboratories
  );

  useEffect(() => {
    if (filter.patientCode !== undefined && !isEmpty(filter.patientCode)) {
      dispatch(getPatientThunk(filter.patientCode?.toString()));
    }
    dispatch(searchLabs(filter));
  }, [filter]);

  useEffect(() => {
    const refresh = (
      location.state as { refresh: boolean | undefined } | undefined
    )?.refresh;
    if (refresh) {
      dispatch(searchLabs(filter));
    }
  }, [location]);

  const onSubmit = (values: TFilterValues) => {
    setFilter(values);
  };

  const onEdit = (row: LaboratoryDTO) => {
    if (row.status === LaboratoryDTOStatusEnum.DRAFT) {
      setSelectedExamRow(row);
      setShowStatusChangeModal(true);
    } else {
      navigate(`${PATHS.laboratory}/${row.code}/edit`);
    }
  };

  const onExamStatusChangeClick = () => {
    if (selectedExamRow?.code) {
      dispatch(
        updateLabStatus(selectedExamRow?.code, LaboratoryDTOStatusEnum.OPEN)
      );
    }
  };

  const onExamStatusChangeClose = () => {
    setSelectedExamRow(undefined);
    setShowStatusChangeModal(false);
  };

  const onDelete = (code: number | undefined) => {
    setDeletedObjCode(`${code}` ?? "");
    dispatch(deleteLab(code));
  };

  const errorMessage = useSelector((state: IState) =>
    state.laboratories.searchLabs.error?.message
      ? state.laboratories.searchLabs.error?.message
      : t("common.somethingwrong")
  );

  const updateLabErrorMsg = useSelector((state: IState) =>
    state.laboratories.updateLab.error?.message
      ? state.laboratories.updateLab.error?.message
      : t("common.somethingwrong")
  );

  let status = useSelector(
    (state: IState) => state.laboratories.searchLabs.status
  );

  let changeStatus = useSelector(
    (state: IState) => state.laboratories.updateLab.status
  );

  useEffect(() => {
    if (changeStatus === "SUCCESS") {
      dispatch(searchLabs(filter));
    }
  }, [changeStatus]);

  /**
   * I commented the following lignes because they were causing issue with filter.
   * They should be removed.
   *
   * useEffect(() => {
   *   dispatch(searchLabs(getFromFields(fields, "value")));
   *   dispatch(getExams());
   * }, []);
   */

  const ExamContent = useMemo(() => {
    return (
      <>
        <div className="lab__header">
          <div className="lab__title">{t("nav.laboratory")}</div>
          <div className="lab__actions">
            <Permission require="exam.create">
              <Button
                onClick={() => {
                  navigate(`${PATHS.laboratory}/new`);
                }}
                type="button"
                variant="contained"
                color="primary"
              >
                <Add fontSize="small" />
                <span className="new__button__label">{t("lab.newlab")}</span>
              </Button>
            </Permission>
          </div>
        </div>
        {status === "LOADING" && (
          <CircularProgress
            style={{ marginLeft: "50%", position: "relative" }}
          />
        )}
        {status !== "LOADING" && (
          <Permission require="exam.read">
            <ExamFilterForm onSubmit={onSubmit} fields={fields} />
            {status === "SUCCESS_EMPTY" && (
              <InfoBox type="warning" message={t("common.emptydata")} />
            )}
            {status === "FAIL" && (
              <InfoBox type="error" message={errorMessage} />
            )}
            {changeStatus === "FAIL" && (
              <div ref={infoBoxRef} className="info-box-container">
                <InfoBox type="error" message={updateLabErrorMsg} />
              </div>
            )}
            {status === "SUCCESS" && (
              <ExamTable
                data={data ?? []}
                handleDelete={onDelete}
                handleEdit={onEdit}
              />
            )}
            {labStore.deleteLab.status === "LOADING" && (
              <CircularProgress
                style={{ marginLeft: "50%", position: "relative" }}
              />
            )}
            <ConfirmationDialog
              isOpen={labStore.deleteLab.status === "SUCCESS"}
              title={t("lab.deleted")}
              icon={checkIcon}
              info={t("common.deletesuccess", { code: deletedObjCode })}
              primaryButtonLabel={t("common.ok")}
              handlePrimaryButtonClick={() => {
                dispatch(deleteLabReset());
                dispatch(searchLabs(filter));
              }}
              handleSecondaryButtonClick={() => {}}
            />
          </Permission>
        )}

        {showStatusChangeModal && selectedExamRow && (
          <ChangeLabStatus
            onClick={onExamStatusChangeClick}
            onClose={onExamStatusChangeClose}
            status={LaboratoryDTOStatusEnum.OPEN}
            isOpen={true}
            labCode={`${selectedExamRow.code}`}
          />
        )}
      </>
    );
  }, [status, fields, data, filter, dispatch, labStore, showStatusChangeModal]);

  return (
    <Fragment>
      <div className="lab_labs">
        <Routes>
          <Route index element={ExamContent} />
          <Route path={`/new`} element={<EditLaboratoryContent />} />
          <Route path={`/:id/edit`} element={<EditLaboratoryContent />} />
        </Routes>
      </div>
    </Fragment>
  );
};
