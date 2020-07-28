
const soma = (a, b) => a + b

const chamaAlgumaCoisa = (cadastro) => {
    cadastro("Thales")
}


describe('Testes da Camila', () => {

    test('Soma dois numeros', () => {
        const resultado = soma(10, 5)
        expect(resultado).toEqual(15)
    })


    test('Chama função', () => {
        const funcaoMock = jest.fn()
        chamaAlgumaCoisa(funcaoMock)
        expect(funcaoMock).toHaveBeenCalledWith("Thales")
    })
})