function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa ) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do jogo ou gênero</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    // Itera sobre cada jogo na lista de jogos
    for (let jogo of jogos) {
        titulo = jogo.titulo.toLowerCase()
        descricao = jogo.descricao.toLowerCase()
        tags = jogo.tags.toLowerCase()
        // se título includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
         // Cria uma nova div para cada jogo e adiciona as informações relevantes
        resultados += `
            <div class="item-resultado">
                <h2>${jogo.titulo}</h2>
                <p class="descricao-meta">${jogo.descricao}</p>
                <a href=${jogo.link} target="_blank">Saiba mais</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atualiza o conteúdo HTML da seção com os resultados formatados
    section.innerHTML = resultados;
}