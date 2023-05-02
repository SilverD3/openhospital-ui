import { FC, useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import React from "react";
import { useFormik } from "formik";
import {
  formatAllFieldValues,
  getFromFields,
  parseDate,
} from "../../../../libraries/formDataHandling/functions";
import { object, string } from "yup";
import {
  ExamDTO,
  LaboratoryDTO,
  LaboratoryDTOInOutPatientEnum,
  LaboratoryDTOStatusEnum,
  PatientDTO,
} from "../../../../generated";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../../types";
import {
  createLabRequest,
  createLabRequestReset,
} from "../../../../state/laboratories/actions";
import PatientPicker from "../../patientPicker/PatientPicker";
import has from "lodash.has";
import get from "lodash.get";
import AutocompleteField from "../../autocompleteField/AutocompleteField";
import { ILaboratoriesState } from "../../../../state/laboratories/types";
import { Button } from "@material-ui/core";
import { ControlPoint } from "@material-ui/icons";
import { ExamRequestProps } from "./types";
import "./styles.scss";
import InfoBox from "../../infoBox/InfoBox";
import { ExamTransitionState } from "../examForm/type";

const ExamRequestForm: FC<ExamRequestProps> = ({
  fields,
  patient,
  handleSuccess,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [patientData, setPatientData] = useState({} as PatientDTO);
  const exams = useSelector((state: IState) => state.exams.examList.data);
  const [currentExamCode, setCurrentExamCode] = useState("");
  const infoBoxRef = useRef<HTMLDivElement>(null);
  const selectedPatient = useSelector(
    (state: IState) => state.patients.selectedPatient.data
  );
  const initialValues = getFromFields(fields, "value");
  const validationSchema = object({
    exam: string().required(t("common.required")),
    patientId: string().when("patient", {
      is: patient,
      then: string().required(t("common.required")),
      otherwise: string(),
    }),
  });
  const examOptionsSelector = (exams: ExamDTO[] | undefined) => {
    if (exams) {
      return exams.map((item) => {
        return {
          value: item.code ?? "",
          label:
            (item.description &&
              item.description?.length > 30 &&
              item.description.slice(0, 30) + "...") ||
            (item.description ?? ""),
        };
      });
    } else return [];
  };

  const examList = useSelector((state: IState) => state.exams.examList.data);

  const labStore = useSelector<IState, ILaboratoriesState>(
    (state: IState) => state.laboratories
  );

  const [shouldResetForm, setShouldResetForm] = useState(false);
  const [activityTransitionState, setActivityTransitionState] =
    useState<ExamTransitionState>("IDLE");

  useEffect(() => {
    dispatch(createLabRequestReset());
  }, [dispatch]);

  useEffect(() => {
    if (activityTransitionState === "TO_RESET") {
      if (handleSuccess) handleSuccess(false);
      setTimeout(() => {
        dispatch(createLabRequestReset());
        setShouldResetForm(true);
      }, 3000);
    }
  }, [dispatch, activityTransitionState]);

  useEffect(() => {
    if (labStore.createLabRequest.status === "SUCCESS") {
      if (handleSuccess) handleSuccess(true);
      setActivityTransitionState("TO_RESET");
    }
  }, [labStore]);

  const errorMessage = useSelector<IState>(
    (state) =>
      labStore.createLabRequest.error?.message || t("common.somethingwrong")
  ) as string;

  const successMessage = t("lab.examrequestcreated");

  const onSubmit = (lab: LaboratoryDTO) => {
    setShouldResetForm(false);
    if (!patient) patient = patientData;
    lab.patientCode = patient?.code;
    lab.exam = exams?.find((item) => item.code === lab.exam);
    lab.patName = patient?.firstName + " " + patient?.secondName;
    lab.sex = patient?.sex;
    lab.age = patient?.age;
    lab.date = parseDate(lab.date ?? "");
    lab.registrationDate = parseDate(lab.registrationDate ?? "");
    lab.inOutPatient = patientData?.status
      ? patientData.status === "O"
        ? LaboratoryDTOInOutPatientEnum.O
        : LaboratoryDTOInOutPatientEnum.I
      : LaboratoryDTOInOutPatientEnum.O;
    lab.material = ""; // material needs to be removed from backend env
    lab.date = new Date().toISOString(); // Date will be modified when processing the exam request
    lab.result = "";
    lab.status = LaboratoryDTOStatusEnum.DRAFT;

    dispatch(createLabRequest(lab));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const formattedValues = formatAllFieldValues(fields, values);
      onSubmit(formattedValues);
    },
  });

  const resetFormCallback = () => {
    setShouldResetForm(false);
    dispatch(createLabRequestReset());
    setActivityTransitionState("IDLE");
  };

  const { setFieldValue, handleBlur, resetForm } = formik;

  useEffect(() => {
    if (shouldResetForm) {
      resetForm();
      resetFormCallback();
      setCurrentExamCode("");
    }
  }, [shouldResetForm, resetForm, resetFormCallback]);

  const isValid = (fieldName: string): boolean => {
    return has(formik.touched, fieldName) && has(formik.errors, fieldName);
  };
  const getErrorText = (fieldName: string): string => {
    return has(formik.touched, fieldName)
      ? (get(formik.errors, fieldName) as string)
      : "";
  };

  const onBlurCallback = useCallback(
    (fieldName: string) =>
      (
        e: React.FocusEvent<HTMLInputElement>,
        value: PatientDTO | string | undefined
      ) => {
        handleBlur(e);
        if (typeof value === "string") {
          setFieldValue(fieldName, value);
          if (fieldName === "exam") {
            setCurrentExamCode(value);
          }
        } else {
          setFieldValue(fieldName, value?.code ?? "");
          setPatientData(value as PatientDTO);
        }
      },
    [setFieldValue, handleBlur]
  );

  const examsLoading = useSelector(
    (state: IState) => state.exams.examList.status === "LOADING"
  );

  const isLoading = labStore.createLabRequest.status === "LOADING";

  return (
    <>
      <div className="patientExamRequestForm">
        <h5 className="">{t("lab.examrequest")}</h5>

        <form
          className="patientExamRequestForm__form"
          onSubmit={formik.handleSubmit}
        >
          <div className="row start-sm center-xs">
            {!patient && (
              <div className="patientExamRequestForm__item col-5">
                <PatientPicker
                  theme={"regular"}
                  fieldName="patientId"
                  initialValue={selectedPatient}
                  fieldValue={formik.values.patientId}
                  label={t("opd.patient")}
                  isValid={isValid("patientId")}
                  errorText={getErrorText("patientId")}
                  onBlur={onBlurCallback("patientId")}
                  enableFocus={false}
                />
              </div>
            )}

            <div className="patientExamRequestForm__item col-5">
              <AutocompleteField
                fieldName="exam"
                fieldValue={formik.values.exam}
                label={t("lab.exam")}
                isValid={isValid("exam")}
                errorText={getErrorText("exam")}
                onBlur={onBlurCallback("exam")}
                options={examOptionsSelector(examList)}
                isLoading={examsLoading}
                disabled={isLoading}
              />
            </div>

            <div className="patientExamRequestForm__item col-2">
              <div className="submit_button">
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  disabled={isLoading}
                >
                  <ControlPoint /> {t("lab.examrequestbtn")}
                </Button>
              </div>
            </div>

            {labStore.createLabRequest.status === "FAIL" && (
              <div ref={infoBoxRef} className="info-box-container">
                <InfoBox type="error" message={errorMessage} />
              </div>
            )}
            {labStore.createLabRequest.status === "SUCCESS" && (
              <div ref={infoBoxRef} className="info-box-container">
                <InfoBox type="info" message={successMessage} />
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default ExamRequestForm;