import { useState, useEffect } from "react"
import { apiURL } from "../../api/api"
export const B2 = () => {
    useEffect(() => {
        fetch(`${apiURL}/comments`)
        .then(response => response.json())
        .then(json => console.log(json))
    }, [])
    return (
        <div className="B2">
   
        </div>
    )
}