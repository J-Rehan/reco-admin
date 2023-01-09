import React from "react";
import { Pagination } from "react-admin";

const CustomPagination = () => {
  return <Pagination rowsPerPageOptions={[50, 100, 200]} />;
};

export default CustomPagination;
