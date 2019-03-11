import React from 'react';

class DeleteButton extends React.Component {
    constructor() {
        super();
        this.state = {
            car: {
              id: ''
            },
          };
    }

    delete(car){
        const data = this.props.data.filter(i => i.id !== car.id)
        this.setState({car: data})
      }

    render() {
        const label = 'Delete';
            return (
                <button className="delete-btn" onClick={this.delete.bind(this)}>{label}</button>
            );
    }
}

export default DeleteButton;