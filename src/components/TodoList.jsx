import { useEffect, useState } from 'react';
import Search from './Search';
import Select from './Select';
import AddTask from './AddTask';
import CompletedTask from './CompletedTask';
import { EditTask } from './EditTask';
import { DeleteTask } from './DeleteTask';


function TodoList() {
  const [input,setInput]=useState("")
  const [inputSearch,setInputSearch]=useState("")
  const [data,setData]=useState([])
  const [select,setSelect]=useState("All")

useEffect(()=>{
 const saved= localStorage.getItem("data")
 if(saved){
   setData(JSON.parse(saved))
 }
},[])

  useEffect(()=>{
    localStorage.setItem("data",JSON.stringify(data))
  },[data])

  
  return (  
   <div>
    <div className="container">
      <h1>TodoList</h1>
    </div>
    <div>
      <Search inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <Select select={select} setSelect={setSelect}/>
    </div>
    <div className="add">
      <AddTask input={input} setInput={setInput} setData={setData}/>
    </div>
    <div>
      {data.length===0?<div>Empty</div>:
      data.filter(e=>e.title.toLowerCase().includes(inputSearch.toLowerCase().trim()))
      .length===0?<div>Not found: {inputSearch}</div>:
      data.filter(e=>{
        if(select==="Active"){
          return e.completed===true
        }else if(select==="InActive"){
          return e.completed===false
        }else{
          return e
        }
      })
      .map((e,i)=>{
        return <div className='tasks' key={e.id}>
         <div className='texts'>
            <span>{i+1}</span>
            {e.completed?<del>{e.title}</del>:<p>{e.title}</p>}
         </div>
          <div className='actions'>
            <CompletedTask data={data} setData={setData} el={e}/>
            <EditTask data={data} setData={setData} id={e.id}/>
            <DeleteTask data={data} setData={setData} id={e.id}/>
          </div>
        </div>
      })}
    </div>
   </div>
  );
}

export default TodoList;
