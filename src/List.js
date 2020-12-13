import React from 'react';
import Card from './Card.js';
import './List.css';

function List(props) {
    const arrOfCards = props.cards.map((card) => 
        <Card 
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            onDelete={props.onDelete}
        /> 
    );
    return(
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {arrOfCards}
            </div>
            <button 
                type='button' 
                className='List-add-button' 
                onClick={() => props.onAdd(props.id)}
            >
                + Add Random Card
            </button>
        </section>
    );
}

List.defaultProps = {
    onAdd: () => {}
};

export default List;