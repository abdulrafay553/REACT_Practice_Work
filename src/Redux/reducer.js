export const myReducer = (quantity = 0, action) => {
    if (action.type === "Add") {
        return quantity + 1
    } else if (action.type === "Less") {
        return quantity - 1
    } else {
        return quantity
    }
}

export default myReducer

// // reducer.js
// export const myReducer = (state, action) => {
//     // your reducer logic here
// };
