import { useEffect, useReducer } from "react"

interface AuthState {
  validando: boolean
  token: string | null
  userName: string | null
  nombre: string | null
}

const initialState: AuthState = {
  validando: true,
  token: null,
  userName: "",
  nombre: "",
}

type loginPayload = {
  userName: string,
  nombre: string
}

type AuthAction = 
 | {type: 'logout'} 
 | {type: 'login', payload: loginPayload}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        validando: false,
        token: "",
        nombre: '',
        userName: '',
      }
    case 'login':
      return {
        validando: false,
        token: "ey726972b2nuhnhu",
        nombre: action.payload.nombre,
        userName: action.payload.userName,
      }
    default:
      return state
  }

}

export const Login = () => {

  const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    setTimeout(() => {
      dispatch({type: 'logout'})
    }, 1500)
  }, [])

  const login = () => {
    dispatch({
      type: 'login', 
      payload: {
        nombre: "Juan",
        userName: "jdhl27",
      }
    })
  }

  const logout = () => {
    dispatch({type: 'logout'})
  }

  if(validando){
    return(
      <>
        <h3>Login</h3>
        <div className="alert alert-info">
          Validating...
        </div> 
      </>
    )
  } else {
    return (
      <>
        <h3>Login</h3>

        {
          (token) ? 
            <div className="alert alert-success">
              Authenticated as {nombre}
            </div> 
          :
            <div className="alert alert-danger">
              Unauthenticated...
            </div> 

        }

        {
          (token) ?
            <button 
              className="btn btn-danger" 
              onClick={() => logout()}
            >
                Logout
            </button>
          :
            <button 
              className="btn btn-success" 
              onClick={() => login()}
            >
                Login
            </button>
        }
  
      </>
    )
  }

}
