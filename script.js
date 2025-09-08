document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    const terminal = document.getElementById('terminal');

    const welcomeMessage = `
███████╗ █████╗ ██╗███████╗██╗  ██╗    ███████╗ ██████╗  ██████╗ ██╗  ██╗
██╔════╝██╔══██╗██║██╔════╝██║  ██║    ██╔════╝██╔═══██╗██╔═══██╗╚██╗██╔╝
███████╗███████║██║███████╗███████║    ███████╗██║   ██║██║   ██║ ╚███╔╝ 
╚════██║██╔══██║██║╚════██║██╔══██║    ╚════██║██║   ██║██║   ██║ ██╔██╗ 
███████║██║  ██║██║███████║██║  ██║    ███████║╚██████╔╝╚██████╔╝██╔╝ ██╗
╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝    ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝
                                                                        
Welcome to my interactive shell. Type 'help' to see available commands.
`;

    const commands = {
        help: `
Available commands:
  <span class="success">about</span>      - Who I am
  <span class="success">skills</span>     - My technical skills
  <span class="success">projects</span>   - View my work
  <span class="success">contact</span>    - How to reach me
  <span class="success">hireme</span>     - Services I offer
  <span class="success">secure</span>     - Responsible disclosure policy
  <span class="success">submitflag</span> - Submit a flag for the CTF challenge
  <span class="success">clear</span>      - Clear the terminal screen
`,
        about: `
Hello! I'm Saish, a cybersecurity enthusiast with a passion for offensive security. My expertise lies in identifying and exploiting vulnerabilities to help organizations improve their security posture. I'm driven by a curiosity to understand how systems work and how they can be broken. This terminal is a small example of that passion.
`,
        skills: `
Core Competencies:
- Web Application Penetration Testing
- Network Security & Pentesting
- Vulnerability Assessment & Management
- Exploit Development & Analysis
- Scripting (Python, Bash, JavaScript)
- Tools: Burp Suite, Metasploit, Nmap, Wireshark
- Active Directory Security
- Social Engineering
- Reverse Engineering (Beginner)
`,
        projects: `
Project Portfolio:
(Links will open in a new tab)

1. <a href="https://github.com/saishsolanki/Blind-SQL-Injection-Exploit-Script" target="_blank">Blind SQLi Exploit Script</a>
   - A Python script to automate time-based blind SQL injection.

2. <a href="https://github.com/saishsolanki/Authentication-Bypass-Exploit" target="_blank">Authentication Bypass Exploit</a>
   - An exploit script demonstrating a common authentication bypass technique.

3. <a href="https://github.com/saishsolanki/Resume-Matcher" target="_blank">Resume Matcher</a>
   - A tool to match resumes with job descriptions, which can be adapted for security keyword analysis.

4. <a href="https://github.com/saishsolanki/capstone-project" target="_blank">Capstone Project</a>
   - A comprehensive security assessment framework that combines automated vulnerability scanning with manual penetration testing techniques. This project demonstrates end-to-end security evaluation capabilities.
`,
        contact: `
Get in touch:
- Email: <a href="mailto:saish.solanki@protonmail.com">saish.solanki@protonmail.com</a>
- LinkedIn: <a href="https://linkedin.com/in/saishsolanki" target="_blank">linkedin.com/in/saishsolanki</a>
- GitHub: <a href="https://github.com/saishsolanki" target="_blank">github.com/saishsolanki</a>
`,
        hireme: `
Services Offered:
I am available for freelance and contract opportunities in the following areas:

- **Web Application Security Assessment:** Comprehensive testing for web apps.
- **Network Penetration Testing:** Internal and external network security analysis.
- **Security Code Review:** Identifying vulnerabilities in source code.
- **Custom Security Tooling:** Developing scripts and tools for security tasks.

To discuss a project, please reach out via my contact details ('contact' command).
`,
        secure: `
Responsible Disclosure:
I believe in and support responsible disclosure. If you have found a security vulnerability on this website or any of my projects, please report it.

- **Policy:** Do not publicly disclose the vulnerability until it has been addressed. Act in good faith and avoid privacy violations or data destruction.
- **Contact:** Please email a detailed report to <a href="mailto:saish.solanki@protonmail.com">saish.solanki@protonmail.com</a> with the subject "Security Vulnerability Report".
- **Acknowledgement:** I will make my best effort to respond to your report promptly. Hall of Fame / recognition can be provided.

You can also find my security.txt file at /.well-known/security.txt
`,
        clear: ''
    };

    function checkFlag(flag) {
        const correctFlag = "flag{w3lc0me_t0_my_t3rm1n4l}";
        if (flag === correctFlag) {
            return `
<span class="success">
   ___  __   __  __   __      __   ___  __       ___    __  
  / __\` /  \\ |__) /__\` /__\`    /__\` |__  |__)  |\\ | |__  |  \\ 
  \\__> \\__/ |  \\ .__/ .__/    .__/ |___ |  \\  | \\| |___ |__/ 
</span>
Congratulations! You've found the flag. This demonstrates the kind of curiosity I apply to my work.
`;
        } else {
            return `<span class="error">Incorrect flag. Keep looking!</span>`;
        }
    }

    function executeCommand(command) {
        const [cmd, ...args] = command.split(' ');
        const outputElement = document.createElement('div');
        outputElement.classList.add('command-output');
        
        const promptElement = document.createElement('div');
        promptElement.innerHTML = `<span class="prompt">root@saish.io:~#</span> ${command}`;
        output.appendChild(promptElement);

        if (cmd === 'clear') {
            output.innerHTML = '';
            return;
        } else if (cmd === 'submitflag') {
            const flag = args[0] || '';
            outputElement.innerHTML = checkFlag(flag);
        } else if (commands[cmd]) {
            outputElement.innerHTML = commands[cmd];
        } else {
            outputElement.innerHTML = `<span class="error">Command not found: ${command}. Type 'help' for a list of commands.</span>`;
        }
        
        output.appendChild(outputElement);
    }

    function initTerminal() {
        output.innerHTML = welcomeMessage;
        input.focus();
    }

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = input.value.trim();
            if (command) {
                executeCommand(command);
            }
            input.value = '';
            terminal.scrollTop = terminal.scrollHeight;
        }
    });

    terminal.addEventListener('click', () => {
        input.focus();
    });

    initTerminal();
});
