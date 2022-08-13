import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('gray');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'gray' ? 'blue' : 'gray';

  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{
          backgroundColor: disabled ? 'gray' : buttonColor,
          color: 'white',
        }}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type={'checkbox'}
        id={'disable-button-checkbox'}
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor='disable-button-checkbox'>체크</label>
    </div>
  );
}

export default App;
