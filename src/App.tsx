import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Player } from './models/Player'
import { Team, TeamColor } from './models/Team'
import { initialPlayers } from './models/initialState'

function App() {
  const [count, setCount] = useState(0)
  const [players, setPlayers] = useState<Array<Player>>(initialPlayers)
  const [teamBlack, setTeamBlack] = useState<Team>(new Team(TeamColor.BLACK, []))
  const [teamWhite, setTeamWhite] = useState<Team>(new Team(TeamColor.WHITE, []))
  const [teamRed, setTeamRed] = useState<Team>(new Team(TeamColor.RED, []))

  return (
    <>
      <div>
        <ul>
          { players.map(it => <li key={'free-player-' + it.id}> {it.name}</li>)}
        </ul>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
