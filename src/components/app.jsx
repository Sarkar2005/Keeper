import Counter from "./Counter";
import Po from "./Po";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import White from "./white";
import { useState } from "react";



function App() {
    const [color, set] = useState("white");
    const [isTrue , setTrue] = useState(false);

    function Bla() {
        if(!isTrue){
            set("black");
            setTrue(true);
        }
       if(isTrue){
        set("white");
        setTrue(false);
    }
      }
    return (
        <>
        <div style={{backgroundColor : color , height:"100vh"}}>
        <h1><AcUnitIcon /> Keeper</h1>
        <Po/>
        {/* <Counter /> */}
        {/* <White/> */}
        {/* <button onClick={Bla}>Change theme</button> */}

        
      


        </div>
        </>
    )
}

export default App;
