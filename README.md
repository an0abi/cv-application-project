

# CV Application Project

**Live demo:** [https://frolicking-paletas-89abc4.netlify.app/](https://frolicking-paletas-89abc4.netlify.app/)

## Project Description

The "CV Application Project" is a tool for creating and previewing CVs in the browser. It allows the user to enter personal data, education, work experience, skills, and languages, and then generate a preview of the finished CV with the option to print it.

## What I learned while building this project

1. **Global state management in React**
   - I learned how to create and use React Context and `useReducer` to manage complex application state shared between multiple components.
   - I learned how to design TypeScript types for global state and reducer actions.

2. **Building and composing functional components**
   - I built many functional components (e.g. `GeneralInfo`, `Education`, `WorkExperience`, `Skills`, `Languages`, `Button`, `PrintButton`) that are reused in different parts of the application.
   - I understood how to pass data and state-updating functions to child components via props.

3. **Handling forms and dynamic lists**
   - I learned how to handle dynamic lists (e.g. education, work experience, skills, languages), allowing the user to add and edit multiple entries.
   - I learned techniques for validation and initialization of form state.

4. **Routing and navigation**
   - I implemented navigation between the editor page (`Creator.tsx`) and the preview page (`Preview.tsx`) using `react-router-dom`.

5. **Document preview and printing**
   - I implemented real-time CV preview and the ability to print a selected section using `useRef` and a dedicated button.

6. **Styling with Tailwind CSS**
   - I learned to use the utility-first Tailwind CSS framework for fast and responsive component styling.

7. **Working with TypeScript**
   - I improved my skills in typing components, props, and global state, which increased code safety and readability.

8. **Component collaboration and project architecture**
   - I understood how to split the application into logical sections (components, containers, context) and how to connect them for scalable and maintainable code.

## Project structure

- `src/pages/Creator.tsx` – main CV editor, allows entering and editing all sections.
- `src/pages/Preview.tsx` – preview of the generated CV based on the entered data.
- `src/context/CVContext.tsx` – global context and reducer for application state management.
- `src/components/` – reusable components (buttons, form fields).
- `src/container/` – containers for individual CV sections (personal data, education, work experience, skills, languages).

## Summary

This project allowed me to practice modern techniques for building React applications with TypeScript, state management, styling, and working with dynamic user data.
