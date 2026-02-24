// ──────────────────────────────────────────────
// i18n/it.js — Italiano
// ──────────────────────────────────────────────
var locale_it = {
  lang: "it",
  title: "Sorteggio delle Squadre",
  subtitle: "Distribuisci i partecipanti in squadre in modo casuale",
  labelTeams: "Numero di Squadre",
  teamOption: function(n) { return n === 1 ? "1 Squadra" : n + " Squadre"; },
  labelSeparator: "Tipo di Separatore",
  sepEnter: "Separato da Invio",
  sepComma: "Separato da Virgola",
  labelParticipants: "Lista dei Partecipanti",
  placeholder: "Incolla qui i nomi dei partecipanti...",
  counter: function(n) { return n === 1 ? "1 partecipante" : n + " partecipanti"; },
  btnDraw: "🎲  Sorteggia Squadre",
  resultTitle: "✨ Risultato del Sorteggio",
  teamName: function(n) { return "Squadra " + n; },
  btnCopy: "📋 Copia risultato",
  msgCopied: "Risultato copiato negli appunti!",
  msgNoParticipants: "Inserisci almeno un partecipante.",
  msgNotEnough: function(need, teams) {
    return "Sono necessari almeno " + need + " partecipanti per " + teams + " squadra/e.";
  },
  msgOdd: function(total, teams, extra) {
    return "Il numero di partecipanti (" + total + ") non è divisibile equamente per " + teams + " squadra/e. " + extra + " squadra/e avranno 1 membro in più.";
  },
  themeDark: "Scuro",
  themeLight: "Chiaro"
};
