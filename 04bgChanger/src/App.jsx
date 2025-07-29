import { useState } from 'react'


function App() {
  const [color, setColor] = useState("orange")

  return (
    <>
      <div className="w-full h-screen duration-200" style = {{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2'>
          <div
          className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
            <button
            onClick={()=>{setColor("violet")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{background: "violet"}}>Violet</button>
            <button
            onClick={()=>{setColor("indigo")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{background: "indigo"}}>Indigo</button>
            <button
            onClick={()=>{setColor("green")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{background: "green"}}>Green</button>
            <button
            onClick={()=>{setColor("yellow")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{background: "yellow"}}>Yellow</button>
            <button
            onClick={()=>{setColor("orange")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{background: "orange"}}>Orange</button>
            <button
            onClick={()=>{setColor("red")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{background: "red"}}>Red</button>
            <button
            onClick={()=>{setColor("blue")}}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{background: "blue"}}>Blue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
