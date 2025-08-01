import React, { useState, useRef } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const FRAME_WIDTH = 260;
const FRAME_HEIGHT = 240;

const GeneralInfo: React.FC = () => {
  const [photo, setPhoto] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");

  const [imgPosition, setImgPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const imgStart = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [imgSize, setImgSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  const [about, setAbout] = useState<string>("");
  const aboutRef = useRef<HTMLTextAreaElement>(null);

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

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const words = value.trim().split(/\s+/);
    if (words.length <= 2) {
      setName(value);
      setNameError("");
    } else {
      setNameError("Please enter only first and last name (two words).");
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[0-9-]*$/.test(value)) {
      setPhone(value);
      if (value.length === 0 || /^[0-9]{3}-[0-9]{3}-[0-9]{3}$/.test(value)) {
        setPhoneError("");
      } else {
        setPhoneError("Phone number must be in the format: 000-000-000");
      }
    } else {
      setPhoneError("Phone number must be in the format: 000-000-000");
    }
  };

  const handleAboutChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.slice(0, 400);
    setAbout(value);
    if (aboutRef.current) {
      aboutRef.current.style.height = "auto";
      aboutRef.current.style.height = aboutRef.current.scrollHeight + "px";
    }
  };

  const handleImgMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    imgStart.current = { ...imgPosition };
    e.preventDefault();
  };

  const handleImgMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    let newX = imgStart.current.x + dx;
    let newY = imgStart.current.y + dy;

    const minX = Math.min(0, FRAME_WIDTH - imgSize.width);
    const maxX = 0;
    const minY = Math.min(0, FRAME_HEIGHT - imgSize.height);
    const maxY = 0;

    newX = Math.max(minX, Math.min(maxX, newX));
    newY = Math.max(minY, Math.min(maxY, newY));

    setImgPosition({ x: newX, y: newY });
  };

  const handleImgMouseUp = () => {
    setDragging(false);
  };

  const handleImgLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const { width, height } = e.currentTarget;
    setImgSize({ width, height });
    setImgPosition({
      x: Math.max(0, (FRAME_WIDTH - width) / 2),
      y: Math.max(0, (FRAME_HEIGHT - height) / 2),
    });
  };

  return (
    <div
      className="bg-violet-50 flex flex-col gap-4 p-10 w-250 border-30 border-white justify-center items-center"
    >
      <div className="text-2xl font-bold text-indigo-950 pb-3">
        General Info
      </div>
      <div className="flex justify-evenly gap-8">
        <label>
          <InputField
            type="text"
            name="name"
            placeholder="First & Last Name"
            value={name}
            onChange={handleNameChange}
          />
          <div className="flex flex-col items-center w-full">
            {nameError && (
              <span className="text-red-500 text-xs text-center mt-1 w-full">
                {nameError}
              </span>
            )}
          </div>
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
            placeholder="Phone"
            value={phone}
            onChange={handlePhoneChange}
          />
          <div className="flex flex-col items-center w-full">
            {phoneError && (
              <span className="text-red-500 text-xs text-center mt-1 w-full">
                {phoneError}
              </span>
            )}
          </div>
        </label>
        <label>
          <InputField type="city" name="city" placeholder="City" />
        </label>
      </div>
      <div className="flex flex-col items-center w-full">
        <label className="w-full flex flex-col items-center p-2">
          <span className="text-indigo-950 font-medium mb-2 text-center">About me</span>
          <textarea
            ref={aboutRef}
            value={about}
            onChange={handleAboutChange}
            maxLength={400}
            rows={2}
            placeholder="Write something about yourself..."
            className="resize-none w-96 min-h-[48px] max-h-60 p-2 border border-indigo-200 rounded text-center hover:border-indigo-300 focus:outline-none"
            style={{ overflow: "hidden" }}
          />
          <span className="text-xs text-gray-400 mt-1">{about.length}/400</span>
        </label>
      </div>
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
        <div
          className="w-65 h-60 border-1 border-indigo-200 rounded flex justify-center items-center overflow-hidden relative"
          style={{
            userSelect: "none",
            cursor: dragging ? "grabbing" : "grab",
            width: FRAME_WIDTH,
            height: FRAME_HEIGHT,
          }}
          onMouseMove={handleImgMouseMove}
          onMouseUp={handleImgMouseUp}
          onMouseLeave={handleImgMouseUp}
        >
          {photo ? (
            <img
              src={photo}
              alt="Preview"
              className="absolute"
              style={{
                left: imgPosition.x,
                top: imgPosition.y,
                position: "absolute",
                pointerEvents: "auto",
              }}
              draggable={false}
              onMouseDown={handleImgMouseDown}
              onLoad={handleImgLoad}
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
