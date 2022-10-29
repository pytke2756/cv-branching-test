import React, { useContext } from "react";
import DataContext from "../store/data-context";
const CvTest = () => {
  const dataCtx = useContext(DataContext);

  return (
    <ul>
      <li>{dataCtx.data1}</li>
      <li>{dataCtx.data2}</li>
      <li>{dataCtx.data3}</li>
    </ul>
  );
};

export default CvTest;
