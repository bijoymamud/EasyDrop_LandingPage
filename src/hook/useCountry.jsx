import React, { useEffect, useState } from 'react'

function useCountry() {
  
    const [countries, SetCountries] = useState([]);

    useEffect( ()=>{
        fetch("../../public/country.json")
        .then(res => res.json())
      .then(data => SetCountries(data))
    } ,[])

    return [countries]
}

export default useCountry
