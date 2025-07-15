## COLETIVO: Uma Aplicação para o Gerenciamento de Finanças Compartilhadas

O **COLETIVO** é um sistema de controle financeiro projetado para grupos de pessoas que dividem despesas em comum. Embora tenha sido pensado principalmente para universitários em moradias compartilhadas, pode ser utilizado por qualquer grupo com gastos coletivos. O projeto foi desenvolvido no âmbito da disciplina de Engenharia de Software da **Universidade Federal do Ceará (UFC) - Campus Quixadá**.

O objetivo principal do sistema é simplificar o controle financeiro coletivo, promovendo transparência, justiça na divisão dos gastos e praticidade no acompanhamento das finanças.

A plataforma permite que os usuários:

- Criem espaços colaborativos chamados "organizações de gastos".
- Registrem, alterem, consultem e deletem despesas dentro dessas organizações.
- Categorizem os gastos, apliquem filtros e visualizem as informações por meio de gráficos.

<hr>

**Equipe de desenvolvimento:**

- [Júlio Mateus Morais](https://github.com/eujuliomorais)
- [Lucas Almeida Barbosa](https://github.com/lucas-lxx)
- [Matheus Moreira Nobre](https://github.com/MatheusNobreM)
- [Yuri Lima R. de Oliveira](https://github.com/DevYuriOliveira73)

<hr>

### Como Executar o Projeto:

#### Pré-requisitos

Antes de começar, certifique-se de que você tem as seguintes ferramentas instaladas em sua máquina:
- [Node.js](https://nodejs.org/) 
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
<br>
<br>

1.  **Clonar repositório:**<br>
- Execute o seguinte comando para clonar o repositório:
```bash
    git clone [LINK-DO-REPOSITÓRIO]
```

2.  **Executar o backend:**<br>
- Execute o seguinte comando para subir os containers do backend:
```bash
  sudo docker compose up --build
```

3.  **Execute o frontend:**<br>
- Executes os seguintes comandos para respectivamente naveguar até o diretório frontend, instalar as bibliotecas e pacotes necessários e iniciar o servidor de desenvolvimento do VITE:
```bash
  cd frontend
  npm install
  npm run dev
```
