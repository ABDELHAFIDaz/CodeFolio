import { useState } from "react";

function Test() {
    let msg = "Welcome to these cities"
    let cities = ['tanger', 'casa', 'rabat', 'kech', 'agadir', 'zazate']
    // cities = []

    let [target, setTarget] = useState(-1);
    let handlClick = (event) => count++;

    return (
        // for the frugment, simply to group multiple element since we can only return one
        <>
            <h1 className="text-white">{msg}</h1>
            {/* this one is like a ternary or it is just a diff variation of it */}
            {cities.length === 0 && <p>There are no cities at the moment</p>}
            <ul>
                {cities.map((city, index) =>
                    <li
                        key={city}
                        onClick={() => setTarget(index)}
                        className={index === target ? "text-gray-600" : "text-white"}
                    >
                        {city} with the target: {index}
                    </li>
                )}
            </ul>
        </>
    )

}

export default Test;