import './App.css';

function App() {
  // let firstValue: string = 'Manny';
  // let firstValue: number = 10;
  // let firstValue: boolean = true;
  // let firstValue: number[] = [2, 3, 56]; (obj?)
  // let firstValue: Array<string> = ['2', '3', '56'];

  let aTuple: [string, number] = ['Manny', 10];

  return (
    <div className="App">
      <header className="App-header">
        <p>
          The value {aTuple} is of {typeof aTuple} type!
        </p>
      </header>
    </div>
  );
}

export default App;
