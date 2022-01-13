import Tree from './components/Tree';
import { useState } from 'react';
import './App.css';

function App() {
  const [isExpand, setIsExpand] = useState(true);

  function clickHandler() {
    setIsExpand(!isExpand);
  }

  const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    children: {
      son: {
        name: 'Bob',
      },
      dauther: {
        name: 'Raichel',
        weGoDeeper: {
          field1: 'text field 1',
          field2: 'text field 2',
          deeper: {
            field3: 'text field 3',
            field4: 'text field 4',
          },
        },
      },
    },
    eyeColor: {
      left: 'green',
      right: 'blue',
    },
  };

  //If we use real JSON exanple we should transform it into object first
  // const jsonObj = JSON.parse(jsonExample);

  return (
    <div className="App">
      <Tree obj={person} isExpand={isExpand} setIsExpand={setIsExpand} />
      <button onClick={clickHandler}>{isExpand ? 'Colapse' : 'Expand'}</button>
    </div>
  );
}

export default App;