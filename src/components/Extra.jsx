import { useEffect, useState } from "react"


const Extra = () => {
    const [time,settime]=useState({minutes:0,seconds:0});
    const [Running,setRunning]=useState(true);
    useEffect(()=>{
        let intervaild;
        if(Running){
            intervaild =setInterval(()=>{
                settime((prevtime)=>{
                    const seconds =prevtime.seconds + 1;
                    const minutes =Math.floor(seconds / 60);
                    return {minutes,seconds:seconds % 60};
                });
            },1000)
        }
        return ()=> clearInterval(intervaild)
    },[Running])


    const toggletime =()=>{
        setRunning(!Running)
    }
    const resettime=()=>{
        settime({minutes:0,seconds :0})
    }

  return (
    <div className="min-h-[600px] flex justify-center items-center">
      
      <div className="">
      <div className="card w-80 bg-green-200 ">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Timer</h2>
    <h1>Time : {time.minutes} minutes {time.seconds} seconds</h1>
    <div className="card-actions justify-end">
    <button className="btn btn-outline btn-success" onClick={toggletime}>{Running?'Stop':'start'}</button>
    <button className="btn btn-outline btn-success" onClick={resettime}>reset</button>
    </div>
  </div>
</div>
      
      
      </div>
    </div>
  )
}

export default Extra
