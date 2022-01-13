import { Login } from './components/Login';
import { Users } from './components/Users';
import { Funciones } from './typescript/Funciones';
import { Objetos } from './typescript/Objetos';
import { TiposBasicos } from './typescript/TiposBasicos';

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduction Typescript</h1>
      <hr/>
      {/* <TiposBasicos /> */}
      {/* <hr/> */}
      {/* <Objetos/> */}
      {/* <hr/> */}
      {/* <Funciones/> */}
      {/* <hr/> */}
      {/* <Login/> */}
      <Users/>
    </div>
  )
}

export default App;