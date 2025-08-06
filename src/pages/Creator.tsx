import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GeneralInfo from "../container/GeneralInfo";
import Education from "../container/Education";
import WorkExperience from "../container/WorkExperience";
import Skills from "../container/Skills";
import Languages from "../container/Languages";
import Button from "../components/Button";
import { useCV } from "../context/CVContext";

const Creator: React.FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useCV();
  // Lokalny stan dla wszystkich sekcji, inicjalizowany z kontekstu
  const { state } = useCV();
  const [generalInfo, setGeneralInfo] = useState(state.generalInfo);
  const [educationEntries, setEducationEntries] = useState(state.education.length > 0 ? state.education : [{ id: 1, school: "", degree: "", field: "", graduationYear: "" }]);
  const [workEntries, setWorkEntries] = useState(state.workExperience.length > 0 ? state.workExperience : [{ id: 1, company: "", position: "", startDate: "", endDate: "", description: "" }]);
  const [skills, setSkills] = useState(state.skills.length > 0 ? state.skills : [{ id: 1, value: "", level: "Beginner" }]);
  const [languages, setLanguages] = useState(state.languages.length > 0 ? state.languages : [{ id: 1, value: "", level: "A1" }]);

  const handleSave = () => {
    dispatch({ type: "SET_GENERAL_INFO", payload: generalInfo });
    dispatch({ type: "SET_EDUCATION", payload: educationEntries });
    dispatch({ type: "SET_WORK_EXPERIENCE", payload: workEntries });
    dispatch({ type: "SET_SKILLS", payload: skills });
    dispatch({ type: "SET_LANGUAGES", payload: languages });
    navigate('/preview');
  };

  return (
    <div className="justify-center items-center flex flex-col bg-indigo-200 p-10 gap-10">
      <h1 className="text-indigo-950 text-4xl font-bold">CV Creator</h1>
      <GeneralInfo value={generalInfo} setValue={setGeneralInfo} />
      <Education value={educationEntries} setValue={setEducationEntries} />
      <WorkExperience value={workEntries} setValue={setWorkEntries} />
      <Skills value={skills} setValue={setSkills} />
      <Languages value={languages} setValue={setLanguages} />
      <Button
        className="w-50 bg-indigo-500 text-white hover:bg-indigo-600 border-none"
        onClick={handleSave}
      >
        Confirm Changes
      </Button>
    </div>
  );
};

export default Creator;