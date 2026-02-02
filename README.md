# Bootcamp JavaScript Full Stack - Generation Brasil

<br />

<div align="center">
	<img src="https://i.imgur.com/izFuHID.png" title="source: imgur.com" width="35%"/>
</div>

<br />

<div align="center">
  <img src="https://img.shields.io/github/languages/top/rafaelq80/typescript_tjs13?style=flat-square" />
  <img src="https://img.shields.io/github/repo-size/rafaelq80/typescript_tjs13?style=flat-square" />
  <img src="https://img.shields.io/github/languages/count/rafaelq80/typescript_tjs13?style=flat-square" />
  <img src="https://img.shields.io/github/last-commit/rafaelq80/typescript_tjs13?style=flat-square" />
    <br />
  <img src="https://img.shields.io/github/issues/rafaelq80/typescript_tjs13?style=flat-square" />
  <img src="https://img.shields.io/github/issues-pr/rafaelq80/typescript_tjs13?style=flat-square" />
     <img src="https://img.shields.io/badge/bootcamp-Generation Brasil-orange?style=flat-square)"/>


</div>


------

<br />

## 1. Sobre o Repositório



Este repositório reúne os **exercícios práticos desenvolvidos durante o Bootcamp JavaScript Full Stack** da [Generation Brasil](https://brazil.generation.org/).

O conteúdo abrange desde os **fundamentos da linguagem TypeScript**, até os conceitos essenciais para lógica de programação e desenvolvimento moderno, incluindo:

- Manipulação de coleções e arrays
- Estruturas de dados
- Funções e **Arrow Functions** (programação funcional)
- Programação Orientada a Objetos (POO)
- Tratamento de erros e exceções

Os exemplos foram desenvolvidos com base nas aulas ao vivo (*Live Codes*) e em exercícios práticos voltados para **situações do dia a dia**, permitindo aplicar **todos os conceitos aprendidos em JavaScript de forma estruturada e tipada com TypeScript**, fortalecendo o raciocínio lógico e as boas práticas de desenvolvimento.

<br />

## 2. Conteúdo Programático

| Aula    | Tema                                    | Descrição                                                   |
| ------- | --------------------------------------- | ----------------------------------------------------------- |
| Aula 01 | Introdução ao TypeScript e Collections  | Conceitos básicos de TypeScript, tipagem e uso de coleções. |
| Aula 02 | Estruturas de Dados                     | Uso de estruturas para organizar e manipular dados.         |
| Aula 03 | Funções                                 | Criação e tipagem de funções reutilizáveis.                 |
| Aula 04 | Programação Orientada a Objetos I       | Criação de classes, objetos, métodos e encapsulamento.      |
| Aula 05 | Programação Orientada a Objetos II      | Reutilização de código com herança e polimorfismo.          |
| Aula 06 | Programação Orientada a Objetos III     | Definição de contratos com classes abstratas e interfaces.  |
| Aula 07 | Tratamento de Exceções                  | Captura e tratamento de erros com try/catch.                |
| Aula 08 | Programação Funcional (Arrow Functions) | Uso de arrow functions e conceitos funcionais.              |

<br />

## Estrutura do Repositório



```
/
├── aula_01/
├── aula02/
├── aula03/
├── aula04/
├── aula05/
├── aula06/
├── aula07/
├── aula08/
└── README.md
```

Cada pasta contém os exemplos e exercícios desenvolvidos na respectiva aula. 

<br />

## Requisitos



Para executar os exemplos localmente, você precisará de:

- [Node.js](https://nodejs.org/) **versão 20 ou superior**
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) ou editor similar

<br />

## Como Executar os Exemplos



1. Clone o repositório

```bash
git clone https://github.com/rafaelq80/javascript_tjs13.git
```

2. Abra a pasta do projeto no **Visual Studio Code**
3. No terminal, execute o comando abaixo:

```bash
npm install
```

4. Navegue até a pasta do exercício desejado
5. Execute o arquivo TypeScript com o comando:

```bash
ts-node nome_do_arquivo.ts
```

### Exemplo:

```bash
ts-node HelloWorld.ts
```

<br />

## Configurações - `tsconfig.json`



### **`target: "es2020"`**

Define a versão do JavaScript gerado como **ECMAScript 2020**.
Permite usar recursos modernos, como `async/await`, `optional chaining` e `Promise.allSettled`.

------

### **`module: "commonjs"`**

Define o sistema de módulos como **CommonJS**, padrão do Node.js.
Permite usar `require()` e `module.exports` ou compatibilidade com `import`.

------

### **`esModuleInterop: true`**

Facilita a interoperabilidade entre **CommonJS** e **ES Modules**.
Permite importar módulos CommonJS assim:

```ts
import express from "express";
```

Em vez de:

```ts
import * as express from "express";
```

------

### **`forceConsistentCasingInFileNames: true`**

Garante consistência entre **maiúsculas e minúsculas** nos imports.
Evita erros em sistemas Linux/macOS (case-sensitive).

Exemplo de erro evitado:

```ts
import User from "./user"; // errado se o arquivo for User.ts
```

------

### **`strict: true`**

Ativa o **modo estrito completo** do TypeScript.
Força tipagem mais segura e reduz bugs em tempo de execução.

Inclui regras como:

- Não permitir `any` implícito
- Melhor verificação de `null` e `undefined`
- Checagem mais rigorosa em funções e classes

------

### **`skipLibCheck: true`**

Ignora a verificação de tipos em arquivos `.d.ts` (bibliotecas externas).
Resultado:

- Compilação **mais rápida**
- Menos erros vindos de dependências externas

<br />

### Resumo Rápido (o que isso garante)

| Benefício                | Impacto                            |
| ------------------------ | ---------------------------------- |
| JavaScript moderno       | `target: es2020`                   |
| Compatibilidade Node.js  | `module: commonjs`                 |
| Imports mais simples     | `esModuleInterop`                  |
| Menos bugs               | `strict`                           |
| Build mais rápido        | `skipLibCheck`                     |
| Consistência de arquivos | `forceConsistentCasingInFileNames` |

<br />

## Contribuições



Este repositório possui fins educacionais, mas contribuições são muito bem-vindas. Você pode contribuir de várias formas:

- Abrindo uma **issue**
- Enviando um **pull request**
- Sugerindo melhorias no conteúdo ou na organização
- Compartilhando com pessoas que estão aprendendo **JavaScript**

<br />

## Licença



Este projeto está licenciado sob a licença **MIT**. Sinta-se livre para estudar, modificar e reutilizar o código.

<br />

##  Contato



Desenvolvido por [**Rafael**](https://github.com/rafaelq80)
Para dúvidas, sugestões ou colaborações, utilize as **issues do GitHub** ou entre em contato diretamente pelo perfil.

