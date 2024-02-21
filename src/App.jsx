import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('')
  return (
    <>
      <div className=' flex justify-center items-center'>
        <div className=' bg-slate-300 p-4 pt-20 rounded-lg'>
        <input className=' px-1 py-5 my-5 text-3xl font-normal text-end font-Poppins' type="text" value={value} readOnly/>          
            <div className=' flex items-center gap-6 justify-center mb-4'>
              <input type="button" value="AC" onClick={() => setValue('')} className=' bg-white w-[30px] hover:text-white hover:bg-black duration-300 h-[30px] rounded-md flex items-center cursor-pointer justify-center shadow-lg'/>
              <input type="button" value="de" onClick={() => setValue(value.slice(0, -1))} className=' bg-white w-[30px] hover:text-white hover:bg-black duration-300 h-[30px] rounded-md flex items-center cursor-pointer justify-center shadow-lg font-medium text-[16px]  text-center'/>
              <input type="button" value="%" onClick={e => setValue(value + e.target.value)} className=' bg-white w-[30px] hover:text-white hover:bg-black duration-300 h-[30px] rounded-md flex items-center cursor-pointer justify-center shadow-lg font-medium text-[16px]  text-center'/>
              <input type="button" value="/" onClick={e => setValue(value + e.target.value)} className=' bg-white w-[30px] hover:text-white hover:bg-black duration-300 h-[30px] rounded-md flex items-center cursor-pointer justify-center shadow-lg font-medium text-[16px]  text-center'/>           
            </div>
            <div className=' flex items-center gap-6 justify-center mb-4'>
              <input type="button" value="7" onClick={e => setValue(value + e.target.value)} className=' bg-white w-[30px] hover:text-white hover:bg-black duration-300 h-[30px] rounded-md flex items-center cursor-pointer justify-center shadow-lg font-medium text-[16px]  text-center'/>
              <input type="button" value="8" onClick={e => setValue(value + e.target.value)} className=' bg-white w-[30px] hover:text-white hover:bg-black duration-300 h-[30px] rounded-md flex items-center cursor-pointer justify-center shadow-lg font-medium text-[16px]  text-center'/>
              <input type="button" value="9" onClick={e => setValue(value + e.target.value)} className=' bg-white w-[30px] hover:text-white hover:bg-black duration-300 h-[30px] rounded-md flex items-center cursor-pointer justify-center shadow-lg font-medium text-[16px]  text-center'/>
              <input type="button" value="*" onClick={e => setValue(value + e.target.value)} className=' bg-white w-[30px] hover:text-white hover:bg-black duration-300 h-[30px] rounded-md flex items-center cursor-pointer justify-center shadow-lg font-medium text-[16px]  text-center'/>           
            </div>
            <div className=' flex items-center gap-6 justify-center mb-4'>
              <input type="button" value="4" onClick={e => setValue(value + e.target.value)} className=' bg-white w-[30px] hover:text-white hover:bg-black duration-300 h-[30px] rounded-md flex items-center cursor-pointer justify-center shadow-lg font-medium text-[16px]  text-center'/>
              <input type="button" value="5" onClick={e => setValue(value + e.target.value)} className=' bg-white w-[30px] hover:text-white hover:bg-black duration-300 h-[30px] rounded-md flex items-center cursor-pointer justify-center shadow-lg font-medium text-[16px]  text-center'/>
              <input type="button" value="6" onClick={e => setValue(value + e.target.value)} className=' bg-white w-[30px] hover:text-white hover:bg-black duration-300 h-[30px] rounded-md flex items-center cursor-pointer justify-center shadow-lg font-medium text-[16px]  text-center'/>
              <input type="button" value="-" onClick={e => setValue(value + e.target.value)} className=' bg-white w-[30px] hover:text-white hover:bg-black duration-300 h-[30px] rounded-md flex items-center cursor-pointer justify-center shadow-lg font-medium text-[16px]  text-center'/>           
            </div>
            <div className=' flex items-center gap-6 justify-center mb-4'>
              <input type="button" value="1" onClick={e => setValue(value + e.target.value)} className=' bg-white w-[30px] hover:text-white hover:bg-black duration-300 h-[30px] rounded-md flex items-center cursor-pointer justify-center font-medium text-[16px]  text-center'/>
              <input type="button" value="2" onClick={e => setValue(value + e.target.value)} className=' bg-white w-[30px] hover:text-white hover:bg-black duration-300 h-[30px] rounded-md flex items-center cursor-pointer justify-center font-medium text-[16px]  text-center'/>
              <input type="button" value="3" onClick={e => setValue(value + e.target.value)} className=' bg-white w-[30px] hover:text-white hover:bg-black duration-300 h-[30px] rounded-md flex items-center cursor-pointer justify-center font-medium text-[16px]  text-center'/>
              <input type="button" value="+" onClick={e => setValue(value + e.target.value)} className=' bg-white w-[30px] hover:text-white hover:bg-black duration-300 h-[30px] rounded-md flex items-center cursor-pointer justify-center font-medium text-[16px]  text-center'/>           
            </div>
            <div className=' flex items-center gap-6 justify-center mb-4'>
              <input type="button" value="0" onClick={e => setValue(value + e.target.value)} className=' bg-white w-[30px] hover:text-white hover:bg-black duration-300 h-[30px] rounded-md flex items-center cursor-pointer justify-center font-medium text-[16px]  text-center'/>
              <input type="button" value="." onClick={e => setValue(value + e.target.value)} className=' bg-white w-[30px] hover:text-white hover:bg-black duration-300 h-[30px] rounded-md flex items-center cursor-pointer justify-center font-medium text-[16px]  text-center'/>
              <input type="button" value="=" onClick={() => setValue(eval(value))} className=' bg-white w-[30px] hover:text-white hover:bg-black duration-300 h-[30px] rounded-md flex items-center cursor-pointer justify-center font-medium text-[16px]  text-center'/>          
            </div>
        </div>
      </div>
    </>
  )
}

export default App
