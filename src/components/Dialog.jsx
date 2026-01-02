import css from "../Styles/Dialog.css"
import { useEffect } from 'react'
import { useState } from 'react'

export default function Dialog({dialog,data,setData,id}) {
    const [inputEdit,setInputEdit]=useState("")
    useEffect(()=>{
        const exist=data.find(e=>e.id===id)
        if(exist){
            setInputEdit(exist.title)
        }
    },[id,data])
    
  return (
    <div>
        <dialog className="dialog" ref={dialog}>
            <input type="text" value={inputEdit} onChange={(e)=>setInputEdit(e.target.value)} />
            <div className="buttons">
                <button onClick={()=>{
                if(inputEdit.trim()!=""){
                    setData(prevData=>prevData.map(e=>e.id===id?{...e,title:inputEdit}:e))
                    dialog.current.close()
                }}}>Save</button>
                <button onClick={()=>dialog.current.close()}>Cancel</button>
            </div>
        </dialog>   
    </div>
  )
}
