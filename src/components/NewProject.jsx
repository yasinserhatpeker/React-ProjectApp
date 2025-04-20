import Input from "./Input.jsx";

export default function NewProject() {
    return (
      <div className="w-[35rem] mt-16">
        <menu className="flex item-center justify-end gap-4 my-1">
            <button className="text-stone-800 hover:text-stone-950">Cancel</button>
            <button className="rounded-md bg-stone-950 text-stone-50 hover:bg-stone-600 px-4 py-1">Save</button>
        </menu>
        <div>
             <Input label="Title" />
             <Input label="Description" textarea={true}/>
             <Input label="Due Date"/>
        </div>
      </div>
    )
}