import "./index.css";
import { useState } from "react";


function App(){
  const [col, setCol] = useState("bg-slate-900")

  return (
    <>
      <div className={`flex h-screen justify-center items-end ${col}`} >
        <div className="bg-white rounded-xl  flex justify-around wrap gap-2 p-2 m-4">
          <div>
            <button className="bg-red-500 text-white rounded-lg p-1 w-20" onClick={()=>setCol("bg-red-500")} >RED</button>
          </div>

          <div>
            <button className="bg-green-500 text-white rounded-lg p-1 w-20" onClick={()=>setCol("bg-green-500")}>GREEN</button>
          </div>

          <div>
            <button className="bg-blue-500 text-white rounded-lg p-1 w-20" onClick={()=>setCol("bg-blue-500")}>BLUE</button>
          </div>

          <div>
            <button className="bg-violet-500 text-white rounded-lg p-1 w-20" onClick={()=>setCol("bg-violet-500")}>VIOLET</button>
          </div>

          <div>
            <button className="bg-orange-500 text-white rounded-lg p-1 w-20" onClick={()=>setCol("bg-orange-500")}>ORANGE</button>
          </div>

          <div>
            <button className="bg-teal-500 text-white rounded-lg p-1 w-20" onClick={()=>setCol("bg-teal-500")}>TEAL</button>
          </div>

          <div>
            <button className="bg-fuchsia-500 text-white rounded-lg p-1 w-20" onClick={()=>setCol("bg-fuchsia-500")}>FUCHSIA</button>
          </div>

          <div>
            <button className="bg-emerald-900 text-white rounded-lg p-1 w-20" onClick={()=>setCol("bg-emerald-900")}>EMERALD</button>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
