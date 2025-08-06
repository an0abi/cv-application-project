import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const languageLevels = ["A1", "A2", "B1", "B2", "C1", "C2", "Native"];

interface LanguagesProps {
  value: Array<{ id: number; value: string; level: string }>;
  setValue: (val: Array<{ id: number; value: string; level: string }>) => void;
}

const Languages: React.FC<LanguagesProps> = ({ value, setValue }) => {

  const addLanguage = () => {
    setValue([...value, { id: Date.now(), value: "", level: "A1" }]);
  };

  const removeLanguage = (idx: number) => {
    if (value.length > 1) {
      setValue(value.filter((_, i) => i !== idx));
    }
  };

  const handleChange = (idx: number, langValue: string) => {
    setValue(value.map((lang, i) => (i === idx ? { ...lang, value: langValue } : lang)));
  };

  const handleLevelChange = (idx: number, level: string) => {
    setValue(value.map((lang, i) => (i === idx ? { ...lang, level } : lang)));
  };

  return (
    <div className="bg-violet-50 flex flex-col gap-4 p-10 w-250 border-30 border-white justify-center items-center shadow-lg">
      <div className="text-2xl font-bold text-indigo-950 pb-3">Languages</div>
      {value.map((lang, idx) => (
        <div
          key={lang.id}
          className="relative w-full flex items-center justify-center gap-2"
        >
          {value.length > 1 && (
            <button
              type="button"
              className="absolute top-1 right-0 text-violet-500 text-xl font-bold z-10 hover:text-violet-700"
              onClick={() => removeLanguage(idx)}
              aria-label="Remove language"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              ×
            </button>
          )}
          <label>
            <InputField
              type="text"
              name={`language-${lang.id}`}
              placeholder="Language"
              value={lang.value}
              onChange={(e) => handleChange(idx, e.target.value)}
            />
          </label>
          <select
            className="px-3 py-2 border border-indigo-200 rounded-sm hover:border-indigo-300 focus:outline-none focus:ring-violet-400 text-indigo-950 w-40 text-center"
            value={lang.level}
            onChange={(e) => handleLevelChange(idx, e.target.value)}
            name={`language-level-${lang.id}`}
          >
            {languageLevels.map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>
      ))}
      <div className="flex gap-4 mt-4 justify-center">
        <Button onClick={addLanguage}>Add more</Button>
      </div>
    </div>
  );
};

export default Languages;
