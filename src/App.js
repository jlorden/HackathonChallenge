import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
    const [meals, setMeals] = useState(3);
    const [happiness, setHappiness] = useState(20);
    const [fullness, setFullness] = useState(20);
    const [energy, setEnergy] = useState(50);
    const [display, setDisplay] = useState('You have found a wild Dojo-Datchi');
    const [image, setImage] = useState("https://images.squarespace-cdn.com/content/5c8d4324fb22a57f65b403f3/1565299212195-MFXQBCB4IVYTNWDI1ACS/loveiswaranime.jpg?content-type=image%2Fjpeg");


    const handlePlay = () => {
        if (energy > 0) {
            setEnergy(energy - 5);
            let y = Math.floor((Math.random() * 100));
            if (y > 25) {
                let x = Math.floor((Math.random() * 5)) + 5;
              setHappiness(happiness + x);
              setImage("https://www.pngitem.com/pimgs/m/50-504544_party-happy-girl-ribbon-happy-anime-girl-png.png");
              setDisplay(`Your Dachi is pleased`);
              outcome();
              
            }
            else {
                setEnergy(energy - 5)
              setDisplay('Your Dojo is unhappy with your play tactics');
              setImage("https://i.ytimg.com/vi/xS_x62xROvw/maxresdefault.jpg")
              outcome();
            }
        }
        else {
            setDisplay('your Dojo is dead');
        }
    }

    const handleWork = () => {
        if (energy > 5) {
            setEnergy(energy - 5);
            setMeals(meals + Math.floor((Math.random() * 2)) + 1);
          setImage("https://vignette.wikia.nocookie.net/2b7fd0a4-8886-4402-ad9c-ac0f313ddf86/thumbnail-down/width/1280/height/720")  
          setDisplay('you have worked well... for a dojodachi');
        }
        else {
            setDisplay("you must rest");
        }
    }
  const outcome = () => {
    if (energy >= 100 && fullness >= 100 && happiness >= 100)
    {
      setDisplay ("You Have Won!")
    }
    else if (fullness <= 0 || happiness <= 0) {
      setDisplay(" You have Died. Better luck next time \n you are a terrible datchi owner")
    }
  }

    const handleSleep = () => {
      if (energy > 0) {
          
            setEnergy(energy + 15);
            setHappiness(happiness - 5);
            setFullness(fullness - 5);
        setDisplay('you slept well, now go to work or eat some food');
        setImage("https://i.stack.imgur.com/kqEmO.jpg")
        outcome();
        }
      else {
        outcome();
            setDisplay('')
        }
    }
    const handleFeed = (e) => {
        console.log('handlefeed clicked');
        if (meals > 0) {
            setMeals(meals - 1);
            let y = Math.floor((Math.random() * 100));
            if (y > 25) {
                let x = Math.floor((Math.random() * 5)) + 5;
              setFullness(fullness + x);
              setImage("data:image/jpeg;base64,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")
              setDisplay(`Fed Dachi 1 meal, and Dachi gained ${x} additional fullness`);
              outcome();
               }
            else {
                setDisplay(`Fed Dachi 1 meal, Dachi didn't like that, gained 0 fullness`);
              outcome();
            }
        }
        else {
          setDisplay('No meals left to feed Dachi');
          outcome();
        }
    }

    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <div className="card">
                            <h2 clasName="card-title">stats</h2>
                            <p className="card-text">fullness</p>
                            <div class="flex-columm">
                                <div>
                                    <p>Meals: {meals}</p>
                                    <p>Fullness</p> <progress id="file" value={fullness} max="100"></progress>
                                    <p>Energy</p> <progress id="file" value={energy} max="100"></progress>
                                    <p>Happiness</p> <progress id="file" value={happiness} max="100"></progress>
                                </div>
                                <div>
                                    <button className="btn btn-outline-dark m-2" onClick={handleFeed}>feed</button>
                                    <button className="btn btn-outline-dark m-2" onClick={handlePlay}>play</button>
                                    <button className="btn btn-outline-dark m-2" onClick={handleWork}>work</button>
                                    <button className="btn btn-outline-dark m-2" onClick={handleSleep}>rest</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-7">
                        <h1>Dojo-Dachi</h1>
                        <img src={image} alt="" height="250px"/>
                        <p className="m-3">{display}</p>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default App;
