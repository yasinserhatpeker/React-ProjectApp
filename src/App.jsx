import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";

function App() {
  const [projectState,setProjectState]=useState({
    selectedProjectId:undefined,
    projects:[],
  });

  function handleStartAddProject() {
   
     setProjectState(prevState => {
       return {
          ...prevState,
          selectedProjectId:null,

        }
     })
  }

  function handleAddProject(projectData) {

   
    
     setProjectState(prevState => {
      const projectId=Math.random();
      const newProject= {
        ...projectData,
        id:projectId,
      };
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects,newProject]
      }
     })

  }
  console.log(projectState);

   let content;

   if(projectState.selectedProjectId === null) {
     content =<NewProject onAdd={handleAddProject} />
   }
   else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
   }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleStartAddProject} projects={projectState.projects}/>
      {content}

      
    </main>
  );
}

export default App;
