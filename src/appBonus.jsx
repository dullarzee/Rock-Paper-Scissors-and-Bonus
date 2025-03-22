import { useState } from 'react'
import './tailwind/App.css'
import CircleContBonus from './CircleContBonus'
import proptype from 'prop-types' 
import logoBonus from '/images/logo-bonus.svg'
import HeaderSection from './header'
import WinningSectionBonus from './winningSectionBonus'
import Rules from './rules'
import {RulesButton} from './rules'
import rulesBonus from '/images/image-rules-bonus.svg'


MainSection.propTypes = {
    myChoice:proptype.string,
    setMyChoice: proptype.func,
    opponentChoice: proptype.string,
    setOpponentChoice: proptype.func,
    myScore: proptype.number,
    setMyScore: proptype.func,
    opponentScore:proptype.number,
    setOpponentScore:proptype.func
}

AppBonus.propTypes = {
    setShowClassic: proptype.func,
    ms:proptype.number,
    os:proptype.number,
    setMs:proptype.func, 
    setOs:proptype.func
}



function MainSection({myChoice, setMyChoice, opponentChoice, setOpponentChoice, myScore, setMyScore, 
   opponentScore, setOpponentScore}){
  return(
    <>
     {/*you have to give ur circular components proper id for thos logic or algorithm to work*/}
     <main className="relative w-[70%] lg:w-[30%] bg-contain h-[25rem] lg:h-[35rem] mx-auto bg-[url(/images/bg-pentagon.svg)]
     bg-no-repeat bg-center">

         {/*put component in a div for easy positional manipulation*/}  

         <div className="absolute top-[2%] lg:top-[3%] left-[17%] lg:left-[31%]">
         <CircleContBonus bColor={'hsl(40, 84%, 53%)'} bColor2={'hsl(39, 89%, 35%)'}
         myChoice={myChoice} setMyChoice={setMyChoice} setOpponentChoice={setOpponentChoice}
         opponentChoice={opponentChoice} setMyScore={setMyScore} myScore={myScore}
         opponentScore={opponentScore} setOpponentScore={setOpponentScore}>
           {/*make the width of the image full for better quality*/}
            <img alt="scissors" id="scissors" className='w-full' src="/images/icon-scissors.svg"></img>
         </CircleContBonus>
        </div>

        <div className="absolute top-[25%] lg:top-[32%] right-[-30%] lg:right-0 lg:left-[85%]">
         <CircleContBonus bColor={'hsl(230, 89%, 65%)'} bColor2={'hsl(230, 89%, 54%)'} 
         myChoice={myChoice} setMyChoice={setMyChoice} setOpponentChoice={setOpponentChoice}
         opponentChoice={opponentChoice} setMyScore={setMyScore} myScore={myScore}
         opponentScore={opponentScore} setOpponentScore={setOpponentScore}>
           {/*make the width of the image full for better quality*/}
            <img alt="paper" id="paper" className='w-full' src="/images/icon-paper.svg"></img>
         </CircleContBonus>
        </div>

         <div className="absolute top-[59%] lg:top-[75%] right-[-14%] lg:right-0 lg:left-[59%]">
                 <CircleContBonus bColor='hsl(349, 70%, 56%)' bColor2='hsl(349, 71%, 40%)'
                 myChoice={myChoice} setMyChoice={setMyChoice} setOpponentChoice={setOpponentChoice}
                 opponentChoice={opponentChoice} setMyScore={setMyScore} myScore={myScore}
                 opponentScore={opponentScore} setOpponentScore={setOpponentScore}>
                   {/*make the width of the image full for better quality*/}
                    <img alt="rock" id="rock" className='w-full' src="/images/icon-rock.svg"></img>
                 </CircleContBonus>
          </div>


           <div className="absolute top-[59%] lg:top-[75%] left-[-14%] lg:left-[2%]">
                   <CircleContBonus bColor='hsl(261, 72%, 63%)' bColor2='hsl(261, 73%, 50%)'
                   myChoice={myChoice} setMyChoice={setMyChoice} setOpponentChoice={setOpponentChoice}
                   opponentChoice={opponentChoice} setMyScore={setMyScore} myScore={myScore}
                   opponentScore={opponentScore} setOpponentScore={setOpponentScore}>
                     {/*make the width of the image full for better quality*/}
                      <img alt="lizard" id="lizard" className='w-full' src="/images/icon-lizard.svg"></img>
                   </CircleContBonus>
            </div>

           
            <div className="absolute top-[25%] lg:top-[32%] left-[-30%] lg:left-[-20%]">
                   <CircleContBonus bColor='hsl(189, 58%, 57%)' bColor2='hsl(189, 59%, 43%)'
                   myChoice={myChoice} setMyChoice={setMyChoice} setOpponentChoice={setOpponentChoice}
                   opponentChoice={opponentChoice} setMyScore={setMyScore} myScore={myScore}
                   opponentScore={opponentScore} setOpponentScore={setOpponentScore}>
                     {/*make the width of the image full for better quality*/}
                      <img alt="spock" id="spock" className='w-full' src="/images/icon-spock.svg"></img>
                   </CircleContBonus>
            </div>
            

        
      </main>
      </>
  );
}




export default function AppBonus({setShowClassic,  ms, os, setMs, setOs}){

    const [myChoice, setMyChoice] = useState('');
    const [opponentChoice, setOpponentChoice] = useState('');
    const [myScore, setMyScore] = useState(ms);
    const [opponentScore, setOpponentScore] = useState(os);
    const [showRules, setShowRules] = useState(true)

    function handleSavingInfo()
    {
      setMs(myScore);
      setOs(opponentScore);
      setShowClassic(true);
    }
    
    return(
        <>
         <div className="w-full min-h-[100vh] border border-bg2">
         <button onClick={handleSavingInfo} className="fixed lg:absolute lg:left-[90%] lg:top-[6%] bg-radial from-amber-400
         to-amber-700 px-[1rem] py-[0.3rem] rounded-full lg:rounded-md text-lg cursor-pointer
         top-[86.5%] right-[2%] animate-bonusButton">CLASSIC</button>

                {/*header node for displaying score and game title*/}
                   <HeaderSection myScore={myScore} opponentScore={opponentScore}>
                      <img alt='classic logo' src={logoBonus}></img>
                   </HeaderSection>
         
               { myChoice === ''  ?
                <MainSection myChoice={myChoice} setMyChoice={setMyChoice} opponentChoice={opponentChoice} setOpponentChoice={setOpponentChoice}
                setMyScore={setMyScore} myScore={myScore} opponentScore={opponentScore} setOpponentScore={setOpponentScore} />
                :
                <WinningSectionBonus myChoice={myChoice} opponentChoice={opponentChoice} setMyChoice={setMyChoice}
                setMyScore={setMyScore} myScore={myScore} opponentScore={opponentScore} setOpponentScore={setOpponentScore} />
               }
         
                  <RulesButton setShowRules={setShowRules} />
         
                 {showRules ?
                   <Rules setShowRules={setShowRules} >
                    <img alt="rules" src={rulesBonus}></img>
                   </Rules>
                   : ''
                 }
         
               </div>
        </>
    );
}