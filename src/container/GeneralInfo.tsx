import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const GeneralInfo: React.FC = () => {
  const [photo, setPhoto] = useState<string | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setPhoto(reader.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="bg-violet-50 flex flex-col gap-4 p-10 w-250 border-30 border-white justify-center items-center">
      <div className="text-2xl font-bold text-indigo-950 pb-3">
        General Info
      </div>
      <div className="flex justify-evenly gap-8">
        <label>
          <InputField type="text" name="name" placeholder="First & Last Name" />
        </label>
        <label>
          <InputField type="email" name="email" placeholder="Email" />
        </label>
      </div>
      <div className="flex justify-evenly gap-8">
        <label>
          <InputField
            type="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
            title="Phone number must be in the format: 000-000-000"
            placeholder="Phone"
          />
        </label>
        <label>
          <InputField type="city" name="city" placeholder="City" />
        </label>
      </div>
      <div></div>
      <input
        type="file"
        id="file_input"
        accept="image/*"
        onChange={handlePhotoChange}
        className="hidden"
      />
      <Button
        className="text-center border border-gray-300 rounded p-2 cursor-pointer bg-indigo-100 hover:bg-indigo-200 hover:border-indigo-200"
        onClick={() => document.getElementById("file_input")?.click()}
      >
        Click to upload photo
      </Button>
      <div className="flex flex-col items-center gap-2">
        <div className="w-65 h-60 border-2 border-indigo-100 flex justify-center items-center">
          {photo ? (
            <img
              src={photo}
              alt="Preview"
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="text-gray-400">No photo</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
