import './Searchbar.css';
import { useState } from "react";



function Searchbar() {

const [start, setStart] = useState("");
const [end, setEnd] = useState("");
const [message, setMessage] = useState("");


let handleSubmit = async (e) => {
  e.preventDefault();
  try {
    let res = await fetch('http://127.0.0.1:5000/testing', {
      method: "POST", 
      body: JSON.stringify({
        start: start,
        end: end,
      }),
    });
    let resJson = await res.json();
    if (res.status === 200) {
      setStart("");
      setEnd("");
      setMessage("Details accesed");
    } else {
      setMessage("Some error occured");
    }
  } catch (err) {
    console.log(err);
  }
};

  return (

  
    <div className="Searchbar">
      
    <form 
      className='search'
      onSubmit={handleSubmit}
    >
    
        <input 
        type="text" 
        value={start}
        onChange={(e) => setStart(e.target.value)}
        placeholder="Where do you want to start?" 
        />       
        <input 
        type="text" 
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        placeholder="Where do you want to go next?" 
        />       
      
      <button className='button-submit' variant="primary" type="submit">
        Submit
      </button>

      <div className="message">{message ? <p>{message}</p> : null}</div>
    </form>

    </div>
  );
}

export default Searchbar;
