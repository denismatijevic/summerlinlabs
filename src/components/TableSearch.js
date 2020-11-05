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
      {
        name: "Benzodiazepine CONF, UR",
        salary: "$59",
      },
      {
        name: "Beta HCG Quant Tumor Maker",
        salary: "$69",
      },
      {
        name: "Blood Smear Review Pathologist",
        salary: "$79",
      },
      {
        name: "BMP",
        salary: "$39",
      },
      {
        name: "BUN",
        salary: "$29",
      },
      {
        name: "BUN/Creat",
        salary: "$29",
      },
      {
        name: "Calcium",
        salary: "$29",
      },
      {
        name: "Cannabinoid CONF, Urine",
        salary: "$59",
      },
      {
        name: "Cholesterol",
        salary: "$29",
      },
      {
        name: "Chloride",
        salary: "$29",
      },
      {
        name: "CMP",
        salary: "$49",
      },
      {
        name: "Carbon Dioxide",
        salary: "$29",
      },
    ],
  };

  return <MDBDataTable striped bordered small data={data} />;
};

export default TableSearch;
