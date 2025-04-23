import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState,setProjectState]=useState({
    selectedProjectId:undefined,
    projects:[],
  });
  
  function handleDeleteProject() {
   
    setProjectState(prevState => {
      return {
         ...prevState,
         selectedProjectId:undefined,
         projects:prevState.projects.filter((project)=> !project.id !==projectState.selectedProjectId)

       }
    })
 }
  function handleSelectProject(id) {
   
    setProjectState(prevState => {
      return {
         ...prevState,
         selectedProjectId:id,

       }
    })
 }

  function handleStartAddProject() {
   
     setProjectState(prevState => {
       return {
          ...prevState,
          selectedProjectId:null,

        }
     })
  }
  function handleStartCancelProject() {
    setProjectState(prevState => {
      return {
         ...prevState,
         selectedProjectId:undefined,

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

   const selectedProject=projectState.projects.find(project =>project.id===projectState.selectedProjectId);
   let content=<SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>

   if(projectState.selectedProjectId === null) {
     content =<NewProject onAdd={handleAddProject} onCancel={handleStartCancelProject} />
   }
   else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
   }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectProject}/>
      {content}

      
    </main>
  );
 }

export default App;
