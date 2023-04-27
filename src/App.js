import { useState } from 'react';
import { supabase } from './supabaseClient';
import axios from 'axios';
//import logo from './logo.svg';
import './mvp.css';
import './App.css';

function Bar() {
  return (
  <div className="bar" height="60">
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

  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({});
  const API_KEY = "RGAPI-a283762a-ab0e-4064-a0b5-081fb3e5a661";

  function searchForPlayer(event) {
    var APICallString = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY;

    axios.get(APICallString).then(function (response) {
      //success
      setPlayerData(response.data);
    }).catch(function (error) {
      //error
      console.log(error);
    });
  }

  console.log(playerData);

  return (
    <div className="App">
      <div className="bar-header">
        <h1>POCKET LEAGUE</h1>
      </div>
      <div className="playerinfo">
       <input className="summonertext" type="text" placeholder="Enter summoner name" onChange={e => setSearchText(e.target.value)}></input>
       <button onClick={e => searchForPlayer(e)}>Search for Player</button>
      </div> 
      {JSON.stringify(playerData) != '{}' ? 
      <>
      <p>{playerData.name}</p>
      <img width="100" height="100" src={"http://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/" + playerData.profileIconId + ".png"}></img>
      <p>Summoner level: {playerData.summonerLevel}</p>
      </> 
      : 
      <><p>Sorry, no player data found.</p></>
    
      }
      <div className="tableanddisclaimer">
        <h2>ALL CHAMPIONS</h2>
        <Champions />
        <Disclaimer />
      </div>
    </div> //top div ending (app)
  );
} 

export default App;
