# mobileRickMorty

Aplicativo móvel desenvolvido com Ionic e Angular que consome a Rick and Morty API para exibir informações sobre personagens da série.

## Descrição do projeto

Este aplicativo foi desenvolvido como projeto de avaliação para a disciplina de Ionic e Angular. Utiliza a Rick and Morty API para exibir informações sobre personagens da série, permitindo navegação entre diferentes telas e visualização de detalhes dos personagens.

### Funcionalidades

- **Listagem de Personagens**: Exibe uma lista paginada de todos os personagens da série Rick and Morty
- **Busca**: Permite buscar personagens por nome
- **Detalhes do Personagem**: Mostra informações detalhadas sobre um personagem específico
- **Navegação por Abas**: Interface organizada em três abas principais
- **Design Responsivo**: Interface adaptável a diferentes tamanhos de tela

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- Node.js (versão 16 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Ionic CLI (`npm install -g @ionic/cli`)
- Angular CLI (`npm install -g @angular/cli`)

## Como baixar

1. Clone o repositório:
```bash
git clone https://github.com/seuusuario/mobileRickMorty.git
```

2. Navegue até o diretório do projeto:
```bash
cd mobileRickMorty
```

3. Instale as dependências:
```bash
npm install
```

4. Execute o projeto em modo de desenvolvimento:
```bash
ionic serve
```

5. Acesse o aplicativo no navegador através do endereço: `http://localhost:8100`

### Build para produção

Para gerar uma versão otimizada para produção:

```bash
ionic build
```

Os arquivos de produção serão gerados na pasta `www/`.

## Contribuindo com o projeto

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de código

- Use TypeScript para todos os arquivos de código
- Siga as convenções de nomenclatura do Angular
- Mantenha os componentes pequenos e focados em uma única responsabilidade
- Documente funções complexas com comentários

## Autor

**Alexsandro Acioli Pimentel Filho**
- Email: aciolialexsandro12@gmail.com
- GitHub: [[@seuusuario](https://github.com/seuusuario)](https://github.com/ac1oli/mobileRickMorty)
- Instituição: UNINASSAU
- Curso: Desenvolvimento de Aplicativos Móveis

## Licença

Este projeto está licenciado sob a Licença Creative Commons - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

### Tecnologias Utilizadas

- **Ionic Framework**: Framework para desenvolvimento de aplicativos móveis híbridos
- **Angular**: Framework web para construção de aplicações single-page
- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript
- **Rick and Morty API**: API REST gratuita com dados da série Rick and Morty
- **HTML5**: Linguagem de marcação para estruturação do conteúdo
- **CSS3**: Linguagem de estilo para apresentação visual

### Estrutura do Projeto

```
src/
├── app/
│   ├── services/
│   │   └── rick-morty.service.ts    # Serviço para consumo da API
│   ├── tab1/                        # Aba de listagem de personagens
│   │   ├── tab1.page.html
│   │   ├── tab1.page.ts
│   │   └── tab1.page.scss
│   ├── tab2/                        # Aba de detalhes do personagem
│   │   ├── tab2.page.html
│   │   ├── tab2.page.ts
│   │   └── tab2.page.scss
│   ├── tab3/                        # Aba sobre o autor
│   │   ├── tab3.page.html
│   │   ├── tab3.page.ts
│   │   └── tab3.page.scss
│   └── tabs/                        # Componente de navegação por abas
│       ├── tabs.page.html
│       └── tabs.page.ts
├── assets/                          # Recursos estáticos
└── theme/                           # Arquivos de tema e estilos globais
```

### API Utilizada

Este projeto consome a [Rick and Morty API](https://rickandmortyapi.com/), uma API REST gratuita que fornece dados sobre:

- **Personagens**: Informações detalhadas sobre os personagens da série
- **Localizações**: Dados sobre os diferentes planetas e dimensões
- **Episódios**: Informações sobre os episódios da série

#### Endpoints utilizados:

- `GET /api/character` - Lista todos os personagens (com paginação)
- `GET /api/character/{id}` - Obtém detalhes de um personagem específico
- `GET /api/character/?name={name}` - Busca personagens por nome

