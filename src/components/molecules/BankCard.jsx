import ImageCustomize from "../atoms/img/ImageCustomize";
import PrimaryLabel from "../atoms/labels/PrimaryLabel";

export default function BankCard({
  numero = "",
  color,
  user,
  fechaVencimiento,
}) {
  return (
    <div
      className={`flex flex-row flex-wrap p-4 rounded-xl shadow-md w-full mb-4 mr-0 md:mr-10 md:mb-0 md:w-96  ${color} relative`}
    >
      <div className="absolute pointer-events-none top-0 right-0">
        <ImageCustomize
          src="/assets/icons/test.png"
          alt="Logo_Lafise"
          width={162}
          height={162}
        />
      </div>

      <div className="w-full mb-12">
        <ImageCustomize
          src="/assets/icons/logoLafiseblanco.png"
          alt="Logo_Lafise"
          width={90}
          height={90}
        />
      </div>
      <div className="w-full mb-12">
        <PrimaryLabel
          text={`${numero}`}
          weight="semibold"
          size="text-[22px]"
          color="text-white"
          font="font-lato"
          className="tracking-wider"
        />
      </div>

      <div className="flex w-full">
        <div className="mr-22">
          <PrimaryLabel
            text={`${user}`}
            weight="semibold"
            size="text-[12px]"
            color="text-white"
            font="font-lato"
          />
        </div>

        <PrimaryLabel
          text={`${fechaVencimiento}`}
          weight="semibold"
          size="text-[12px]"
          color="text-white"
          font="font-lato"
        />
      </div>
    </div>
  );
}
