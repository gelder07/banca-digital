"use client";

import PrimaryLabel from "@/components/atoms/labels/PrimaryLabel";
import DataTableCustomize from "@/components/organisms/DataTableCustomize";
import ListCards from "@/components/organisms/ListCards";
import { CARDS } from "@/core/enums/cards";
import { useTablero } from "./hooks/useTablero";
import { useAppSelector } from "@/store/hooks";
import { selectAccountHistory } from "./store/transactionsSlice";
import ListBankCard from "@/components/organisms/ListBankCards";
import moment from "moment";
import { BANKCARDS } from "@/core/enums/bankCards";

const Tablero = () => {
  useTablero();
  const accountHistory = useAppSelector(selectAccountHistory);

  const columns = [
    {
      name: "Fecha",
      selector: (row) => moment(row.transaction_date).format("DD/MMM/YYYY"),
      sortable: true,
    },
    {
      name: "Descripcion",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Débito USD",
      selector: (row) => row.amount.value,
    },
    {
      name: "Balance USD",
      selector: (row) => row.amount.value,
    },
  ];

  return (
    <div className="w-full p-4 ">
      <div className="flex flex-row flex-wrap w-full mb-8">
        <div className="w-full mb-6">
          <PrimaryLabel
            text="Mis tarjetas"
            weight="semibold"
            size="text-[20px]"
          />
        </div>

        <ListBankCard cards={BANKCARDS} />
      </div>
      <div className="flex flex-row flex-wrap w-full mb-8">
        <div className="w-full mb-6">
          <PrimaryLabel text="Cuentas" weight="semibold" size="text-[20px]" />
        </div>
        <ListCards cards={CARDS} />
      </div>

      <div className="flex flex-row flex-wrap w-full mb-8 max-w-80 sm:max-w-full">
        <div className="w-full mb-6">
          <PrimaryLabel
            text="Transacciones Recientes"
            weight="semibold"
            size="text-[20px]"
          />
        </div>
        {accountHistory.loading === "loaded" && (
          <DataTableCustomize
            columns={columns}
            data={accountHistory.data.items}
            // data={HISTORIAL}
            hasFilters={false}
          />
        )}
      </div>
    </div>
  );
};

export default Tablero;
