import React from "react";
import CuentaOrigen from "./cuenta-origen/CuentaOrigen";
import CuentaDestino from "./cuenta-destino/CuentaDestino";
import MontoTransferencia from "./monto-transferencia/MontoTransferencia";
import PasosAdicionales from "./pasos-adicionales/PasosAdicionales";

const FormTransfer = ({ activeStep }) => {
  return (
    <div className="flex flex-col w-full pt-8 items-center">
      {activeStep === 0 && <CuentaOrigen />}
      {activeStep === 1 && <CuentaDestino />}
      {activeStep === 2 && <MontoTransferencia />}
      {activeStep === 3 && <PasosAdicionales />}
    </div>
  );
};

export default FormTransfer;
