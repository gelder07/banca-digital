import React from "react";
import ElementListMenu from "../molecules/ElementListMenu";

const ListMenu = ({ menuItems }) => {
  return (
    <div className="flex flex-row w-full flex-wrap justify-center border-b-1 border-gray-200 py-8 px-7 ">
      {menuItems.map((item) => (
        <ElementListMenu
          key={item.id}
          text={item.text}
          sizeText="text-[14px]"
          googleIconLeft={item.iconLeft}
          googleIconRight={item.iconRight}
          colorIcon={item.colorIcon}
          sizeIcon={20}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default ListMenu;
