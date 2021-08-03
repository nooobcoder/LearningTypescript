import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

interface AppProps {
  color?: string;
}

/*class App extends React.Component<AppProps> {
  state = { counter: 0 };

  incrementCounter = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrementCounter = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}*/

const App: React.FunctionComponent<AppProps> = ({ color }: AppProps): JSX.Element => <div>{color}</div>;

ReactDOM.render(<App color={'green'} />, document.getElementById('root'));
