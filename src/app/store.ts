import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filtreSlice from '../features/charactersFiltred/filtreSlice';
import favouritesSlice from '../features/favourite/favouritesSlice';

export const store = configureStore({
  reducer: {
    characters: filtreSlice,
    favourite: favouritesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
