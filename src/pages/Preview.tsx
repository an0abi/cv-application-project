import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useCV } from "../context/CVContext";

const Preview: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useCV();

  const handleBackToEditor = () => {
    navigate("/");
  };

  return (
    <div className="justify-center items-center flex flex-col bg-indigo-200 p-10 gap-10 min-h-screen">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-gray-800 text-3xl font-bold">CV Preview</h1>
          <Button
            className="bg-indigo-500 text-white hover:bg-indigo-600 border-none"
            onClick={handleBackToEditor}
          >
            Back to Editor
          </Button>
        </div>
        <p className="text-gray-600 p-2">
          This is where the preview of your CV will appear with all the entered data
        </p>

        <div className="bg-violet-50 p-6 rounded-lg">
          {/* Placeholder dla danych CV */}
          <div className="mt-6 space-y-4">
            <div className="border-b pb-2">
              <h3 className="font-medium text-gray-800">Informacje osobiste</h3>
              <ul className="text-gray-600 text-sm">
                <li>
                  <b>Name:</b> {state.generalInfo.name}
                </li>
                <li>
                  <b>Email:</b> {state.generalInfo.email}
                </li>
                <li>
                  <b>Phone:</b> {state.generalInfo.phone}
                </li>
                <li>
                  <b>City:</b> {state.generalInfo.city}
                </li>
                <li>
                  <b>About:</b> {state.generalInfo.about}
                </li>
                {state.generalInfo.photo && (
                  <li>
                    <img
                      src={state.generalInfo.photo}
                      alt="Photo"
                      className="w-24 h-24 object-cover rounded mt-2"
                    />
                  </li>
                )}
              </ul>
            </div>
            <div className="border-b pb-2">
              <h3 className="font-medium text-gray-800">Wykształcenie</h3>
              {state.education.length > 0 ? (
                <ul className="text-gray-600 text-sm">
                  {state.education.map((e) => (
                    <li key={e.id}>
                      <b>{e.school}</b>, {e.degree} {e.field},{" "}
                      {e.graduationYear}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-sm">Brak danych</p>
              )}
            </div>
            <div className="border-b pb-2">
              <h3 className="font-medium text-gray-800">
                Doświadczenie zawodowe
              </h3>
              {state.workExperience.length > 0 ? (
                <ul className="text-gray-600 text-sm">
                  {state.workExperience.map((e) => (
                    <li key={e.id}>
                      <b>{e.company}</b>, {e.position} ({e.startDate} -{" "}
                      {e.endDate})<br />
                      <span>{e.description}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-sm">Brak danych</p>
              )}
            </div>
            <div className="border-b pb-2">
              <h3 className="font-medium text-gray-800">Umiejętności</h3>
              {state.skills.length > 0 ? (
                <ul className="text-gray-600 text-sm">
                  {state.skills.map((s) => (
                    <li key={s.id}>
                      {s.value}{" "}
                      <span className="ml-2 text-xs text-indigo-700">
                        ({s.level})
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-sm">Brak danych</p>
              )}
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Języki</h3>
              {state.languages.length > 0 ? (
                <ul className="text-gray-600 text-sm">
                  {state.languages.map((l) => (
                    <li key={l.id}>
                      {l.value}{" "}
                      <span className="ml-2 text-xs text-indigo-700">
                        ({l.level})
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-sm">Brak danych</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
