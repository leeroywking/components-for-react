import React, {useEffect, useState} from 'react';


export default () => {
  const [suggestions, setSuggestions] = useState([]);
  
  const handleSuggestions = async (event) => {
    const URL = `https://oapi.herokuapp.com/autocomplete`
    const limit = 20
    const wordArr = event.target.value.split(' ')
    const partial = wordArr[wordArr.length -1]
    const response = await fetch(`${URL}/${partial}/${limit}`);
    const responseObj = await response.json();
    setSuggestions(responseObj.wordList)
  }
  return (
    <form>
      <ul>
        {(suggestions.map(suggestion => (
          <li>{suggestion}</li>
        )))}
      </ul>
      <label>
        Name:
    <input type="text" name="name" onChange={handleSuggestions}/>
      </label>
      <input type="submit" value="Submit" />
      
    </form>
  )
}