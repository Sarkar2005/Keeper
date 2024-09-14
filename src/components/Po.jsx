// or
import { TextareaAutosize } from "@mui/base";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useState } from "react";

function Po() {
  const [expande, setExpanded] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [output, setOutput] = useState({ title: "", content: "" });
  // const [expandede,setExpandede]=useState('false') ;

  function handleChange() {
    setExpanded(true);
  }

// for plus function 

function Buttonclick(){
  setOutput({title,content});
}









  return (
    <>
      <div class="textb">
        {/* <form> */}
        <div class="">
          {expande && (
            <input
              id=""
              name="Title"
              placeholder="Title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              style={{
                width: "30%",
                height: "27px",
                fontSize: "16px",
                border: "2.5px solid black",
              }}
            />
          )}
        </div>

        <textarea
          style={{
            width: "30%",
            height: "200px",
            fontSize: "16px",
            border: "2.5px solid black",
          }}
          id=""
          name="Content"
          placeholder="Take a Note"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onClick={handleChange}
        />

        {/* </form> */}
        <div>
          <ControlPointIcon
          onClick={Buttonclick}
            style={{
              fontSize: "40px",
              color: "#FFCC00",
              cursor: "pointer",
              marginLeft: "325px",
              position: "relative",
              top: "-24.2px",
            }}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          {output.title && <h3>Title: {output.title}</h3>}
          {output.content && <p>Content: {output.content}</p>}
        </div>
      </div>

      {/* <ControlPointIcon style={{ fontSize: '40px', color: 'blue', cursor: 'pointer', position:'relative',}} /> */}
    </>
  );
}

export default Po;
