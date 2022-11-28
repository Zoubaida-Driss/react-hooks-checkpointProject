import React from 'react'

const Stars = ({ rating, handleRateFilter }) => {
  const rate = (rating) => {
    var tab = []
    for (let i = 1; i <= 5; i++) {
      // console.log(rating.Stars)
      // console.log(i)
      i > rating?
        //rating on gold
        tab.push(
          <span onClick={() => handleRateFilter(i)} style={{ color: "red", fontSize: "80px", cursor: "pointer" }}>★</span>
        )
      :
        //le reste en noir
        tab.push(<span onClick={() => handleRateFilter(i)} style={{ color: "black", fontSize: "30px", cursor: "pointer" }}>★</span>)
      

    }
    console.log(tab)
    //on retourne le tableau qui contient le rating 
    return tab
  }

  return (
    <div>
      {
        //for the key prb
        React.Children.toArray(rate({ rating }))
      }
    </div>
  )
}
Stars.defaultProps = {
  //pardefaut handleRateFilter ne fait rien quand 
  // on n'a pas besoin de handleRateFilter dans l'ajout
  handleRateFilter: () => { }
}


export default Stars