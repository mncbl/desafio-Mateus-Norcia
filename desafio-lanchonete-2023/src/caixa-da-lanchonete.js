class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        // declarando itens do cardapio
      const cardapio = {
        cafe: { descricao: "Café", valor: 3.0 },
        chantily: { descricao: "Chantily extra", valor: 1.5 },
        suco: { descricao: "Suco Natural", valor: 6.2 },
        sanduiche: { descricao: "Sanduíche", valor: 6.5 },
        queijo: { descricao: "Queijo extra", valor: 2.0 },
        salgado: { descricao: "Salgado", valor: 7.5 },
        combo1: { descricao: "1 Suco + 1 Sanduíche", valor: 9.5 },
        combo2: { descricao: "1 Café + 1 Sanduíche", valor: 7.5 },
      };

      const formaDePagamento = ["debito", "credito", "dinheiro"];

      // Verificar metodo de pagamento
      if (!formaDePagamento.includes(metodoDePagamento)) {
        return "Forma de pagamento inválida";
      }

      let calcularValorDaCompra = 0;

      // Ve se há itens no carrinho
      if (itens.length === 0) {
        return "Não há itens no carrinho";
      }

      for (const itemNome of itens) {
        const [codigo, quantidade] = itemNome.split(",");
        const item = cardapio[codigo];

        // Verificar se o item é válido
        if (!item) {
          return "Item inválido";
        }
        // verifica as condições
        if (!codigo.startsWith("combo")) {
          calcularValorDaCompra += item.valor * parseInt(quantidade);

          const itemPrincipalCodigo = codigo.replace("extra", "");
          if (codigo.endsWith("extra") && !itens.includes(itemPrincipalCodigo)) {
            return "Item extra não pode ser pedido sem o principal";
          }
        }
      }
      // Aplicar desconto ou acréscimo com base no método de pagamento
      if (metodoDePagamento === "dinheiro") {
        calcularValorDaCompra -= calcularValorDaCompra * 0.1;
      } else if (metodoDePagamento === "credito") {
        calcularValorDaCompra += calcularValorDaCompra * 0.05;
      }
      // Retorna valor
      return `R$ ${calcularValorDaCompra.toFixed(2)}`;
    }
  }

  export { CaixaDaLanchonete };
