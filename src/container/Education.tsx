import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

type EducationEntry = {
  id: number;
  school: string;
  degree: string;
  field: string;
  graduationYear: string;
};

type EducationProps = {
  value: EducationEntry[];
  setValue: React.Dispatch<React.SetStateAction<EducationEntry[]>>;
};

const Education: React.FC<EducationProps> = ({ value, setValue }) => {

  const addEducationEntry = () => {
    setValue([
      ...value,
      { id: Date.now(), school: "", degree: "", field: "", graduationYear: "" },
    ]);
  };


  const removeEducationEntry = (idx: number) => {
    if (value.length > 1) {
      setValue(value.filter((_, i) => i !== idx));
    }
  };

  const handleInputChange = (
    idx: number,
    field: string,
    fieldValue: string
  ) => {
    setValue((prev) =>
      prev.map((entry, i) =>
        i === idx ? { ...entry, [field]: fieldValue } : entry
      )
    );
  };

  return (
    <div className="bg-violet-50 flex flex-col gap-4 p-10 w-250 border-30 border-white justify-center items-center shadow-lg">
      <div className="text-2xl font-bold text-indigo-950 pb-3">Education</div>
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
                onClick={() => removeEducationEntry(idx)}
                aria-label="Remove education entry"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                ×
              </button>
            )}
            <div className="flex justify-evenly gap-8">
              <label>
                <InputField
                  type="text"
                  name={`school-${entry.id}`}
                  placeholder="School/University Name"
                  value={entry.school}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(idx, "school", e.target.value)
                  }
                />
              </label>
              <label>
                <InputField
                  type="text"
                  name={`degree-${entry.id}`}
                  placeholder="Degree/Qualification"
                  value={entry.degree}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(idx, "degree", e.target.value)
                  }
                />
              </label>
            </div>
            <div className="flex justify-evenly gap-8">
              <label>
                <InputField
                  type="text"
                  name={`field-${entry.id}`}
                  placeholder="Field of Study"
                  value={entry.field}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(idx, "field", e.target.value)
                  }
                />
              </label>
              <label>
                <InputField
                  type="month"
                  name={`graduationYear-${entry.id}`}
                  placeholder="Year of Graduation"
                  className="w-40"
                  value={entry.graduationYear}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(idx, "graduationYear", e.target.value)
                  }
                />
              </label>
            </div>
          </div>
        </React.Fragment>
      ))}
      <div className={`flex gap-4 mt-4 justify-center`}>
        <Button onClick={addEducationEntry}>
          Add more
        </Button>
      </div>
    </div>
  );
};

export default Education;
