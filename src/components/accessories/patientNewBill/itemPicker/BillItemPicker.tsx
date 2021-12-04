import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { useFormik } from "formik";
import React, { FC, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { number, object, string } from "yup";
import { BillItemsDTO } from "../../../../generated";
import { PriceDTO } from "../../../../generated/models/PriceDTO";
import {
  formatAllFieldValues,
  getFromFields,
} from "../../../../libraries/formDataHandling/functions";
import AutocompleteField from "../../autocompleteField/AutocompleteField";
import SmallButton from "../../smallButton/SmallButton";
import TextButton from "../../textButton/TextButton";
import TextField from "../../textField/TextField";
import { ItemGroups } from "../consts";
import { useItems, useItemPrices } from "../hooks";
import { useItemFormik } from "./hooks";
import "./styles.scss";
import { BillItemProps } from "./types";

const BillItemPickerForm: FC<BillItemProps> = ({
  onSubmit,
  resetFormCallback,
  shouldResetForm,
  fields,
}) => {
  const { t } = useTranslation();

  const [itemType, setItemType] = useState(ItemGroups.medical);
  const [creationMode, setCreationMode] = useState(false);

  const { prices, examsOptions, medicalsOptions, surgeriesOptions } =
    useItemPrices();

  const handleSubmit = useCallback(
    (values: Record<string, any>) => {
      let item: BillItemsDTO = {};
      item.itemQuantity = values?.itemQuantity;
      if (itemType == ItemGroups.other) {
        item.itemAmount = values?.itemAmount;
        item.itemDescription = values?.itemDescription;
        onSubmit(item);
        return;
      }
      let priceDTO: PriceDTO | undefined = prices.find(
        (e) => e?.item == values?.itemId
      );

      if (priceDTO) {
        item.itemAmount = priceDTO.price;
        item.itemDescription = priceDTO.description;
        item.itemId = priceDTO.item;
        item.price = true;
        item.priceId = priceDTO.id?.toString();
        onSubmit(item);
      }
    },
    [itemType]
  );

  const {
    getErrorText,
    getFieldProps,
    handleResetConfirmation,
    isValid,
    onBlurCallback,
    values,
  } = useItemFormik(fields, handleSubmit);

  const handleItemTypeChange = useCallback(
    (e: any, value: string) => {
      setItemType(value);
    },
    [itemType]
  );

  const options = useMemo(() => {
    return (
      (itemType == ItemGroups.medical && medicalsOptions) ||
      (itemType == ItemGroups.exam && examsOptions) ||
      (itemType == ItemGroups.surgery && surgeriesOptions) ||
      []
    );
  }, [itemType]);

  return (
    <form className="itemPicker">
      <div id="first">
        <RadioGroup
          aria-label="gender"
          name="itemType"
          value={itemType}
          row
          onChange={handleItemTypeChange}
        >
          <FormControlLabel
            value="medical"
            className={itemType == "medical" ? "checked" : ""}
            control={<Radio />}
            label="Medical"
            labelPlacement="top"
          />
          <FormControlLabel
            value="exam"
            className={itemType == "exam" ? "checked" : ""}
            control={<Radio />}
            label="Exam"
            labelPlacement="top"
          />
          <FormControlLabel
            value="surgery"
            className={itemType == "surgery" ? "checked" : ""}
            control={<Radio />}
            label="Surgery"
            labelPlacement="top"
          />
          <FormControlLabel
            value="other"
            className={itemType == "other" ? "checked" : ""}
            control={<Radio />}
            label="Other"
            labelPlacement="top"
          />
        </RadioGroup>
      </div>
      <div id="second">
        {itemType != "other" && (
          <AutocompleteField
            fieldName="itemId"
            fieldValue={values.itemId}
            label={t("bill.item")}
            isValid={isValid("itemId")}
            errorText={getErrorText("itemId")}
            onBlur={onBlurCallback("itemId")}
            options={options}
            isLoading={false}
          />
        )}
        {itemType == "other" && (
          <>
            <TextField
              theme="regular"
              field={getFieldProps("itemDescription")}
              isValid={isValid("itemDescription")}
              errorText={getErrorText("itemDescription")}
              onBlur={onBlurCallback}
              label={t("bill.item")}
              type="text"
            />
            <TextField
              theme="regular"
              field={getFieldProps("itemAmount")}
              isValid={isValid("itemAmount")}
              errorText={getErrorText("itemAmount")}
              onBlur={onBlurCallback}
              label={t("bill.amount")}
              type="number"
            />
          </>
        )}
        <TextField
          theme="regular"
          field={getFieldProps("itemQuantity")}
          isValid={isValid("itemQuantity")}
          errorText={getErrorText("itemQuantity")}
          onBlur={onBlurCallback}
          label={t("bill.quantity")}
          type="number"
        />
      </div>
      <div id="third">
        <TextButton onClick={handleResetConfirmation}>
          {t("button.discard")}
        </TextButton>
        <SmallButton type="submit">{t("button.save")}</SmallButton>
      </div>
    </form>
  );
};

export default BillItemPickerForm;
