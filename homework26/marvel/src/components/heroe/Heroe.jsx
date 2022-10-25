import React from 'react'
import './Heroe.css'

export default class Heroe extends React.Component {
    render() {
        let { name,
            src,
            description,
            feature } = this.props;
        return (
            <div className="container">
                <h2>{name}</h2>
                <img src={src} alt={name + ' image'} />
                <h3>Особые способности:</h3>
                <p>{feature}</p>
                <h3>Подробное описание:</h3>
                <p>{description}</p>
                <h3>Оцените рейтинг супергероя:</h3>
                <select name="" id="" className='select'>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>
            </div>
        );
    }
}

