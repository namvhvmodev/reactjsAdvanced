import produce from "immer";

// Action Creator
export const getQuote = (quote) => {
    return {
        type: 'randomQuote/getQuote',
        payload: quote,
    }
}

const initialValue = {};
export const quoteReducer = produce((draft, action) => {
    switch (action.type) {
        case 'randomQuote/getQuote': {
            draft.quote = action.payload.quote;
            draft.author = action.payload.author;
            break;
        }
        default:
            return initialValue;
    }
})

// Selector function
export const selectQuote = state => state.randomQuote;