import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem, updateItem } from '../actions/listActions'; // Adjust the path if necessary
import Card from '../components/Card'; // Adjust the path as necessary
import { FaSearch, FaPlus } from 'react-icons/fa'; // Import icons
import '../assets/ShoppingListsPage.css';
const ShoppingListsPage = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.lists.items); // Adjust this selector as per your state shape
    const [newItem, setNewItem] = useState({ id: null, name: '', quantity: 1 });
    const [searchQuery, setSearchQuery] = useState('');

    const handleAddItem = (e) => {
        e.preventDefault();
        if (newItem.name.trim()) {
            if (newItem.id) {
                // Update existing item
                dispatch(updateItem(newItem.id, newItem));
            } else {
                // Add new item
                dispatch(addItem({ ...newItem, id: Date.now() })); // Ensure unique ID
            }
            setNewItem({ id: null, name: '', quantity: 1 }); // Reset input fields
        }
    };

    const handleEditItem = (item) => {
        setNewItem(item);
    };

    const handleDeleteItem = (id) => {
        dispatch(deleteItem(id));
    };

    // Filter items based on the search query
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="shopping-lists-page">
            <h1>Your Shopping Lists</h1>

            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search items"
                />
                <FaSearch className="search-icon" />
            </div>

            {/* Add Item Form */}
            <form onSubmit={handleAddItem} className="add-item-form">
                <input
                    type="text"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    placeholder="Item name"
                    required
                />
                <input
                    type="number"
                    value={newItem.quantity}
                    onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
                    placeholder="Quantity"
                    required
                />
                <button type="submit">
                    <FaPlus /> {/* Add icon */}
                </button>
            </form>

            {/* Displaying filtered items */}
            <div className="shopping-lists">
                {filteredItems.map((item) => (
                    <Card key={item.id} item={item} onEdit={() => handleEditItem(item)} onDelete={() => handleDeleteItem(item.id)} />
                ))}
            </div>
        </div>
    );
};

export default ShoppingListsPage;



