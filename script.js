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
        term.echo(() => render(term, "[ About ]", ""));
        term.echo("");
        term.echo($(PFP_El));
        term.echo(ABOUT);
        break;
      case "projects":
        term.echo(() => render(term, "[ Projects ]", ""));
        term.echo("\n");
        var i = 0;
        for (const project of PROJECTS) {
          const { name, desc, url } = project;
          const TECH_TEXT = TECH_DESC[i].join(" *");
          term.echo($(PROJECT_GIFS[i]));
          var cur = name === "my-cli-website" ? " [CURRENT SITE]" : "";
          term.echo(
            "[[b;#DE935F;]" +
              name.toUpperCase() +
              "]" +
              cur +
              ":\n" +
              url +
              "\n"
          );
          term.echo(desc + "\n");
          term.echo("Tech Stack: *" + "[[i;#fff;]" + TECH_TEXT + "]");

          if (i != PROJECT_URLS.length - 1)
            term.echo(() => render(term, "---", ""));

          i++;
        }
        break;
      case "repo":
        term.echo("..redirecting....");
        window.open(REPO_URL, "_blank");
        break;
      case "help":
        term.echo(() => render(term, "[ Help ]", ""));
        term.echo("");
        term.echo("[[i;#5F819D;]" + HELP + "]");
        break;
      case "'help'":
        term.echo("'help' not found");
        term.echo("Did you mean help, not 'help'");
        break;
      default:
        term.echo(() => render(term, "404", ""));
        term.echo(
          "[[b;#A54242;]" + cmd.name + ": " + "command not found\nTry entering the cmd" + "] 'help'"
        );
    }
  }, optons);
}

const optons = {
  name: "Dave's Terminal Website",
  greetings: false,
  prompt: PROMPT,
  onInit() {
    this.echo(() => render(this, "...Hello World", "Slant"));
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
