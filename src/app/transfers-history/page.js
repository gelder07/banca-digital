"use client";

import PrimaryLabel from "@/components/atoms/labels/PrimaryLabel";
import DataTableCustomize from "@/components/organisms/DataTableCustomize";
import { useAppSelector } from "@/store/hooks";
import { selectAccountHistory } from "./store/accountTransactionsSlice";
import { useTransfersHistory } from "./hooks/useTransfersHistory";
import { HISTORIAL } from "@/core/enums/historial";
import moment from "moment/moment";

const TransfersHistoryPage = () => {
  useTransfersHistory();

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

  const accountHistory = useAppSelector(selectAccountHistory);

  return (
    <div className="w-full p-4">
      <div className="mt-8 mb-6">
        <PrimaryLabel
          text="Mis Transacciones"
          weight="semibold"
          size="text-[24px]"
        />
      </div>

      {accountHistory.loading === "loaded" && (
        <div className="flex flex-row flex-wrap w-full mb-8 max-w-80 sm:max-w-full">
          <DataTableCustomize
            columns={columns}
            data={accountHistory.data.items}
            // data={HISTORIAL}
            hasFilters
          />
        </div>
      )}
    </div>
  );
};

export default TransfersHistoryPage;
