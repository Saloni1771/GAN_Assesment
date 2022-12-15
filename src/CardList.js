import React from 'react';
import Card from './Card.js';


const CardList = ({ robots }) => {

	return (
		<div>{
	   		robots.map((user,i) => {
				return (
					<Card 
					key={i} 
					id={robots[i].id} 
					name={robots[i].name} 
					price={robots[i].price}
					desc={robots[i].desc}
					imageurl={robots[i].imageurl}
					/>);
			})
	   	}
		</div>
	);
}

export default CardList;