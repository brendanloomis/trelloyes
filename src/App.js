import React from 'react';
import List from './List.js';
import './App.css';

function App(props) {
  const arrOfLists = props.store.lists.map(list => (
    <List 
      key={list.id}
      header={list.header}
      cards={list.cardIds.map(id => props.store.allCards[id])}
    />
  ));

  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {arrOfLists}
      </div>
    </main>
  );
}
/*class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const { store } = this.props;
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List 
              key={list.id}
          ))}
        </div>
      </main>
    )
  }
}*/

export default App;