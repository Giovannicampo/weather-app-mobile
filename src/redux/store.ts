import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import WeatherReducer from '../Weather/slice';
import StateReducer from '../State/slice';

export const store = configureStore({
    reducer: {
        weather: WeatherReducer,
        state: StateReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

