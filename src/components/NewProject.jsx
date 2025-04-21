import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";


export default function NewProject({onAdd,onCancel}) {
const title=useRef();
const description=useRef();
const dueDate=useRef();
const modal=useRef();


function handleSave() {
 const enteredTitle=title.current.value;
 const enteredDescription=description.current.value;
 const enteredDueDate=dueDate.current.value;
 
 if(enteredTitle.trim() === '' || enteredDescription.trim() ==='' || enteredDueDate.trim()==='') {
   modal.current.open();
   return;
 }
  onAdd({
    title:enteredTitle,
    description:enteredDescription,
    dueDate:enteredDueDate
  });

 }
    return (
      <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
        <p className="text-stone-800 my-4">Opsss... looks like you forgot to enter a value!</p>
        <p className="text-stone-800 my-4">Please make sure you provide a valid value for every input fields.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex item-center justify-end gap-4 my-1">
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
            <button className="rounded-md bg-stone-950 text-stone-50 hover:bg-stone-600 px-4 py-1" onClick={handleSave}>Save</button>
        </menu>
        <div>
             <Input label="Title" ref={title} />
             <Input label="Description" textarea={true} ref={description}/>
             <Input label="Due Date" type="date" ref={dueDate}/>
        </div>
      </div>
      </>
    )
}