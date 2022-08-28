const GITHUB_LINK = "https://github.com/sudo-dave";
const LINKEDIN_LINK = "https://www.linkedin.com/in/maciasdavid";
const RESUME_URL =
  "https://drive.google.com/file/d/10ur6xeD7oChPe1m68Us5At-snCY6fkvR/view?usp=sharing";

const PROFILE_URL =
  "https://media-exp1.licdn.com/dms/image/C4E03AQF1mV1grncYVg/profile-displayphoto-shrink_400_400/0/1638642063321?e=1667433600&v=beta&t=Z7PcaVsK98enmuL8cObVSdNy4j3R4YYqargqIY6R6Pc";
// const PROMPT = "vistor@daves-website $ ";

const PROMPT = "[[;#8ABEB7;]vistor@daves-website $ ]";
const GREET = `\nHEY!!! ヽ(•‿•)ノ
    \nMy name is [[bu;#DE935F;]David Macias] and welcome to my interactive website.
    \nI'm a recent [[i;#fff;]computer science] graudte w/ a passion for [[gi;#fff;]information technology] & [[gi;#fff;]software development].
    \n[[i;#5F819D;]#### Enter "help" to get a list of commands.]
    `;
const HELP =
  "COMMANDS:\n\techo TEXT - print txt to screen\n\thome - go back to beginning of site\n\tabout - learn a little more about me\n\tskills - display my skills \n\tcontact - get my contact details\n\tresume - get redirected to my resume\n\tclear - clear console screen";

const ABOUT =
  "\n\tAs far as I can remember, I've always tinkered with technology. When I was a kid I used to get in trouble dismantelling our home electronics." +
  " I just had to know how that tv remote worked. After high school, I took an intro to programming class at a local community college; since then I have been hooked." +
  " I'd always enjoyed tinkering with electronics coding different. I fell in love with the freedom and instant nature of it.\n" +
  "\n\tAfter two years, I was able to transfer to a University. There I started learning more about web-dev and cybersecuity. So much so, I started joining tech-related clubs at the school and sought other resources online." +
  " I taught my self frontend dev with Udemy courses and youtube. Eventually, my love of electronics colided with coding. Now I've been tinkering with rasberry pies and created a homelab out of one. So far it's been a blast.";

const SKILLS =
  "Frontend Dev:\n*HTML/CSS *JS *React.js *Jquery *Tailwind CSS\nBackend Dev:\n*Python *Java *SQL *SQLAlchemy *Pandas\nSoftware/Tools:\n*VScode *GIT *Microsft/Google Office *Familiar w/ Windows and Linux environments";
const CONTACT = "Linkedin:\n" + LINKEDIN_LINK + "\nGithub:\n" + GITHUB_LINK;

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
  onResize: set_size,
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
function set_size() {
  // for window height of 170 it should be 2s
  var height = $(window).height();
  var width = $(window).width();
  // scanlines[0].style.setProperty("--time", time);
  // tv[0].style.setProperty("--width", width);
  // tv[0].style.setProperty("--height", height);
}
