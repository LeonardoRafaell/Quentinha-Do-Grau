function pegarValor() {
    let km = document.querySelector('.Distancia').value;
    CalculoEntrega(km);
}

function CalculoEntrega(km) {
    let valor = 1.50 * parseFloat(km);
    alert(`O valor da entrega fica: R$ ${valor.toFixed(2)}`)
    console.log(valor);
}

let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
 
  carrinho.push({ nome, preco });
  total += preco;
  atualizarCarrinho();
}

function removerDoCarrinho(index) {
 
  total -= carrinho[index].preco;
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const carrinhoElement = document.getElementById('carrinho');

  carrinhoElement.innerHTML = '';
 carrinho.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    
  
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.onclick = () => removerDoCarrinho(index);
    li.appendChild(botaoRemover);

    carrinhoElement.appendChild(li);
  });

//atualizar o HTML
  document.getElementById('total').textContent = total.toFixed(2);
}
