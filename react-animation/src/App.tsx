import './App.css'

function App() {

  const name = 'Rakib Hasan Learning React Animation';
  const nameArr = name.split('')

  return (
    <div className='main'>
      <div className='container'>
        {
          nameArr.map((item,i)=>(
          <span 
          className="alphabet"
          style={{transitionDelay:`${i * 30}ms`}}>{item}
          </span>
          )
          )
        }
      </div>
    </div>
  )
}

export default App
