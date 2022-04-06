import logo from './logo.svg';
import './App.css';
import { Button } from 'opcode-demo-lib'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ margin: '0px 0px 24px 0px', color: '#586165', fontWeight: '700' }}>Hello</h1>
        <div style={{ display: 'flex' }}>
          <div style={{ padding: '20px' }}>
            <Button label={'Primary'} buttonType={'primary'} />
          </div>
          <div style={{padding: '20px' }}>
            <Button label={'Secondary'} buttonType={'secondary'} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;