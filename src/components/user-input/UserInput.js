import React, { useState, useRef } from "react";

const UserInput = () => {
  /* a plussz gombra kattintva megjelenik egy input mező 
        ahova be lehet írni az adatot majd az elfogadás 
        gombra nyomva hozzáadjuk a listához */

  const [skills, setSkills] = useState([]);
  const [isSkillDisplay, setIsSkillDisplay] = useState(false);

  const addNewSkillRef = useRef();

  const handleAddSkills = () => {
    setIsSkillDisplay(pervState => !pervState)
  };

  const handleNewSkillAdd = () => {
    setSkills((pervState) => [...pervState, addNewSkillRef.current.value]);
  };

  const addedSkills = skills.map((skill, index) => (
    <h1 key={index}>{skill}</h1>
  ));
  return (
    <>
      <div className="card skills-container">
        <h2>Skills</h2>
        <div className="skills">
          <button
            onClick={handleAddSkills}
            className="btn add-btn"
            type="button"
          >
            +
          </button>
          {/*{skills.length > 0 ? addedSkills : <h1>nincs</h1>}*/}
          {isSkillDisplay && <><input type="text" ref={addNewSkillRef} />
          <button
            className="btn new-skill-aprove"
            onClick={handleNewSkillAdd}
            type="button"
          >
            approve
          </button>
          {addedSkills}</>
          }
        </div>
      </div>
    </>
  );
};

export default UserInput;
