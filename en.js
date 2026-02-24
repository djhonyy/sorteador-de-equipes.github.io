// ──────────────────────────────────────────────
// i18n/en.js — English
// ──────────────────────────────────────────────
var locale_en = {
  lang: "en",
  title: "Team Draw",
  subtitle: "Randomly distribute participants into teams",
  labelTeams: "Number of Teams",
  teamOption: function(n) { return n === 1 ? "1 Team" : n + " Teams"; },
  labelSeparator: "Separator Type",
  sepEnter: "Separated by Enter",
  sepComma: "Separated by Comma",
  labelParticipants: "Participant List",
  placeholder: "Paste participant names here...",
  counter: function(n) { return n === 1 ? "1 participant" : n + " participants"; },
  btnDraw: "🎲  Draw Teams",
  resultTitle: "✨ Draw Results",
  teamName: function(n) { return "Team " + n; },
  btnCopy: "📋 Copy result",
  msgCopied: "Result copied to clipboard!",
  msgNoParticipants: "Please enter at least one participant.",
  msgNotEnough: function(need, teams) {
    return "You need at least " + need + " participants for " + teams + " team(s).";
  },
  msgOdd: function(total, teams, extra) {
    return "Number of participants (" + total + ") is not evenly divisible by " + teams + " team(s). " + extra + " team(s) will have 1 extra member.";
  },
  themeDark: "Dark",
  themeLight: "Light"
};
