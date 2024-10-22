import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/actions/listActions';

const ItemForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem({ id: Date.now(), name, quantity }));
    setName('');
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item Name"
        required
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
        placeholder="Quantity"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
