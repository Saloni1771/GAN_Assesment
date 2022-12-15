import React from 'react';

const SearchBox = ({searchchange}) =>{
	return (
		<div className="pa2" style={{'marginTop':"-20px"}}>
		<input className="tc pa3 ba b--green br2 bg-lightest-blue" style={{color:"black"}}
		 type='search'
		 placeholder='search products'
		 onChange={searchchange}
		 />
		</div>
	);
}
export default SearchBox;