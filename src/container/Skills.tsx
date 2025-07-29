import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const skillLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];

const Skills: React.FC = () => {
  const [skills, setSkills] = useState([{ id: 1, value: "", level: "Beginner" }]);

  const addSkill = () => {
    setSkills([...skills, { id: Date.now(), value: "", level: "Beginner" }]);
  };

  const removeSkill = (idx: number) => {
    if (skills.length > 1) {
      setSkills(skills.filter((_, i) => i !== idx));
    }
  };

  const handleChange = (idx: number, value: string) => {
    setSkills(
      skills.map((skill, i) => (i === idx ? { ...skill, value } : skill))
    );
  };

  const handleLevelChange = (idx: number, level: string) => {
    setSkills(
      skills.map((skill, i) => (i === idx ? { ...skill, level } : skill))
    );
  };

  return (
    <div className="bg-violet-50 flex flex-col gap-4 p-10 w-250 border-30 border-white justify-center items-center">
      <div className="text-2xl font-bold text-indigo-950 pb-3">Skills</div>
      {skills.map((skill, idx) => (
        <div
          key={skill.id}
          className="relative w-full flex items-center justify-center gap-2"
        >
          {skills.length > 1 && (
            <button
              type="button"
              className="absolute top-1 right-0 text-violet-500 text-xl font-bold z-10 hover:text-violet-700"
              onClick={() => removeSkill(idx)}
              aria-label="Remove skill"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              ×
            </button>
          )}
          <label>
            <InputField
              type="text"
              name={`skill-${skill.id}`}
              placeholder="Skill"
              value={skill.value}
              onChange={(e) => handleChange(idx, e.target.value)}
            />
          </label>
          <select
            className="px-3 py-2 border border-indigo-200 rounded-sm hover:border-indigo-300 focus:outline-none focus:ring-violet-400 text-indigo-950 w-40 text-center"
            value={skill.level}
            onChange={(e) => handleLevelChange(idx, e.target.value)}
            name={`skill-level-${skill.id}`}
          >
            {skillLevels.map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>
      ))}
      <div className="flex gap-4 mt-4 justify-center">
        <Button onClick={addSkill}>Add more</Button>
      </div>
    </div>
  );
};

export default Skills;
