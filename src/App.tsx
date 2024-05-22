


import { useState } from 'react';
import './App.css';
import Vapi from '@vapi-ai/web';




function App() {
  
  const vapi = new Vapi(import.meta.env.VITE_REACT_APP_VAPI_PUBLIC_API as string); // Vapi public key
  
  const [isListening, setIsListening] = useState(false);

  const startCall = () => {
    vapi.start(import.meta.env.VITE_REACT_APP_VAPI_ASSISTANCE_ID as string); // assistance ID

    setIsListening(true);
  };
  const stopCall = () => {
    vapi.stop();
    setIsListening(false);
  };

  vapi.on("error", (e) => {
    console.error(e);
    vapi.stop();
    setIsListening(false);
  });

  return (
    <div className='App'>
      <button style={{marginRight:'10px'}} onClick={startCall}>start</button>
      <button onClick={stopCall}>stop</button>
      {isListening ? (
        <div className='listening'>
          Assistance is listening...
        </div>
      ) : (
        <div className='not-listening'>
          Assistance has stopped.
        </div>
      )}
    </div>
  );
}

export default App;