import HFNumberFormatField from "@/components/atoms/inputs/hook-form/HFNumberFormatField";
import React from "react";

const MontoTransferencia = () => {
  return (
    <div className="w-full px-10 md:px-64 pt-10">
      <HFNumberFormatField
        name="montoTransferencia"
        label="Monto a Transferir"
        placeholder="Ingrese el Monto a Transferir"
        className="w-full"
        type="decimal"
      />
    </div>
  );
};

export default MontoTransferencia;
