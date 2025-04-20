export default function Input({textarea,label,...props}) {

     const classes="w-full p-1 border-b-2 rounded-sm bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-800"
    return (
        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase">{label}</label>
          {textarea ? <textarea {...props} className={classes}/> : <input {...props}  className={classes}/>}
         </p>
    )
}