import NewTasks from "./NewTasks.jsx";

export default function Tasks({deleteTask,addTask,tasks}) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTasks  addTask={addTask}/>

           {tasks.length === 0 && <p className="text-stone-800 mb-4">This project does not have any tasks yet.</p>}

           {tasks.length > 0 && <ul className="pt-4 mt-8 rounded-mb bg-stone-100">
               {tasks.map((tasks)=> <li key={tasks.id} className="flex justify-between my-4">
                <span>{tasks.text}</span>
                <button className="bg-stone-600 text-stone-300 hover:bg-stone-800 hover:text-red-500 px-3 my-3 ronunded ">Clear</button>
                </li>)}
            </ul>}
        </section>
    )
}