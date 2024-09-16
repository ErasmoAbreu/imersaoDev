function pesquisar() {
    // 1. Obtém a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    // 2. Obtém o valor do campo de pesquisa, convertendo para minúsculas para facilitar a comparação.
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // 3. Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        // Se estiver vazio, exibe uma mensagem informando que nenhum atleta foi encontrado e encerra a função.
        section.innerHTML = "Nenhum atleta encontrado. Você precisa digitar o nome de um atleta ou esporte";
        return;
    }

    // 4. Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = '';

    // 5. Itera sobre cada item (atleta) na lista de dados.
    for (let dado of dados) {
        // 6. Verifica se o termo de pesquisa está presente no título, descrição ou tags do atleta.
        if (dado.titulo.toLowerCase().includes(campoPesquisa) ||
            dado.descrisao.toLowerCase().includes(campoPesquisa) ||
            dado.tags.toLowerCase().includes(campoPesquisa)) {
            // 7. Se o termo foi encontrado, cria uma div com as informações do atleta e adiciona à string de resultados.
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href=${dado.redeSocial}" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descrisao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    // 8. Verifica se a string de resultados está vazia (nenhum atleta encontrado).
    if (!resultados) {
        // Se estiver vazia, define a mensagem de "Nenhum atleta encontrado".
        resultados = "Nenhum atleta encontrado";
    }

    // 9. Atualiza o conteúdo da seção HTML com os resultados da pesquisa.
    section.innerHTML = resultados;
}