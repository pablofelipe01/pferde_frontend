import React, { useState } from 'react';
import data from './data.json';
import { Switch, Route, Redirect } from 'react-router-dom';
import CarouselContainer from './CarouselContainer';
import Navigation from './Navigation';
import About from './About';
import Pferde from './Pferde';
import Register from './Register'
import Video from './Video';
// import SaleHorses from './SaleHorses';

function App() {
  const [searchOptions, setSearchOptions] = useState({
    
    url: 'https://nameless-anchorage-51402.herokuapp.com/pferde/',
    numberOfResults: 50,
  });
  // const [horsesImages, setHorsesImages] = useState(horses)

 


  return (

 
    <>
      <Navigation />
      <main>
        <Switch>
					<Route
						exact
						path='/home'
						render={() => <CarouselContainer data={data} />}
					/>

          <Route 
            exact 
            path="/about" 
            render={() => <About/>}
          />

          <Route 
            exact 
            path="/pferde" 
            render={() => <Pferde/>}
          />

          <Route 
            exact 
            path="/video" 
            render={() => <Video/>}
          />

          {/* <Route 
            exact 
            path="/sale" 
            render={() => <SaleHorses/>}
          /> */}

          

          <div className='App'>
            <Register />
          </div>

         
          


					<Redirect path='*' to='/home' />
				</Switch>
      </main>
    </>
    

 
  );
}

export default App;