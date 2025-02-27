import cancel from '/images/icon-close.svg'
import proptype from 'prop-types'


Rules.propTypes = {
    setShowRules: proptype.func,
    showRules: proptype.bool,
    children: proptype.object
}
RulesButton.propTypes = {
    setShowRules: proptype.func  
}

export default function Rules({setShowRules, children}){

    function handleClick()
    {
        setShowRules(false);
    }
    function handleClick2(){
        setShowRules(false);

    }

    return(
       <>
    <div onClick={handleClick2} className="fixed top-[0px] w-[100vw] h-[100vh] bg-black/30"></div>
        <div id='rules' className="fixed flex justify-center items-center flex-col lg:block 
        h-[100vh] w-[100vw] top-0 lg:h-auto lg:w-auto lg:top-[15%] lg:left-[35%] py-[2%] px-[4%] bg-white z-10
        rounded-none lg:rounded-lg">
            <h1 className="text-slate-700 text-3xl font-bold mb-[15%]">RULES</h1>
            <img alt="" onClick={handleClick} className="absolute top-[9%] left-[86%] 
            cursor-pointer" src={cancel}></img>
            {children}
        </div>
       </>
    );
}

export function RulesButton({setShowRules}){
    
    function handleShowRules()
    {
        setShowRules(true);
    }
    return(
       <>
         <div className=" flex items-center mt-[2rem] lg:mt-0 justify-center lg:justify-end px-[2rem] py-[2rem]">
            <button id="rulesButton" onClick={handleShowRules} className="cursor-pointer hover:bg-white
             hover:text-bg1 border border-white rounded-md px-[1.8rem] py-[0.3rem] 
             tracking-widest text-white">RULES</button>
          </div>
       </>
    );
}