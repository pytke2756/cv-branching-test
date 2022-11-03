import React from "react";
import UserInput from "../UserInput";
import "../user-input-list/UserInputList.css";
const UserInputList = () => {
  return (
    <div className="cols">
      <div className="col">
        <UserInput />
        <UserInput />
      </div>
      <div className="col">
        <UserInput />
        <UserInput />
      </div>
    </div>
  );
};

export default UserInputList;
