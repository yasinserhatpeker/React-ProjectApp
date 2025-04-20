export default function SideBar() {
    return (
       <aside className="w-1/3 bg-stone-900 text-stone-50 rounded-r-xl px-8 py-16 md:w-72" >
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-300">Your Projects</h2>
        <div>
            <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-600 hover:bg-stone-700">
                + Add project
            </button>
            <ul>

            </ul>
        </div>
       </aside>
    )
}