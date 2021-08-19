import { combineReducers, createStore } from "redux";
import { todoReducer } from "../features/todo/todoSlice";
import { quoteReducer } from "../features/randomQuote/randomQuoteSlice";

export const store = createStore(combineReducers({
    todo: todoReducer,
    randomQuote: quoteReducer
}));