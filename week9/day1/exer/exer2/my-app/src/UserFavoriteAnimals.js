import React, { Component } from 'react';

class UserFavoriteAnimals extends Component {
    render() {
        return (
            <div>
                <h1>UserFavoriteAnimals</h1>
                <ul>
                    {this.props.animals.map((animal, index) => <li key={index}>{animal}</li>)}
                </ul>
            </div>
        );
    }
}

export default UserFavoriteAnimals