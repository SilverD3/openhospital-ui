import React, { ReactNode, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ApiResponse } from "../../../../../../../state/types";
import { IState } from "../../../../../../../types";
import { AdmissionTypeDTO } from "../../../../../../../generated";
import InfoBox from "../../../../../infoBox/InfoBox";
import { CircularProgress } from "@material-ui/core";
import Table from "../../../../../table/Table";
import ConfirmationDialog from "../../../../../confirmationDialog/ConfirmationDialog";
import { deleteAdmissionTypeReset } from "../../../../../../../state/types/admissions/actions";
import checkIcon from "../../../../../../../assets/check-icon.png";
import "./styles.scss";

interface IOwnProps {
  onEdit: (row: any) => void;
  onDelete: (row: any) => void;
  headerActions?: ReactNode;
}

const AdmissionTypesTable = (props: IOwnProps) => {
  const { onDelete, onEdit, headerActions } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const infoBoxRef = useRef<HTMLDivElement>(null);

  const header = ["code", "description"];

  const label = {
    code: t("admissionTypes.code"),
    description: t("admissionTypes.description"),
  };
  const order = ["code", "description"];

  const { data, status, error } = useSelector<
    IState,
    ApiResponse<AdmissionTypeDTO[]>
  >((state) => state.types.admissions.getAll);

  const deleteAdmissionType = useSelector<IState, ApiResponse<boolean>>(
    (state) => state.types.admissions.delete
  );

  const handleEdit = (row: AdmissionTypeDTO) => {
    onEdit((data ?? []).find((item) => item.code === row?.code));
  };

  const handleDelete = (row: AdmissionTypeDTO) => {
    onDelete(row);
  };

  const formatDataToDisplay = (data: AdmissionTypeDTO[]) => {
    return data.map((item) => {
      return {
        code: item.code,
        description: item.description,
      };
    });
  };

  return (
    <div className="admissionTypesTable">
      {(() => {
        switch (status) {
          case "FAIL":
            return (
              <div className="fullWidth">
                <InfoBox
                  type="error"
                  message={error?.error || error?.message}
                />
              </div>
            );
          case "LOADING":
            return <CircularProgress className="loader" />;

          case "SUCCESS":
            return (
              <>
                <Table
                  rowData={formatDataToDisplay(data ?? [])}
                  tableHeader={header}
                  labelData={label}
                  columnsOrder={order}
                  rowsPerPage={20}
                  isCollapsabile={false}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  showEmptyCell={false}
                  rawData={data}
                  manualFilter={false}
                  rowKey="code"
                  headerActions={headerActions}
                />
                {deleteAdmissionType.status === "FAIL" && (
                  <div ref={infoBoxRef} className="info-box-container">
                    <InfoBox
                      type="error"
                      message={deleteAdmissionType.error?.message}
                    />
                  </div>
                )}
                <ConfirmationDialog
                  isOpen={!!deleteAdmissionType.hasSucceeded}
                  title={t("admissionTypes.deleted")}
                  icon={checkIcon}
                  info={t("admissionTypes.deleteSuccess")}
                  primaryButtonLabel="Ok"
                  handlePrimaryButtonClick={() => {
                    dispatch(deleteAdmissionTypeReset());
                  }}
                  handleSecondaryButtonClick={() => ({})}
                />
              </>
            );
          case "SUCCESS_EMPTY":
            return <InfoBox type="info" message={t("common.emptydata")} />;
          default:
            return;
        }
      })()}
    </div>
  );
};

export default AdmissionTypesTable;
