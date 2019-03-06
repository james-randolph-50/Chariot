import React from 'react';

class LikeButton extends React.Component {

    render() {

      
        return (
            <div>
                <button onClick={like()} className="like">Like</button>
                <p>Likes: <span id="likes">0</span></p>
            </div>
        )
    }
}

export default (LikeButton);