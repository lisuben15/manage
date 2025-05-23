
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Section1 } from './components/Section1'
import { Section2 } from './components/Section2'
import { Section3 } from './components/Section3'
import { Section4 } from './components/Section4'

function App() {


  return (
    <div>
     <Header></Header>
     <main className='flex flex-col gap-16'>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
     </main>
     <Footer></Footer>
     
    </div>
  )
}

export default App
