import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

interface WorkExperienceProps {
  value: Array<{
    id: number;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  setValue: (val: Array<{
    id: number;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>) => void;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ value, setValue }) => {
  const [dateErrors, setDateErrors] = useState<string[]>(Array(value.length).fill(""));

  const addWorkEntry = () => {
    setValue([
      ...value,
      {
        id: Date.now(),
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
    setDateErrors([...dateErrors, ""]);
  };


  const removeWorkEntry = (idx: number) => {
    if (value.length > 1) {
      setValue(value.filter((_, i) => i !== idx));
      setDateErrors(dateErrors.filter((_, i) => i !== idx));
    }
  };

  const handleChange = (idx: number, field: string, fieldValue: string) => {
    setValue(value.map((entry, i) => i === idx ? { ...entry, [field]: fieldValue } : entry));
    if (field === "startDate" || field === "endDate") {
      const entry = {
        ...value[idx],
        [field]: fieldValue,
      };
      let error = "";
      if (
        entry.startDate &&
        entry.endDate &&
        entry.startDate > entry.endDate
      ) {
        error = "Start Date must be earlier than or equal to End Date.";
      }
      setDateErrors((prev) =>
        prev.map((err, i) => (i === idx ? error : err))
      );
    }
  };

  return (
    <div className="bg-violet-50 flex flex-col gap-4 p-10 w-250 border-30 border-white justify-center items-center shadow-lg">
      <div className="text-2xl font-bold text-indigo-950 pb-3">Work Experience</div>
      {value.map((entry, idx) => (
        <React.Fragment key={entry.id}>
          {idx > 0 && (
            <hr className="w-full border-t-2 border-indigo-200 my-4" />
          )}
          <div className="flex flex-col gap-4 w-full relative">
            {value.length > 1 && (
              <button
                type="button"
                className="absolute top-1 right-0 text-violet-500 text-xl font-bold z-10 hover:text-violet-700"
                onClick={() => removeWorkEntry(idx)}
                aria-label="Remove work entry"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                ×
              </button>
            )}
            <div className="flex justify-evenly gap-8">
              <label>
                <InputField
                  type="text"
                  name={`company-${entry.id}`}
                  placeholder="Company Name"
                  value={entry.company}
                  onChange={e => handleChange(idx, "company", e.target.value)}
                />
              </label>
              <label>
                <InputField
                  type="text"
                  name={`position-${entry.id}`}
                  placeholder="Position"
                  value={entry.position}
                  onChange={e => handleChange(idx, "position", e.target.value)}
                />
              </label>
            </div>
            <div className="flex justify-evenly gap-8">
              <label>
                <InputField
                  type="month"
                  name={`startDate-${entry.id}`}
                  placeholder="Start Date"
                  className="w-40"
                  value={entry.startDate}
                  onChange={e => handleChange(idx, "startDate", e.target.value)}
                />
              </label>
              <label>
                <InputField
                  type="month"
                  name={`endDate-${entry.id}`}
                  placeholder="End Date"
                  className="w-40"
                  value={entry.endDate}
                  onChange={e => handleChange(idx, "endDate", e.target.value)}
                />
              </label>
            </div>
            {dateErrors[idx] && (
              <div className="w-full flex flex-col items-center">
                <span className="text-red-500 text-xs text-center mt-1 block">
                  {dateErrors[idx]}
                </span>
              </div>
            )}
            <div className="flex justify-center items-center">
              <label className="w-3/4">
                <textarea
                  name={`description-${entry.id}`}
                  placeholder="Description"
                  className="w-full min-h-20 max-h-96 border-indigo-200 border-1 rounded p-2 text-center text-indigo-950 hover:border-indigo-300 focus:outline-none resize-none overflow-auto transition-all duration-100"
                  style={{ boxSizing: "border-box" }}
                  value={entry.description}
                  onChange={e => {
                    handleChange(idx, "description", e.target.value);
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                  rows={2}
                />
              </label>
            </div>
          </div>
        </React.Fragment>
      ))}
      <div className={`flex gap-4 mt-4 justify-center`}>
        <Button onClick={addWorkEntry}>
          Add more
        </Button>
      </div>
    </div>
  );
};

export default WorkExperience;
