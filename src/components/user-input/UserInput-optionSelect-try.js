import React, { useState } from "react";

const UserInput = () => {
    const initSkills = ["Skill_1", "Skill_2", "Skill_3"]
  const [skills, setSkills] = useState(initSkills);

  const handleSkillChange = (e) => {
    console.log(skills[e.target.value]);
  };
  return (
    <>
      <div className="card skills">
        <form>
          <label>Skills</label>
          <select onChange={e => handleSkillChange(e)}>
            {initSkills.map((skill, index) => <option value={index}>{skill}</option>)}
          </select>
        </form>
      </div>
    </>
  );
};

export default UserInput;
