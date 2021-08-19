import React , { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectQuote, getQuote } from './randomQuoteSlice';

export const RandomQuote = () => {
    const newQuote = useSelector(selectQuote);
    const [number, setNumber] = useState(null);
    const dispatch = useDispatch();

    const randomNum = () => {
        return Math.floor(Math.random() * 102);
    }

    async function loadQuote() {
        const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        const result = await response.json();
        let random = randomNum();;
        if(random === number) {
            random = randomNum();
        }
        setNumber(random);
        const quote = result.quotes[random];
        dispatch(getQuote(quote));
    }

    useEffect(() => {
        loadQuote();
    }, []);

    const handleGetQuote = () => {
        loadQuote();
    }

    return (
        <section className="quote-container">
            <div className="quote-content">
                <h1><span>&quot;</span>{newQuote.quote}</h1>
            </div>
            <p className="quote-author"><span>-</span>{newQuote.author}</p>
            <button className="quote-btn" onClick={handleGetQuote}>Get Quote</button>
        </section>
    )
}