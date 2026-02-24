// ──────────────────────────────────────────────
// i18n/fr.js — Français
// ──────────────────────────────────────────────
var locale_fr = {
  lang: "fr",
  title: "Tirage au Sort des Équipes",
  subtitle: "Répartissez les participants en équipes de manière aléatoire",
  labelTeams: "Nombre d'Équipes",
  teamOption: function(n) { return n === 1 ? "1 Équipe" : n + " Équipes"; },
  labelSeparator: "Type de Séparateur",
  sepEnter: "Séparé par Entrée",
  sepComma: "Séparé par Virgule",
  labelParticipants: "Liste des Participants",
  placeholder: "Collez ici les noms des participants...",
  counter: function(n) { return n === 1 ? "1 participant" : n + " participants"; },
  btnDraw: "🎲  Tirer au Sort",
  resultTitle: "✨ Résultat du Tirage",
  teamName: function(n) { return "Équipe " + n; },
  btnCopy: "📋 Copier le résultat",
  msgCopied: "Résultat copié dans le presse-papiers !",
  msgNoParticipants: "Veuillez saisir au moins un participant.",
  msgNotEnough: function(need, teams) {
    return "Vous avez besoin d'au moins " + need + " participants pour " + teams + " équipe(s).";
  },
  msgOdd: function(total, teams, extra) {
    return "Le nombre de participants (" + total + ") n'est pas divisible équitablement par " + teams + " équipe(s). " + extra + " équipe(s) auront 1 membre de plus.";
  },
  themeDark: "Sombre",
  themeLight: "Clair"
};
