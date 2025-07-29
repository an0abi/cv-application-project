import React from 'react';
import './App.css'
import GeneralInfo from './container/GeneralInfo';
import Education from './container/Education';
import WorkExperience from './container/WorkExperience';
import Skills from './container/Skills';
import Languages from './container/Languages';

function App() {

  return (
    <div className='justify-center items-center flex flex-col bg-indigo-200  p-10 gap-10'>
      <h1 className='text-indigo-950 text-4xl font-bold'>CV Creator</h1>
      <GeneralInfo/>
      <Education/>
      <WorkExperience/>
      <Skills/>
      <Languages/>
    </div>

  )
}

export default App;
