import React from 'react';

import './App.css';

import PhotoEditor from './apps/photoEditor/PhotoEditor';
import PropTypes from './apps/propTypes/PropTypes';
import ReactPortal from './apps/reactPortal/ReactPortal';
import Select from './apps/select/Select';

const options = [
  {label: 'first', value: 1},
  {label: 'second', value: 2},
  {label: 'third', value: 3},
  {label: 'fourh', value: 4},
  {label: 'fifth', value: 5},
]

function App() {
  return (
    <>
      <div className='main'>
        <Select value={options} onChange={() => console.log('sup')} options={}/>
        <PropTypes />
        <PhotoEditor />
        <ReactPortal />
      </div>
    </>
  );
}

export default App;

// useState - dynamic variables managment
// useEffect - doing something after certain event
// useMemo - store values from heavy tasks, so they dont get invoked on every render
// useRef - does not cause rerenders, store referencing values and html elements
// useContext - pass props to very distant children easier
// useReducer - managing more complicated state
// useCallback - store whole functions so they dont ge invoked on every render