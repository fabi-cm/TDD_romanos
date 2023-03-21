import conversor from "./conversor";

describe("Convertir decimal a romano", () =>{
    it("Al introducir 1 deberia mostrar I", () => {
        expect(conversor(1)).toEqual('I');
    });
    it("Al introducir 2 deberia mostrar II", () => {
        expect(conversor(2)).toEqual('II');
    });
});