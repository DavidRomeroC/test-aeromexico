import { setHouse } from "./setHouse";

test("La funcion debe retornar un string con el color de la casa si existe", () => {
    expect(setHouse("Gryffindor")).toBe("linear-gradient(162deg, rgba(255,44,27,1) 0%, rgba(255,137,84,1) 85%)")
})

test("La funcion debe retornar color negro si no existe una casa", () => {
    expect(setHouse("")).toBe("black")
})