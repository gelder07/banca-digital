import HFAutocomplete from "@/components/atoms/inputs/hook-form/HFAutocomplete";
import HFTextField from "@/components/atoms/inputs/hook-form/HFTextField";
import PrimaryLabel from "@/components/atoms/labels/PrimaryLabel";
import { CUENTAS_USUARIO } from "@/core/enums/cuentas";
import { TIPO_TRANSACCION } from "@/core/enums/tipoTransaccion";
import React from "react";

const PasosAdicionales = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      <div className="flex flex-row flex-wrap justify-center w-full bg-[#f3f7f3] 2xl:px-64">
        <div className="flex flex-row flex-wrap w-full lg:w-1/2 p-4 lg:p-8">
          <PrimaryLabel
            text="Tipo de transaccion"
            weight="medium"
            size="text-[14px]"
          />

          <HFAutocomplete
            name="tipoTransaccion"
            label=""
            placeholder=""
            options={TIPO_TRANSACCION}
            loading={false}
            getOptionLabel={(options) => options.name}
            defaultValue={null}
            className="w-full pt-2"
            disableClearable
          />
        </div>

        <div className="flex flex-row flex-wrap w-full lg:w-1/2 p-4 lg:p-8">
          <PrimaryLabel text="Cuenta" weight="medium" size="text-[14px]" />
          <HFAutocomplete
            name="cuentaOrigen"
            label=""
            placeholder=""
            options={CUENTAS_USUARIO}
            loading={false}
            getOptionLabel={(options) =>
              `${options.currency} ${options.account_number} ${options.prefix}${options.balance}`
            }
            renderOption={(props, option) => (
              <div {...props} className="flex flex-col py-2" key={option.id}>
                <span
                  className="text-[10px] md:text-[14px] font-medium text-[#3B8668] pl-4 md:pl-8"
                  key={option.account_number}
                >
                  {option.currency} Cuenta
                  <span className="text-[10px] md:text-[14px] font-medium text-[#8D918D] pl-4 md:pl-12">
                    {option.account_number}
                  </span>
                  <span className="text-[10px] md:text-[14px] font-medium text-[#093324] pl-4 md:pl-12">
                    {option.prefix}
                    {option.balance}
                  </span>
                </span>
              </div>
            )}
            renderOptionText={(option) => (
              <div className="flex flex-col py-2" key={option.id}>
                <span className="text-[10px] md:text-[14px] font-medium text-[#3B8668] pl-4  md:pl-8">
                  {option.currency} Cuenta
                  <span className="text-[10px] md:text-[14px] font-medium text-[#8D918D] pl-4 md:pl-12">
                    {option.account_number}
                  </span>
                  <span className="text-[10px] md:text-[14px] font-medium text-[#093324] pl-4 md:pl-12">
                    {option.prefix}
                    {option.balance}
                  </span>
                </span>
              </div>
            )}
            defaultValue={null}
            className="w-full"
            disableClearable
          />
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center w-full 2xl:px-64">
        <HFTextField
          name="conceptoDebito"
          label="Concepto de debito"
          placeholder="Ingrese el Concepto de debito"
          className="w-full lg:w-1/2 p-4 lg:p-8"
        />
        <HFTextField
          name="conceptoCredito"
          label="Concepto de Credito"
          placeholder="Ingrese el Concepto de Credito"
          className="w-full lg:w-1/2 p-4 lg:p-8"
        />

        <HFTextField
          name="referencia"
          label="Concepto de Credito"
          placeholder="Ingrese el Concepto de Credito"
          className="w-full lg:w-1/2 p-4 lg:p-8"
        />

        <HFTextField
          name="correoConfirmacion"
          label="Correo de Confirmacion"
          placeholder="Enviar confirmacion a:"
          className="w-full lg:w-1/2 p-4 lg:p-8"
        />
      </div>
    </div>
  );
};

export default PasosAdicionales;
