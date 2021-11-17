import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);
 
    const [note, setNote] = useState({
        title : '',
        content : ''
    });

    const inputEvent = (event) => {

        const {name, value} = event.target;

        setNote( (preData) => {
            return {
                ...preData,
                [name] : value
            };    
        });

    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title : '',
            content : ''
        });
    }

    const expandIt = () => {
        setExpand(true);
    }

    const backToNor = () => {
        setExpand(false);
    }

    return(
    <>
        <div className="main_note" onDoubleClick={backToNor}>
            <form>
                {expand ? 
                    <input type="text" placeholder="Title" autoComplete='off' value={note.title} name="title" onChange={inputEvent}/> 
                : null }
                
                <textarea rows="" column="" placeholder="Write a Note.." value={note.content} name="content" onChange={inputEvent} onClick={expandIt} ></textarea>
                
                { expand && 
                    <Button onClick={addEvent}><AddIcon className="plus_sign" /></Button>
                }
            </form>
        </div>
    </>
    )
}

export default CreateNote;