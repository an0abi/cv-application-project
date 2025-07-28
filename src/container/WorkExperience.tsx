import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const WorkExperience: React.FC = () => {
  const [workEntries, setWorkEntries] = useState([
    {
      id: 1,
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);
  const [dateErrors, setDateErrors] = useState<string[]>([""]);

  const addWorkEntry = () => {
    setWorkEntries([
      ...workEntries,
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

  const removeLastWorkEntry = () => {
    if (workEntries.length > 1) {
      setWorkEntries(workEntries.slice(0, -1));
      setDateErrors(dateErrors.slice(0, -1));
    }
  };

  const handleChange = (idx: number, field: string, value: string) => {
    setWorkEntries((prev) =>
      prev.map((entry, i) =>
        i === idx ? { ...entry, [field]: value } : entry
      )
    );
    if (field === "startDate" || field === "endDate") {
      const entry = {
        ...workEntries[idx],
        [field]: value,
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
    <div className="bg-violet-50 flex flex-col gap-4 p-10 w-250 border-30 border-white justify-center items-center">
      <div className="text-2xl font-bold text-indigo-950 pb-3">Work Experience</div>
      {workEntries.map((entry, idx) => (
        <React.Fragment key={entry.id}>
          {idx > 0 && (
            <hr className="w-full border-t-2 border-indigo-200 my-4" />
          )}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-evenly gap-8">
              <label>
                <InputField
                  type="text"
                  name={`company-${entry.id}`}
                  placeholder="Company Name"
                />
              </label>
              <label>
                <InputField
                  type="text"
                  name={`position-${entry.id}`}
                  placeholder="Position"
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
              <label className="w-full">
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
      <div className={`flex gap-4 mt-4 ${workEntries.length === 1 ? "justify-center" : ""}`}>
        <Button onClick={addWorkEntry}>
          Add more
        </Button>
        {workEntries.length > 1 && (
          <Button onClick={removeLastWorkEntry} className="bg-pink-100 hover:bg-pink-200 border-pink-200">
            Remove last
          </Button>
        )}
      </div>
    </div>
  );
};

export default WorkExperience;
