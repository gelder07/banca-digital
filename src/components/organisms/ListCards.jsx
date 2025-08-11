import React from "react";
import Cards from "../molecules/Cards";

const ListCards = ({ cards }) => {
  return (
    <div className="flex flex-row w-full flex-wrap">
      {cards.map((item) => (
        <Cards
          key={item.id}
          cuenta={item.cuenta}
          numero={item.numero}
          saldo={item.saldo}
          prefix={item.prefix}
          prefixAccount={item.prefixAccount}
          flag={item.flag}
        />
      ))}
    </div>
  );
};

export default ListCards;
