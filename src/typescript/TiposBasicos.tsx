export const TiposBasicos = () => {

  // Tipos de datos
  const phone: string | number = "1234555";
  const name: string = "Juan";
  const age: number = 30;
  const isActive: boolean = true;
  const powers: string[] = ["Super-Sayan", "Super-Speed", "Super-Strength"];

  return (
    <>
      <h3>Basic types</h3>
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Age: {age}</p>
      <p>Is active: {isActive ? 'Yes' : 'No'}</p>
      <p>Powers: {powers.join(', ')}</p>
    </>
  )
}
