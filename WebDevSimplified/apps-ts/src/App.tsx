import React from 'react';

import './App.css';

import PhotoEditor from './apps/photoEditor/PhotoEditor';
import PropTypes from './apps/propTypes/PropTypes';
import ReactPortal from './apps/reactPortal/ReactPortal';

function App() {
  return (
      <>
      <div className='main'>
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