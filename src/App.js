import logo from './logo.svg';
import './App.css';

import { list } from './data';
import { useState } from 'react';
import { MovieList } from './components/MovieList';
import FilterTitRat from './components/FilterTitRat';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import InfoMovie from './components/InfoMovie';

function App() {
  
const [data, setData] = useState(list)

const [titleFilter, setTitleFilter] = useState("")
const [rateFilter, setRateFilter] = useState(0)

//add movie
const AddMovie=(x)=>{
setData([...data, x])
// setData(data.push(x))
}
//filterTitle
const handleTitleFilter=(x)=>{
  setTitleFilter(x)
}

//filterTitle
const handleRateFilter=(x)=>{
  setRateFilter(x)
}


  return (
    
    <div className="App">

      <Router>
        <Navbar></Navbar>
        <Routes>
        <Route path="/" element={     
        <div>
          <FilterTitRat titleFilter={titleFilter} rateFilter={rateFilter}  handleTitleFilter={handleTitleFilter} handleRateFilter={handleRateFilter}/>
          <MovieList  list={data.filter(el=>el.title.toLocaleLowerCase().includes(titleFilter.toLocaleLowerCase())&&el.rating>=rateFilter)} addmovie={AddMovie}/>
        </div> 
}/>
          <Route path="/info/:id" element={<InfoMovie   list={data.filter(el=>el.title.toLocaleLowerCase().includes(titleFilter.toLocaleLowerCase())&&el.rating>=rateFilter)}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
