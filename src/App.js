import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {

    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        setAddItem((preData) => {
            return [...preData, note];
        });
        // console.log(note);
    }

    const onDelete = (id) => {
        setAddItem((oldData) => {
            return (oldData.filter((currData, index) => {
                return index !== id;
            })
            )
        })
    }

    return (
        <>
            <div className="main-dv">
                <Header />
                <CreateNote
                    passNote={addNote}
                />

                <div className="note_class">
                {/* <Note /> */}
                    {addItem.map((val, index) => {
                        return <Note
                            key={index}
                            id={index}
                            title={val.title}
                            content={val.content}
                            deleteItem={onDelete}
                        />
                    })}
                </div>
                <Footer />

            </div>
        </>
    )
}

export default App;