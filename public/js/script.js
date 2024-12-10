function atualizarProdutos() {
    const select = document.getElementById("ordenar");
    const criterio = select.value.split("-");
    
    const sortBy = criterio[0];
    const order = criterio[1];

    const produtosContainer = document.getElementById('produtos-container');
    produtosContainer.innerHTML = '<div class="loading">Carregando...</div>';

    fetch(`http://localhost:8080/produto?sortBy=${sortBy}&order=${order}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar produtos");
            }
            return response.json();
        })
        .then(data => {
            produtosContainer.innerHTML = ''; 

            if (data.length === 0) {
                produtosContainer.innerHTML = '<p class="no-products">Nenhum produto encontrado</p>';
                return;
            }

            data.forEach(produto => {
                const produtoDiv = document.createElement('div');
                produtoDiv.classList.add('produto');

                produtoDiv.innerHTML = `
                    <img src="${produto.imagemString}" alt="${produto.nome}" class="produto-img">
                    <h3 class="produto-nome">${produto.nome}</h3>
                    <p class="produto-descricao">${produto.descricao}</p>
                    <span class="produto-preco">R$ ${produto.preco.toFixed(2)}</span>
                `;

                produtosContainer.appendChild(produtoDiv);
            });

            document.getElementById('total-produtos').innerText = `Total de produtos: ${data.length}`;
        })
        .catch(error => {
            produtosContainer.innerHTML = '<p class="error-message">Erro ao carregar produtos. Tente novamente mais tarde.</p>';
            console.error("Erro ao atualizar produtos:", error);
        });
}

function filtrarProdutos() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const produtos = document.querySelectorAll(".produto");

    produtos.forEach(produto => {
        const nome = produto.querySelector(".produto-nome").textContent.toLowerCase();

        if (nome.includes(searchTerm)) {
            produto.style.display = "";
        } else {
            produto.style.display = "none";
        }
    });
}
