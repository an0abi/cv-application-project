import React from "react";
import { useNavigate } from "react-router-dom";
import GeneralInfo from "../container/GeneralInfo";
import Education from "../container/Education";
import WorkExperience from "../container/WorkExperience";
import Skills from "../container/Skills";
import Languages from "../container/Languages";
import Button from "../components/Button";

const Creator: React.FC = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    navigate('/preview');
  };

  return (
    <div className="justify-center items-center flex flex-col bg-indigo-200 p-10 gap-10">
      <h1 className="text-indigo-950 text-4xl font-bold">CV Creator</h1>
      <GeneralInfo />
      <Education />
      <WorkExperience />
      <Skills />
      <Languages />
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