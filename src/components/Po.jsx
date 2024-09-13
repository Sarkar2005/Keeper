// or
import { TextareaAutosize } from "@mui/base";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useState } from "react";

function Po() {
  const [expanded, setExpanded] = useState(false);

  function handleChange() {
    setExpanded(true);
  }
  return (
    <>
      <div class="textb">
        {/* <form> */}
        <div class="">
          {expanded  && <input id="" name="Title" placeholder="Title" 
         style={{ width: '30%', height: '27px', fontSize: '16px' }} />}
        </div>

      
        <textarea
          style={{ width: '30%', height: '200px', fontSize: '16px',  }}
          id=""
          name="Content"
          placeholder="Take a Note"
          onClick={handleChange}
        />
        
        {/* </form> */}
        <div>
        <ControlPointIcon style={{ fontSize: '40px',   color: '#FFCC00', cursor: 'pointer',   marginLeft: '325px',position: 'relative', top: '-23px' }} /> 


        </div>  
        
      </div>

      {/* <ControlPointIcon style={{ fontSize: '40px', color: 'blue', cursor: 'pointer', position:'relative',}} /> */}
    </>
  );
}

export default Po;
