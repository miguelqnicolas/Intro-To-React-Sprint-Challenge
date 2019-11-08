import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Cards from './Cards';

const App = () => {
	const [people, setPeople] = useState([]);
	
	useEffect(() => {
		axios.get('https://swapi.co/api/people/')
			.then(response => {
				setPeople(response.data.results);	
			})
			.catch(error => {
				console.log('There was an error', error);
			})
	}, []);

	// columns wouldnt work right?
	// cant use starwars logo for some reason
	// if i were to use pictures...
	// proper way to override?

	return (
		<div className='App'>
			
			<header className='Header'>
				<h1>Star Wars Characters</h1>
			</header>
			
			<div className='Grid'>
				{people.map((person, index) => (
					<Cards key={index} person={person}/>
				))}
			</div>
		
		</div>
	);
}

export default App;
