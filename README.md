# 🃏 Projeto: API de Produtos com Cartinhas de Yu-Gi-Oh!

Bem-vindo ao repositório do meu projeto de API de produtos com **cartinhas de Yu-Gi-Oh!**. Este projeto tem como objetivo exibir informações sobre cartas colecionáveis, permitindo buscas, filtros e gerenciamento de produtos. 🚀✨

## 🔮 Tecnologias Utilizadas

### Backend
- **Java**: Linguagem principal do projeto.
- **Maven**: Gerenciador de dependências e build.
- **MySQL Workbench**: Modelagem e gerenciamento do banco de dados.

### Frontend
- **HTML5**: Estrutura das páginas.
- **CSS3**: Estilização e layout responsivo.
- **JavaScript**: Interatividade e conexão com a API.

---

## ⚙️ Funcionalidades

- **Filtrar por Nome**: Pesquise cartas pelo nome.
- **Ordenação Alfabética**: Exiba as cartas em ordem **A-Z** ou **Z-A**.
- **Filtrar por Preço**: Organize os produtos pelo valor (crescente ou decrescente).

---

## 🌌 Como Executar o Projeto

### Pré-requisitos:
1. **JDK** 17 ou superior.
2. **Maven** configurado no ambiente.
3. **MySQL Workbench** instalado com acesso ao banco de dados.
4. Navegador atualizado para rodar o frontend.

### Passo a passo:

#### Backend:
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/yugioh-api.git
2. Configure o arquivo application.properties com as credenciais do banco de dados:
   ```bash
   spring.datasource.url=jdbc:mysql://localhost (altere a porta e o nome do banco de dados)
   spring.datasource.username=seu-usuario
   spring.datasource.password=sua-senha
3. Execute o comando Maven para baixar dependências e rodar o projeto:
``` bash
mvn spring-boot:run


