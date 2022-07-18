import React,{useState} from "react";
import Filter from "./Filter";
import Item from "./Item"
function ShoppingList({items}){
  const [filterValue, setFilterValue] = useState("All")
  function handleChange(event)
  {
    setFilterValue(event.target.value)
  }
  const itemOnDisplay = items.filter((item)=>
  {
    if(filterValue === "All"){
      return true
    }
  else if(filterValue === item.category){
      return true;
  } })
  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleChange}/>
      <ul className="Items">
        {
          itemOnDisplay.map((element)=>
          <Item key={element.id} itemName={element.name} itemCategory={element.category}/>)
        }
      </ul>

    </div>
  )
}
export default ShoppingList;
