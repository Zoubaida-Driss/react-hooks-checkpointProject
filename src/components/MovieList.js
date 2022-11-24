import React from 'react'
import AddMovie from './AddMovie'
import Moviecard from './Moviecard'


export const MovieList = ({list,addmovie}) => {
  
  
  return (
    <div className="movie">
      <AddMovie addmovie={addmovie}/>
      {
        list.map((el,index)=><Moviecard movie={el} key={index}/>)
        
        }</div>
  )
}
