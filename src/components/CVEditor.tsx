import React from "react";

const CVEditor: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 p-4 justify-center items-center">
      <div>General Info</div>
      <div className="flex justify-evenly gap-4">
        <label>
          <input
            type="text"
            name="name"
            placeholder="First & Last Name"
            className="text-center"
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="text-center"
          />
        </label>
      </div>
      <div className="flex">
        <label>
          <input
            type="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
            title="Phone number must be in the format: 000-000-000"
            placeholder="Phone"
            className="text-center"
          />
        </label>
        <label>
          <input
            type="city"
            name="city"
            placeholder="City"
            className="text-center"
          />
        </label>
      </div>
      <div>
      <label className="block mb-2" htmlFor="file_input">Upload photo</label>
      <input className="block w-full text-sm rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
      </div>
    </div>
  );
};

export default CVEditor;
