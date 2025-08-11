import { Stepper, Step, StepLabel, Box, Divider } from "@mui/material";
import { styled } from "@mui/system";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import GoogleIcon from "../atoms/icons/GoogleIcon";
import PrimaryLabel from "../atoms/labels/PrimaryLabel";
import PrimaryButton from "../atoms/buttons/PrimaryButton";
import { STEPS_TRANSFERS } from "@/core/enums/stepsTransfers";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#3B8668",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#3B8668",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
    ...theme.applyStyles("dark", {
      borderColor: "black",
    }),
  },
}));

const QontoStepIconRoot = styled("div")(({ theme }) => ({
  color: "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  "& .QontoStepIcon-completedIcon": {
    color: "#3B8668",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  ...theme.applyStyles("dark", {
    color: "black",
  }),
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        color: "#3B8668",
      },
    },
  ],
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <GoogleIcon icon="check_circle" size={24} color="#3B8668" />
      ) : (
        <GoogleIcon icon="circle" size={12} color="#3B8668" />
      )}
    </QontoStepIconRoot>
  );
}

const Steps = ({ activeStep, setActiveStep, children, nextButtonFunction }) => {
  const handleNext = () => {
    nextButtonFunction();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box className="flex flex-col w-full h-full pt-10">
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
        className=" px-4 md:px-50"
      >
        {STEPS_TRANSFERS.map((item) => (
          <Step key={item.title}>
            <StepLabel StepIconComponent={QontoStepIcon}>
              <PrimaryLabel
                text={item.title}
                size="text-[12px]"
                color="text-[#8D918D]"
                weight="regular"
              />
              <div>
                <PrimaryLabel text={item.subtitle} size="text-[14px]" />
              </div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <Divider className="w-full py-4" />

      {children}

      <Box className="flex flex-row w-full justify-center items-end h-full pb-24">
        <PrimaryButton
          label="Atras"
          color={"black"}
          onClick={handleBack}
          disabled={activeStep === 0}
        />
        <PrimaryButton
          label={
            activeStep === STEPS_TRANSFERS.length - 1
              ? "Finalizar"
              : "Continuar"
          }
          variant="contained"
          color={"white"}
          backgroundColor="#3B8668"
          onClick={handleNext}
          disabled={activeStep === STEPS_TRANSFERS.length}
        />
      </Box>
    </Box>
  );
};

export default Steps;
