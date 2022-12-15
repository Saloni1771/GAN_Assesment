import React from 'react';
import Socialids from './idsicon';
import './App.css';

const Card = (props) => {
	const {id, name, price, desc,imageurl} = props;
	return(

		<div className="bg-washed-yellow dib grow ma2 shadow-5 tc">
			<img alt='robot' className='imagesize' src={`${imageurl}`}/>
			<div>
				<h2>{name}</h2>
				<p className="price">{price}</p>
			</div>
			<button className='buttonstyle'> 
				Add to cart
			</button>
			{/* <Socialids fbid={fbid} instaid={instaid} twitid={twitid} gitid={gitid} /> */}
			
		</div>
	);
}
export default Card;