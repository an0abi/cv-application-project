import React from "react";

interface InputFieldProps {
  type: string;
  name: string;
  placeholder: string;
  pattern?: string;
  title?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  placeholder,
  pattern,
  title,
  className,
}) => {
  return (
    <label className="border-indigo-200 border-1 rounded max-h-20 hover:border-indigo-300 p-2">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        pattern={pattern}
        title={title}
        className={`text-center focus-outline-none outline-none w-80 h-10 text-indigo-950 ${className}`}
      />
    </label>
  );
};

export default InputField;
