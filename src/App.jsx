import ame from './smoll.svg'
import './App.css'
import { Controls, Table } from './components'

function App() {
  const datos = [
    {
      nombre: "Ariel",
      apellido: "Zarate",
      celular: "962747422",
      correo: "abc@gmail.com",
    },
    {
      nombre: "Diana",
      apellido: "Zavala",
      celular: "95485614",
      correo: "def@gmail.com",
    },
    {
      nombre: "Noe",
      apellido: "Sierra",
      celular: "99623171",
      correo: "nodax@gmail.com",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={ame} className="App-logo" alt="ame" />
        <p>Hello Ariel!</p>
        <Table datos={datos} />
        <Controls sumar={"Texto para Sumar"} restar={"Texto para Restar"} />
      </header>
    </div>
  )
}

export default App
