import { useState } from 'react';
import './App.css';
export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'Mediumblue' : 'MediumVioletRed';

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
        Change to {replaceCamelWithSpaces(newButtonColor)}
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
