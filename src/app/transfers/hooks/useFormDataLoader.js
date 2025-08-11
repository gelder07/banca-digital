import { CUENTAS_USUARIO } from "@/core/enums/cuentas";
import { useAppDispatch } from "@/store/hooks";
import { updateDataCuentasDestino } from "../store/cargarCuentasDestinoSlices";
import { createTransactions } from "@/services/api/transactions/transactions";

export const useFormDataLoader = () => {
  const dispatch = useAppDispatch();

  const cargarOpcionCuentaOrigen = (data) => {
    const newData = CUENTAS_USUARIO.filter((cuenta) => cuenta.id !== data?.id);
    dispatch(updateDataCuentasDestino(newData));
  };

  const guardarTransferencia = async (data) => {
    try {
      const payload = {
        origin: data.cuentaOrigen.account_number,
        destination: data.cuentaDestino.account_number,
        amount: {
          currency: data.cuentaOrigen.currency,
          value: data.montoTransferencia,
        },
      };

      const response = await createTransactions(payload);
      return response;
    } catch (error) {
      throw error;
    }
  };

  return {
    guardarTransferencia,
    cargarOpcionCuentaOrigen,
  };
};
