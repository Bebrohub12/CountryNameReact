
import { useLayoutEffect, useState } from 'react'




function ContryState() {

  const contries = [
    {
      country: "india",
      state: ["raj", "mp", "up"]
    },
    {
      country: "USA",
      state: ["calofoniya", "Texas", "Florida"]
    },
    {
      country: "England",
      state: ["Manchester", "BAth", "Londan"]
    }
  ]



  return (
    <>
        <h1>Country Name List:</h1>

        <ul>
          {contries.map((cont, ind) => (

            <li key={ind}>
              Country: {cont.country}
            <ul>
              {cont.state.map((state, stateIndx) => (
                <li key={stateIndx}>
                  State:{state}

                </li>

              ))}

            </ul>   
           </li>

          ) )}</ul>
    </>
  )
}


export default ContryState




