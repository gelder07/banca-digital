import { NumericFormat } from "react-number-format";
import ImageCustomize from "../atoms/img/ImageCustomize";
import PrimaryLabel from "../atoms/labels/PrimaryLabel";
import GoogleIcon from "../atoms/icons/GoogleIcon";

export default function Cards({
  cuenta = "",
  numero = "",
  saldo = "",
  prefix,
  prefixAccount,
  flag,
}) {
  return (
    <div className="flex items-start justify-between bg-white p-4 rounded-xl shadow-md w-full mb-4 mr-0 md:mr-10 md:mb-0 md:w-96 ">
      <div>
        <PrimaryLabel
          text={`${prefixAccount} ${cuenta}`}
          weight="semibold"
          size="text-[20px]"
        />

        <div className="flex items-center mt-1">
          <span className="bg-[#EDF5F2] text-green-600 px-2 py-0.5 rounded text-sm font-medium mr-2">
            {numero}
          </span>
          <GoogleIcon icon="content_copy" size={18} color="#3B8668" />
        </div>
        <div className="mt-6">
          <NumericFormat
            thousandSeparator
            valueIsNumericString={true}
            decimalScale={4}
            prefix={prefix}
            allowNegative={false}
            value={saldo}
            className="text-[18px] font-semibold text-[#093324]"
          />
        </div>
      </div>

      {/* Bandera */}
      <ImageCustomize
        src={flag}
        alt={flag}
        className="w-10 h-10 rounded-full object-cover"
      />
    </div>
  );
}
