import React, {useState} from "react";
/* input field, a textarea, and a submit button. 
The form is centered on the page, has a white background with a border-radius, and a box-shadow effect. 
The input and textarea elements have no border, a padding, and no resize option. 
The submit button has a yellow background color, a white text color, and a circular shape with a drop shadow effect.*/
function CreateArea(props) {
    const [note,setNote] = useState({
        title:"",
        content:""
    })

    function handleChange(event) {
        const {name,value} = event.target
        setNote(prevNote=>{
            return{
                ...prevNote,
                [name]:value
            }
        })
    }
    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
    }
    return(
        <div className="container">
            <form>
                <input 
                name="title"
                onChange={handleChange}
                value={note.title}
                placeholder="Title"/>
                <textarea
                name="content"
                onChange={handleChange}
                value={note.content}
                placeholder="Take a note..."
                rows={3}/>
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}
export default CreateArea;