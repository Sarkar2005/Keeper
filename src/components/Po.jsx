// or
import { TextareaAutosize } from "@mui/base";
import { useState } from "react";

function Porn() {
    const[expanded , setExpanded] = useState(false);

    function handleChange(){
        setExpanded(true);
    }
  return (
    <>
      <div class="textb">
        {/* <form> */}
            {expanded && <input
                id=""
                name= "Title"
                placeholder="Title"
             />}
            <textarea
                id=""
                name= "Content"
                placeholder="Take a Note"
                onClick={handleChange}
            />
        {/* </form> */}
      </div>
    </>
  );
}

export default Porn;
