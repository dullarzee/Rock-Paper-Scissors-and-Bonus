import proptype from 'prop-types'
import {CircleCont2} from './CircleContBonus';

WinningSectionBonus.propTypes = {
    myChoice: proptype.string,
    opponentChoice: proptype.number,
    setMyChoice: proptype.func,
    setMyScore: proptype.func,
    myScore:proptype.number,
    opponentScore:proptype.number,
    setOpponentScore:proptype.func,
    
}


export default function WinningSectionBonus({myChoice, opponentChoice, setMyChoice}){

    let choice = null;
    let choice2 = null;
    let winStatus = '';

    function handleClick()
    {
        setMyChoice('');
    }
   // const [winStatus, setWinStatus] = useState('');

    //for deciding for current player
    if(myChoice === 'paper')
    {
       choice = 
        <CircleCont2 bColor='hsl(230, 89%, 65%)' bColor2='hsl(230, 89%, 54%)' scale={1.7}> 
            <img alt="" className="w-full" src="/images/icon-paper.svg"></img>
        </CircleCont2>
    }
    else if(myChoice === 'scissors')
    {
        choice = 
        <CircleCont2 bColor={'hsl(40, 84%, 53%)'} bColor2={'hsl(39, 89%, 35%)'} scale={1.7}> 
            <img alt="" className="w-full" src="/images/icon-scissors.svg"></img>
        </CircleCont2>
    }
    else if(myChoice === 'rock')
    {
        choice = 
        <CircleCont2 bColor='hsl(349, 70%, 56%)' bColor2='hsl(349, 71%, 40%)' scale={1.7}> 
            <img alt="" className="w-full" src="/images/icon-rock.svg"></img>
        </CircleCont2>
    }
    else if(myChoice === 'lizard')
        {
            choice = 
            <CircleCont2 bColor='hsl(261, 72%, 63%)' bColor2='hsl(261, 73%, 50%)' scale={1.7}> 
                <img alt="" className="w-full" src="/images/icon-lizard.svg"></img>
            </CircleCont2>
        }
    else if(myChoice === 'spock')
        {
            choice = 
            <CircleCont2 bColor='hsl(189, 58%, 57%)' bColor2='hsl(189, 59%, 43%)' scale={1.7}> 
                <img alt="" className="w-full" src="/images/icon-spock.svg"></img>
            </CircleCont2>
        }
    

    //for deciding for computer
    if(opponentChoice === 'paper')
        {
           choice2 = 
            <CircleCont2 bColor='hsl(230, 89%, 65%)' bColor2='hsl(230, 89%, 54%)' scale={1.7}> 
                <img alt="" className="w-full" src="/public/images/icon-paper.svg"></img>
            </CircleCont2>
        }
        else if(opponentChoice === 'scissors')
        {
            choice2 = 
            <CircleCont2 bColor={'hsl(40, 84%, 53%)'} bColor2={'hsl(39, 89%, 35%)'} scale={1.7}> 
                <img alt="" className="w-full" src="/images/icon-scissors.svg"></img>
            </CircleCont2>
        }
        else if(opponentChoice === 'rock')
        {
            choice2 = 
            <CircleCont2 bColor='hsl(349, 70%, 56%)' bColor2='hsl(349, 71%, 40%)' scale={1.7}> 
                <img alt="" className="w-full" src="/images/icon-rock.svg"></img>
            </CircleCont2>
        }
        else if(opponentChoice === 'lizard')
        {
            choice2 = 
            <CircleCont2 bColor='hsl(261, 72%, 63%)' bColor2='hsl(261, 73%, 50%)' scale={1.7}> 
                <img alt="" className="w-full" src="/images/icon-lizard.svg"></img>
            </CircleCont2>
        }
        else if(opponentChoice === 'spock')
        {
            choice2 = 
            <CircleCont2 bColor='hsl(189, 58%, 57%)' bColor2='hsl(189, 59%, 43%)' scale={1.7}> 
                <img alt="" className="w-full" src="/images/icon-spock.svg"></img>
            </CircleCont2>
        }

        //comparing choices to decide winner

//Assigning a score based on all possible win and loss scenarios
        if(myChoice === 'rock' && opponentChoice === 'scissors' || myChoice === 'scissors' &&
            opponentChoice === 'paper' || myChoice === 'paper' && opponentChoice === 'rock' ||
        myChoice === 'rock' && opponentChoice === 'lizard' || myChoice === 'lizard' && opponentChoice === 'spock' 
        || myChoice === 'spock' && opponentChoice === 'scissors' || myChoice === 'paper' && opponentChoice === 'spock'
        || myChoice === 'lizard' && opponentChoice === 'paper' || myChoice === 'spock' && opponentChoice === 'rock' 
        || myChoice === 'scissors' && opponentChoice === 'lizard')
             {
                winStatus = 'YOU WIN';
                console.log('You win');
             }
        else if(opponentChoice === 'rock' && myChoice === 'scissors' || opponentChoice === 'scissors' &&
                myChoice === 'paper' || opponentChoice === 'paper' && myChoice === 'rock' ||
            opponentChoice === 'rock' && myChoice === 'lizard' || opponentChoice === 'lizard' && myChoice === 'spock' 
            || opponentChoice === 'spock' && myChoice === 'scissors' || opponentChoice === 'paper' && myChoice === 'spock'
            || opponentChoice === 'lizard' && myChoice === 'paper' || opponentChoice === 'spock' && myChoice === 'rock' 
            || opponentChoice === 'scissors' && myChoice === 'lizard')
                {
                    winStatus = 'YOU LOSE';
                    console.log('You lose');
                }    
                else
                {
                    winStatus = "IT'S A DRAW";
                    console.log('its a draw');
                }





    return(
       <>
       <div className='flex w-full lg:w-[60%] justify-around lg:justify-between mx-auto py-[1%] pt-[3%] font-semibold text-sm lg:text-2xl tracking-widest
       text-slate-50'>
        <span className="w-[30%] lg:w-auto">YOU PICKED</span>
        <span className="w-[40%] lg:w-auto">THE HOUSE PICKED</span>
       </div>

       <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-3 w-[100%] lg:w-[60%] mx-auto py-[8%]">
        {/*1. Your Choice*/}
        <div className={winStatus === 'YOU WIN' ? "order-1 animate-winner outline-[4rem] bg-white/25 lg:outline-[16rem] outline-white/5 lg:outline-white/8 rounded-full justify-self-start"
        : "order-1 rounded-full justify-self-start"}>
        <div className={winStatus === 'YOU WIN' ? "animate-winner outline-[2rem] lg:outline-[10rem] rounded-full outline-white/11 justify-self-start" 
        : "rounded-full"}>
      
            {choice}
        </div>
        </div>

        {/*2. Displaying results*/}
        <div className="order-3 lg:order-2 w-[200%] mt-[4rem] lg:mt-0 lg:w-full animate-again flex flex-col items-center gap-y-[1rem]">
          <h2 className="text-5xl font-bold text-slate-50">{winStatus}</h2>
          <button onClick={handleClick} className="cursor-pointer tracking-wider hover:bg-slate-200 text-bg1 px-[3rem] py-[0.4rem] bg-white
          rounded-md font-semibold ">PLAY AGAIN</button>
        </div>

        {/*opponent's choice*/}
        <div className={winStatus === 'YOU LOSE' ? "order-2 lg:order-3 animate-winnerOpp outline-[4rem] bg-white/25 lg:outline-[16rem] outline-white/5 lg:outline-white/8 rounded-full justify-self-end"
        : "order-2 lg:order-3 animate-opp rounded-full justify-self-end"}>
        <div className={winStatus === 'YOU LOSE' ? "animate-winnerOpp outline-[2rem] lg:outline-[10rem] rounded-full outline-white/11 justify-self-end" 
        : "animate-opp rounded-full justify-self-end"}>
        {choice2}
       </div>
        </div>


        </div>
       </>
    );
}