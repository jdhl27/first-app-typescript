interface Persona {
  fullName: string;
  age: number;
  // address: {};
  // address: {
  //   street: string;
  //   city: string;
  //   country: string;
  // }
  address: Address
}

interface Address {
  street: string;
  city: string;
  country: string;
}

export const Objetos = () => {

  const persona: Persona = {
    fullName: "Juan",
    age: 30,
    address: {
      street: "Calle falsa 123",
      city: "Ciudad falsa",
      country: "Pais falso"
    }
  }

  return (
    <>
      <h3>Objects</h3>
      <code>
        <pre>
          {JSON.stringify(persona, null, 2)}
        </pre>
      </code>
    </>
  )
}
