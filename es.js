// ──────────────────────────────────────────────
// i18n/es.js — Español
// ──────────────────────────────────────────────
var locale_es = {
  lang: "es",
  title: "Sorteo de Equipos",
  subtitle: "Distribuya participantes en equipos de forma aleatoria",
  labelTeams: "Número de Equipos",
  teamOption: function(n) { return n === 1 ? "1 Equipo" : n + " Equipos"; },
  labelSeparator: "Tipo de Separador",
  sepEnter: "Separado por Enter",
  sepComma: "Separado por Coma",
  labelParticipants: "Lista de Participantes",
  placeholder: "Pegue aquí los nombres de los participantes...",
  counter: function(n) { return n === 1 ? "1 participante" : n + " participantes"; },
  btnDraw: "🎲  Sortear Equipos",
  resultTitle: "✨ Resultado del Sorteo",
  teamName: function(n) { return "Equipo " + n; },
  btnCopy: "📋 Copiar resultado",
  msgCopied: "¡Resultado copiado al portapapeles!",
  msgNoParticipants: "Ingrese al menos un participante.",
  msgNotEnough: function(need, teams) {
    return "Necesita al menos " + need + " participantes para " + teams + " equipo(s).";
  },
  msgOdd: function(total, teams, extra) {
    return "El número de participantes (" + total + ") no es divisible equitativamente por " + teams + " equipo(s). " + extra + " equipo(s) tendrán 1 miembro más.";
  },
  themeDark: "Oscuro",
  themeLight: "Claro"
};
