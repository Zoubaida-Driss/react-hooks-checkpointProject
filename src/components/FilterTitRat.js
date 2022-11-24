import React from 'react'
import Stars from './Stars'

const FilterTitRat = ({titleFilter,handleTitleFilter ,rateFilter,handleRateFilter}) => {
  return (
    <div>
        <input type="text"  value={titleFilter} onChange={e=>handleTitleFilter(e.target.value)} />
        <Stars rating={rateFilter} handleRateFilter={handleRateFilter} />
    </div>
  )
}

export default FilterTitRat