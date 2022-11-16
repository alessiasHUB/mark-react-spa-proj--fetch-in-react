import { useState } from "react";
import "./style.css"

interface Dog {
  // id: number;
  message: string;
  status: string;
}

function App() {
  const [dog, setDog] = useState<Dog>();

  // const handleGetDog = async () => {
  //   const response = await fetch("https://dog.ceo/api/breeds/image/random");
  //   const jsonBody: Dog = await response.json();
  //   setDog(jsonBody);
  // };

  const handleGetDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((jsonBody: Dog) => setDog(jsonBody));
  };

  if (dog) {
    return (
      <div>
        <h1>Dog app</h1>
        <button onClick={handleGetDog}>Get another dog</button>
        <hr />
        <img src={dog.message} alt="a dog" className="dog-image"/>
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
