import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";
import { decrementadorAction, incrementadorAction } from "./contador/contador.actions";
import { contadorReducer } from "./contador/contador.reducer";

const store: Store = configureStore({ reducer: contadorReducer }) 

store.subscribe(() => {
    console.log('Subs:', store.getState());
});

store.dispatch(incrementadorAction);
store.dispatch(decrementadorAction);
