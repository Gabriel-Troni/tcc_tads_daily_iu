# TCC TADS Gateway

API Gateway responsável por controlar o acesso a recursos do backend, fornecendo autenticação, autorização, rate limiting e roteamento de requisições.

## 📋 Descrição

Este projeto é um API Gateway desenvolvido em Node.js com Express e TypeScript que atua como intermediário entre clientes (frontend/mobile) e o backend, fornecendo:

- **Autenticação e Autorização**: Validação de tokens JWT e controle de acesso baseado em roles
- **Rate Limiting**: Proteção contra abuso de API
- **CORS**: Controle de origem cruzada
- **Roteamento**: Distribuição de requisições para o backend apropriado
- **Validação**: Validação de rotas e parâmetros

## 🛠️ Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset tipado do JavaScript
- **Express** - Framework web para Node.js
- **JWT (jsonwebtoken)** - Autenticação baseada em tokens
- **Axios** - Cliente HTTP para comunicação com o backend
- **Zod** - Validação de schemas e variáveis de ambiente
- **CORS** - Middleware para Cross-Origin Resource Sharing
- **express-rate-limit** - Proteção contra rate limiting

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn** (gerenciador de pacotes)

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/raulbana/tcc-tads-gateway.git
cd tcc-tads-gateway
```

2. Instale as dependências:
```bash
npm install
```

ou

```bash
yarn install
```

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```env
PORT=3000
BASE_URL=/api/v1
FRONTEND_URL=http://localhost:3001
BACKEND_URL=http://localhost:8080
SECRET_KEY=sua-chave-secreta-jwt-aqui
```

### Variáveis de Ambiente

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `PORT` | Porta em que o servidor irá rodar | `3000` |
| `BASE_URL` | Prefixo base para todas as rotas da API | `/api/v1` |
| `FRONTEND_URL` | URL do frontend para configuração de CORS | `http://localhost:3001` |
| `BACKEND_URL` | URL do backend para onde as requisições serão roteadas | `http://localhost:8080` |
| `SECRET_KEY` | Chave secreta para validação de tokens JWT | `sua-chave-secreta-super-segura` |

⚠️ **Importante**: A `SECRET_KEY` deve ser a mesma utilizada pelo backend para gerar os tokens JWT.

## 🏃 Como Executar

### Modo Desenvolvimento

Para executar em modo desenvolvimento com hot-reload:

```bash
npm run dev
```

ou

```bash
yarn dev
```

Este comando compila o TypeScript e inicia o servidor com watch mode, recarregando automaticamente quando houver alterações.

### Modo Produção

Para executar em modo produção:

```bash
npm start
```

ou

```bash
yarn start
```

Este comando compila o TypeScript e inicia o servidor.

## 📁 Estrutura do Projeto

```
tcc-tads-gateway/
├── src/
│   ├── controllers/          # Controladores que processam requisições
│   │   ├── AdminController.ts
│   │   ├── CalendarController.ts
│   │   ├── ContentController.ts
│   │   ├── UserController.ts
│   │   └── ...
│   ├── middlewares/          # Middlewares de validação e segurança
│   │   ├── validateCors.ts
│   │   ├── validateJwt.ts
│   │   ├── validateBaseUrl.ts
│   │   ├── rateLimiting.ts
│   │   └── globalErrorHandler.ts
│   ├── routes/               # Definição de rotas
│   │   ├── adminRoutes.ts
│   │   ├── usersRoutes.ts
│   │   ├── contentRoutes.ts
│   │   └── ...
│   ├── types/                # Definições de tipos TypeScript
│   │   ├── RoleEnum.ts
│   │   └── UserToken.ts
│   ├── utils/                # Utilitários
│   │   └── getEnv.ts
│   └── index.ts              # Ponto de entrada da aplicação
├── dist/                     # Código compilado (gerado automaticamente)
├── docs/                     # Documentação OpenAPI
├── package.json
├── tsconfig.json
└── .env                      # Variáveis de ambiente (não versionado)
```

## 🔐 Autenticação e Autorização

O gateway utiliza JWT (JSON Web Tokens) para autenticação. As requisições protegidas devem incluir o token no header:

```
Authorization: Bearer <token>
```

### Roles Disponíveis

O sistema suporta diferentes níveis de acesso baseados em roles:

- `ADMIN` - Administrador do sistema
- `PROFESSIONAL` - Profissional de saúde
- `USER` - Usuário comum

Os middlewares de validação garantem que apenas usuários com as roles apropriadas possam acessar recursos específicos.

## 📝 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm start` | Compila o TypeScript e inicia o servidor em modo produção |
| `npm run dev` | Compila o TypeScript e inicia o servidor em modo desenvolvimento com watch |
| `npm test` | Executa os testes (quando implementados) |

## 🔄 Fluxo de Requisição

1. Cliente faz requisição para o gateway
2. Middleware de rate limiting verifica limites
3. Middleware de CORS valida origem
4. Middleware de JWT valida token (se necessário)
5. Middleware de autorização verifica permissões
6. Controller processa a requisição
7. Requisição é roteada para o backend (se necessário)
8. Resposta é retornada ao cliente

## 🐛 Tratamento de Erros

O gateway possui um middleware global de tratamento de erros que captura e formata erros de forma consistente, retornando respostas apropriadas ao cliente.

## 📚 Documentação da API

A documentação OpenAPI está disponível em `docs/openapi.json`. Você pode visualizar usando ferramentas como Swagger UI ou Postman.

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **TADS UFPR** - *Desenvolvimento inicial*

## 📞 Suporte

Para questões e suporte, abra uma issue no [GitHub](https://github.com/raulbana/tcc-tads-gateway/issues).

