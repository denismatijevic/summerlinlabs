import React from "react";
import { MDBDataTable, MDBCard, MDBCardBody } from "mdbreact";

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
        price: "$59",
      },
      {
        name: "Benzodiazepine CONF, UR",
        price: "$59",
      },
      {
        name: "Beta HCG Quant Tumor Maker",
        price: "$69",
      },
      {
        name: "Blood Smear Review Pathologist",
        price: "$79",
      },
      {
        name: "BMP",
        price: "$39",
      },
      {
        name: "BUN",
        price: "$29",
      },
      {
        name: "BUN/Creat",
        price: "$29",
      },
      {
        name: "Calcium",
        price: "$29",
      },
      {
        name: "Cannabinoid CONF, Urine",
        price: "$59",
      },
      {
        name: "Cholesterol",
        price: "$29",
      },
      {
        name: "Chloride",
        price: "$29",
      },
      {
        name: "CMP",
        price: "$49",
      },
      {
        name: "Carbon Dioxide",
        price: "$29",
      },
    ],
  };

  return (
    <MDBCard
      className="my-5 px-5 mx-auto bg"
      style={{ fontWeight: 300, maxWidth: "80%" }}
    >
      <MDBCardBody style={{ paddingTop: 0 }}>
        <h2 className="h1-responsive font-weight-bold my-5 text-center">
          Single Tests
        </h2>
        <MDBDataTable striped bordered small data={data} />
      </MDBCardBody>
    </MDBCard>
  );
};

export default TableSearch;
