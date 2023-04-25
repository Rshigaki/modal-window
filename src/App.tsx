import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Modal({ onSetNamed, onClosed }: { onSetNamed: (val: string) => void, onClosed: () => void, }) {
  const ref = useRef<HTMLInputElement>(null);

  const onSaveButtonClicked = () => {
    if (!ref.current) return;

    const { value } = ref.current;
    onSetNamed(value);
  };
  return (<>
    <div style={{
      top: 0,
      left: 0,
      position: "fixed",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
    }}>
      <div style={{
        width: "300px",
        height: "300px",
        backgroundColor: "lightyellow",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}>
        <p>こんにちは！</p>
        <input ref={ref} />
        <button onClick={onSaveButtonClicked}>保存</button>
        <button onClick={onClosed}>閉じる</button>
      </div>
    </div>
  </>);
}

function App() {
  const [name, setName] = useState<string>("");
  const [isModalOpened, setIsModalOpened] = useState<Boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name}!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => setIsModalOpened(true)}>モーダルウィンドウを開く</button>
      </header>
      {(isModalOpened && <Modal onSetNamed={(name) => setName(name)} onClosed={() => setIsModalOpened(false)} />)}

    </div>
  );
}

export default App;
