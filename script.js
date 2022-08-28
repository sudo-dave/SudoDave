const GITHUB_LINK = "https://github.com/sudo-dave";
const LINKEDIN_LINK = "https://www.linkedin.com/in/maciasdavid";
const RESUME_URL =
  "https://drive.google.com/file/d/10ur6xeD7oChPe1m68Us5At-snCY6fkvR/view?usp=sharing";

const GREET = `\nHEY!!! ヽ(•‿•)ノ
    \nMy name is [[bu;#DE935F;]David Macias] and welcome to my interactive website.
    \nI am recent [[i;#fff;]computer science] graudte w/ a passion for [[gi;#fff;]information technology] & [[gi;#fff;]software development].
    \n[[i;#5F819D;]#### Enter "help" to get a list of commands.]
    `;
const HOME =
  "COMMANDS:\n\techo TEXT - print txt to screen\n\thome - go back to beginning of site\n\tabout - learn a little more about me\n\tcontact - get my contact details\n\tresume - get redirected to my resume\n\tclear - clear console screen";

const ABOUT = "";

const CONTACT = "Linkedin:\n" + LINKEDIN_LINK + "\nGithub:\n" + GITHUB_LINK;

figlet.defaults({ fontPath: "https://unpkg.com/figlet/fonts/" });
figlet.preloadFonts(["Standard", "Slant"], ready);

function ready() {
  $("body").terminal((command, term) => {
    var cmd = $.terminal.parse_command(command);
    if (cmd.name == "echo") term.echo(cmd.rest);
    else if (cmd.name == "home") term.reset();
    else if (cmd.name == "about") term.echo(ABOUT);
    else if (cmd.name == "contact") term.echo(CONTACT);
    else if (cmd.name == "resume") {
      term.echo("redirecting....");
      window.open(
        "https://drive.google.com/file/d/10ur6xeD7oChPe1m68Us5At-snCY6fkvR/view?usp=sharinghelp",
        "_blank"
      );
    } else if (cmd.name == "help") term.echo("[[i;#5F819D;]" + HOME + "]");
    else
      term.echo("[[b;#A54242;]" + cmd.name + ": " + "command not found" + "]");
  }, optons);
}

const optons = {
  name: "David's Terminal Website",
  greetings: false,
  prompt: "vistor@daves-website $ ",
  onInit() {
    this.echo(() => render(this, "Hello World", "Slant") + GREET);
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
