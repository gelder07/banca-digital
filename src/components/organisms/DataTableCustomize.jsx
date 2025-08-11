"use client";

import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { TextField, Box, Button } from "@mui/material";
import moment from "moment";
import PrimaryButton from "../atoms/buttons/PrimaryButton";

const DataTableCustomize = ({ columns, data, hasFilters }) => {
  const customStyles = {
    table: {
      style: {
        fontFamily: "'Poppins', sans-serif",
      },
    },
    headRow: {
      style: {
        fontWeight: "600",
        fontSize: "14px",
        color: "#8D918D",
      },
    },
    rows: {
      style: {
        borderBottom: "1px solid #ccc",
        fontWeight: "500",
      },
    },
  };
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const aplicarFiltro = () => {
    const filtrados = data.filter((row) => {
      const fecha = moment(row.transaction_date, "YYYY-MM-DD");

      if (fechaInicio && !fechaFin) {
        return fecha.isSameOrAfter(moment(fechaInicio, "YYYY-MM-DD"));
      }
      if (!fechaInicio && fechaFin) {
        return fecha.isSameOrBefore(moment(fechaFin, "YYYY-MM-DD"));
      }
      if (fechaInicio && fechaFin) {
        return fecha.isBetween(
          moment(fechaInicio, "YYYY-MM-DD"),
          moment(fechaFin, "YYYY-MM-DD"),
          undefined,
          "[]"
        );
      }
      return true;
    });

    setFilteredData(filtrados);
  };

  return (
    <div className="flex flex-row flex-wrap w-full ">
      {hasFilters && (
        <div className="flex flex-row w-full flex-wrap justify-center md:justify-between items-center mb-4">
          <div className="w-full mb-4 md:mb-0 md:w-2/6 pr-4">
            <TextField
              label="Fecha inicio"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3B8668",
                },
                "& .MuiInputBase-input": {
                  fontFamily: "Poppins ,sans-serif",
                  padding: "14px 24px",
                  fontSize: "14px",
                },
                "& .MuiInputBase-root": {
                  backgroundColor: "white",
                },
              }}
            />
          </div>
          <div className="w-full md:w-2/6 pr-4">
            <TextField
              label="Fecha fin"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={fechaFin}
              onChange={(e) => setFechaFin(e.target.value)}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3B8668",
                },
                "& .MuiInputBase-input": {
                  fontFamily: "Poppins ,sans-serif",
                  padding: "14px 24px",
                  fontSize: "14px",
                },
                "& .MuiInputBase-root": {
                  backgroundColor: "white",
                },
              }}
            />
          </div>
          <div className="flex flex-row justify-center w-full md:w-2/6 ">
            <PrimaryButton
              label="Buscar"
              variant="contained"
              color={"white"}
              backgroundColor="#3B8668"
              onClick={aplicarFiltro}
            />
          </div>
        </div>
      )}
      <div className="w-full pr-4 border-1 border-[#DFE1DF] p-4 ">
        <DataTable
          columns={columns}
          data={filteredData}
          responsive={true}
          pagination
          customStyles={customStyles}
          highlightOnHover
          pointerOnHover
        />
      </div>
    </div>
  );
};

export default DataTableCustomize;
