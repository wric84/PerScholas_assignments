import React, {useState, useEffect} from 'react'
import axios from 'axios'

//deconstructing language
const Convert=({language, text}) =>{
    const [results, setResults] = useState('')
    const [debouncedText, setDebouncedText] = useState(text)

    //runs everytime text changes, debounces the search
    useEffect(() =>{
        const timerId = setTimeout(()=>{
            setDebouncedText(text)
        },500)
        return ()=>{
            clearTimeout(timerId)
        }
    },[text])

    //runs whenever language or debouncedText updates
    useEffect(() =>{
        const translate = async()=>{
            const translation = await axios.post(
                "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: process.env.REACT_APP_API_KEY,
          },
        }
    )
    setResults(translation.data.data.translations[0].translatedText)
    }
        translate()
    }, [language, debouncedText])

    return(
        <div className='output'>
            <p className='fixTheBox'>{results}</p>
        </div>
    )
}

export default Convert