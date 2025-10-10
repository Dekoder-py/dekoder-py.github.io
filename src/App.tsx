import './App.css'

function App() {
  return (
    <>
      <div id='welcome' className='h-screen flex flex-col items-center justify-center text-center'>
        <h1 className='text-3xl font-bold'>Hi! I'm Kyle.</h1>
        <h2 className='pb-20 text-2xl'>Welcome to my corner of the internet!</h2>
        <div id='mouse-scroll'>
        </div>
      </div>
      
      <div id='about' className='flex flex-col items-center justify-center text-center pb-20'>
        <h2 className='text-2xl font-bold'>About Me</h2>
        <p>I'm a 15 year old programmer based in New Zealand.</p>
      </div>

    </>
  )
}

export default App
