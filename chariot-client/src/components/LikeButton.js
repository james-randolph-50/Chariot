import React from 'react';

class LikeButton extends React.Component {
    constructor() {
        super();
            this.state = {
                liked: false
            };
           // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({
            liked: !this.state.liked
        });
    }

    render() {
        const label = this.state.liked ? 'Unlike' : 'Like'
            return (
                <button className="like-btn" onClick={this.handleClick}>{label}</button>
            );
    }
}

export default LikeButton;