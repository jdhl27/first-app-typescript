export const Funciones = () => {

  const sumar = (a: number, b: number): number => {
    return a + b
  }

  return (
    <>
      <h3>Functions</h3>
      <span>sum: {sumar(21, 6)}</span>
    </>
  )
}
