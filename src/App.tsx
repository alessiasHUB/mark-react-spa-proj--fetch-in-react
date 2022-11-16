import { useState } from "react";
import "./style.css"

interface Dog {
  // id: number
  message: string;
  status: string;
}

function App() {
  const [dog, setDog] = useState<Dog>();

  const previousDogs: Dog[]= []

  const handleGetDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonBody: Dog = await response.json();
    setDog(jsonBody);
    if (dog !== undefined){
      previousDogs.unshift(dog)
    }
  };

  // const handleHistory = () => {
  //   setDog(dog);
  //   if (dog !== undefined){
  //     previousDogs.unshift(dog)
  //     console.log(previousDogs.length)
  //   }
  // }

  // const handleGetDog = () => {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((response) => response.json())
  //     .then((jsonBody: Dog) => setDog(jsonBody));
  // };

  // interface DogMapProps {
  //   dog: Dog;
  // }
  // const DogMap = (props:DogMapProps) => {
  //   return <img src={props.dog.message} alt={props.dog.status} />
  // };
  // const DogList = () => {
  //   return (
  //     <p>
  //       {previousDogs.map((dog) => {
  //         return <DogMap dog={dog} key={dog.id}/>;
  //       })}
  //     </p>
  //   );
  // };

  const PreviousDogs = previousDogs.map((dog) => {
    return <img src={dog.message} alt="" className="prev-image"/>
  })

  if (dog) {
    return (
      <div>
        <h1>Dog app</h1>
        <button onClick={handleGetDog}>Get another dog</button>
        {/* <button onClick={() => {handleGetDog(); handleHistory();}}>Get another dog</button> */}
        <hr />
        <img src={dog.message} alt={dog.status} className="dog-image"/>
        <hr />
        <div>
          <h3>Previous dogs</h3>
          {PreviousDogs}
          {/* <DogList /> */}
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
