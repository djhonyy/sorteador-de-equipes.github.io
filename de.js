// ──────────────────────────────────────────────
// i18n/de.js — Deutsch
// ──────────────────────────────────────────────
var locale_de = {
  lang: "de",
  title: "Team-Auslosung",
  subtitle: "Teilnehmer zufällig in Teams aufteilen",
  labelTeams: "Anzahl der Teams",
  teamOption: function(n) { return n === 1 ? "1 Team" : n + " Teams"; },
  labelSeparator: "Trennzeichentyp",
  sepEnter: "Getrennt durch Eingabe",
  sepComma: "Getrennt durch Komma",
  labelParticipants: "Teilnehmerliste",
  placeholder: "Teilnehmernamen hier einfügen...",
  counter: function(n) { return n === 1 ? "1 Teilnehmer" : n + " Teilnehmer"; },
  btnDraw: "🎲  Teams Auslosen",
  resultTitle: "✨ Ergebnis der Auslosung",
  teamName: function(n) { return "Team " + n; },
  btnCopy: "📋 Ergebnis kopieren",
  msgCopied: "Ergebnis in die Zwischenablage kopiert!",
  msgNoParticipants: "Bitte geben Sie mindestens einen Teilnehmer ein.",
  msgNotEnough: function(need, teams) {
    return "Sie benötigen mindestens " + need + " Teilnehmer für " + teams + " Team(s).";
  },
  msgOdd: function(total, teams, extra) {
    return "Die Anzahl der Teilnehmer (" + total + ") ist nicht gleichmäßig durch " + teams + " Team(s) teilbar. " + extra + " Team(s) werden 1 zusätzliches Mitglied haben.";
  },
  themeDark: "Dunkel",
  themeLight: "Hell"
};
