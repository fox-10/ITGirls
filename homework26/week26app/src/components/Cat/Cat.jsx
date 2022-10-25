import React from 'react';
import './Cat.css'

class Cat extends React.Component {
    render() {
        const { name, src, description } = this.props;
        return (
            <div className="card" >
                <div className="card-body">
                    <img src={src} alt="Базовые туфли" />
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <span className="card-price">$23.90</span>
                    <button className="card-add">Заказать</button>
                </div>
            </div>
        );
    }
}



export default Cat;