import { useRef } from "react";
import Input from "./Input.jsx";


export default function NewProject({onAdd}) {
const title=useRef();
const description=useRef();
const dueDate=useRef();


function handleSave() {
 const enteredTitle=title.current.value;
 const enteredDescription=description.current.value;
 const enteredDueDate=dueDate.current.value;

  onAdd({
    title:enteredTitle,
    description:enteredDescription,
    dueDate:enteredDueDate
  });

}
    return (
      <div className="w-[35rem] mt-16">
        <menu className="flex item-center justify-end gap-4 my-1">
            <button className="text-stone-800 hover:text-stone-950">Cancel</button>
            <button className="rounded-md bg-stone-950 text-stone-50 hover:bg-stone-600 px-4 py-1" onClick={handleSave}>Save</button>
        </menu>
        <div>
             <Input label="Title" ref={title} />
             <Input label="Description" textarea={true} ref={description}/>
             <Input label="Due Date" type="date" ref={dueDate}/>
        </div>
      </div>
    )
}