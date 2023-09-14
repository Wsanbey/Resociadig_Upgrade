// Conteúdo que você deseja exibir no letreiro
 
const content = "Empresas cadastradas: 50 / Reasocializos cadastrados: 80 / "+
"vagas abertas: 80 / vagas prenchidas: 801";
 
// Div do letreiro
const tickerText = document.getElementById("ticker-text");

// Função para preencher o letreiro com o conteúdo
function populateTicker() {
    tickerText.textContent = content;
}

// Chame a função para preencher o letreiro inicialmente
populateTicker();


