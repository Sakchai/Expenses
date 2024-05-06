import { createSlice } from '@reduxjs/toolkit';

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {
        expenses: [],
    },
    reducers: {
        setExpenses: (state, action) => {
            state.expenses = [...action.payload];
        },
        newExpense: (state, action) => {
            state.expenses.unshift(action.payload);
        },
        editExpense: (state, action) => {
            const index = state.expenses.findIndex((expense) => expense.id === action.payload.id);
            if (index !== -1) {
                state.expenses[index] = action.payload;
            }
        },
        deleteExpense: (state, action) => {
            state.expenses = state.expenses.filter((expense) => expense.id !== action.payload.id);
        },
    },
});

export const { setExpenses, newExpense, editExpense, deleteExpense } = expensesSlice.actions;

export default expensesSlice.reducer;