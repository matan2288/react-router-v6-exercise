import { useState } from "react"
import { Outlet, Link, useSearchParams } from "react-router-dom"


export function BookLayout()  {

    const [searchParams, setSearchParams] = useSearchParams({n: 3}) //keeps the latest paramas after refresh
    const number = searchParams.get("n")

    return(
        <>
        <Link to="/books/1">Book1</Link>  
        <br />
        <Link to="/books/2">Book2</Link>
        <br />
        <Link to={`/books/${number}`}>Book {number}</Link>
        <br />
        <Link to="/books/new">New Book</Link>
        <Outlet context={{hello: "World"}}/>    {/* //Outlet renders the current component and you can pass down props with it via context */}
        <input
        type="number"
        value={number}
        onChange={e => setSearchParams({n: e.target.value})}
        />
        </>
    )
}

