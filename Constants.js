const GITHUB_LINK = "https://github.com/sudo-dave";
const LINKEDIN_LINK = "https://www.linkedin.com/in/maciasdavid";
const REPO_URL = "https://github.com/sudo-dave/sudo-dave.github.io";
const PROFILE_URL = "images/pfp.jpg";

const EMAIL = "david.macias.0101@gmail.com";

const GIF_El = '<img id="gif" src="images/world.gif"/>';
const PFP_El = '<img id="pfp" src=' + PROFILE_URL + ">";

const FRONT_IMG = '<img class="skills" src ="images/frontend.png" />';
const BACK_IMG = '<img class="skills" src ="images/back.png" >';
const TOOL_IMG = '<img class="skills" src ="images/tools.png" >';

const GOOGLE_SUPPORT =
  "https://www.credly.com/badges/7d3c4f22-d17b-48a0-ad5e-ae31f59a34f6/public_url";

const PROMPT = "[[b;#772953;]vistor@][[b;;]daves-website $ ]";

const GREET = `\nHEY!!! ヽ(•‿•)ノ
    \nMy name is [[bu;#DE935F;]DAVID MACIAS] and welcome to my interactive website.
    \nI'm a recent [[i;#fff;]computer science] graudte with a passion for [[b;#fff;]IT] and [[b;#fff;]software development].
    \n[[i;#5F819D;]## Enter in '[[;#fff;]help]' to get a list of commands...]
    `;
const HELP =
  "COMMANDS:\n\t[[;#fff;]echo TEXT] - print txt to screen\n\t[[;#fff;]home] - go back to beginning of site\n\t[[;#fff;]about] - learn a little more about me\n\t[[;#fff;]skills] - display my skills \n\t[[;#fff;]contact] - get my contact details\n\t[[;#fff;]repo] - get redirected to the repo\n\t[[;#fff;]clear] - clear console screen" +
  "\n\n\t[[;#DE935F;]projects] - display personal projects\n\t[[;#fff;]help] - display list of commands";


const ABOUT = 
  `Since as far back as I can remember, I've had this irresistible fascination with technology. As a kid, my curious spirit often led me to dismantle our home electronics, which occasionally got me into a little trouble. But there was this insatiable need to understand how things worked, like that TV remote, for instance. And as time went on, my passion for technology only grew.

After high school, I took an introductory programming class at a local community college, and from that moment, I was hooked! While I had always enjoyed tinkering with electronics, coding offered something different—a sense of freedom and instant gratification that stole my heart.

Soon after, I had the chance to transfer to a university, where I enthusiastically joined all the tech-related clubs and even lent a hand as a computer science tutor. My passion for learning took me to Udemy courses and YouTube, where I taught myself web development. It was an exciting journey, mastering React.js, HTML/CSS, and REST APIs with Python. Building various websites, like the one you're seeing now, became my creative outlet.

As time went on, my worlds of electronics and coding began to merge. I ventured into tinkering with Raspberry Pis and went on to create a homelab with a cluster—a true adventure that's brought me endless joy and excitement.

It's been quite a blast so far, and I'm eager to see where this passion for technology takes me next!`
// const d =
//   "\n\tFor as long as I can remember, I've always tinkered with technology. When I was a kid I used to get in trouble dismantelling our home electronics." +
//   " I just had to know how that tv remote worked. After high school, I took an intro to programming class at a local community college; since then I have been hooked." +
//   " I'd always enjoyed tinkering with electronics but coding was different. I fell in love with the freedom and instant nature of it.\n" +
//   "\n\tAfter two years, I was able to transfer to a university. During my time there, I joined all the tech-related clubs there and even helped as a comp sci tutor." +
//   " I taught my self web dev with Udemy courses, youtube and a passion for learning. I learned React.js HTML/CSS and REST APIs with python. I bulit sites like this one and others. Eventually, my love of electronics colided with coding. Now I've been tinkering with rasberry pies and created a homelab with a cluster. So far it's been a blast." +
//   "\n\nI love tech because it empowers me to make ideas into a reality.\n\n---Thanks for learning a little more about me....\n<3";

const TOP_SKILLS =
  "[[;#fff;]Frontend:]\n\t*HTML/CSS *JS *React.js *Jquery *Tailwind CSS\n\n\n";

const MID_SKILLS =
  "[[;#fff;]Backend:]\n\t*Python *Flask *Java *SQL *SQLAlchemy *Pandas\n\n\n";

const LAST_SKILLS =
  "[[;#fff;]Software/Tools:]\n\t*VScode *Jira *GIT *Microsft/Google Office\n\t*Familiar w/ Windows and Linux environments" +
  "\n\n\n\n[[;#fff;]Intrests and areas of expertise:]\n\t*Fundamentals of Computer Networking & Cyberseruity *Effective Communication\n\t*Knowledge of Object-Oriented design *Software Development\n\t*Frontend Development *API Design *Troubleshooting and testing skills" +
  "\n\n\nCompelted [[;#fff;]Google IT Support Certificatehelp:]\n" +
  GOOGLE_SUPPORT +
  "\n";

const CONTACT =
  "Linkedin:\n" +
  LINKEDIN_LINK +
  "\n\nGithub:\n" +
  GITHUB_LINK +
  "\n\nEmail:\n" +
  EMAIL;

// Projects (Project Urls)
const PROJECT_URLS = [
  "https://api.github.com/repos/sudo-dave/Sort.io--Sorting-Visualizer",
  "https://api.github.com/repos/sudo-dave/cli-codeQ",
  "https://api.github.com/repos/sudo-dave/WhereToEat.io",
  "https://api.github.com/repos/sudo-dave/sudo-dave.github.io ",
  "https://api.github.com/repos/sudo-dave/KeyLogger",
];
const PROJECT_GIFS = [
  '<img class="demo" src="demos/sort.gif"/>',
  '<img class="demo" src="demos/cli.gif"/>',
  '<img class="demo" src="demos/where.gif"/>',
  '<img class="demo" src="demos/website.gif"/>',
  '<img class="demo" src="demos/key.gif"/>',
];
const TECH_DESC = [
  ["React", "HTML/CSS", "JS", "Styled-components"],
  ["Python", "Web Scraping", "Cli", "PRAW"],
  ["React", "Flask", "API", "Tailwind CSS", "Full-Stack", "SQLite"],
  ["AWS S3","JQuery", "JS", "HTML/CSS", "Web Dev"],
  ["Java", "Cybersecurity", "Maven", "Logging"],
];
const PROJECTS = [];
(async () => {
  try {
    for (const url of PROJECT_URLS) {
      const res = await fetch(url).then((res) => res.json());
      PROJECTS.push({
        name: res.name,
        desc: res.description,
        url: res.html_url,
      });
    }
  } catch (error) {
    console.log("Error", error);
  }
})();
