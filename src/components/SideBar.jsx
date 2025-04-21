import Button from "./Button";

export default function SideBar({onStartAddProject,projects}) {
    return (
       <aside className="w-1/3 bg-stone-900 text-stone-50 rounded-r-xl px-8 py-16 md:w-72" >
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-300">Your Projects</h2>
        <div>
          <Button onClick={onStartAddProject}>+ Add project</Button>
            <ul className="mt-8">
              {projects.map(project=> <li key={project.id}>
                <button className="w-full text-left px-2 py-1 rounded-md  my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
                  {project.title}
                </button>
              </li>)}

            </ul>
        </div>
       </aside>
    )
}