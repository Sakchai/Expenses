import { createSlice } from '@reduxjs/toolkit';

export const statisticsSlice = createSlice({
    name: 'statistics',
    initialState: {
        expenseAmountPerCategory: [],
    },
    reducers: {
        setExpenseAmountPerCategory: (state, action) => {
            state.expenseAmountPerCategory = [...action.payload];
        },
    }
});

export const { setExpenseAmountPerCategory } = statisticsSlice.actions;

export default statisticsSlice.reducer;