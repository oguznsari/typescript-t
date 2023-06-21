import './App.css';
import Message from './Message';

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
  // let firstName: any = 'Manny';
  // void
  // const warning = (): void => {
  //   console.log('Warning');
  // }
  // warning();

  // const initialState = {
  //   name: 'Manny',
  //   message: 'TypeScript is cool!!'
  // }

  // type State = Readonly<typeof initialState>

  // readonly state: State = initialState;
  // this.state.name


  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          The value {firstName} is of {typeof firstName} type!
        </p> */}
        <Message name='Manny' message='This is a simple message' />
      </header>
    </div>
  );
}

export default App;
