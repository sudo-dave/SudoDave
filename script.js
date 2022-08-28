// Using the constans from Constants.js

figlet.defaults({ fontPath: "https://unpkg.com/figlet/fonts/" });
figlet.preloadFonts(["Standard", "Slant"], ready);

function ready() {
  $("body").terminal((command, term) => {
    var cmd = $.terminal.parse_command(command);
    if (cmd.name == "echo") term.echo(cmd.rest);
    else if (cmd.name == "home") term.reset();
    else if (cmd.name == "about") {
      term.echo($("<img src=" + PROFILE_URL + ">"));
      term.echo(ABOUT);
    } else if (cmd.name == "skills") term.echo(SKILLS);
    else if (cmd.name == "contact") term.echo(CONTACT);
    else if (cmd.name == "resume") {
      term.echo("redirecting....");
      window.open(RESUME_URL, "_blank");
    } else if (cmd.name == "help") term.echo("[[i;#5F819D;]" + HELP + "]");
    else
      term.echo("[[b;#A54242;]" + cmd.name + ": " + "command not found" + "]");
  }, optons);
}

const optons = {
  name: "David's Terminal Website",
  greetings: false,
  prompt: PROMPT,
  onInit() {
    this.echo(() => render(this, "Hello World...", "Slant") + GREET);
  },
};
function render(term, text, font) {
  const cols = term.cols();
  return figlet.textSync(text, {
    font: font || "Standard",
    width: cols,
    whitespaceBreak: true,
  });
}
