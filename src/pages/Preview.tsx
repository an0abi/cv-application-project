import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useCV } from "../context/CVContext";
import { FaGraduationCap } from "react-icons/fa";

const Preview: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useCV();

  const handleBackToEditor = () => {
    navigate("/");
  };

  return (
    <div className="justify-center items-center flex flex-col bg-indigo-200 p-10 gap-10 min-h-screen">
      <div className="w-full max-w-5xl bg-white p-8 shadow-lg">
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
          This is where the preview of your CV will appear with all the entered
          data
        </p>

        <div className="border-4 border-gray-500">
          <div className="space-y-6">
            <div className="flex flex-col text-gray-600 text-sm bg-indigo-200 p-6 justify-center">
              <div className="flex items-center justify-between">
                {state.generalInfo.photo && (
                  <div className="flex items-center gap-6">
                    <img
                      src={state.generalInfo.photo}
                      alt="Photo"
                      className="w-48 h-48 object-cover rounded-full"
                    />
                    <p className="font-bold text-2xl">
                      {state.generalInfo.name}
                    </p>
                  </div>
                )}
                <div>
                  <p>
                    <b>Email:</b> {state.generalInfo.email}
                  </p>
                  <p>
                    <b>Phone:</b> {state.generalInfo.phone}
                  </p>
                  <p>
                    <b>City:</b> {state.generalInfo.city}
                  </p>
                </div>
              </div>
              <div className="pt-8 max-w-1/3">
                <p>
                  <b>
                    About me: <br />
                  </b>{" "}
                  {state.generalInfo.about}
                </p>
              </div>
            </div>
            <div className="p-10 text-3xl">
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-indigo-600" />
                <h3 className="font-medium text-gray-800">Education</h3>
              </div>
              {state.education.length > 0 ? (
                <div className="text-gray-600 text-sm flex flex-col gap-4 mt-4">
                  {state.education.map((e) => (
                    <div key={e.id} className="border-b pb-2">
                      <div className="flex justify-between items-center">
                        <b>
                          {e.school || (
                            <span className="text-gray-400">No school</span>
                          )}
                        </b>
                        {e.graduationYear && (
                          <span className="text-indigo-700 font-semibold">
                            {e.graduationYear}
                          </span>
                        )}
                      </div>
                      {(e.degree || e.field) && (
                        <div className="mt-1">
                          {e.degree && <span>{e.degree}</span>}
                          {e.degree && e.field && <span>, </span>}
                          {e.field && <span>{e.field}</span>}
                        </div>
                      )}
                      {!e.school &&
                        !e.degree &&
                        !e.field &&
                        !e.graduationYear && (
                          <span className="text-gray-400">No information</span>
                        )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 text-sm">No data</p>
              )}
            </div>
            <div className="pb-2">
              <h3 className="font-medium text-gray-800">Work Experience</h3>
              {state.workExperience.length > 0 ? (
                <div className="text-gray-600 text-sm">
                  {state.workExperience.map((e) => (
                    <p key={e.id}>
                      <b>{e.company}</b>, {e.position} ({e.startDate} -{" "}
                      {e.endDate})<br />
                      <span>{e.description}</span>
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 text-sm">Brak danych</p>
              )}
            </div>
            <div className="pb-2">
              <h3 className="font-medium text-gray-800">Skills</h3>
              {state.skills.length > 0 ? (
                <div className="text-gray-600 text-sm">
                  {state.skills.map((s) => (
                    <p key={s.id}>
                      {s.value}{" "}
                      <span className="ml-2 text-xs text-indigo-700">
                        ({s.level})
                      </span>
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 text-sm">Brak danych</p>
              )}
            </div>
            <div className="pb-2">
              <h3 className="font-medium text-gray-800">Languages</h3>
              {state.languages.length > 0 ? (
                <div className="text-gray-600 text-sm">
                  {state.languages.map((l) => (
                    <p key={l.id}>
                      {l.value}{" "}
                      <span className="ml-2 text-xs text-indigo-700">
                        ({l.level})
                      </span>
                    </p>
                  ))}
                </div>
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
