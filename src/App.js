import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CvTest from "./components/CvTest";
import DataContext from "./store/data-context";
import UserInputList from "./components/user-input/user-input-list/UserInputList";

function App() {
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [data3, setData3] = useState("");

  const setData1StateHandler = (data) => {
    setData1(data);
  };

  const setData2StateHandler = (data) => {
    setData2(data);
  };

  const setData3StateHandler = (data) => {
    setData3(data);
  };

  const dataContext = {
    data1: data1,
    setData1State: setData1StateHandler,
    data2: data2,
    setData2State: setData2StateHandler,
    data3: data3,
    setData3State: setData3StateHandler,
  };

  return (
    <DataContext.Provider value={dataContext}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserInputList />} />
          <Route path="/done" element={<CvTest />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
