
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    firstName: 'Burce',
    lastName: 'Wayne'
  }

  const nameList = [
    {
      first: 'bruce'
    },
    {
      first: 'kent'
    },
    {
      first: 'diana'
    }
  ]

  return (
    <div className="App">
     <Greet name='vishwas' messageCount={10} isLoggedIn={true} />
     <Person name={personName} />
     <PersonList names={nameList} />
     <Status status='loading' />
     <Heading>Placeholder text</Heading>
     <Oscar>
        <Heading>Ocsar goes to dicaprio</Heading>
     </Oscar>
     <Greet name='pjoterini' messageCount={8} isLoggedIn={false} />
     <Button handleClick={(event, id) => {
      console.log('btn clicked', event, id)
     }}/>
     <Input value='' handleChange={(event) => console.log(event) }/>
     <Container styles={{border: '1px solid black', padding: '1rem'}}/>
    </div>
  );
}

export default App;
