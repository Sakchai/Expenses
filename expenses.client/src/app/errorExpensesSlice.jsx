import { createSlice } from '@reduxjs/toolkit';

export const errorExpensesSlice = createSlice({
    name: 'error',
    initialState: {
        expensesError: null,
        newExpenseError: null,
        editExpenseError: null,
        deleteExpenseError: null,
    },
    reducers: {
        setExpensesError: (state, action) => {
            state.expensesError = action.payload;
        },
        setNewExpenseError: (state, action) => {
            state.newExpenseError = action.payload;
        },
        setEditExpenseError: (state, action) => {
            state.editExpenseError = action.payload;
        },
        setDeleteExpenseError: (state, action) => {
            state.deleteExpenseError = action.payload;
        },
    },
});

export const { setExpensesError, setNewExpenseError, setEditExpenseError, setDeleteExpenseError } = errorExpensesSlice.actions;
export default errorExpensesSlice.reducer;