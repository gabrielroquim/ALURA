import Item from "../item.js";
import Carrinho from "../carrinho.js";

describe('Testes do Carrinho', () => {
    it('Deve inicializar vazio', () => {
        const carrinho = new Carrinho();
        expect(carrinho.subtotal).toBeNull();
    });

    it('Deve ter itens', () => {
        const item = new Item('Banana', 2, 254);
        const item2 = new Item('Maca', 9.2, 10);
        const carrinho = new Carrinho();
        carrinho.adiciona(item);
        carrinho.adiciona(item2);

        expect(typeof carrinho).toBe('object');
        expect(carrinho.itens[0]).toBe(item);
        expect(carrinho.itens[1]).toBe(item2);
        expect(carrinho.itens).toContain(item);
        expect(carrinho.itens).toContain(item2);
    });

    it('Deve ter a propriedade "total" na inicialização', () => {
        const carrinho = new Carrinho();
        
        expect(carrinho).toHaveProperty('total');
    });
});