// ──────────────────────────────────────────────
// i18n/pt.js — Português (Brasil)
// ──────────────────────────────────────────────
var locale_pt = {
  lang: "pt-BR",
  title: "Sorteio de Equipes",
  subtitle: "Distribua participantes em equipes de forma aleatória",
  labelTeams: "Número de Equipes",
  teamOption: function(n) { return n === 1 ? "1 Equipe" : n + " Equipes"; },
  labelSeparator: "Tipo de Separador",
  sepEnter: "Separado por Enter",
  sepComma: "Separado por Vírgula",
  labelParticipants: "Lista de Participantes",
  placeholder: "Cole aqui os nomes dos participantes...",
  counter: function(n) { return n === 1 ? "1 participante" : n + " participantes"; },
  btnDraw: "🎲  Sortear Equipes",
  resultTitle: "✨ Resultado do Sorteio",
  teamName: function(n) { return "Equipe " + n; },
  btnCopy: "📋 Copiar resultado",
  msgCopied: "Resultado copiado para a área de transferência!",
  msgNoParticipants: "Insira ao menos um participante.",
  msgNotEnough: function(need, teams) {
    return "Você precisa de pelo menos " + need + " participantes para " + teams + " equipe(s).";
  },
  msgOdd: function(total, teams, extra) {
    return "Número de participantes (" + total + ") não é divisível igualmente por " + teams + " equipe(s). " + extra + " equipe(s) ficarão com 1 membro a mais.";
  },
  themeDark: "Escuro",
  themeLight: "Claro"
};
