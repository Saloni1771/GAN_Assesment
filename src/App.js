import React, { Component } from 'react';
import { connect } from "react-redux";
import CardList from './CardList.js';
import { robots } from './robots';
import SearchBox from './SearchBox.js';
import './App.css';
import Scroll from "./Scroll.js";

import { setSearchField } from './action';

const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		onSearchChanges:(event) => dispatch(setSearchField(event.target.value))	
	}
}

class App extends Component {
	constructor(){
		super()
		this.state={
			robots: []	
		}
	}

	componentDidMount(){
		return this.setState({robots:robots})

	}

	// onSearchChanges = (event) => {
	// 	this.setState({searchfields: event.target.value})

		
	// }
	render(){
		const { robots } = this.state;
		const { searchField, onSearchChanges } = this.props;
		const filterrobots = robots.filter(robots => {
			return (robots.name.toLowerCase().includes(searchField.toLowerCase()));
		})
		return !robots.length?
		<h1>Loading</h1> :
		(
		
			<div className='tc'>
				<h1 >New Products</h1>
				<SearchBox searchchange={onSearchChanges}/>
				<Scroll>
					<CardList robots={filterrobots} />
				</Scroll>
			</div>
		);		
		
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(App);