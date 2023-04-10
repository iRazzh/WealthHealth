import { configureStore } from "@reduxjs/toolkit";
import { employeesReducer } from './reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, employeesReducer)

export const store = configureStore({
    reducer: {
      employees: persistedReducer,
    },
    middleware: [thunk]
});

export const persistor = persistStore(store)