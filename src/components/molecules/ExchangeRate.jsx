"use client";

import React from "react";
import AutoCompleteCustomize from "../atoms/inputs/AutoCompleteCustomize";
import { useState } from "react";
import PrimaryLabel from "../atoms/labels/PrimaryLabel";
import GoogleIcon from "../atoms/icons/GoogleIcon";

const ExchangeRate = () => {
  const [valueSelected, setValueSelected] = useState({
    id: 1,
    name: "C$",
  });
  const [valueSecondSelected, setValueSecondSelected] = useState({
    id: 1,
    name: "USD",
  });

  return (
    <div className="flex flex-col px-2 w-full flex-wrap  pt-4 overflow-hidden  border-b-1 border-gray-200 pb-8">
      <div className="w-full pl-2 mb-2">
        <PrimaryLabel
          text="Tasa de Cambio"
          size="text-[15px]"
          weight="semibold"
        />
      </div>

      <div className="flex flex-row w-full justify-between flex-wrap pt-2">
        <div className="w-1/2 px-3">
          <AutoCompleteCustomize
            options={[{ id: 1, name: "c$" }]}
            value={valueSelected}
            placeholder="Seleccione una moneda"
            Label=""
            onChange={setValueSelected}
            getOptionLabel={(option) => option.name}
          />
        </div>

        <div className="w-1/2 px-3">
          <AutoCompleteCustomize
            options={[{ id: 1, name: "USD" }]}
            value={valueSecondSelected}
            placeholder="Seleccione una moneda"
            Label=""
            onChange={setValueSecondSelected}
            getOptionLabel={(option) => option.name}
          />
        </div>
      </div>

      <div className="flex flex-row w-full justify-between flex-wrap pt-4 px-4">
        <PrimaryLabel text={"NIO: 35.1"} size="text-[16px]" />

        <GoogleIcon icon="swap_vertical_circle" size={24} color="#3B8668" />

        <PrimaryLabel text="USD: 35.95" size="text-[16px]" />
      </div>
    </div>
  );
};

export default ExchangeRate;
