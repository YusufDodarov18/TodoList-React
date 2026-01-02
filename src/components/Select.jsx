import css from "../Styles/Select.css"
function Select({select,setSelect}) {
  return (
    <div>
    <select className="select" onChange={(ev)=>setSelect(ev.target.value)} value={select}>
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="InActive">InActive</option>
      </select>
    </div>
  )
}

export default Select