import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

import Post from './components/post/post';

class App extends Component {
	state = {
		loadedPost: null,
		clickedPersons: [],
	};

	componentDidMount() {
		this.postData();
	}

	postData = () => {
		axios
			.get(
				'https://thingproxy.freeboard.io/fetch/https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json',
			)
			.then((response) => {
				this.setState({
					loadedPost: response.data.sort((a, b) =>
						a.last_name.localeCompare(b.last_name),
					),
				});
			});
	};

	clickedCheckbox = (id) => {
		if (this.state.clickedPersons.includes(id)) {
			this.state.clickedPersons.splice(
				this.state.clickedPersons.indexOf(id),
				1,
			);
		} else {
			this.state.clickedPersons.push(id);
		}
		console.log(this.state.clickedPersons);
	}

	render() {
		let filteredArr = this.state.loadedPost
		let post = <p style={{ textAlign: 'center' }}>Loading!</p>;

		
		if (this.state.loadedPost) {
			post = (
				<div className='App'>
					<header className='App__headers'>Contacts</header>
					<input
						type='text'
						className='App__filter'
						onInput={(input) => {
							console.log(input.target.value);
							filteredArr.filter(element => element.last_name.includes(input.target.value) ? element : null)
						}}
					/>
					{filteredArr.map((post) => (
						<Post
							key={post.id}
							avatar={post.avatar}
							firstName={post.first_name}
							lastName={post.last_name}
							clicked={() => this.clickedCheckbox(post.id)}
						/>
					))}
				</div>
			);
		}
		return post;
	}
}

export default App;
