import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AutocompleteField from "../../autocompleteField/AutocompleteField";
import "./styles.scss";
import { Outlet, useLocation, useNavigate } from "react-router";
import { PATHS } from "../../../../consts";

type TypeOption = {
  label: string;
  routePath: string | null;
};

const TypesAdmin = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const defaultTypeOption: TypeOption = { label: "", routePath: null };
  const [selectedOption, setSelectedOption] =
    useState<TypeOption>(defaultTypeOption);

  const typeOptions: TypeOption[] = [defaultTypeOption];

  useEffect(() => {
    if (
      location.pathname !== PATHS.types &&
      location.pathname !== PATHS.types + "/"
    ) {
      const typeFromUrl = typeOptions.find(
        (typeOption) =>
          typeOption.routePath !== null &&
          typeOption.routePath.includes(
            location.pathname.substring((PATHS.types + "/").length)
          )
      );

      if (typeFromUrl) {
        setSelectedOption(typeFromUrl);
      } else {
        setSelectedOption(defaultTypeOption);
      }
    }
  }, [location]);

  const handleTypeChange = (e: any, type: TypeOption | null) => {
    if (type?.routePath) {
      navigate(PATHS.types + "/" + type.routePath);
    } else {
      navigate(PATHS.types);
    }
  };

  const renderOption = (option: TypeOption) => {
    return <span>{option.label}</span>;
  };

  return (
    <>
      <div className="selectTypeControl">
        <AutocompleteField
          fieldName="selectedType"
          fieldValue={selectedOption?.label}
          label={t("types.selectAType")}
          onChange={handleTypeChange}
          renderOption={renderOption}
          options={typeOptions}
          errorText={""}
          isValid={false}
          onBlur={() => {}}
        />
      </div>

      <div className="typeContent">
        <Outlet />
      </div>
    </>
  );
};

export default TypesAdmin;