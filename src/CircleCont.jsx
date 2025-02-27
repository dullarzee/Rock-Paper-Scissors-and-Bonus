import PropType from 'prop-types'


//circular components containing game props e.g scissors, paper etc

CircleCont.propTypes = {
    bColor: PropType.string,
    bColor2: PropType.string,
    children: PropType.object,
    myChoice: PropType.string,
    setMyChoice: PropType.func,
    opponentChoice: PropType.string,
    setOpponentChoice:PropType.func,
    myScore: PropType.number,
    setMyScore: PropType.func,
    opponentScore:PropType.number,
    setOpponentScore:PropType.func
}

CircleCont2.propTypes = {
    bColor: PropType.string,
    bColor2: PropType.string,
    children: PropType.object,
    myChoice: PropType.string,
    setMyChoice: PropType.func,
    scale:PropType.number,
    setOpponentChoice:PropType.func,
}


//you have to give ur circular components proper id for thos logic or algorithm to work


export default function CircleCont({bColor, bColor2, children, setMyChoice, setOpponentChoice,
  setMyScore, myScore, opponentScore, setOpponentScore}){

    let myChoice2 = '';
    let opponentChoice2 = '';

    function handleClick(e)
    {
        const name = e.currentTarget.querySelector('img').id;
        const opponent = Math.ceil(Math.random()*3);
        if(opponent === 1)
        {
            setOpponentChoice('rock');
            opponentChoice2 = 'rock';
        }
        else if(opponent === 2)
        {
            setOpponentChoice('paper');
            opponentChoice2 = 'paper';

        }
        else if(opponent === 3)
        {
            setOpponentChoice('scissors');
            opponentChoice2 = 'scissors';
        }
        setMyChoice(name);
        myChoice2 = name;


        if(myChoice2 === 'rock' && opponentChoice2 === 'scissors' || myChoice2 === 'scissors' &&
            opponentChoice2 === 'paper' || myChoice2 === 'paper' && opponentChoice2 === 'rock')
             {
               setMyScore(myScore+1);
               console.log(myChoice2);
             }
           else if(myChoice2 === 'rock' && opponentChoice2 === 'paper' || myChoice2 === 'scissors' &&
            opponentChoice2 === 'rock' || myChoice2 === 'paper' && opponentChoice2 === 'scissors')
            {
               setOpponentScore(opponentScore+1);
               console.log(myChoice2);
            }

    }

    function handleAccess(e)
    {
       if(e.key === ' ' || e.key === 'Enter')
       {
          e.currentTarget.click();
       }
    }



    return(
        <div onClick={handleClick} onKeyUp={handleAccess} className="active:opacity-60 scale-[0.6] lg:scale-[1] relative border-b-[2.3rem] cursor-pointer hover:scale-[0.7] lg:hover:scale-[1.1] w-[10.8rem]
         transition-all duration-500 h-[10.8rem] rounded-full"
        style={{
            borderColor:bColor2
        }}>
         <div tabIndex={0} className="border-[1.3rem] bg-slate-50 w-[11rem] h-[11rem] rounded-full 
         absolute top-[-8%] left-[-0.6%] inset-shadow-inner" 
         style={{
            borderColor:bColor
         }}>
            <div className="absolute top-[20%] w-[50%] h-[50%] left-[25%]">
                {children}
            </div>

         </div>
        </div>
    );
}




export function CircleCont2({bColor, bColor2, children}){   
       
    return(
        <div className="relative border-b-[2.3rem] scale-[0.6] lg:scale-[1.7]  w-[10.8rem]
         transition-all duration-500 h-[10.8rem] rounded-full"
        style={{
            borderColor:bColor2,
            //scale:scale
        }}>
         <div className="border-[1.3rem] bg-slate-50 w-[11rem] h-[11rem] rounded-full 
         absolute top-[-8%] left-[-0.6%] inset-shadow-inner" 
         style={{
            borderColor:bColor
         }}>
            <div className="absolute top-[20%] w-[50%] h-[50%] left-[25%]">
                {children}
            </div>

         </div>
        </div>
    );
}