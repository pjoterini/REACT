import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List'


export interface IState {
  people: {
    name: string
    age : number 
    url: string
    note?: string
  }[]
}

function App() {

const [people, setPeople] = useState<IState['people']>([
{
  name: "bebon James",
  url: 'https://ipla.pluscdn.pl/dituel/cp/25/25cmwuteuqh8u9o57ui1141zwk54vzpc.jpg',
  age: 32,
  note: 'allergic to satyin on sam eteam'
}
])


  return (
    <div className='App'>
      <h1>People invited to my party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
