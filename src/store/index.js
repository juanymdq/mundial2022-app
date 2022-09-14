import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../reducers'

const store = configureStore({ 
    reducer: appReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false        
    })
});

store.subscribe(() => console.log(store));

export default store;