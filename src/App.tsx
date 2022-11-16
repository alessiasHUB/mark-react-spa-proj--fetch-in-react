import { useState } from "react";
import "./style.css"

interface Dog {
  message: string;
  status: string;
}

function App() {
  const [dog, setDog] = useState<Dog>();
  const [prev, setPrev] = useState<Dog[]>([])

  const handleGetDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonBody: Dog = await response.json();
    setDog(jsonBody)
    if (dog !== undefined){
      setPrev(current => [dog, ...current]);
    }
  };

  const PreviousDogs = prev.map((dog) => {
    return <img src={dog.message} alt="" className="prev-image"/>
  })

  if (dog) {
    return (
      <div>
        <h1>Dog app</h1>
        <button 
          onClick={handleGetDog}
        >Get another dog</button>
        <hr />
        <img src={dog.message} alt={dog.status} className="dog-image"/>
        <hr />
        <div>
          <h3>Previous dogs</h3>
          {PreviousDogs}
        </div>
      </div>

    );
  } else {
    return (
      <div>
        <h1>Dog app</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          dog from an API!
        </p>
        <button onClick={handleGetDog}>Get dog</button>
      </div>
    );
  }
}

export default App;
