import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
    // A string name for this slice of state. Generated action type constants will use this as a prefix.
    name: "employees",
    // The initial state value for this slice of state | allEmployees is an array. 
    initialState: { allEmployees: [] },
    // An object containing Redux "case reducer" functions (functions intended to handle a specific action type, equivalent to a single case statement in a switch).
    // addEmployee will add a new employee by pushing, thanks to the "payload", in the allEmployees array
    // Each time an employee is added, their "payload" will be pushed to the AllEmployees array.
    reducers: {
        // Payload hold the actual data in a Redux action object.
        addEmployee: (state, { payload }) => {
            state.allEmployees.push(payload);
        }
    },
});

export const { addEmployee } = employeesSlice.actions;
export const employeesReducer = employeesSlice.reducer;