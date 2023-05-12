import { somaHorasExtras, calculaDescontos } from "../indexAula2.js";

describe('Testes de cálculos Folhas', () => {
    it('Deve retornar o valor das horas extras', () => {
        const esperado = 2500;
        const retornado = somaHorasExtras(2000, 500);

        expect(retornado).toBe(esperado);
    });

    it('Deve descontar o valor do salario', () => {
        const esperado = 2300;
        const retornado = calculaDescontos(2500, 200);

        expect(retornado).toBe(esperado);
    });
});



