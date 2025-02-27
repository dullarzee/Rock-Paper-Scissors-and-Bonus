import proptype from 'prop-types'

HeaderSection.propTypes = {
    children: proptype.object,
    myScore: proptype.number,
    opponentScore:proptype.number
}

export default function HeaderSection({children, myScore, opponentScore}){
  return(
     <>
      {/*header node for displaying score and game title*/}
      <header className="flex lg:items-center justify-between border-[3px] font-bold border-slate-300/40 w-[95%] lg:w-[55%] mx-auto my-[3%] rounded-2xl
          px-[2%] p-[1%] h-[6rem] lg:h-full gap-x-[10%] lg:gap-0">

             {children}

            <section className="flex basis-[38%] gap-x-[3%] px-[0.8rem] justify-between w-[45%] bg-slate-50 rounded-lg items-center">
               <div className="flex py-[10%] flex-col items-center">
                <span className="text-xs lg:text-xl font-semibold text-blue-800">YOUR SCORE</span>
                <span className="text-3xl lg:text-6xl text-slate-600">{myScore}</span>
               </div>
             
               <span className="justify-self-center h-[0.15rem] w-[1rem] lg:h-[0.35rem] bg-slate-600 mt-[35%] lg:mt-[10%]"></span>

               <div className="flex py-[10%] flex-col items-center">
                <span className="text-xs lg:text-xl font-semibold text-amber-600">OPP. SCORE</span>
                <span className="text-3xl lg:text-6xl text-slate-600">{opponentScore}</span>
               </div>
            </section>
              
          </header>
     </>
  );
}