import { createContext } from "react";

const DataContext = createContext({
  data1: "",
  setData1State: (data) => {},
  data2: "",
  setData2State: (data) => {},
  data3: "",
  setData3State: (data) => {},
});

export default DataContext;
