import NewTasks from "./NewTasks.jsx";

export default function Tasks({deleteTask,addTask,tasks}) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTasks  addTask={addTask}/>

           {tasks.length === 0 && <p className="text-stone-800 mb-4">This project does not have any tasks yet.</p>}

           {tasks.length > 0 && <ul>
               {tasks.map((tasks)=> <li key={tasks.id}>
                <span>{tasks.text}</span>
                <button>Clear</button>
                </li>)}
            </ul>}
        </section>
    )
}