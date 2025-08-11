import React from "react";
import PrimaryLabel from "../atoms/labels/PrimaryLabel";
import GoogleIcon from "../atoms/icons/GoogleIcon";
import Link from "next/link";

const ElementListMenu = (props) => {
  const {
    text,
    sizeText,
    googleIconLeft,
    googleIconRight,
    colorIcon,
    sizeIcon,
    link,
  } = props;
  return (
    <Link
      className="flex flex-row w-full items-center hover:bg-[#EDF5F2] transition-colors duration-200 rounded-xl"
      href={link}
    >
      <div className="flex flex-row w-full items-center py-4 ">
        <div className="flex flex-row justify-start w-5/6 px-3">
          <div className="flex flex-row items-center mr-4">
            <GoogleIcon
              icon={googleIconLeft}
              size={sizeIcon}
              color={colorIcon}
            />
          </div>
          <PrimaryLabel text={text} size={sizeText} />
        </div>
        <div className="flex flex-row justify-end items-center w-1/6 px-3">
          <GoogleIcon
            icon={googleIconRight}
            size={sizeIcon}
            color={colorIcon}
          />
        </div>
      </div>
    </Link>
  );
};

export default ElementListMenu;
