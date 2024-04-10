import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice';
import Logger from "./middleware/logger";
// import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    devTools: false,
    // middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger)
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(Logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

