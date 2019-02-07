import React from 'react';

class LikeButton extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.likeCar} classname="like">Likes {this.props.car.likes}</button>
            </div>
        )
    }
}

export default (LikeButton);