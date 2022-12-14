import { useState } from 'react';

function StyledButton(props) {
  const { children, background, whenClicked } = props;
  return (
    <button
      onClick={whenClicked}
      style={{ color: 'white', background: background, padding: '20px' }}
    >
      {children}
    </button>
  );
}

function App() {
  const [counter, setCounter] = useState(0);

  console.log('app is rendering');

  function updateCounter() {
    setCounter(counter + 1);
    console.log({ counter });
  }

  return (
    <div>
      <StyledButton whenClicked={updateCounter} background="blue">
        Click Me
      </StyledButton>
      <StyledButton background="red">Click Me</StyledButton>
      <p>{counter}</p>
    </div>
  );
}

export default App;
