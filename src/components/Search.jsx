import css from "../Styles/Search.css"

function Search(props) {
  return (
    <div>
      <input className='search' placeholder="search.." type="search" onChange={(ev)=>props.setInputSearch(ev.target.value)} value={props.inputSearch} />
    </div>
  )
}

export default Search