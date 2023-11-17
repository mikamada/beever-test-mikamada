"use client";

import Button from "@/components/Button";
import { useSelector, useDispatch } from "react-redux"
import { addFavorite, setQuote, addQuote } from "@/redux/slice/quoteSlice";
import { useRef } from "react";

const Page = () => {
  const quote = useSelector((state: { quotes: { quote: string } }) => state.quotes.quote);
  const favorites = useSelector((state: { quotes: { favorites: string[] } }) => state.quotes.favorites);
  const dispatch = useDispatch();
  const myQuotes = useSelector((state: { quotes: { myQuotes: string[] } }) => state.quotes.myQuotes);
  const myQuoteRef = useRef<HTMLInputElement>(null);

  const getQuotes = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}`)
    const data = await response.json()
    dispatch(setQuote(data.quote))
  }

  const addFavoriteHandler = () => {
    dispatch(addFavorite());
  }

  const addQuoteHandler = () => {
    dispatch(addQuote(myQuoteRef.current?.value!));
  }

  const disable = () => {
    if(quote.length === 0) {
      return true
    }
  }

  return (
    <main className="flex flex-col items-center p-14">
      <h1 className="text-3xl font-bold">Kanye-west Quote</h1>
      <div className="text-center bg-gray-400 p-5 w-fit mt-7 rounded-lg">
        <p>{quote}</p>
        <i>Kanye - west</i>
      </div>
      <div className="flex gap-3 mt-7">
        <Button bgColor="bg-blue-500" onClick={getQuotes}>Get Quote</Button>
        <Button bgColor="bg-amber-400" onClick={addFavoriteHandler} disabled={disable()}>add Favorite</Button>

      </div>
      <div className="flex gap-3 mt-7">
        <input type="text" placeholder="Add Quote" className="outline-black border border-gray-500 py-3 px-5 rounded-full" ref={myQuoteRef} />
        <Button bgColor="bg-green-400" onClick={addQuoteHandler}>add Quote</Button>
      </div>
      <div className="w-full h-fit flex gap-10 justify-around mt-7">
        <div className="w-1/2 pl-5">
          <h2 className="text-2xl text-center">Favorite Quote</h2>
          <ul>
            {
              favorites.map((item, index) => {
                return (
                  <li key={index}> - {item}</li>
                )
              })
            }
          </ul>
        </div>
        <div className="w-1/2 pr-5">
          <h2 className="text-2xl text-center">My Quote</h2>
          <ul>
            {
              myQuotes.map((item, index) => {
                return (
                  <li key={index}> - {item}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Page;