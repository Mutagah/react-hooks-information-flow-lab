import  React,{useState} from "react";
import ShoppingList from "./ShoppingList";
 import itemData from "../data/items"
import Header from "./Header";
function App()
{
  const [appTheme, setAppTheme] = useState(false)
  function handlingColor()
  {
    setAppTheme((changingColor) => !changingColor)
  }
  return (
    <div className={"App " + (appTheme ? "dark" : "light")}>
    <Header appTheme={appTheme} onDarkModeClick={handlingColor}/>
    <ShoppingList items={itemData} /> 
    </div>
  )
}
export default App;
