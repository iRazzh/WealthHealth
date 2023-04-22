import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
    // A string name for this slice of state. Generated action type constants will use this as a prefix.
    name: "employees",
    // The initial state value for this slice of state.
    initialState: { allEmployees: [] },
    // An object containing Redux "case reducer" functions (functions intended to handle a specific action type, equivalent to a single case statement in a switch).
    reducers: {
        addEmployee: (state, { payload }) => {
            state.allEmployees.push(payload);
        }
    },
});

export const { addEmployee } = employeesSlice.actions;
export const employeesReducer = employeesSlice.reducer;