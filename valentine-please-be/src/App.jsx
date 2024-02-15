import { useState } from 'react'

import './App.css'

const phrases = [
  "No",
  "Please Babu 🥺?",
  "Why so cold baby :(",
  "Please maan jao",
  "I'll be very sad😕",
  "Chauhan sahab please🥺",
  "Don't do this to me🫤",
  "You might regret this!",
  "Give it another thought! 😫",
  "Are you absolutely certain?",
  "Mera Dil Deewana..😭",
  "Deewana Hai ye Dil😭💔",  
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  // const yesButtonSize = noCount * 20 + 16;
  const [yesButtonSize, setYesButtonSize] = useState(16);

  
  function handleYesClick() {
    setYesPressed(true)
  }
  function handleNoClick() {
    // setNoCount(noCount+1);
    // setNoCount(prevNoCount => prevNoCount + 1);

    setNoCount(prevNoCount => (prevNoCount + 1) % phrases.length);
    // Increase the yesButtonSize
    setYesButtonSize(prevSize => prevSize + 20);
  }

  function getNoButtonText() {
    // if (noCount >= phrases.length) 
    //   noCount = 0;
  
    // return phrases[Math.min(noCount,phrases.length-1)]

    if (noCount >= phrases.length) {
      setNoCount(0);
      return phrases[0]; 
    }
    
    return phrases[noCount];
  }

  return (
    <div className='valentine-container'>
      {yesPressed ? (
        <>
          <iframe src="../public/yes video.mp4" alt="bear-Kissing" />
          <div className='text'>Yayyyyyyyyyyyyyyyy !!!!!!</div>
        </>
      ) : (
        <>
          <iframe className='kiss' src="../public/question.mp4" alt="questionGIF" />

          <div className='text'>Will you be my valentine, for forever🌹?</div>

          <div className='both-Button'>
            <button className='yesButton'
            style={{ fontSize: yesButtonSize}}
              onClick={()=> handleYesClick(true)}>
              Yes
            </button>

            <button className="NoButton" onClick={handleNoClick}>
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
