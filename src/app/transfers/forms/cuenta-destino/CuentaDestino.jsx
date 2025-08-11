import HFAutocomplete from "@/components/atoms/inputs/hook-form/HFAutocomplete";
import { selectDataCuentasDestino } from "../../store/cargarCuentasDestinoSlices";
import { useAppSelector } from "@/store/hooks";

const CuentaDestino = () => {
  const dataCuentasDestino = useAppSelector(selectDataCuentasDestino);

  return (
    <div className="w-full p-0 sm:px-10 md:px-64 pt-10 ">
      <HFAutocomplete
        name="cuentaDestino"
        label="Cuenta de Destino"
        placeholder=""
        options={dataCuentasDestino}
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
  );
};

export default CuentaDestino;
