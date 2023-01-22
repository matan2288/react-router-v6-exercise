import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export function NotFound() {
    const navigate = useNavigate();

useEffect(()=>{
setTimeout(()=>{
    navigate("/") // if we pass -1 it will go one page back
}, 1000)
})

    return <h1>NotFound</h1>
}