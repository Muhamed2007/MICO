import { useState } from "react"
import { E3 } from "./E3"
import { NameContext } from "./context"
export const A3 = () => {
    const [name, setName] = useState('React');
    return (
        <NameContext.Provider value={name}>
            <h1>Component A3</h1>
            Hello {name}
            <E3/>
        </NameContext.Provider>
    )
}