import React, { createContext, useReducer, useContext } from "react";

export type GeneralInfo = { name: string; email: string; phone: string; city: string; photo: string | null; about: string };
export type Education = { id: number; school: string; degree: string; field: string; graduationYear: string };
export type WorkExperience = { id: number; company: string; position: string; startDate: string; endDate: string; description: string };
export type Skill = { id: number; value: string; level: string };
export type Language = { id: number; value: string; level: string };

export type CVState = {
  generalInfo: GeneralInfo;
  education: Education[];
  workExperience: WorkExperience[];
  skills: Skill[];
  languages: Language[];
};

export type Action =
  | { type: "SET_GENERAL_INFO"; payload: GeneralInfo }
  | { type: "SET_EDUCATION"; payload: Education[] }
  | { type: "SET_WORK_EXPERIENCE"; payload: WorkExperience[] }
  | { type: "SET_SKILLS"; payload: Skill[] }
  | { type: "SET_LANGUAGES"; payload: Language[] };

const initialState: CVState = {
  generalInfo: { name: "", email: "", phone: "", city: "", photo: null, about: "" },
  education: [],
  workExperience: [],
  skills: [],
  languages: [],
};

function cvReducer(state: CVState, action: Action): CVState {
  switch (action.type) {
    case "SET_GENERAL_INFO":
      return { ...state, generalInfo: action.payload };
    case "SET_EDUCATION":
      return { ...state, education: action.payload };
    case "SET_WORK_EXPERIENCE":
      return { ...state, workExperience: action.payload };
    case "SET_SKILLS":
      return { ...state, skills: action.payload };
    case "SET_LANGUAGES":
      return { ...state, languages: action.payload };
    default:
      return state;
  }
}

const CVContext = createContext<{
  state: CVState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const useCV = () => useContext(CVContext);

export const CVProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cvReducer, initialState);
  return <CVContext.Provider value={{ state, dispatch }}>{children}</CVContext.Provider>
};
