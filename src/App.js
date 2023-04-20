import { useState } from 'react';
import { supabase } from './supabaseClient';
//import logo from './logo.svg';
import './mvp.css';
import './App.css';

function Bar() {
  return (
  <div className="bar">
    <h1>POCKET LEAGUE</h1>
  </div>
  )
}


function Champions() {
  const [myChampions, setMyChampions] = useState([]);
  async function getChampions() {
    let { data: champions, error } =  await supabase
      .from('champions')
      .select('*')
    setMyChampions(champions);
  }
  getChampions();
  return (
    <table>
      <tr>
        <th>CHAMPION</th>
        <th>ROLE</th>
        <th>POSITION</th>
        <th>DIFFICULTY</th>
        <th>NUMBER OF SKINS</th>
      </tr>
    {
      myChampions.map(b => (
        <tr className="champions">
          <td>{b.champion}</td>
          <td>{b.role}</td>
          <td>{b.position}</td>
          <td>{b.difficulty}</td>
          <td>{b.number_of_skins}</td>
        </tr>
      ))
    }
    </table>
  )
} 

function Disclaimer() {
  return (
    <p style={{fontSize: 12}}>Pocket League isn't endorsed by Riot Games and doesn't reflect the views or 
      opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. 
      Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.</p>
  )
} 

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Bar />
       <Champions />
       <Disclaimer />
      </header>
    </div>
  );
} 

export default App;
