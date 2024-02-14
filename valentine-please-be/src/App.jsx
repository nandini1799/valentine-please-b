import { useState } from 'react'

import './App.css'

const phrases = [
  "No",
  "Please Babu 🥺?",
  "Please maan jao",
  "I'll be very sad😕",
  "Chauhan sahab please🥺",
  "Don't do this to me🫤",
  "Mera Dil Deewana..😭",
  "Deewana Hai ye Dil😭💔",
  "Qutooooooooo plij"
];

function App() {
  var [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 10;

  
  function handleYesClick() {
    setYesPressed(true)
  }
  function handleNoClick() {
    setNoCount(noCount+1);
  }

  function getNoButtonText() {
    noCount++;
    if (noCount >= phrases.length) {
      noCount = 0;
    }
    return phrases[noCount-1];
  }

  return (
    <div className='valentine-container'>
      {yesPressed ? (
        <>
          <img src="../src/assets/yesValentine.gif" alt="bear-Kissing" />
          <div className='text'>Yayyy !!!</div>
        </>
      ) : (
        <>
          <img className='kiss' src="../src/assets/questionValentine.gif" alt="bear with heart" />

          <div className='text'>Will you be my valentine 🌹?</div>
          <div className='both-Button'>
            <button className='yesButton'
            style={{ fontSize: yesButtonSize , backgroundColor:'rgb(248, 229, 89)'}}
              onClick={()=> handleYesClick(true)}
            >
              Yes
            </button>
            <button className="NoButton" onClick={handleNoClick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
