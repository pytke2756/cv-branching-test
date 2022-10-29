import React, { useState, useRef, useContext } from "react";
import DataContext from "../store/data-context";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [testDataFirst, setTestDataFirst] = useState();
  const [testDataSecond, setTestDataSecond] = useState();
  const [testDataThird, setTestDataThird] = useState();

  const testDataFirstRef = useRef();
  const testDataSecondRef = useRef();
  const testDataThirdRef = useRef();

  const dataCtx = useContext(DataContext);

  const navigate = useNavigate();

  const handleChangeDataFirst = () => {
    setTestDataFirst(testDataFirstRef.current.value);
  };

  const handleChangeDataSecond = () => {
    setTestDataSecond(testDataSecondRef.current.value);
  };
  const handleChangeDataThird = () => {
    setTestDataThird(testDataThirdRef.current.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dataCtx.setData1State(testDataFirst);
    dataCtx.setData2State(testDataSecond);
    dataCtx.setData3State(testDataThird);
    navigate("/done")
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          ref={testDataFirstRef}
          onChange={handleChangeDataFirst}
          placeholder="test_data1"
        />
        <input
          type="text"
          ref={testDataSecondRef}
          onChange={handleChangeDataSecond}
          placeholder="test_data2"
        />
        <input
          type="text"
          ref={testDataThirdRef}
          onChange={handleChangeDataThird}
          placeholder="test_data3"
        />
        <button type="submit">Done</button>
      </form>
    </>
  );
};

export default Form;
