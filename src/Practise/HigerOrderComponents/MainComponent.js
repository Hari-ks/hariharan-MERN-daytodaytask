import Component1 from "./Component";
import HigherOrderCommponent from "./HOC";



// this is Main component 
// Calling the HOC component
const MainComponent=()=>{

    const GetHOCComponent=HigherOrderCommponent(Component1)
    return(<div>
        <h4>Main Component</h4>
        <Component1 value={'this is from mainComponet'}/>
        <p>This is HigherOrderCommponent</p>
        <GetHOCComponent value={'this is from HOC'}/>
    </div>)
}

export default MainComponent;






