import React, { Component } from 'react';
import styles from "./Card.module.css"

class Card extends Component {
    render() {
        const {image , name , price} = this.props
        return (
            <div className={styles.eachCard}>
                <img src={image} alt='cardimg'/>
                <h1>{name}</h1>
                <p>{price}</p>
            </div>
        );
    }
}

export default Card;