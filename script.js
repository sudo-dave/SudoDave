const greet = "la";

figlet.defaults({ fontPath: "https://unpkg.com/figlet/fonts/" });
figlet.preloadFonts(["Standard", "Slant"], ready);

const optons = {
  name: "David's Terminal Website",
  greetings: false,
  prompt: "vistor@daves-website $ ",
  onInit() {
    var greet = `\nHEY!!! ヽ(•‿•)ノ
    \nMy name is [[bu;#DE935F;]David Macias] and welcome to my website.
    \nI am recent [[i;#fff;]computer science] graudte w/ a passion for [[gi;#fff;]information technology] & [[gi;#fff;]software development].
    \n[[i;#5F819D;]#### Enter "help" to get a list of commands.]
    `;
    this.echo(() => render(this, "Hello World", "Slant") + greet);
  },
};

function ready() {
  $("body").terminal((command, term) => {
    var cmd = $.terminal.parse_command(command);
    if (cmd.name == "echo") {
      term.echo(cmd.rest);
    }
    if (cmd.name == "home") {
      location.reload();
    } else {
      let text = cmd.name + ": " + "command not found";
      term.echo("[[b;#A54242;]" + text + "]");
    }
  }, optons);
}

function render(term, text, font) {
  const cols = term.cols();
  return figlet.textSync(text, {
    font: font || "Standard",
    width: cols,
    whitespaceBreak: true,
  });
}
