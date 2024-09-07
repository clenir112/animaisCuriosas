let buscaInput = document.getElementById('busca');
let buscaButton = document.getElementById('buscar-button');
let conteudoDiv = document.getElementById('conteudo');

// Cria um array de raças de cães
let racas = [
  { nome: 'Lhasa', descricao: `Apesar desse jeito brincalhão, os Lhasas não são cachorros cheios de energia. <br>
    Aliás, eles gostam bastante de um bom cochilo, sempre aconchegados perto de seus<br>
     pais humanos. Mas isso não significa que o pequeno não precise de exercício. <br>
     Como todo amiguinho de quatro patas, o ideal é montar um local onde o cachorro <br>
     possa brincar com seus itens preferidos.`

 },
  { nome: 'Golden Retriever', descricao: `É impossível não se apaixonar por um Golden. Cachorro é extremamente dócil e <br>
            amoroso com a família, o que explica bastante o amor por cães dessa raça.<br>
            O Golden Retriever é um cachorro muito apegado ao dono, então pode sofrer se<br>
            ficar muito tempo sozinho, sem a companhia de humanos. ` },

  { nome: 'Lulu da Pomerania', descricao: `Muito dóceis e extremamente ativos, os Lulus são excelentes companhias para<br>
                 os humanos com quem vivem. Aliás, eles se preocupam tanto com seus papais,<br>
                 e podem até tornarem-se ciumentos, mas isso não é um problema, pois mamães<br>
                 ou irmãos podem, inclusive, se adaptar à maneira deles de ser, tornando a <br>
                 vida a seu lado ainda mais feliz.` },
 
];

// Função para buscar raças de cães
function buscarRaca() {
  let buscaValor = buscaInput.value.trim().toLowerCase();
  let racaEncontrada = racas.find((raca) => raca.nome.toLowerCase().includes(buscaValor));
  
  if (racaEncontrada) {
    conteudoDiv.innerHTML = `
      <h2>${racaEncontrada.nome}</h2>
      <p>${racaEncontrada.descricao}</p>
    `;
    buscaInput.value = '';
  } else if (buscaValor.includes('lhasa') || buscaValor.includes('golden') || buscaValor.includes('lulu')) {
    // Se a busca não encontrar uma raça exata, mas incluir uma das palavras-chave, retorna uma mensagem personalizada
    conteudoDiv.innerHTML = `Você pode estar procurando por ${buscaValor}?`;
    buscaInput.value = '';
  } else {
    conteudoDiv.innerHTML = "Raça não encontrada";
  }
}
buscaButton.addEventListener('click', buscarRaca);
 
