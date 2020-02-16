

import React from 'react';
import Speech from 'speak-tts' 

const speech = new Speech() // will throw an exception if not browser supported
if(speech.hasBrowserSupport()) { // returns a boolean
    console.log("speech synthesis supported")
}

speech.init().then((data) => {
    // The "data" object contains the list of available voices and the voice synthesis params
    console.log("Speech is ready, voices are available", data)
}).catch(e => {
    console.error("An error occured while initializing : ", e)
})

speech.init({
    'volume': 1,
     'lang': 'en-GB',
     'rate': 1,
     'pitch': 1,
     'voice':'Google UK English Female',
     'splitSentences': true,
     'listeners': {
         'onvoiceschanged': (voices) => {
             voices.map(voice=>{
                 console.log(voice.voiceURI)
             })
         }
     }
})

speech.speak({
    text: 'Hello, friends how are you  ?',
}).then(() => {
    console.log("Success !")
}).catch(e => {
    console.error("An error occurred :", e)
})

function App() {
  
  return (
    <div  >
     hello
    </div >
  );
}

export default App;
