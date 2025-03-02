import { useCounter } from "../Hooks/useCounter"

export const ContadorComponent = () => {

    const {contador, incrementar, decrementar, resetear} = useCounter(0)
  return (
    <>
    <h1>Contador: {contador}</h1>
    <button className="btn btn-primary" onClick={() => incrementar()}>+1</button>
    <button className="btn btn-danger" onClick={() => resetear()}>Reset</button>
    <button className="btn btn-secondary" onClick={() => decrementar()}>-1</button>
    </>
  )
}
