import React from 'react';
import './post.css';

class Post extends React.Component {
	render() {
		let avatarHtml;

		if (this.props.avatar !== null) {
			avatarHtml = (
				<div className='Post__avatar'>
					<img src={this.props.avatar} alt='' />
				</div>
			);
		} else {
			avatarHtml = <div className='Post__avatar'>{this.props.firstName[0]}{this.props.lastName[0]}</div>;
		}

		let post = (
			<div className='Post'>
				{avatarHtml}
				<div className='Post__personalData'>
					{this.props.firstName} {this.props.lastName}
				</div>
        <input type="checkbox" onClick={this.props.clicked}/>
			</div>
		);
		return post;
	}
}

export default Post;
