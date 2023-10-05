import React, { useRef, useState } from 'react'
import { IoIosAdd } from 'react-icons/io'

function CreateArea({ onAdd }) {

    const titleRef = useRef();
    const contentRef = useRef();
    const formRef = useRef();

    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const handleChange = (e) => {
      const {name, value} = e.target
      setNote(preValue => {
        return {
            ...preValue,
            [name]: value,
        }
      })
    }

    const handleExpanded = () => {
        setExpanded(true);  
    }

    const submitButton = (event) => {
        if(note.title === "" && note.content === ""){
            console.log("nothing")
        }else{
            onAdd(note);
        }
        setNote({
            title: "",
            content: "",
        })
        event.preventDefault();
    }

    window.addEventListener('click' , (e) => {
        if(e.target !== titleRef.current && e.target !== contentRef.current && e.target !== formRef.current){
            setExpanded(false)
            //console.log('clicked')
        }
    })


  return (
    <div>
        <div 
            ref={formRef}
        >
            
                <div
                    className='form'
                    ref={formRef}
                >
                    <div>
                        {isExpanded && (
                        <div className='input-div'>
                            <input 
                                className='input'
                                value={note.title}
                                ref={titleRef}
                                id='titleInput'
                                type='text'
                                placeholder='Title' 
                                name='title' 
                                onChange={handleChange}
                            />
                        </div>
                        )}
                        <div 
                            className='text-area-div'
                            ref={formRef}
                        >
                            <textarea
                                className={isExpanded ? 'text-area-active' : 'textarea'}
                                value={note.content}
                                ref={contentRef}
                                id='contentInput'
                                onClick={handleExpanded}
                                name='content'
                                placeholder='Take a note...'
                                onChange={handleChange}
                                rows={isExpanded ? 2 : 1}
                            >
                            </textarea>
                        </div>
                        <button 
                            onClick={submitButton}
                            className='button'
                        >
                            <IoIosAdd size={35}/>
                        </button>
                    </div>
                </div>
            
            
        </div>
    </div>
  )
}

export default CreateArea
