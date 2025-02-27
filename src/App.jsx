import {useState} from 'react'
import AppClassic from './appClassic'
import AppBonus from './appBonus'


export default function App(){
    const [showClassic, setShowClassic] = useState(true);
    const [myScoreClassic, setMyScoreClassic] = useState(0);
    const [opponentScoreClassic, setOpponentScoreClassic] = useState(0);
    const [myScoreBonus, setMyScoreBonus] = useState(0);
    const [opponentScoreBonus, setOpponentScoreBonus] = useState(0);

    return(
        <div className="bg-radial from-bg1 to-bg2 min-h-[100vh] font-barlow">
            {showClassic ? <AppClassic setShowClassic={setShowClassic} ms={myScoreClassic}
            setMs={setMyScoreClassic} os={opponentScoreClassic}
            setOs={setOpponentScoreClassic}/> 

            : <AppBonus setShowClassic={setShowClassic} ms={myScoreBonus}
            setMs={setMyScoreBonus} os={opponentScoreBonus}
            setOs={setOpponentScoreBonus} /> }
        </div>
    );
}
