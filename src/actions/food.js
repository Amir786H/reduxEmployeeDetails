import { ADD_FOOD, DELETE_FOOD } from './types';

export const addFood = (food) => (
    {
        type: ADD_FOOD,
        data: food
    }
);

// export const addEmp = (empName) => (
//     {
//         type: ADD_FOOD,
//         data: empName
//     }
// );

export const deleteFood = (key) => (
    {
        type: DELETE_FOOD,
        key: key
    }
);