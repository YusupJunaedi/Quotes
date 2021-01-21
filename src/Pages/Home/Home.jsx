import React, { useState, useEffect } from 'react'
import './Home.css'
import { useSelector, useDispatch } from 'react-redux';
import { getQuoteCreator, addFavoriteCreator, addMyQuoteCreator } from '../../Redux/Actions/actions';

function Home() {

    const quoteAPI = useSelector(state => state.quote.quoteAPI)
    const quoteFavorite = useSelector(state => state.quote.favorite)
    const myQuote = useSelector(state => state.quote.myQuote)

    const [quote, setQuote] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getQuoteCreator())
    }, [])

    const getQuote = () => {
        dispatch(getQuoteCreator())
    }

    const addFavorite = () => {
        dispatch(addFavoriteCreator(quoteAPI))
    }

    const addMyQuote = (e) => {
        e.preventDefault()

        if (quote !== '') {
            dispatch(addMyQuoteCreator(quote))
        }
        setQuote('')
    }

    return (
        <div className="container">
            <div className="siteURL">
                <a href="">API SITE</a>
            </div>
            <div className="quote">
                <img src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg" alt="img-quote" />
                <h1>Kanye-West Quote</h1>
                <p className="text-quote">{quoteAPI}</p>
                <div className="btn-quote">
                    <button onClick={getQuote}>Get Quote</button>
                    <button onClick={addFavorite}>Add Favorite</button>
                </div>
                <div className="favorite-quote">
                    {quoteFavorite.length ? quoteFavorite.map(value => {
                        return <p>{value}</p>
                    }) : null}

                </div>

                <div className="form-quote">
                    <div className="hrrr">
                        <hr />
                    </div>
                    <h2>My Quotes</h2>
                    <form onSubmit={addMyQuote}>
                        <input type="text" value={quote} onChange={event => setQuote(event.target.value)} />
                        <button type='submit'>Submit</button>
                    </form>
                    <div className="my-quote">
                        {myQuote.length ? myQuote.map(value => {
                            return <p>{value}</p>
                        }) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
