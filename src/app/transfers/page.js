"use client";

import { useEffect, useMemo, useState } from "react";
import Steps from "@/components/organisms/Steps";
import FormTransfer from "./forms/FormTransfer";
import { FormProvider, useForm } from "react-hook-form";
import PrimaryLabel from "@/components/atoms/labels/PrimaryLabel";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormDataLoader } from "./hooks/useFormDataLoader";
import { STEPS_TRANSFERS } from "@/core/enums/stepsTransfers";
import { Backdrop, CircularProgress } from "@mui/material";

const getSchemaFormulario = (activeStep) => {
  return yup.object().shape({
    cuentaOrigen:
      activeStep === 0 || activeStep === 3
        ? yup.object().required("Cuenta origen es obligatoria")
        : yup.object().nullable(),

    cuentaDestino:
      activeStep === 1
        ? yup.object().required("Cuenta destino es obligatoria")
        : yup.object().nullable(),

    montoTransferencia:
      activeStep === 2
        ? yup
            .number()
            .typeError("The field is required")
            .test("monto-valido", "Monto inválido", function (value) {
              const { cuentaOrigen } = this.parent;
              if (cuentaOrigen && value) {
                if (cuentaOrigen.balance < value) {
                  return this.createError({
                    message:
                      "La cuenta seleccionada no tiene suficiente saldo para realizar esta transaccion, por favor revise la cuenta o seleccione otra",
                  });
                }
              }
              return true;
            })
        : yup.number().nullable(),

    tipoTransaccion:
      activeStep === 3
        ? yup.object().required("Este campo es obligatorio")
        : yup.object().nullable(),
    conceptoDebito:
      activeStep === 3
        ? yup.string().required("Este campo es obligatorio")
        : yup.string().nullable(),
    conceptoCredito:
      activeStep === 3
        ? yup.string().required("Este campo es obligatorio")
        : yup.string().nullable(),
    referencia:
      activeStep === 3
        ? yup.string().required("Este campo es obligatorio")
        : yup.string().nullable(),
    correoConfirmacion:
      activeStep === 3
        ? yup.string().required("Este campo es obligatorio")
        : yup.string().nullable(),
  });
};

const defaultValues = {
  cuentaOrigen: null,
  cuentaDestino: null,
  montoTransferencia: 0,
  tipoTransaccion: null,
  conceptoDebito: "",
  conceptoCredito: "",
  referencia: "",
  correoConfirmacion: "",
};

const Transfers = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const { cargarOpcionCuentaOrigen, guardarTransferencia } =
    useFormDataLoader();

  const schema = useMemo(() => getSchemaFormulario(activeStep), [activeStep]);

  const methodsForm = useForm({
    mode: "onChange",
    submitFocusError: true,
    criteriaMode: "firstError",
    reValidateMode: "onChange",
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const {
    reset,
    trigger,
    getValues,
    watch,
    formState: { errors },
  } = methodsForm;

  const formValues = watch();

  const onSubmit = async () => {
    const isValidForm = await trigger();
    if (isValidForm) {
      const data = getValues();

      if (STEPS_TRANSFERS.length - 1 === activeStep) {
        setLoading(true);
        setTimeout(async () => {
          await guardarTransferencia(data);
          reset(defaultValues);
          setLoading(false);
          setActiveStep(0);
        }, 4000);
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }

      try {
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    formValues.cuentaOrigen &&
      cargarOpcionCuentaOrigen(formValues.cuentaOrigen);
  }, [formValues.cuentaOrigen]);

  return (
    <FormProvider {...methodsForm}>
      <div className="mt-8 mb-6">
        <PrimaryLabel text="Transferir" weight="semibold" size="text-[24px]" />
      </div>
      <form className="flex flex-col border-1 border-[#DFE1DF] h-full ">
        <Steps
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          nextButtonFunction={onSubmit}
        >
          <FormTransfer activeStep={activeStep} />
        </Steps>
      </form>

      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </FormProvider>
  );
};

export default Transfers;
