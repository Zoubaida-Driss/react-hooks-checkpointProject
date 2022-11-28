import React, { useState } from 'react'
import Modal from 'react-modal';
import Stars from './Stars';

Modal.setAppElement('#root');
const AddMovie = ({addmovie}) => {

const [title, setTitle] = useState("")
const [director, setDirector] = useState("")
const [year, setYear] = useState("")
const [type, setType] = useState("")
const [rating, setRating] = useState(0)
const [url, setUrl] = useState("")
const handleSubmit=()=>{
  //info contient les information d'ajout
  const info = {title,director,year,type,rating,url}
  addmovie(info)
  closeModal()
}


    const customStyles = {
        content: {
          width:"30%",
          backgroundColor: '#8a919f',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      };
      
      const [modalIsOpen, setIsOpen] = React.useState(false);
      function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
        setIsOpen(false);
      }
      
  return (
    <div><button onClick={openModal}>Add Movie</button>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      
      <form  onSubmit={handleSubmit} class="row">
      <h5>Add movie form</h5>
      <label>Title</label>
      {/* value : contient getter pour afficher qu'est ce qu'on écrit */}
      {/* Onchange: pour chaque changement/event on met dans set (e.target.value) */}
      <input  type="text"  value={title} onChange={e=>setTitle(e.target.value)}/>
      <label>Director</label>
      <input type="text"  value={director} onChange={e=>setDirector(e.target.value)}/>
      <label>Type</label>
      <input type="text"  value={type} onChange={e=>setType(e.target.value)}/>
      <label>Image</label>
      <input type="text"  value={url} onChange={e=>setUrl(e.target.value)}/>
      <label>Date</label>
      <input type="date" value={year} onChange={e=>setYear(e.target.value)}/>
      <Stars />
      <button type="submit">Add</button>
      <button onClick={closeModal}>close</button>
      </form>
      
    </Modal></div>
  )
}

export default AddMovie