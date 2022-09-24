// Using the constans from Constants.js

figlet.defaults({ fontPath: "https://unpkg.com/figlet/fonts/" });
figlet.preloadFonts(["Standard", "Slant"], ready);

function ready() {
  $("body").terminal((command, term) => {
    var cmd = $.terminal.parse_command(command);
    switch (cmd.name) {
      case "echo":
        term.echo(cmd.rest);
        break;
      case "home":
        term.reset();
        break;
      case "about":
        term.echo($(PFP_El));
        term.echo(ABOUT);
        break;
      case "skills":
        term.echo($(FRONT_IMG));
        term.echo(TOP_SKILLS);
        term.echo($(BACK_IMG));
        term.echo(MID_SKILLS);
        term.echo($(TOOL_IMG));
        term.echo(LAST_SKILLS);
        break;
      case "contact":
        term.echo(CONTACT);
        break;
      case "test":
        term.echo($(frame));
        break;
      case "resume":
        term.echo("..redirecting....");
        window.open(RESUME_URL, "_blank");
        break;
      case "repo":
        term.echo("..redirecting....");
        window.open(REPO_URL, "_blank");
        break;
      case "help":
        term.echo("[[i;#5F819D;]" + HELP + "]");
        break;
      case "snake":
        snake(term);
        break;
      default:
        term.echo(
          "[[b;#A54242;]" + cmd.name + ": " + "command not found" + "]"
        );
    }
  }, optons);
}

const optons = {
  name: "Dave's Terminal Website",
  greetings: false,
  prompt: PROMPT,
  onInit() {
    this.echo(() => render(this, "...Hello World...", "Slant"));
    this.echo($(GIF_El));
    this.echo(GREET);
  },
};
function render(term, text, font) {
  const cols = term.cols();
  return figlet.textSync(text, {
    font: font,
    width: cols,
    whitespaceBreak: true,
  });
}
