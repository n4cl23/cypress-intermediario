
<p align="center">
  <img src="https://github.com/user-attachments/assets/41202643-324b-4956-a154-c2e7f1bfd1f3" alt="image" width="300"/>
</p>

<div align="center">
    <span"><strong>Testes Automatizados com Cypress - Intermediario</strong></span>
  </div>
<div align="center">Descrição do Projeto</div>

Este projeto visa proporcionar uma compreensão detalhada dos testes automatizados com o Cypress, uma ferramenta robusta e moderna para testes de front-end. O objetivo é guiar você através de diversos aspectos essenciais do Cypress, incluindo:
<div align="center">
Configuração do Ambiente Local: Preparar e configurar seu ambiente de desenvolvimento para suportar o Cypress.<br>
Instalação e Configuração do Cypress: Instruções para instalar e ajustar o Cypress conforme suas necessidades.<br>
Criação de Testes Automatizados para Interfaces Gráficas: Desenvolvimento e execução de testes para validar a funcionalidade e a usabilidade das interfaces gráficas.<br>
Testes Automatizados de API com Feedback Visual: Implementação de testes de APIs com visualização do feedback diretamente no navegador.<br>
Testes de APIs com Token de Acesso: Estratégias para testar APIs que requerem autenticação e autorização via tokens.<br>
Criação de Testes Otimizados e Focados: Métodos para escrever testes eficientes e precisos, garantindo a cobertura necessária sem redundâncias.<br>
Gerenciamento de Sessões de Usuário: Técnicas para salvar e restaurar sessões de usuário para melhorar a eficiência dos testes.<br>
Validação e Gerenciamento de Sessões: Monitoramento da validade das sessões e abordagem para lidar com a invalidação.<br>
Preparação e Limpeza de Dados: Processos para criar e limpar a massa de dados necessária antes da execução dos testes.<br>
Proteção de Dados Sensíveis: Práticas para assegurar a proteção de informações sensíveis, como senhas e tokens de acesso.<br>
Organização de Testes e Comandos em Camadas: Estruturação dos testes e comandos em diferentes camadas (API, CLI, GUI) para uma organização mais eficiente.<br>
Estruturação de Testes: Abordagem metodológica para criar testes com foco em pré-condições, ações e resultados esperados.<br>
Geração de Dados Aleatórios: Utilização de dados aleatórios para cobrir uma variedade de cenários de teste.<br>
Funcionalidades Experimentais do Cypress: Como habilitar e usar recursos experimentais oferecidos pelo Cypress.<br>
Execução de Comandos de Sistema Operacional: Capacidade de executar comandos do sistema operacional diretamente durante os testes.<br>
Testes de Leitura de Arquivos: Validação e manipulação de arquivos como parte do processo de teste.<br>
</div>




## Pré-requisitos

Antes de começar, certifique-se de que você tem os seguintes pré-requisitos instalados:

- **Node.js**: A versão recomendada é a 18.x ou superior. Você pode baixar o Node.js [aqui](https://nodejs.org/).
- **npm**: O gerenciador de pacotes do Node.js. Ele é instalado automaticamente com o Node.js.
- **Git**: Para controle de versão e gerenciamento de código. Você pode baixar o Git [aqui](https://git-scm.com/).

## Passos para Instalação das Dependências

1. **Clone o Repositório**: Se você ainda não tiver o projeto, clone o repositório do GitHub:

   ```sh
   git clone https://github.com/n4cl23/cypress-intermediario.git

2. **Navegue até o Diretório do Projeto:****
   ```sh
   cd nome-do-repositorio

3. **Instale as Dependências: Use o npm para instalar as dependências do projeto. Execute o comando abaixo no diretório do projeto:****

   ```sh
   npm install

Isso instalará o Cypress e outras dependências necessárias especificadas no package.json.

**Passos para Rodar os Testes**
1. **Abrir o Cypress em Modo Interativo: Para abrir o Cypress e rodar os testes em modo interativo, use o seguinte comando:****

   ```sh
   npm run cypress:open
Isso abrirá o Cypress Test Runner onde você pode escolher e executar os testes.

2. **Executar os Testes em Modo Headless: Para executar os testes em modo headless (sem interface gráfica), utilize o comando abaixo:****

   ```sh
   npm run cypress:run
Isso executará todos os testes em um ambiente de CI/CD ou terminal e exibirá os resultados no console.

**Outras Informações**<br>
Configuração do Cypress:<br> -A configuração do Cypress pode ser encontrada no arquivo cypress.config.js ou cypress.json, dependendo da versão do Cypress que você está usando.<br>
-Especificação dos Testes: Os testes são localizados na pasta cypress/e2e e seguem o padrão de escrita de testes do Cypress.<br>
-Fixtures: Dados de teste estáticos podem ser armazenados na pasta cypress/fixtures.<br>
-Para mais informações e documentação detalhada sobre o Cypress, consulte a documentação oficial do Cypress.<br>
