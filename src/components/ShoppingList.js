import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../actions/listActions';

const ShoppingList = ({ items }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - {item.quantity}
          <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
          {/* Add Edit Functionality */}
        </li>
      ))}
    </ul>
  );
};

export default ShoppingList;
