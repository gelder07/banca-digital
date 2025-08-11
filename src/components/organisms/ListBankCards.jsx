import React from "react";
import BankCard from "../molecules/BankCard";

const ListBankCard = ({ cards }) => {
  return (
    <div className="flex flex-row w-full flex-wrap">
      {cards.map((item) => (
        <BankCard
          key={item.id}
          numero={item.numero}
          user={item.user}
          color={item.color}
          fechaVencimiento={item.fechaVencimiento}
        />
      ))}
    </div>
  );
};

export default ListBankCard;
