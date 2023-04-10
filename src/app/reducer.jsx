import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
    // A string name for this slice of state. Generated action type constants will use this as a prefix.
    name: "employees",
    // The initial state value for this slice of state.
    initialState: {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        department: "",
    },
    // An object containing Redux "case reducer" functions (functions intended to handle a specific action type, equivalent to a single case statement in a switch).
    reducers: {
        itsFirstname: (state, action) => {
            state.firstName = action.payload;
        },
        itsLastname: (state, action) => {
            state.lastName = action.payload;
        },
        itsDateOfBirth: (state, action) => {
            state.dateOfBirth = action.payload;
        },
        itsStartDate: (state, action) => {
            state.startDate = action.payload;
        },
        itsStreet: (state, action) => {
            state.street = action.payload;
        },
        itsCity: (state, action) => {
            state.city = action.payload;
        },
        itsState: (state, action) => {
            state.state = action.payload;
        },
        itsZip: (state, action) => {
            state.zip = action.payload;
        },
        itsDepartment: (state, action) => {
            state.department = action.payload;
        },
    },
});

export const { itsFirstname, itsLastname, itsDateOfBirth, itsStartDate, itsStreet, itsCity, itsState, itsZip, itsDepartment } = employeesSlice.actions;
export const employeesReducer = employeesSlice.reducer;