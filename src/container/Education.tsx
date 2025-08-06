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

  const removeLastEducationEntry = () => {
    if (value.length > 1) {
      setValue(value.slice(0, -1));
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
          <div className="flex flex-col gap-4 w-full">
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
      <div className={`flex gap-4 mt-4 ${value.length === 1 ? "justify-center" : ""}`}>
        <Button onClick={addEducationEntry}>
          Add more
        </Button>
        {value.length > 1 && (
          <Button onClick={removeLastEducationEntry} className="bg-pink-100 hover:bg-pink-200 border-pink-200">
            Remove last
          </Button>
        )}
      </div>
    </div>
  );
};

export default Education;
