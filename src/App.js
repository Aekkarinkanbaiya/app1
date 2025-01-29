import React from 'react'
import { EventData2 } from './event-data';
import RefsFunc from './refs-func';
import Messagebox from './state-func';
import { userContext } from './context';
import Content from './context-content';

function App() {
  return (
    <userContext.Provider value={'Tom Jerry'}>
      <Content/>
    </userContext.Provider>
  )
}

export default App;

