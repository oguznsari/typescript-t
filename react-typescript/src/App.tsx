import './App.css';

function App() {
  // let firstValue: string = 'Manny';
  // let firstValue: number = 10;
  // let firstValue: boolean = true;
  // let firstValue: number[] = [2, 3, 56]; (obj?)
  // let firstValue: Array<string> = ['2', '3', '56'];

  // tuple
  // let aTuple: [string, number] = ['Manny', 10];
  // enum   
  // enum Codes { first = 1, second = 2 };
  // any
  let firstName: any = 'Manny';
  // void
  // const warning = (): void => {
  //   console.log('Warning');
  // }
  // warning();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          The value {firstName} is of {typeof firstName} type!
        </p>
      </header>
    </div>
  );
}

export default App;
