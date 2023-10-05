import React, { useState } from 'react'
import CreateArea from './CreateArea';
import Note from './Note';
import Count from './Count';

function Body() {

    const [notes, setNotes] = useState([])

    const addNote = (newNote) => {

        setNotes(prevValue => {
            return [...prevValue , newNote];
        })
    }

    const deleteNotes = (id) => {
        
        setNotes(prevValue => {
            return [...prevValue.filter((note, index) => 
            index !== id)];
        })
    }

  return (
    <div>
        <Count 
            count={notes.length === 0 ? "Empty" : 
            `Showing ${notes.length} Notes in Database`}
        />
        <CreateArea onAdd={addNote} />
        {notes.map((note, index) => (
            <Note 
                key={index} 
                id={index}
                title={note.title}
                content={note.content}
                onDelete={deleteNotes}
            />
        ))}
    </div>
  )
}

export default Body
