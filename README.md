# 🎲 Sorteio de Equipes | Team Draw | Sorteo de Equipos

**Ferramenta web para sortear participantes em equipes de forma aleatória.**
Ideal para dinâmicas de grupo, hackathons, competições, salas de aula ou qualquer situação que exija divisão rápida e justa de pessoas em times.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![i18n](https://img.shields.io/badge/i18n-12%20idiomas-blueviolet?style=flat)
![License](https://img.shields.io/badge/Licença-MIT-green?style=flat)

---

## ✨ Funcionalidades

### Sorteio
- **Seleção flexível** — de 1 a 10 equipes via dropdown.
- **Dois tipos de separador** — nomes separados por Enter (um por linha) ou por vírgula.
- **Contador em tempo real** — exibe a quantidade de participantes conforme são inseridos.
- **Validações inteligentes** — alerta quando o número de participantes não divide igualmente entre as equipes, informando quantos times terão um membro a mais.
- **Algoritmo Fisher-Yates** — embaralhamento verdadeiramente aleatório e imparcial.
- **Resultado visual** — cards individuais por equipe com animação escalonada.
- **Resultado em texto** — textarea formatado em colunas alinhadas, pronto para copiar.
- **Botão de copiar** — copia o resultado para a área de transferência com um clique.

### Tema
- **Tema Escuro** — paleta profissional com tons de azul e violeta sobre fundo escuro.
- **Tema Claro** — paleta limpa com superfícies brancas e bordas suaves, seguindo padrões de mercado.
- **Alternância instantânea** — o tema muda em tempo real sem recarregar a página.
- **Persistência** — a preferência de tema é salva no navegador via `localStorage`.

### Internacionalização (i18n)
- **12 idiomas disponíveis** com arquivos de tradução individuais.
- **Tradução completa** — todos os textos da interface, mensagens de erro, validações e labels são traduzidos.
- **Persistência** — o idioma selecionado é salvo no navegador e restaurado automaticamente.

### Técnico
- **100% responsivo** — funciona perfeitamente em desktop, tablet e celular.
- **Zero dependências** — sem frameworks ou bibliotecas externas.
- **Arquitetura modular** — HTML, CSS, JS e locales em arquivos separados.
- **Offline** — funciona sem conexão à internet (exceto o carregamento inicial das fontes).

---

## 🚀 Como Usar

### Opção 1 — Abrir diretamente no navegador

1. Faça o download de todos os arquivos mantendo a estrutura de pastas.
2. Abra `index.html` em qualquer navegador moderno (Chrome, Firefox, Safari, Edge).
3. Pronto! Não precisa de servidor, instalação ou internet.

> **Nota:** Como o projeto utiliza arquivos externos via `<script src>` e `<link>`, alguns navegadores podem bloquear o carregamento ao abrir direto do disco (política CORS para `file://`). Nesse caso, utilize um servidor local simples:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .

# PHP
php -S localhost:8000
```

### Opção 2 — Clonar o repositório

```bash
git clone https://github.com/seu-usuario/sorteio-de-equipes.git
cd sorteio-de-equipes
```

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

---

## 📖 Passo a Passo

1. **Escolha o tema e o idioma** na barra superior direita.
2. **Selecione o número de equipes** no dropdown (1 a 10).
3. **Escolha o tipo de separador** — Enter ou vírgula.
4. **Cole ou digite os nomes** dos participantes no campo de texto.
5. Confira a **contagem de participantes** exibida abaixo do campo.
6. Clique em **Sortear Equipes**.
7. Visualize o resultado nos **cards** ou no **textarea formatado em colunas**.
8. Use o botão **Copiar resultado** para compartilhar.

---

## 🌐 Idiomas Suportados

| Idioma | Código | Arquivo |
|---|---|---|
| 🇧🇷 Português (Brasil) | `pt` | `locales/pt.js` |
| 🇺🇸 English | `en` | `locales/en.js` |
| 🇪🇸 Español | `es` | `locales/es.js` |
| 🇫🇷 Français | `fr` | `locales/fr.js` |
| 🇩🇪 Deutsch | `de` | `locales/de.js` |
| 🇮🇹 Italiano | `it` | `locales/it.js` |
| 🇯🇵 日本語 | `ja` | `locales/ja.js` |
| 🇨🇳 简体中文 | `zh` | `locales/zh.js` |
| 🇰🇷 한국어 | `ko` | `locales/ko.js` |
| 🇷🇺 Русский | `ru` | `locales/ru.js` |
| 🇸🇦 العربية | `ar` | `locales/ar.js` |
| 🇮🇳 हिन्दी | `hi` | `locales/hi.js` |

### Adicionando um novo idioma

1. Crie um novo arquivo em `locales/` seguindo a estrutura dos existentes:

```javascript
// locales/xx.js
var locale_xx = {
  lang: "xx",
  title: "...",
  subtitle: "...",
  // ... todas as chaves de tradução
};
```

2. Adicione o `<script>` no `index.html`:

```html
<script src="locales/xx.js"></script>
```

3. Registre no objeto `locales` em `js/app.js`:

```javascript
var locales = { ..., xx: locale_xx };
```

4. Adicione a opção no `<select>` do `index.html`:

```html
<option value="xx">🏳️ Novo Idioma</option>
```

---

## 🎨 Temas

| Tema | Descrição |
|---|---|
| 🌙 **Escuro** | Fundo `#0f1117`, superfícies em cinza-azulado, acentos em azul `#3b82f6` e violeta. Ideal para uso noturno. |
| ☀️ **Claro** | Fundo `#f4f6f9`, superfícies brancas, bordas suaves em cinza, acentos em azul `#2563eb`. Padrão de mercado para uso diurno. |

As variáveis de tema estão isoladas em `css/themes.css` utilizando CSS Custom Properties com transição suave de 350ms.

---

## 📁 Estrutura do Projeto

```
sorteio-de-equipes/
├── index.html              # Markup HTML (sem lógica ou estilos inline)
├── css/
│   ├── themes.css          # Variáveis de tema (dark + light)
│   └── styles.css          # Estilos de todos os componentes
├── js/
│   └── app.js              # Lógica principal da aplicação
├── locales/
│   ├── pt.js               # 🇧🇷 Português
│   ├── en.js               # 🇺🇸 English
│   ├── es.js               # 🇪🇸 Español
│   ├── fr.js               # 🇫🇷 Français
│   ├── de.js               # 🇩🇪 Deutsch
│   ├── it.js               # 🇮🇹 Italiano
│   ├── ja.js               # 🇯🇵 日本語
│   ├── zh.js               # 🇨🇳 简体中文
│   ├── ko.js               # 🇰🇷 한국어
│   ├── ru.js               # 🇷🇺 Русский
│   ├── ar.js               # 🇸🇦 العربية
│   └── hi.js               # 🇮🇳 हिन्दी
├── README.md               # Documentação
└── LICENSE                 # Licença MIT
```

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica da página |
| **CSS3** | Temas via Custom Properties, animações, responsividade |
| **JavaScript (Vanilla)** | Lógica de sorteio, i18n, tema, persistência em `localStorage` |
| **Google Fonts** | Tipografia — Outfit (interface) + Space Mono (dados) |

---

## 💾 Dados Persistidos

A aplicação salva as seguintes preferências no `localStorage` do navegador:

| Chave | Valor | Padrão |
|---|---|---|
| `sorteio_theme` | `dark` ou `light` | `dark` |
| `sorteio_lang` | `pt`, `en`, `es`, `fr`, `de`, `it`, `ja`, `zh`, `ko`, `ru`, `ar`, `hi` | `pt` |

Para resetar as preferências:

```javascript
localStorage.removeItem('sorteio_theme');
localStorage.removeItem('sorteio_lang');
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas!

1. Faça um **fork** do projeto.
2. Crie uma **branch** para sua feature (`git checkout -b feature/minha-feature`).
3. **Commitar** suas mudanças (`git commit -m 'feat: adiciona minha feature'`).
4. Fazer **push** para a branch (`git push origin feature/minha-feature`).
5. Abrir um **Pull Request**.

### Ideias para contribuição

- Novos idiomas (Turco, Polonês, Holandês, Sueco...).
- Exportar resultado como imagem ou PDF.
- Histórico de sorteios anteriores.
- Opção de excluir participantes específicos do sorteio.
- Modo "torneio" com chaves eliminatórias.
- PWA (Progressive Web App) para instalação no celular.
- Suporte a RTL completo para Árabe e Hebraico.

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Feito com ☕ e 🎲
</p>
