// src/reducers/listReducer.js
import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../actions/actionTypes'; 

const initialState = {
    items: [],
};

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case UPDATE_ITEM:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ? { ...item, ...action.payload } : item
                ),
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    }
};

export default listReducer;
