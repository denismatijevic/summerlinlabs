import React from "react";
import Wrapper from "../components/Wrapper/index";
import TableSearch from "../components/TableSearch/TableSearch";
import TestCatalog from "../components/BackgroundImage/TestCatalog";

function TestPage() {
  return (
    <Wrapper>
      <TestCatalog />
      <TableSearch />
    </Wrapper>
  );
}

export default TestPage;
