import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:3000/mark-timestamp', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: '123' }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }, [])
  return (
    <div className="App">
        <video controls>
          <source src="https://storage.googleapis.com/gifbasket-video-source/Indestructible_man.ogm" />
        </video>
    </div>
  );
}

export default App;
