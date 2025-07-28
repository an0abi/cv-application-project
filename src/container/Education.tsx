import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Education: React.FC = () => {
  const [educationEntries, setEducationEntries] = useState([
    { id: 1, school: "", degree: "", field: "", graduationYear: "" },
  ]);

  const addEducationEntry = () => {
    setEducationEntries([
      ...educationEntries,
      { id: Date.now(), school: "", degree: "", field: "", graduationYear: "" },
    ]);
  };

  const removeLastEducationEntry = () => {
    if (educationEntries.length > 1) {
      setEducationEntries(educationEntries.slice(0, -1));
    }
  };

  return (
    <div className="bg-violet-50 flex flex-col gap-4 p-10 w-250 border-30 border-white justify-center items-center">
      <div className="text-2xl font-bold text-indigo-950 pb-3">Education</div>
      {educationEntries.map((entry, idx) => (
        <React.Fragment key={entry.id}>
          {idx > 0 && (
            <hr className="w-full border-t-2 border-indigo-200 my-4" />
          )}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-evenly gap-8">
              <label>
                <InputField
                  type="text"
                  name={`school-${entry.id}`}
                  placeholder="School/University Name"
                />
              </label>
              <label>
                <InputField
                  type="text"
                  name={`degree-${entry.id}`}
                  placeholder="Degree/Qualification"
                />
              </label>
            </div>
            <div className="flex justify-evenly gap-8">
              <label>
                <InputField
                  type="text"
                  name={`field-${entry.id}`}
                  placeholder="Field of Study"
                />
              </label>
              <label>
                <InputField
                  type="text"
                  name={`graduationYear-${entry.id}`}
                  placeholder="Year of Graduation"
                />
              </label>
            </div>
          </div>
        </React.Fragment>
      ))}
      <div className="flex gap-4 mt-4">
        <Button onClick={addEducationEntry}>
          Add more
        </Button>
        <Button onClick={removeLastEducationEntry} className="bg-pink-100 hover:bg-pink-200 border-pink-200">
          Remove last
        </Button>
      </div>
    </div>
  );
};

export default Education;
