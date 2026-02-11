# DailyIU

O DailyIU é um sistema desenvolvido para oferecer treinos personalizados voltados ao alívio dos sintomas de incontinência urinária. Os treinos são ajustados à condição de cada usuário e gerados automaticamente após um breve questionário. O sistema também permite o registro de episódios de incontinência, acesso a conteúdo informativo por meio do módulo social e suporte dos administradores, que possuem acesso dedicado para moderação e atualização contínua dos treinos.

As principais funcionalidades incluem:

- **Diário Miccional**: Registro detalhado de eventos e padrões
- **Treinos Personalizados**: Prescrição de exercícios específicos de acordo com perfil do usuário
- **Rede de Apoio**: Interação e compartilhamento entre usuários
- **Conteúdo Educativo**: Informações relevantes e orientações
- **Multiplataforma**: Acesso via web, android e IOS
- **Arquitetura Completa**: Frontend web + API Gateway + Backend + App Mobile

## Tecnologias

### Frontend Web
- **Next.js 15.3.3**
- **React 19.0.0**
- **TypeScript 5**
- **Tailwind CSS 4**

### Mobile
- **React Native 0.79.3**
- **Styled Components**
- **React Navigation 7**

### API Gateway
- **Node.js + TypeScript**
- **Express 5.1.0**
- **JWT**
- **Rate Limiting**

### Backend & Infraestrutura
- **Kotlin 1.9.25 + Spring Boot 3.5.0**
- **Java 17**
- **SQL Server**
- **Azure Storage Blob**
- **Spring Data JPA**
- **SpringDoc OpenAPI**

## Arquitetura do Sistema

O sistema segue uma **arquitetura monolítica com API Gateway** para controle de acesso e roteamento:

![Arquitetura do Sistema](./arquitetura.png)


## Funcionalidades Detalhadas

### 📝 Diário/Calendário
- **Registro de Eventos**: Tipos de eventos (urgência, escape, noturno, etc.)
- **Calendário Interativo**: Visualização mensal com indicadores visuais
- **Filtros e Busca**: Filtragem por período, tipo e intensidade
- **Relatórios**: Estatísticas e gráficos de progresso
- **Exportação**: PDF e CSV dos dados do diário

### 💪 Exercícios e Treinos
- **Biblioteca de Exercícios**: Exercícios para assoalho pélvico
- **Planos Personalizados**: Criados baseados no questionário inicial
- **Acompanhamento**: Registro de frequência e dificuldade
- **Vídeos Demonstrativos**: Integração com vídeos de exercícios
- **Lembretes**: Notificações para realizar exercícios

### 📚 Conteúdos Educativos
- **Posts e Artigos**: Conteúdo informativo sobre IU
- **Categorias**: Organização por temas (exercícios, dieta, etc.)
- **Sistema Social**: Likes, comentários e compartilhamento
- **Upload de Mídia**: Imagens e vídeos nos conteúdos
- **Busca Avançada**: Pesquisa por título, conteúdo e tags

### 👤 Gestão de Usuários
- **Perfil Completo**: Dados pessoais e preferências
- **Questionário Inicial**: Avaliação personalizada
- **Histórico**: Registro de todas as atividades
- **Configurações**: Privacidade e notificações

### 🎯 Onboarding Personalizado
- **Questionário Detalhado**: Avaliação do tipo e gravidade da IU
- **Plano Inicial**: Geração automática de plano de exercícios
- **Educação**: Conteúdo introdutório personalizado

### ♿ Acessibilidade
- **Contraste**: Modo alto contraste
- **Tamanhos de Fonte**: Ajuste dinâmico do tamanho

### 🔐 Autenticação e Segurança
- **JWT Tokens**: Autenticação stateless
- **Recuperação de Senha**: Fluxo seguro por e-mail
- **Proteção de Rotas**: Middleware Next.js

### 👨‍💼 Painel Administrativo
- **Gestão de Usuários**: Ativação, bloqueio e edição
- **Moderação**: Aprovação de conteúdos e denúncias
- **Relatórios**: Exportação de dados do sistema
- **Gestão de Conteúdos**: Criação, edição e exclusão de conteúdos
- **Gestão de Exercícios**: Criação, edição e exclusão de exercícios
- **Gestão de Treinos**: Criação, edição e exclusão de treinos

## Licença

Este projeto está sob a licença especificada no arquivo `LICENSE`.

## Desenvolvedores

Este projeto foi desenvolvido por estudantes do curso de **Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)** como Trabalho de Conclusão de Curso (TCC):

- **[Alisson Gabriel Santos](https://github.com/AlissonGSantos)**
- **[Gabriel Alamartini Troni](https://github.com/Gabriel-Troni)**
- **[Leonardo Felipe Salgado](https://github.com/Salgado2004)**
- **[Pedro Henrique Souza](https://github.com/Pedro-H108)**
- **[Raul Ferreira Bana](https://github.com/raulbana)**

## Agradecimentos Especiais

Agradecemos imensamente ao **Professor Dr. Alexander Robert Kutzke** por sua orientação dedicada, conhecimento compartilhado e apoio fundamental durante todo o desenvolvimento deste projeto.

Expressamos também nossa gratidão à **Universidade Federal do Paraná (UFPR)** e ao curso de **Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)** por proporcionar a base acadêmica e os recursos necessários para nosso desenvolvimento profissional e técnico.
