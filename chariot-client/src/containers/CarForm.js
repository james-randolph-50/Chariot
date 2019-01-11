import React, { Component } from 'react';
import { connect } from 'react/redux';

class CarForm extends Component {

    handleOnChange = event => {
        const [ name, value } = event.target;]
    }
    
    render() {
        const { name, price, img_url, year } = this.props.carFormData;
        return (
            <div>
                Add A Car
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        onChange={this.handleOnChange}
                        name="name"
                        value={name}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        onChange={this.handleOnChange}
                        name="price"
                        value={price}
                    />
                </div>
                <div>
                    <label htmlFor="img_url">Image URL:</label>
                    <input
                        type="text"
                        onChange={this.handleOnChange}
                        name="img_url"
                        value={img_url}
                    />
                </div>
                <div>
                    <label htmlFor="year">Year:</label>
                    <input
                        type="number"
                        onChange={this.handleOnChange}
                        name="year"
                        value={year}
                    />
                </div>
            </form>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        carFormData: state.carFormData
    }
}

export default connect(mapStateToProps)(CarForm);