import React from 'react';

const Card = ({ item, onEdit, onDelete }) => {
    return (
        <div className="card">
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <div className="card-actions">
                <button onClick={onEdit}>Edit</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Card;
