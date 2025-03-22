import { useState } from 'react'
import './tailwind/App.css'
import CircleCont from './CircleCont'
import PropType from 'prop-types' 
import logo from '/images/logo.svg'
import HeaderSection from './header'
import WinningSection from './winningSection'
import Rules from './rules'
import {RulesButton} from './rules'
import rulesClassic from '/images/image-rules.svg'

MainSection.propTypes = {
    myChoice:PropType.string,
    setMyChoice: PropType.func,
    opponentChoice: PropType.string,
    setOpponentChoice: PropType.func,
    myScore: PropType.number,
    setMyScore: PropType.func,
    opponentScore:PropType.number,
    setOpponentScore:PropType.func
}

AppClassic.propTypes = {
  setShowClassic: PropType.func,
  ms:PropType.number,
  os:PropType.number,
  setMs:PropType.func, 
  setOs:PropType.func
}


function MainSection({myChoice, setMyChoice, opponentChoice, setOpponentChoice, myScore, setMyScore, 
   opponentScore, setOpponentScore}){
  return(
    <>
     {/*you have to give ur circular components proper id for thos logic or algorithm to work*/}
     <main className="relative w-[70%] bg-contain lg:bg-auto lg:w-[50%] h-[25rem] lg:h-[35rem] mx-auto bg-[url(/public/images/bg-triangle.svg)]
     bg-no-repeat bg-center">
         {/*put component in a div for easy positional manipulation*/}
        <div className="absolute top-[10%] left-[-25%] lg:top-[14%] lg:left-[17%]">
         <CircleCont bColor={'hsl(230, 89%, 65%)'} bColor2={'hsl(230, 89%, 54%)'} 
         myChoice={myChoice} setMyChoice={setMyChoice} setOpponentChoice={setOpponentChoice}
         opponentChoice={opponentChoice} setMyScore={setMyScore} myScore={myScore}
         opponentScore={opponentScore} setOpponentScore={setOpponentScore}>
           {/*make the width of the image full for better quality*/}
            <img alt="paper" id="paper" className='w-full' src="/images/icon-paper.svg"></img>
         </CircleCont>
        </div>

        <div className="absolute top-[10%] right-[-25%] lg:right-[0%] lg:top-[13%] lg:left-[57%]">
         <CircleCont bColor={'hsl(40, 84%, 53%)'} bColor2={'hsl(39, 89%, 35%)'}
         myChoice={myChoice} setMyChoice={setMyChoice} setOpponentChoice={setOpponentChoice}
         opponentChoice={opponentChoice} setMyScore={setMyScore} myScore={myScore}
         opponentScore={opponentScore} setOpponentScore={setOpponentScore}>
           {/*make the width of the image full for better quality*/}
            <img alt="scissors" id="scissors" className='w-full' src="/images/icon-scissors.svg"></img>
         </CircleCont>
        </div>

        <div className="absolute top-[47%] left-[14%] lg:top-[50%] lg:left-[37.5%]">
         <CircleCont bColor='hsl(349, 70%, 56%)' bColor2='hsl(349, 71%, 40%)'
         myChoice={myChoice} setMyChoice={setMyChoice} setOpponentChoice={setOpponentChoice}
         opponentChoice={opponentChoice} setMyScore={setMyScore} myScore={myScore}
         opponentScore={opponentScore} setOpponentScore={setOpponentScore}>
           {/*make the width of the image full for better quality*/}
            <img alt="rock" id="rock" className='w-full' src="/images/icon-rock.svg"></img>
         </CircleCont>
        </div>
      </main>
      </>
  );
}



function AppClassic({setShowClassic, ms, os, setMs, setOs}){

  const [myChoice, setMyChoice] = useState('');
  const [opponentChoice, setOpponentChoice] = useState('');
  const [myScore, setMyScore] = useState(ms);
  const [opponentScore, setOpponentScore] = useState(os);
  const [showRules, setShowRules] = useState(true);


  function handleSavingInfo()
  {
     setMs(myScore);
     setOs(opponentScore);
     setShowClassic(false);

  }


  return(
    <>
      <div className="w-full min-h-[100vh] border border-bg2">
        <button onClick={handleSavingInfo} className="fixed lg:absolute lg:left-[90%] lg:top-[6%] bg-radial from-indigo-400
         to-indigo-700 px-[1rem] py-[0.3rem] rounded-full lg:rounded-md text-lg cursor-pointer
         top-[86.5%] right-[2%] animate-bonusButton">BONUS</button>
        {/*header node for displaying score and game title*/}
          <HeaderSection myScore={myScore} opponentScore={opponentScore}>
             <img alt='classic logo' className="self-center h-[80%] lg:h-full" src={logo}></img>
          </HeaderSection>

      { myChoice === ''  ?
       <MainSection myChoice={myChoice} setMyChoice={setMyChoice} opponentChoice={opponentChoice} setOpponentChoice={setOpponentChoice}
       setMyScore={setMyScore} myScore={myScore} opponentScore={opponentScore} setOpponentScore={setOpponentScore} />
       :
       <WinningSection myChoice={myChoice} opponentChoice={opponentChoice} setMyChoice={setMyChoice}
       setMyScore={setMyScore} myScore={myScore} opponentScore={opponentScore} setOpponentScore={setOpponentScore} />
      }

         <RulesButton setShowRules={setShowRules} />

        {showRules ?
          <Rules setShowRules={setShowRules}>
            <img alt="rules" src={rulesClassic}></img>
          </Rules>
          : ''
        }

      </div>
   </>
  );
}

export default AppClassic
