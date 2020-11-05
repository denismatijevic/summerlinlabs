import React from "react";
import { MDBDataTable } from "mdbreact";

const TableSearch = () => {
  const data = {
    columns: [
      {
        label: "Test Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Price",
        field: "price",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        name: "Albumin",
        price: "$29",
      },
      {
        name: "Albumin/Globulin",
        price: "$29",
      },
      {
        name: "ALK Phos",
        price: "$29",
      },
      {
        name: "ALT",
        price: "$29",
      },
      {
        name: "Amphetam Confirm, UR",
        price: "$59",
      },
      {
        name: "Amylase",
        price: "$39",
      },
      {
        name: "APO E Genotype",
        price: "$299",
      },
      {
        name: "Apolipoprotein A-1",
        price: "$39",
      },
      {
        name: "Apolipoprotein B",
        price: "$39",
      },
      {
        name: "APTT",
        price: "$49",
      },
      {
        name: "AST",
        price: "$29",
      },
      {
        name: "Barbiturates CONF UR",
        salary: "$59",
      },
    ],
  };

  return <MDBDataTable striped bordered small data={data} />;
};

export default TableSearch;
