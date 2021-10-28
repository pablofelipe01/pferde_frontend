import React, { useState } from 'react';
import data from './data.json';
import horses from './horses.json'
import { Switch, Route, Redirect } from 'react-router-dom';
import CarouselContainer from './CarouselContainer';
import Navigation from './Navigation';
import About from './About';
import StudBook from './StudBook';
import RegisterForm from './RegisterForm';

function App() {
  const [searchOptions, setSearchOptions] = useState({
    
    url: 'https://nameless-anchorage-51402.herokuapp.com/pferde/',
    numberOfResults: 50,
  });
  const [horsesImages, setHorsesImages] = useState(horses)

 


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
            render={About} 
          />

          <Route
            exact 
            path="/stud_book" 
            render ={() => <StudBook horses={horses}/>}

          />  

          <Route 
            exact 
            path="/register" 
            render={RegisterForm} 
          />


					<Redirect path='*' to='/home' />
				</Switch>
      </main>
    </>
    

 
  );
}

export default App;