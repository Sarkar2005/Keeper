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
          {expanded  && <input id="" name="Title" placeholder="Title"  />}
        </div>

      
        <textarea
          rows={20}
          cols={40}
          id=""
          name="Content"
          placeholder="Take a Note"
          onClick={handleChange}
        />
        {/* </form> */}
      </div>

      <ControlPointIcon />
    </>
  );
}

export default Po;
