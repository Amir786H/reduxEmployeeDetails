import { ADD_FOOD, DELETE_FOOD } from '../actions/types';
import { Component } from 'react';

const initialState = {
    foodList: []
}


const foodReducer = (state = initialState, action) => {

    console.log('Action-------' + JSON.stringify(action));

    switch (action.type) {
        case ADD_FOOD:
            return {
                ...state,
                foodList: state.foodList.concat({
                    key: Math.random(),
                    name: action.data.food,
                    empName: action.data.empName,
                    empEmail: action.data.empEmail,
                    empPhone: action.data.empPhone,
                    empLocation: action.data.currentLatitude + '  ' + action.data.currentLongitude
                })
            };

        case DELETE_FOOD:
            return {
                ...state,
                foodList: state.foodList.filter((item) =>
                    item.key !== action.key)
            }
        default:
            return state;
    }
}

export default foodReducer;;