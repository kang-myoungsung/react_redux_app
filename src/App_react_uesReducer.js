import { useReducer, useState } from 'react';
import './App.css';

export default function App_react_useReducer() {
  const [number, setNumber] = useState(1);
  function countReducer(oldCount, action){
    if (action.type==='up'){
      return oldCount + action.number;
    } else if (action.type ==='down'){
      return oldCount - action.number;
    } else if (action.type==='reset'){
      return 0;
    }
  }
  // state 를 사용자가 직접 하지 않고 countDispatch 가 대신 한다.
  const [count, countDispatch] = useReducer(countReducer,0);
  function down() {
    countDispatch({type:'down', number:number});
  }
  function reset() {
    countDispatch({type:'reset', number:number});
  }
  function up() {
    countDispatch({type:'up', number:number});
  }
  function changeNumber(event) {
    setNumber(Number(event.target.value));
  }

  return (
    <div>
      <input type="button" value="-" onClick={down}/>
      <input type="button" value="0" onClick={reset}/>      
      <input type="button" value="+" onClick={up}/>
      <input type="text" value={number} onChange={changeNumber} />
      <span>{count}</span>
    </div>
  );
}
