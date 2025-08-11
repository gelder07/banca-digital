import React from "react";
import { MENU_ITEMS } from "@/core/enums/menu";
import ListMenu from "@/components/organisms/ListMenu";
import ImageCustomize from "../atoms/img/ImageCustomize";
import ExchangeRate from "../molecules/ExchangeRate";

const Navbar = ({ isOpen }) => {
  return (
    <aside
      className={`
      bg-[#F9FAF9] min-h-screen flex flex-col pt-8 items-center transition-all duration-300 fixed md:static top-0 left-0 z-50 w-72 md:w-72 md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      } shadow-lg md:shadow-none
    `}
      style={{
        width: isOpen ? "18rem" : "0",
      }}
    >
      {isOpen && (
        <>
          <ImageCustomize
            src="/assets/icons/logoLafise.png"
            alt="Logo_Lafise"
            width={200}
            height={200}
          />
          <ListMenu menuItems={MENU_ITEMS} />
          <ExchangeRate />
        </>
      )}
    </aside>
  );
};

export default Navbar;
