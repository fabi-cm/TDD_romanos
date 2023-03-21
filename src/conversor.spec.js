import conversor from "./conversor";

describe("Convertir decimal a romano", () =>{
    it("Al introducir 1 deberia mostrar I", () => {
        expect(conversor(1)).toEqual('I');
    });
    it("Al introducir 2 deberia mostrar II", () => {
        expect(conversor(2)).toEqual('II');
    });
    it("Al introducir 5 deberia mostrar V", () => {
        expect(conversor(5)).toEqual('V');
    });
    it("Al introducir 7 deberia mostrar VII", () => {
        expect(conversor(7)).toEqual('VII');
    });
    it("Al introducir 77 deberia mostrar LXXVII", () => {
        expect(conversor(77)).toEqual('LXXVII');
    });
});