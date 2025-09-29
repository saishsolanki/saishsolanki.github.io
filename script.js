document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    const terminal = document.getElementById('terminal');
    const themeToggle = document.getElementById('themeToggle');
    
    // Command history and auto-complete functionality
    let commandHistory = [];
    let historyIndex = -1;
    let currentInput = '';
    
    // Theme management
    function toggleTheme() {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        themeToggle.textContent = isLight ? '🌙' : '🌓';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.textContent = '🌙';
    }
    

    themeToggle.addEventListener('click', toggleTheme);

    // Resume download button handler (fixed for both static and dynamic buttons)
    const resumeDownload = document.getElementById('resumeDownload');
    if (resumeDownload) {
        resumeDownload.addEventListener('click', function() {
            window.open('resume.pdf', '_blank');
        });
    }
    // Event delegation for dynamically rendered Download PDF button in terminal
    document.getElementById('output').addEventListener('click', function(e) {
        if (e.target && e.target.tagName === 'BUTTON' && e.target.textContent.includes('Download PDF')) {
            window.downloadPDF();
        }
    });

    const welcomeMessage = `
<div style="text-align:center;padding:18px 0 8px 0;">
  <pre style="display:inline-block;margin:0 auto;font-size:clamp(0.7em,2vw,1.15em);line-height:1.1;white-space:pre;overflow-x:auto;max-width:100%;background:none;border:none;color:var(--success);font-family:monospace;">
░██████╗░█████╗░██╗░██████╗██╗░░██╗  ░░██╗██╗░█████╗░░░██╗██╗
██╔════╝██╔══██╗██║██╔════╝██║░░██║  ░██╔╝██║██╔══██╗░██╔╝██║
╚█████╗░███████║██║╚█████╗░███████║  ██╔╝░██║██║░░██║██╔╝░██║
░╚═══██╗██╔══██║██║░╚═══██╗██╔══██║  ███████║██║░░██║███████║
██████╔╝██║░░██║██║██████╔╝██║░░██║  ╚════██║╚█████╔╝╚════██║
╚═════╝░╚═╝░░╚═╝╚═╝╚═════╝░╚═╝░░╚═╝  ░░░░░╚═╝░╚════╝░░░░░░╚═╝
  </pre>
  <div style="font-size:1.1em;color:var(--text);margin-top:8px;">
    Welcome to my interactive shell. Type '<span class="success">help</span>' to see available commands.
  </div>
</div>
`;

    const commands = {
        help: `
<span class="command-category">📋 SYSTEM & NAVIGATION</span>
  <span class="success">whoami</span>     - Display current user and security privileges
  <span class="success">ls</span>         - List directory contents and available resources
  <span class="success">cat</span>        - Display file contents (try: cat resume.txt)
  <span class="success">sudo</span>       - Access elevated security tools and commands
  <span class="success">clear</span>      - Clear the terminal screen

<span class="command-category">📋 PERSONAL INFO</span>
  <span class="success">about</span>      - Who I am and my background
  <span class="success">skills</span>     - Technical skills with visual representation
  <span class="success">contact</span>    - How to reach me
  <span class="success">social</span>     - Social media and professional networks

<span class="command-category">🎓 PROFESSIONAL</span>
  <span class="success">resume</span>     - Interactive resume with downloadable PDF
  <span class="success">certs</span>      - Detailed cybersecurity certification journey
  <span class="success">certifications</span> - Alias for certs command
  <span class="success">testimonials</span> - Professional recommendations
  <span class="success">projects</span>   - Interactive project showcase

<span class="command-category">🏆 ACHIEVEMENTS & CONTENT</span>
  <span class="success">ctf</span>        - CTF achievements and rankings
  <span class="success">github</span>     - GitHub activity and contributions
  <span class="success">blog</span>       - Technical writeups and research articles

<span class="command-category">🛡️ SECURITY TOOLS & SERVICES</span>
  <span class="success">nmap</span>       - Network discovery simulation
  <span class="success">exploit</span>    - Exploit development showcase
  <span class="success">vulndb</span>     - Vulnerability database search
  <span class="success">news</span>       - Latest cybersecurity news
  <span class="success">hireme</span>     - Services I offer
  <span class="success">calendar</span>   - Book security consultations
  <span class="success">secure</span>     - Responsible disclosure policy

<span class="command-category">🎮 INTERACTIVE & CUSTOMIZATION</span>
  <span class="success">theme</span>      - Toggle dark/light mode
  <span class="success">lab</span>        - Interactive security demonstrations & CTF challenges

<span class="command-category">🏴‍☠️ CTF-STYLE CHALLENGES</span>
  <span class="success">flags</span>       - View all available flags and your progress
  <span class="success">submitflag</span> - Submit a flag for the CTF challenge
  <span class="success">hints</span>      - Get CTF hunting hints and methodology
  <span class="success">resetflags</span> - Reset flag progress (for testing)
  <span class="command-description">🎯 Hidden flags are scattered throughout this system. Can you find them all?</span>

<span class="command-category">💡 TIPS</span>
• Use <span class="success">Tab</span> for command auto-completion
• Use <span class="success">↑/↓</span> arrows to navigate command history  
• Try exploring with commands like 'ls', 'cat', and 'sudo'
• Some commands have hidden easter eggs - experiment!
`,
        about: `
Hello! I'm Saish, a cybersecurity enthusiast with a passion for offensive security. My expertise lies in identifying and exploiting vulnerabilities to help organizations improve their security posture. I'm driven by a curiosity to understand how systems work and how they can be broken. This terminal is a small example of that passion.
`,
        skills: `
<span class="command-category">🔧 TECHNICAL COMPETENCIES</span>

<span class="success">Penetration Testing</span>
<div class="skill-bar"><div class="skill-fill" style="width: 90%">Expert</div></div>

<span class="success">Web Application Security</span>
<div class="skill-bar"><div class="skill-fill" style="width: 95%">Expert</div></div>

<span class="success">Network Security</span>
<div class="skill-bar"><div class="skill-fill" style="width: 85%">Advanced</div></div>

<span class="success">Exploit Development</span>
<div class="skill-bar"><div class="skill-fill" style="width: 80%">Advanced</div></div>

<span class="success">Active Directory Security</span>
<div class="skill-bar"><div class="skill-fill" style="width: 85%">Advanced</div></div>

<span class="success">Linux Administration</span>
<div class="skill-bar"><div class="skill-fill" style="width: 90%">Expert</div></div>

<span class="success">Scripting (Python/Bash)</span>
<div class="skill-bar"><div class="skill-fill" style="width: 88%">Expert</div></div>

<span class="success">Mobile Device Management</span>
<div class="skill-bar"><div class="skill-fill" style="width: 75%">Advanced</div></div>

<span class="command-category">🛠️ TOOLS & FRAMEWORKS</span>
- Burp Suite Professional, Metasploit, Nmap, Wireshark, Metasploit, Nikto, SQLmap
- OWASP Testing Framework, BloodHound, Sliver C2, Impacket
- Git, Jenkins, PowerShell, Windows/Linux environments, 

<span class="command-category">📜 CERTIFICATIONS</span>
- <span class="success">OSCP+</span> - Offensive Security Certified Professional
- <span class="status-warning">In Progress: OSEP</span> Offensive Security Experienced Professional

Type '<span class="success">certifications</span>' for detailed certification timeline.
`,
        projects: `
<span class="command-category">🚀 INTERACTIVE PROJECT SHOWCASE</span>

<span class="success">1. Blind SQL Injection Exploit Script</span>
   🔗 <a href="https://github.com/saishsolanki/Blind-SQL-Injection-Exploit-Script" target="_blank">GitHub Repository</a>
   📝 <span class="success">Technical Details:</span>
      • Time-based blind SQL injection automation
      • Multi-threaded request handling for efficiency
      • Custom payload generation and response analysis
      • Support for various database backends
   🎯 <span class="success">Methodology:</span> OWASP Testing Framework
   🛠️ <span class="success">Technologies:</span> Python, Requests, Threading

<span class="success">2. Authentication Bypass Exploit</span>
   🔗 <a href="https://github.com/saishsolanki/Authentication-Bypass-Exploit" target="_blank">GitHub Repository</a>
   📝 <span class="success">Technical Details:</span>
      • Logic flaw exploitation in authentication mechanisms
      • Session manipulation and token analysis
      • Automated testing across multiple endpoints
   🎯 <span class="success">Challenge:</span> Bypass without credential knowledge
   ✅ <span class="success">Solution:</span> Parameter tampering & session fixation

<span class="success">4. Comprehensive Security Assessment Framework</span>
   🔗 <a href="https://github.com/saishsolanki/capstone-project" target="_blank">Capstone Project</a>
   📝 <span class="success">Technical Details:</span>
      • Automated vulnerability scanning integration
      • Manual penetration testing workflow
      • Custom reporting with risk prioritization
      • Multi-protocol testing capabilities
   🏗️ <span class="success">Architecture:</span> Modular design for extensibility

<span class="command-category">💡 PROJECT HIGHLIGHTS</span>
• <span class="success">Live Demos:</span> Available for non-sensitive projects
• <span class="success">Code Quality:</span> Well-documented with security best practices
• <span class="success">Real-world Impact:</span> Used in actual security assessments

Type '<span class="success">lab</span>' for interactive security demonstrations.
`,
        certifications: `
<span class="command-category">🎓 MY CYBERSECURITY CERTIFICATION JOURNEY</span>

<span class="success">═══════════════════════════════════════════════</span>
<span class="success">OSCP - Offensive Security Certified Professional</span>
<span class="success">═══════════════════════════════════════════════</span>
<span class="status-online">✓ ACHIEVED</span> | Completion: 2024
📍 <span class="success">Key Skills Acquired:</span>
   • Advanced penetration testing methodologies
   • Buffer overflow exploitation techniques  
   • Active Directory enumeration & privilege escalation
   • Manual testing without automated tools
   • Custom exploit development
   • Real-world red team operations

💭 <span class="success">Journey Highlights:</span>
   • 24-hour practical exam simulation
   • Compromised 15+ vulnerable machines in lab environment
   • Developed Anger management due to the Relia machine :)
   • Enhanced report writing for technical stakeholders

<span class="command-category">🔄 CONTINUOUS LEARNING PATH</span>

<span class="success">📚 Planned Certifications (2024-2025):</span>
   • OSEP - Offensive Security Experienced Professional
   • CISSP - Information Systems Security Professional

<span class="command-category">📈 SKILLS PROGRESSION</span>
Each certification represents months of dedicated study, hands-on practice, 
and real-world application. The OSCP has been particularly transformative 
in developing my offensive security mindset and practical skills.

Type '<span class="success">blog</span>' to read about my OSCP journey in detail.
`,
        ctf: `
<span class="command-category">🏆 CTF ACHIEVEMENTS & RANKINGS</span>

<span class="success">🎯 HackTheBox Progress</span>
   📊 <span class="status-online">Rank:</span> Pro Hacker
   🏅 <span class="success">Machines Owned:</span> 25+ (Easy: 15, Medium: 8, Hard: 2)
   🛡️ <span class="success">Categories:</span> Web, Binary, Network, Active Directory
   💎 <span class="success">Special Achievements:</span> Active Directory Labs completion

<span class="success">🎮 TryHackMe Statistics</span>
   📈 <span class="status-online">Global Rank:</span> Top 5%
   🎖️ <span class="success">Rooms Completed:</span> 50+ across various difficulty levels
   🔥 <span class="success">Streak:</span> Consistent daily engagement
   🏷️ <span class="success">Focus Areas:</span> OSCP Prep, Red Team, Forensics

<span class="success">🌐 CTFtime Participation</span>
<div style="margin-left: 1em;">
    <span class="success">2021</span>
    <table class="ctf-table">
        <tr><th>Place</th><th>Event</th><th>CTF points</th><th>Rating points</th></tr>
        <tr><td>625</td><td>ASIS CTF Quals 2021</td><td>20.0000</td><td>0.712</td></tr>
        <tr><td>468</td><td>RaRCTF 2021</td><td>120.0000</td><td>0.233</td></tr>
        <tr><td>426</td><td>Zh3r0 CTF V2</td><td>1.0000</td><td>0.053</td></tr>
        <tr><td>643</td><td>HeroCTF v3</td><td>1.0000</td><td>0.041</td></tr>
        <tr><td>268</td><td>S4CTF 2021</td><td>16.0000</td><td>0.135</td></tr>
        <tr><td>2205</td><td>Cyber Apocalypse 2021</td><td>325.0000</td><td>0.413</td></tr>
        <tr><td>320</td><td>UMDCTF 2021</td><td>401.0000</td><td>0.000</td></tr>
        <tr><td>405</td><td>PlaidCTF 2021</td><td>1.0000</td><td>0.262</td></tr>
        <tr><td>234</td><td>HackPack CTF 2021</td><td>151.0000</td><td>0.000</td></tr>
        <tr><td>388</td><td>RITSEC CTF 2021</td><td>335.0000</td><td>0.000</td></tr>
        <tr><td>1195</td><td>ångstromCTF 2021</td><td>5.0000</td><td>0.075</td></tr>
        <tr><td>265</td><td>FooBar CTF 2021</td><td>101.0000</td><td>0.354</td></tr>
        <tr><td>216</td><td>VolgaCTF 2021 Qualifier</td><td>1.0000</td><td>0.160</td></tr>
        <tr><td>603</td><td>UMassCTF 2021</td><td>50.0000</td><td>0.190</td></tr>
        <tr><td>181</td><td>Securinets CTF Quals 2021</td><td>50.0000</td><td>0.359</td></tr>
        <tr><td>547</td><td>LINE CTF 2021</td><td>50.0000</td><td>0.209</td></tr>
        <tr><td>205</td><td>BlueHens CTF 2021</td><td>5.0000</td><td>0.122</td></tr>
        <tr><td>258</td><td>Codefest CTF 2020</td><td>100.0000</td><td>0.610</td></tr>
        <tr><td>212</td><td>vishwaCTF 2021</td><td>1233.0000</td><td>1.391</td></tr>
        <tr><td>460</td><td>UTCTF 2021</td><td>810.0000</td><td>0.858</td></tr>
        <tr><td>173</td><td>DaVinciCTF 2021</td><td>95.0000</td><td>0.918</td></tr>
        <tr><td>87</td><td>Break the Syntax CTF 2021</td><td>5.0000</td><td>0.296</td></tr>
        <tr><td>718</td><td>zer0pts CTF 2021</td><td>50.0000</td><td>0.270</td></tr>
        <tr><td>937</td><td>Tenable CTF 2021</td><td>375.0000</td><td>1.258</td></tr>
        <tr><td>165</td><td>TrollCAT CTF 2021</td><td>800.0000</td><td>2.018</td></tr>
        <tr><td>537</td><td>DiceCTF 2021</td><td>1.0000</td><td>0.051</td></tr>
    </table>
    <br>
    <span class="success">2022</span>
    <table class="ctf-table">
        <tr><th>Place</th><th>Event</th><th>CTF points</th><th>Rating points</th></tr>
        <tr><td>253</td><td>Hackappatoi CTF '22</td><td>50.0000</td><td>0.213</td></tr>
        <tr><td>507</td><td>VishwaCTF 2022</td><td>600.0000</td><td>0.638</td></tr>
    </table>
    <br>
    <span class="success">2023</span>
    <table class="ctf-table">
        <tr><th>Place</th><th>Event</th><th>CTF points</th><th>Rating points</th></tr>
        <tr><td>874</td><td>TJCTF 2023</td><td>6.0000</td><td>0.073</td></tr>
        <tr><td>287</td><td>Incognito 4.0</td><td>539.0000</td><td>0.941</td></tr>
        <tr><td>336</td><td>0xL4ughCTF 2023</td><td>10.0000</td><td>0.106</td></tr>
    </table>
</div>

<span class="command-category">📈 SKILL DEVELOPMENT</span>
• <span class="success">Problem-Solving:</span> Enhanced through diverse challenge formats
• <span class="success">Tool Proficiency:</span> Expanded toolkit through practical application
• <span class="success">Community Learning:</span> Knowledge sharing with global cybersecurity community

<span class="success">🎲 Current Challenge:</span> Advanced binary exploitation techniques
`,
        github: `
<span class="command-category">💻 GITHUB ACTIVITY & CONTRIBUTIONS</span>

<span class="success">📊 Contribution Overview</span>
   🔗 Profile: <a href="https://github.com/saishsolanki" target="_blank">github.com/saishsolanki</a>
   📈 <span class="status-online">Activity Level:</span> Regularly active contributor
   🌟 <span class="success">Focus:</span> Cybersecurity tools and educational resources

<span class="success">🚀 Featured Repositories</span>
   1. <span class="success">Blind-SQL-Injection-Exploit-Script</span>
      ⭐ Security tool for automated SQLi testing
   
   2. <span class="success">Authentication-Bypass-Exploit</span>
      🔐 Authentication vulnerability demonstration
   
   3. <span class="success">Resume-Matcher</span>
      🤖 ML-powered job matching with security adaptations
   
   4. <span class="success">capstone-project</span>
      🏗️ Comprehensive security assessment framework

<span class="success">🌐 Open Source Contributions</span>
   • Security tool improvements and bug fixes
   • Documentation enhancements for cybersecurity projects
   • Educational resources for aspiring security professionals

<span class="success">📅 Recent Activity</span>
   • Regular commits to security-focused repositories
   • Code quality improvements and security hardening
   • Collaboration on cybersecurity research projects

<span class="command-category">🔍 CODE QUALITY</span>
All repositories maintain high standards with proper documentation,
security best practices, and educational value for the community.
`,
        blog: `
<span class="command-category">📝 TECHNICAL BLOG & WRITEUPS</span>

<span class="success">🎯 OSCP Journey Series</span>
   📖 <span class="success">"My OSCP Journey: From Zero to Certified"</span>
      • 6-month preparation strategy and timeline
      • Lab experience and machine walkthroughs
      • Exam day experience and lessons learned
      • Resources that made the difference

<span class="success">🔬 Security Research Articles</span>
   📄 <span class="success">"Advanced SQL Injection Techniques"</span>
      • Beyond basic injection: time-based and blind techniques
      • Automated testing script development
      • Real-world case studies and remediation

   📄 <span class="success">"Authentication Bypass Patterns"</span>
      • Common logic flaws in authentication systems
      • Testing methodologies and tool development
      • Defense strategies for developers

<span class="success">🏗️ Technical Tutorials</span>
   🛠️ <span class="success">"Building Security Assessment Frameworks"</span>
      • Architecture design for scalable testing
      • Integration of automated and manual testing
      • Reporting and risk prioritization strategies

<span class="success">💡 Industry Insights</span>
   📊 <span class="success">"The Evolution of Cybersecurity Threats"</span>
      • Analysis of emerging attack vectors
      • Impact on enterprise security strategies
      • Recommendations for security professionals

<span class="command-category">📬 PUBLICATION SCHEDULE</span>
New content published regularly focusing on practical cybersecurity
skills, real-world applications, and lessons from the field.

<span class="success">💬 Featured on LinkedIn:</span> <a href="https://linkedin.com/in/saishsolanki" target="_blank">Professional insights and career journey</a>
`,
        testimonials: `
<span class="command-category">💬 PROFESSIONAL RECOMMENDATIONS</span>

<span class="success">⭐⭐⭐⭐⭐ Colleague Recommendation</span>
<span class="command-description">"It is a pleasure working with Saish, whose growth mindset and 
dedication make him an invaluable team member. He embraces challenges 
as opportunities to learn and is always ready to help at any moment's 
notice."</span>
— <span class="success">Team Lead, IT Infrastructure</span>

<span class="success">⭐⭐⭐⭐⭐ Project Manager Feedback</span>
<span class="command-description">"Saish's approach to cybersecurity is both methodical and innovative. 
His ability to identify vulnerabilities while maintaining system stability 
has been crucial to our security posture improvements."</span>
— <span class="success">Senior Project Manager</span>

<span class="success">⭐⭐⭐⭐⭐ Mentor Endorsement</span>
<span class="command-description">"Saish demonstrates exceptional technical skills combined with strong 
communication abilities. His OSCP achievement reflects his dedication 
to continuous learning and professional excellence."</span>
— <span class="success">Cybersecurity Mentor</span>

<span class="success">⭐⭐⭐⭐⭐ Client Testimonial</span>
<span class="command-description">"The security assessment provided by Saish was thorough and actionable. 
His recommendations were practical and well-prioritized, leading to 
significant improvements in our security posture."</span>
— <span class="success">IT Director, Client Organization</span>

<span class="command-category">🤝 PROFESSIONAL NETWORK</span>
Connected with cybersecurity professionals across various industries,
contributing to knowledge sharing and collaborative problem-solving.

<span class="success">📞 References Available:</span> Upon request for serious opportunities
`,
        contact: `
<span class="command-category">📞 GET IN TOUCH</span>

<span class="success">📧 Email:</span> <a href="mailto:saish.b.solanki@gmail.com">saish.b.solanki@gmail.com</a>
    <span class="command-description">Secure communication preferred - PGP key available on request</span>

<span class="success">💼 LinkedIn:</span> <a href="https://linkedin.com/in/saishsolanki" target="_blank">linkedin.com/in/saishsolanki</a>
   <span class="command-description">Professional networking and career updates</span>

<span class="success">💻 GitHub:</span> <a href="https://github.com/saishsolanki" target="_blank">github.com/saishsolanki</a>
   <span class="command-description">Open source contributions and security projects</span>

<span class="command-category">⚡ RESPONSE TIMES</span>
• <span class="success">Email:</span> Within 24 hours for professional inquiries
• <span class="success">LinkedIn:</span> Same day for connection requests
• <span class="success">Security Reports:</span> Priority handling within 12 hours

<span class="command-category">🔒 SECURE COMMUNICATION</span>
For sensitive security matters, encrypted communication options available.
Contact me for secure channels and PGP key exchange.

<span class="success">🌍 Location:</span> Available for remote work globally
<span class="success">🕒 Timezone:</span> Flexible scheduling for international clients
`,
        lab: `
<span class="command-category">🔬 INTERACTIVE SECURITY LAB</span>

<span class="success">🔐 Password Strength Analyzer</span>
Enter a password to test: <input type="password" id="passwordInput" style="background: var(--bg-secondary); color: var(--text); border: 1px solid var(--border); padding: 4px; font-family: inherit;">
<button onclick="analyzePassword()" style="background: var(--border); color: var(--background); border: none; padding: 4px 8px; margin-left: 5px; cursor: pointer; font-family: inherit;">Test</button>
<div id="passwordResult"></div>

<span class="success">🛡️ Basic Encryption/Decryption Tool</span>
<input type="text" id="encryptInput" placeholder="Enter text to encrypt" style="background: var(--bg-secondary); color: var(--text); border: 1px solid var(--border); padding: 4px; width: 200px; font-family: inherit;">
<button onclick="encryptText()" style="background: var(--border); color: var(--background); border: none; padding: 4px 8px; margin-left: 5px; cursor: pointer; font-family: inherit;">Encrypt</button>
<div id="encryptResult"></div>

<span class="success">🌐 Network Port Scanner Simulator</span>
<input type="text" id="portInput" placeholder="Enter port range (e.g., 80-443)" style="background: var(--bg-secondary); color: var(--text); border: 1px solid var(--border); padding: 4px; font-family: inherit;">
<button onclick="simulatePortScan()" style="background: var(--border); color: var(--background); border: none; padding: 4px 8px; margin-left: 5px; cursor: pointer; font-family: inherit;">Scan</button>
<div id="portScanResult"></div>

<span class="command-category">🎮 CTF-STYLE CHALLENGES</span>

<span class="success">Challenge 1: Base64 Decoder</span>
Decode this: U2FpdGggaXMgYSBza2lsbGVkIGN5YmVyc2VjdXJpdHkgcHJvZmVzc2lvbmFs
<input type="text" id="base64Input" placeholder="Enter decoded text" style="background: var(--bg-secondary); color: var(--text); border: 1px solid var(--border); padding: 4px; width: 250px; font-family: inherit;">
<button onclick="checkBase64()" style="background: var(--border); color: var(--background); border: none; padding: 4px 8px; margin-left: 5px; cursor: pointer; font-family: inherit;">Check</button>
<div id="base64Result"></div>

<span class="success">Challenge 2: OSINT Flag Hunt</span>
<span class="command-description">To find the flag, investigate my professional digital footprint. The answer is hidden in plain sight :) Format: <b>flag&#123;...&#125;</b></span>
<input type="text" id="osintFlagInput" placeholder="Enter OSINT flag here" style="background: var(--bg-secondary); color: var(--text); border: 1px solid var(--border); padding: 4px; width: 250px; font-family: inherit;">
<button onclick="checkOsintFlag()" style="background: var(--border); color: var(--background); border: none; padding: 4px 8px; margin-left: 5px; cursor: pointer; font-family: inherit;">Check</button>
<div id="osintFlagResult"></div>

<span class="command-description">Note: These are educational demonstrations. Real security testing 
should only be performed on systems you own or have explicit permission to test.</span>
`,
        resume: `
<span class="command-category">📄 INTERACTIVE RESUME</span>

<span class="success">👤 SAISH SOLANKI - CYBERSECURITY ANALYST</span>
<span class="status-online">OSCP Certified</span> | <span class="success">Offensive Security Specialist</span>

<button onclick="toggleSection('experience')" style="background: var(--border); color: var(--background); border: none; padding: 4px 8px; cursor: pointer; font-family: inherit; margin: 2px;">💼 Experience</button>
<button onclick="toggleSection('education')" style="background: var(--border); color: var(--background); border: none; padding: 4px 8px; cursor: pointer; font-family: inherit; margin: 2px;">🎓 Education</button>
<button onclick="toggleSection('certifications-resume')" style="background: var(--border); color: var(--background); border: none; padding: 4px 8px; cursor: pointer; font-family: inherit; margin: 2px;">📜 Certifications</button>
<button onclick="downloadPDF()" style="background: var(--accent); color: white; border: none; padding: 4px 8px; cursor: pointer; font-family: inherit; margin: 2px;">📥 Download PDF</button>

<div id="experience" style="display: none;">
<span class="command-category">💼 PROFESSIONAL EXPERIENCE</span>

<span class="success">Cybersecurity Analyst & IT Infrastructure Specialist</span>
<span class="command-description">Current Role</span>
• Conducting comprehensive vulnerability assessments and penetration testing
• Managing enterprise IT infrastructure and mobile device management
• Developing custom security tools and automation scripts
• Collaborating with cross-functional teams to enhance security posture

<span class="success">Security Research & Tool Development</span>
<span class="command-description">Personal Projects</span>
• Created automated SQL injection testing frameworks
• Developed authentication bypass exploitation tools
• Contributed to open-source cybersecurity projects
• Published technical research and educational content
</div>

<div id="education" style="display: none;">
<span class="command-category">🎓 EDUCATION & TRAINING</span>

<span class="success">Cybersecurity Specialization</span>
• Offensive Security Certified Professional (OSCP) - 2024
• Advanced penetration testing methodologies
• Exploit development and vulnerability research
• Real-world red team simulation experience

<span class="success">Continuous Learning</span>
• HackTheBox Pro Labs and Machines
• TryHackMe Advanced Paths
• Industry conferences and workshops
• Open-source tool development and research
</div>

<div id="certifications-resume" style="display: none;">
<span class="command-category">📜 CERTIFICATIONS & ACHIEVEMENTS</span>

<span class="success">✓ OSCP - Offensive Security Certified Professional (2024)</span>
• 24-hour hands-on practical examination
• Real-world penetration testing scenarios
• Buffer overflow exploitation mastery
• Active Directory enumeration and privilege escalation

<span class="success">🎯 CTF Achievements</span>
• HackTheBox Pro Hacker ranking
• TryHackMe top 5% global ranking
• Multiple CTF competition participations
• Specialized in web exploitation and binary analysis
</div>

<span class="command-category">🔗 QUICK LINKS</span>
Type '<span class="success">skills</span>' for technical competencies
Type '<span class="success">projects</span>' for detailed project portfolio
Type '<span class="success">contact</span>' for professional contact information
`,
        news: `
<span class="command-category">📰 CYBERSECURITY NEWS & INSIGHTS</span>
<span class="success">🚨 Latest Security Advisories</span>
<span class="status-warning">⚠️ High Priority:</span> Keep systems updated with latest security patches
• Regular monitoring of CVE databases for new vulnerabilities
• Focus on web application and network infrastructure threats
• Enterprise security tool updates and configuration reviews

<span class="success">🔍 Industry Trends (2024)</span>
• <span class="success">AI-Powered Security:</span> Integration of machine learning in threat detection
• <span class="success">Zero Trust Architecture:</span> Continued adoption across enterprises
• <span class="success">Supply Chain Security:</span> Enhanced focus on third-party risk assessment
• <span class="success">Cloud Security:</span> Multi-cloud security challenges and solutions

<span class="success">📈 Emerging Threat Vectors</span>
• Social engineering targeting remote workforce
• IoT device vulnerabilities in enterprise networks
• Advanced persistent threats (APTs) in critical infrastructure
• Ransomware evolution and defense strategies

<span class="success">💡 Professional Development</span>
• New certification programs and specializations
• Industry conference highlights and key takeaways
• Open-source tool releases and security research
• Community contributions and knowledge sharing

<span class="command-category">🔔 STAYING CURRENT</span>
I actively monitor multiple cybersecurity news sources, vulnerability
databases, and research publications to stay informed about the latest
developments in the cybersecurity landscape.

<span class="success">📊 Key Sources:</span> SANS, OWASP, CVE Database, Security Conferences
`,
        theme: `
<span class="command-category">🎨 THEME MANAGEMENT</span>

<span class="success">Current Theme:</span> <span id="currentTheme">Dark Mode</span>

<button onclick="toggleThemeCommand()" style="background: var(--border); color: var(--background); border: none; padding: 8px 16px; cursor: pointer; font-family: inherit; margin: 10px 0;">
  🌓 Toggle Theme
</button>

<span class="command-category">🎯 THEME OPTIONS</span>

<span class="success">🌙 Dark Mode (Cybersecurity Professional)</span>
• Deep blacks and dark grays for reduced eye strain
• Green terminal text for classic hacker aesthetic
• Cyan accents for improved readability
• Subtle red highlights for important elements

<span class="success">☀️ Light Mode (Business Professional)</span>
• Clean whites and light grays for professional appearance
• Dark blue text for excellent readability
• Professional blue accents and highlights
• Designed for client presentations and formal settings

<span class="command-category">⚙️ CUSTOMIZATION</span>
Theme preference is automatically saved to browser localStorage
and persists across sessions for optimal user experience.

<span class="success">💡 Tip:</span> Use the 🌓 button in the top-right corner for quick theme switching!
`,
        hireme: `
Services Offered:
I am available for freelance and contract opportunities in the following areas:

- Web Application Security Assessment: Comprehensive testing for web apps.
- Network Penetration Testing: Internal and external network security analysis.
- Security Code Review: Identifying vulnerabilities in source code.
- Custom Security Tooling: Developing scripts and tools for security tasks.

To discuss a project, please reach out via my contact details ('contact' command).
`,
        whoami: `
<span class="success">root@saish.io</span>
<span class="command-description">Current user: Saish Solanki - OSCP Certified Penetration Tester</span>
<span class="success">Privileges:</span> Administrator access to offensive security operations
<span class="success">Groups:</span> cybersec-pros, oscp-certified, redteam-ops, ethical-hackers
<span class="success">Last login:</span> ${new Date().toLocaleString()} from secure-terminal
<span class="success">Security clearance:</span> Authorized for vulnerability assessment and penetration testing
        `,
        ls: `
<span class="command-category">📁 DIRECTORY LISTING</span>
<span class="success">total 8</span>
drwxr-xr-x  2 saish saish 4096 ${new Date().toDateString()} <span class="success">projects/</span>
drwxr-xr-x  2 saish saish 4096 ${new Date().toDateString()} <span class="success">certifications/</span>
drwxr-xr-x  2 saish saish 4096 ${new Date().toDateString()} <span class="success">blog/</span>
drwxr-xr-x  2 saish saish 4096 ${new Date().toDateString()} <span class="success">tools/</span>
drwxr-xr-x  2 saish saish 4096 ${new Date().toDateString()} <span class="success">ctf/</span>
-rw-r--r--  1 saish saish 2048 ${new Date().toDateString()} <span class="success">resume.pdf</span>
-rw-r--r--  1 saish saish 1024 ${new Date().toDateString()} <span class="success">contact.txt</span>
-rwx------  1 saish saish  512 ${new Date().toDateString()} <span class="error">.hidden_flag</span>

<span class="command-description">Use 'cat <filename>' to view file contents or 'cd <directory>' to navigate</span>
        `,
        'cat resume.txt': `
<span class="command-category">📄 RESUME.TXT</span>
<span class="success">=====================================</span>
<span class="success">SAISH SOLANKI - CYBERSECURITY ANALYST</span>
<span class="success">=====================================</span>

📧 saish.b.solanki@gmail.com
🔗 linkedin.com/in/saishsolanki
💻 github.com/saishsolanki
🛡️ OSCP Certified Professional

<span class="command-category">SUMMARY</span>
Offensive security specialist with expertise in penetration testing,
vulnerability assessment, and security tool development. OSCP certified
with hands-on experience in real-world security operations.

<span class="command-category">CORE COMPETENCIES</span>
• Web Application Security Testing    • Network Penetration Testing
• Active Directory Security          • Exploit Development
• Python/Bash Scripting            • Linux/Windows Administration
• Security Tool Development         • Vulnerability Research

<span class="command-category">CERTIFICATIONS</span>
✓ OSCP - Offensive Security Certified Professional (2024)
⏳ OSEP - In Progress

Type 'resume' for interactive version or 'contact' for full details
        `,
        sudo: () => {
            return `
<span class="success">[sudo] password for saish:</span> <span class="command-description">●●●●●●●●</span>
<span class="success">Access granted. Welcome to the matrix.</span>

<span class="error">⚠️  WARNING: ELEVATED PRIVILEGES ACTIVE ⚠️</span>

<span class="success">You now have administrative access to:</span>
• Advanced penetration testing tools
• Vulnerability databases and exploit code  
• Network scanning and enumeration utilities
• Custom security assessment frameworks

<span class="command-category">🛡️ AVAILABLE SUDO COMMANDS</span>
<span class="success">sudo nmap</span>     - Network discovery and security auditing
<span class="success">sudo metasploit</span> - Penetration testing framework
<span class="success">sudo burpsuite</span> - Web application security testing
<span class="success">sudo bloodhound</span> - Active Directory attack path analysis

<span class="command-description">Remember: With great power comes great responsibility. 
Use these tools ethically and only on systems you own or have explicit permission to test.</span>
            `;
        },
        social: `
<span class="command-category">🌐 SOCIAL & PROFESSIONAL NETWORKS</span>

<span class="success">💼 Professional</span>
🔗 <a href="https://linkedin.com/in/saishsolanki" target="_blank">LinkedIn</a> - Professional networking and career updates
   <span class="command-description">Connect for cybersecurity insights and opportunities</span>

<span class="success">💻 Development</span>
🔗 <a href="https://github.com/saishsolanki" target="_blank">GitHub</a> - Open source security tools and projects
   <span class="command-description">Explore my security research and tool development</span>

<span class="success">🎮 Security Communities</span>
🔗 <a href="https://app.hackthebox.com/users/profile" target="_blank">HackTheBox</a> - Pro Hacker rank
   <span class="command-description">Follow my machine walkthroughs and challenges</span>

🔗 <a href="https://tryhackme.com/p/saishsolanki" target="_blank">TryHackMe</a> - Top 5% global ranking
   <span class="command-description">Educational content and skill demonstrations</span>

🔗 <a href="https://ctftime.org/user/profile" target="_blank">CTFtime</a> - Competitive cybersecurity challenges
   <span class="command-description">CTF participation history and achievements</span>

<span class="command-category">📧 SECURE COMMUNICATION</span>
For sensitive security matters, please use encrypted channels.
Type 'contact' for secure communication options.
        `,
        certs: `
<span class="command-category">🎓 CYBERSECURITY CERTIFICATION PORTFOLIO</span>

<span class="success">🏆 ACHIEVED CERTIFICATIONS</span>

<span class="status-online">✓ OSCP - Offensive Security Certified Professional</span>
   📅 <span class="success">Earned:</span> 2024
   🎯 <span class="success">Focus:</span> Hands-on penetration testing and exploit development
   💪 <span class="success">Skills Gained:</span>
      • Manual vulnerability assessment techniques
      • Buffer overflow exploitation
      • Active Directory enumeration and privilege escalation
      • Custom exploit development and payload crafting
      • Professional penetration testing report writing

<span class="success">🔄 IN PROGRESS</span>

<span class="status-warning">⏳ OSEP - Offensive Security Experienced Professional</span>
   📚 <span class="success">Status:</span> Currently studying advanced techniques
   🎯 <span class="success">Focus Areas:</span>
      • Advanced evasion techniques
      • Code review and exploit development
      • Advanced persistence mechanisms
      • Bypassing modern security controls

<span class="success">📈 PLANNED CERTIFICATIONS (2024-2025)</span>
   • CISSP - Information Systems Security Professional
   • GCIH - GIAC Certified Incident Handler
   • GCPN - GIAC Certified Penetration Tester

<span class="command-category">🎖️ PROFESSIONAL DEVELOPMENT</span>
<span class="success">Continuous Learning Metrics:</span>
• 300+ hours of hands-on lab practice annually
• Regular participation in security conferences and workshops  
• Active contribution to cybersecurity community knowledge base
• Mentoring aspiring security professionals

<span class="command-description">Each certification represents months of dedicated study and
real-world application. The OSCP journey alone involved 400+ hours
of lab practice and vulnerability research.</span>
        `,
        blog: `
<span class="command-category">📚 TECHNICAL BLOG & RESEARCH</span>

<span class="success">🎯 FEATURED ARTICLES</span>

<span class="success">1. "My OSCP Journey: 400 Hours to Certification"</span>
   📅 Published: 2024
   📖 <span class="command-description">Detailed walkthrough of OSCP preparation strategy, lab experience, 
      exam tips, and lessons learned. Includes resource recommendations 
      and timeline planning for aspiring candidates.</span>

<span class="success">2. "Advanced SQL Injection: Beyond Basic Payloads"</span>
   🔬 <span class="command-description">Deep dive into time-based blind SQL injection techniques,
      automated testing frameworks, and real-world case studies from
      penetration testing engagements.</span>

<span class="success">3. "Authentication Logic Flaws: A Penetration Tester's Guide"</span>
   🔐 <span class="command-description">Analysis of common authentication bypass vulnerabilities,
      testing methodologies, and secure development practices to 
      prevent logic flaws.</span>

<span class="success">4. "Building Scalable Security Assessment Frameworks"</span>
   🏗️ <span class="command-description">Technical guide to developing automated vulnerability
      scanning integration with manual testing workflows, including
      architecture patterns and reporting strategies.</span>

<span class="success">📊 INDUSTRY INSIGHTS SERIES</span>

<span class="success">🔍 "Emerging Threat Landscape Analysis"</span>
   • Evolution of cybersecurity threats in 2024
   • Impact on enterprise security strategies  
   • Defensive recommendations for security teams

<span class="success">💡 "Practical Cybersecurity for Developers"</span>
   • Secure coding practices and vulnerability prevention
   • Integration of security testing in CI/CD pipelines
   • Real-world examples from penetration testing findings

<span class="command-category">📈 PUBLICATION METRICS</span>
• <span class="success">Readership:</span> Growing audience of cybersecurity professionals
• <span class="success">Engagement:</span> High interaction from industry practitioners
• <span class="success">Focus:</span> Practical, hands-on security content with real-world applications

<span class="success">🔗 Platform:</span> Published on LinkedIn and personal blog
<span class="success">📬 Updates:</span> New content published bi-weekly

<span class="command-description">All articles emphasize practical application, ethical hacking
practices, and knowledge sharing within the cybersecurity community.</span>
        `,
        secure: `
Responsible Disclosure:
I believe in and support responsible disclosure. If you have found a security vulnerability on this website or any of my projects, please report it.

- Policy: Do not publicly disclose the vulnerability until it has been addressed. Act in good faith and avoid privacy violations or data destruction.
- Contact: Please email a detailed report to <a href="mailto:saish.b.solanki@gmail.com">saish.b.solanki@gmail.com</a> with the subject "Security Vulnerability Report".
- Acknowledgement: I will make my best effort to respond to your report promptly. Hall of Fame / recognition can be provided.

You can also find my security.txt file at /.well-known/security.txt
`,
        nmap: `
<span class="command-category">🔍 NETWORK DISCOVERY SIMULATION</span>
<span class="success">Starting Nmap scan simulation...</span>

Nmap scan report for saish.io (127.0.0.1)
Host is up (0.00012s latency).

<span class="success">PORT     STATE SERVICE</span>
22/tcp   <span class="status-online">open</span>  ssh
80/tcp   <span class="status-online">open</span>  http  
443/tcp  <span class="status-online">open</span>  https
3389/tcp <span class="error">closed</span> ms-wbt-server

<span class="command-category">🛡️ SECURITY SCAN RESULTS</span>
| ssh-hostkey: 
|   2048 aa:bb:cc:dd:ee:ff (RSA)
|_  256 ff:ee:dd:cc:bb:aa (ECDSA)
| http-title: Saish Solanki - Cybersecurity Professional
|_Requested resource was https://saish.io/
| ssl-cert: Subject: CN=saish.io
|_Not valid after: 2025-12-31T23:59:59

<span class="success">Nmap done:</span> 1 IP address (1 host up) scanned in 2.45 seconds
<span class="command-description">Note: This is a simulation for educational purposes.</span>
        `,
        exploit: `
<span class="command-category">🎯 EXPLOIT DEVELOPMENT SHOWCASE</span>
<span class="error">⚠️ WARNING: Educational demonstration only ⚠️</span>

<span class="success">Available Exploit Modules:</span>

<span class="success">1. Buffer Overflow Demonstration</span>
   📝 <span class="command-description">Classic stack-based buffer overflow with NOP sled</span>
   🎯 Target: Simulated vulnerable application
   💊 Payload: Custom shellcode execution
   
<span class="success">2. SQL Injection Exploitation</span>
   📝 <span class="command-description">Time-based blind SQL injection automation</span>
   🎯 Target: Web application database
   💊 Payload: Data extraction and authentication bypass

<span class="success">3. Authentication Logic Bypass</span>
   📝 <span class="command-description">Parameter manipulation and session fixation</span>
   🎯 Target: Web application login system
   💊 Payload: Privilege escalation and unauthorized access

<span class="command-category">🔬 EXPLOIT DEVELOPMENT PROCESS</span>
1. <span class="success">Reconnaissance:</span> Target analysis and vulnerability identification
2. <span class="success">Weaponization:</span> Payload development and testing
3. <span class="success">Delivery:</span> Exploit execution and verification
4. <span class="success">Remediation:</span> Vulnerability documentation and fix recommendations

<span class="error">ETHICAL NOTICE:</span> All demonstrated techniques are for educational
purposes and authorized testing environments only. Unauthorized use
of these techniques against systems you do not own is illegal.
        `,
        vulndb: `
<span class="command-category">🗃️ VULNERABILITY DATABASE SEARCH</span>

<span class="success">Recent High-Severity Vulnerabilities:</span>

<span class="error">CVE-2024-XXXX</span> - Remote Code Execution in Web Frameworks
   🎯 <span class="success">CVSS Score:</span> 9.8 (Critical)
   📊 <span class="success">Impact:</span> Complete system compromise possible
   🛠️ <span class="success">Mitigation:</span> Update to latest version immediately

<span class="error">CVE-2024-YYYY</span> - Privilege Escalation in Operating Systems  
   🎯 <span class="success">CVSS Score:</span> 8.4 (High)
   📊 <span class="success">Impact:</span> Local privilege escalation to root/admin
   🛠️ <span class="success">Mitigation:</span> Apply security patches and audit user permissions

<span class="success">Search Options:</span>
• vulndb search <keyword> - Search for specific vulnerabilities
• vulndb recent - Show recently disclosed vulnerabilities  
• vulndb critical - Filter critical severity only
• vulndb product <name> - Search vulnerabilities in specific products

<span class="command-category">📊 VULNERABILITY STATISTICS</span>
<span class="success">Total CVEs in database:</span> 200,000+
<span class="success">Critical vulnerabilities (2024):</span> 1,250+
<span class="success">High-severity web app vulns:</span> 3,400+
<span class="success">Network infrastructure vulns:</span> 850+

<span class="command-description">Database updated daily from official sources including
NIST NVD, security vendors, and responsible disclosure programs.</span>
        `,
        calendar: `
<span class="command-category">📅 CONSULTATION BOOKING SYSTEM</span>

<span class="success">🕒 AVAILABLE TIME SLOTS</span>

<span class="success">Week of ${new Date().toDateString()}:</span>
• Monday   10:00 AM - 12:00 PM EST  [<span class="status-online">Available</span>]
• Tuesday   2:00 PM -  4:00 PM EST  [<span class="status-online">Available</span>]  
• Wednesday 9:00 AM - 11:00 AM EST  [<span class="error">Booked</span>]
• Thursday  3:00 PM -  5:00 PM EST  [<span class="status-online">Available</span>]
• Friday   11:00 AM -  1:00 PM EST  [<span class="status-online">Available</span>]

<span class="success">🎯 CONSULTATION TYPES</span>

<span class="success">Security Assessment Planning</span> (1 hour)
   💰 Rate: $150/hour
   📋 Includes: Scope definition, methodology discussion, timeline planning

<span class="success">Vulnerability Report Review</span> (2 hours)
   💰 Rate: $150/hour  
   📋 Includes: Finding analysis, risk prioritization, remediation planning

<span class="success">Career Mentoring - Cybersecurity</span> (1 hour)
   💰 Rate: $100/hour
   📋 Includes: OSCP guidance, career planning, skill development advice

<span class="success">📞 TO BOOK A CONSULTATION:</span>
Email: <a href="mailto:saish.b.solanki@gmail.com?subject=Consultation%20Booking">saish.b.solanki@gmail.com</a>
Subject: "Consultation Booking - [Service Type]"

Include:
• Preferred time slot from available options
• Brief description of consultation needs  
• Your timezone for scheduling coordination

<span class="success">⏰ RESPONSE TIME:</span> Booking confirmations within 24 hours
<span class="success">🌍 TIMEZONE:</span> Flexible scheduling for international clients
        `,
        flags: () => {
            const flags = window.flags || {};
            let discoveredFlags = JSON.parse(localStorage.getItem('discoveredFlags')) || [];
            
            const flagsList = Object.entries(flags).map(([flag, data]) => `
<span class="success">${flag}</span>
   🎯 <span class="command-description">Difficulty:</span> ${data.difficulty}
   📍 <span class="command-description">Location:</span> ${data.location} 
   💰 <span class="command-description">Points:</span> ${data.points}
   💡 <span class="command-description">Hint:</span> ${data.hint}
   ${discoveredFlags.includes(flag) ? '<span class="status-online">✓ FOUND</span>' : '<span class="error">❌ NOT FOUND</span>'}
`).join('');
            
            const totalPoints = discoveredFlags.reduce((total, f) => {
                const points = {
                    'flag{w3lc0me_t0_my_t3rm1n4l}': 100,
                    'flag{oscp_certified_hacker}': 200,
                    'flag{sudo_make_me_a_sandwich}': 150,
                    'flag{1337_h4x0r_sk1llz}': 300,
                    'flag{pwn3d_th3_t3rm1n4l}': 500
                };
                return total + (points[f] || 0);
            }, 0);
            
            return `
<span class="command-category">🏴‍☠️ CTF FLAG HUNT PROGRESS</span>

<span class="success">Available Flags (${Object.keys(flags).length} total):</span>
${flagsList}

<span class="success">Your Progress:</span>
📊 Flags Found: ${discoveredFlags.length}/${Object.keys(flags).length}
🏆 Total Points: ${totalPoints}

<span class="command-category">🔍 TESTING COMMANDS</span>
<span class="success">submitflag [flag]</span> - Submit a discovered flag
<span class="success">resetflags</span> - Reset progress (for testing)
<span class="success">hints</span> - Get additional hints
            `;
        },
        resetflags: () => {
            localStorage.removeItem('discoveredFlags');
            discoveredFlags = [];
            return '<span class="success">🔄 Flag progress reset! All flags are now undiscovered.</span>';
        },
        hints: `
<span class="command-category">💡 FLAG HUNTING HINTS</span>

<span class="success">General CTF Methodology:</span>
1. <span class="success">Reconnaissance:</span> Examine all source code (HTML, CSS, JS)
2. <span class="success">Command Exploration:</span> Try different commands and parameters
3. <span class="success">OSINT:</span> Check external links and social media
4. <span class="success">Source Analysis:</span> Look for comments and hidden content
5. <span class="success">Interactive Testing:</span> Experiment with terminal features

<span class="success">Specific Areas to Investigate:</span>
• 🔍 HTML source code comments
• 🎨 CSS stylesheet comments  
• 💻 JavaScript code analysis
• 🔐 Administrative commands (sudo, etc.)
• 🌐 Social media profiles and professional networks

<span class="success">Pro Tips:</span>
• Use browser Developer Tools (F12)
• Try variations of commands
• Look for ASCII art and hidden messages
• Check both obvious and subtle hiding spots
• Follow external links for OSINT challenges

<span class="command-description">Remember: Think like a penetration tester! 
Leave no stone unturned in your reconnaissance.</span>
        `,
        clear: '',
        all: '', // placeholder, will be set below
    };

    // After the commands object is defined, set the 'all' command dynamically:
    commands.all = `
<span class="command-category">📝 ALL COMMAND OUTPUTS</span>
${Object.keys(commands).filter(cmd => cmd !== 'all').map(cmd => `
<div style="margin-bottom:2em;">
  <span class="success">Command: <b>${cmd}</b></span>
  <div class="command-output">${commands[cmd]}</div>
</div>
`).join('')}
`;

    // Interactive Lab Functions
    window.analyzePassword = function() {
        const password = document.getElementById('passwordInput').value;
        const result = document.getElementById('passwordResult');
        
        if (!password) {
            result.innerHTML = '<span class="error">Please enter a password to analyze.</span>';
            return;
        }
        
        let score = 0;
        let feedback = [];
        
        if (password.length >= 8) score++; else feedback.push('Use at least 8 characters');
        if (/[a-z]/.test(password)) score++; else feedback.push('Include lowercase letters');
        if (/[A-Z]/.test(password)) score++; else feedback.push('Include uppercase letters');
        if (/[0-9]/.test(password)) score++; else feedback.push('Include numbers');
        if (/[^A-Za-z0-9]/.test(password)) score++; else feedback.push('Include special characters');
        
        const strength = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
        const colors = ['var(--error)', 'var(--warning)', 'var(--warning)', 'var(--success)', 'var(--success)'];
        
        result.innerHTML = `
            <br><span style="color: ${colors[score]}">Strength: ${strength[score]} (${score}/5)</span>
            ${feedback.length > 0 ? '<br><span class="command-description">Suggestions: ' + feedback.join(', ') + '</span>' : ''}
        `;
    };
    
    window.encryptText = function() {
        const text = document.getElementById('encryptInput').value;
        const result = document.getElementById('encryptResult');
        
        if (!text) {
            result.innerHTML = '<span class="error">Please enter text to encrypt.</span>';
            return;
        }
        
        // Simple Caesar cipher for demonstration
        const encrypted = btoa(text); // Base64 encoding for simplicity
        result.innerHTML = `
            <br><span class="success">Encrypted (Base64):</span> ${encrypted}
            <br><span class="command-description">Note: This uses Base64 encoding for demonstration. 
            Real encryption should use proper cryptographic algorithms.</span>
        `;
    };
    
    window.simulatePortScan = function() {
        const range = document.getElementById('portInput').value;
        const result = document.getElementById('portScanResult');
        
        if (!range) {
            result.innerHTML = '<span class="error">Please enter a port range (e.g., 80-443).</span>';
            return;
        }
        
        // Simulate common open ports
        const commonPorts = {
            22: 'SSH', 25: 'SMTP', 53: 'DNS', 80: 'HTTP', 
            443: 'HTTPS', 993: 'IMAPS', 995: 'POP3S'
        };
        
        const [start, end] = range.split('-').map(Number);
        let scanResults = [];
        
        for (let port = start; port <= Math.min(end, start + 50); port++) {
            if (commonPorts[port]) {
                scanResults.push(`${port}/tcp open ${commonPorts[port]}`);
            }
        }
        
        result.innerHTML = `
            <br><span class="success">Simulation Results:</span>
            <br>${scanResults.length > 0 ? scanResults.join('<br>') : 'No common services found in range'}
            <br><span class="command-description">Note: This is a simulation for educational purposes only.</span>
        `;
    };
    
    window.checkBase64 = function() {
        const input = document.getElementById('base64Input').value.trim();
        const result = document.getElementById('base64Result');
        const expected = "Saish is a skilled cybersecurity professional";
        
        if (input.toLowerCase() === expected.toLowerCase()) {
            result.innerHTML = '<br><span class="success">🎉 Correct! Well done on the Base64 decoding!</span>';
        } else {
            result.innerHTML = '<br><span class="error">Not quite right. Try decoding the Base64 string.</span>';
        }
    };
    
    window.checkOsintFlag = function() {
        const input = document.getElementById('osintFlagInput').value.trim();
        const result = document.getElementById('osintFlagResult');
        const expected = "flag{osint_linkedin}"; // Change this to your actual flag
        if (input.toLowerCase() === expected.toLowerCase()) {
            result.innerHTML = '<br><span class="success">🎉 Correct! You found the OSINT flag from LinkedIn!</span>';
        } else {
            result.innerHTML = '<br><span class="error">Not quite right. Check my LinkedIn profile summary for the flag.</span>';
        }
    };
    
    // Resume section functions
    window.toggleSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = section.style.display === 'none' ? 'block' : 'none';
        }
    };
    
    window.downloadPDF = function() {
        window.open('resume.pdf', '_blank');
    };
    
    // Theme management function
    window.toggleThemeCommand = function() {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        const themeDisplay = document.getElementById('currentTheme');
        if (themeDisplay) {
            themeDisplay.textContent = isLight ? 'Light Mode' : 'Dark Mode';
        }
        
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.textContent = isLight ? '🌙' : '🌓';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    };

    function checkFlag(flag) {
        const correctFlag = "flag{w3lc0me_t0_my_t3rm1n4l}";
        if (flag === correctFlag) {
            return `
<span class="success">

█░░ █▀▀ ▀█▀   ▀█▀ █░█ █▀▀   █░█ ▄▀█ █▀▀ █▄▀ █ █▄░█ █▀▀   █▄▄ █▀▀ █▀▀ █ █▄░█   ▀ ▀▄
█▄▄ ██▄ ░█░   ░█░ █▀█ ██▄   █▀█ █▀█ █▄▄ █░█ █ █░▀█ █▄█   █▄█ ██▄ █▄█ █ █░▀█   ▄ ▄▀
</span>
Congratulations! You've found the flag. This demonstrates the kind of curiosity I apply to my work.
`;
        } else {
            return `<span class="error">I wish this was the flag too!. Keep looking!</span>`;
        }
    }

    function executeCommand(command) {
        const [rawCmd, ...args] = command.split(' ');
        const cmd = rawCmd ? rawCmd.toLowerCase() : '';
        const outputElement = document.createElement('div');
        outputElement.classList.add('command-output');

        const promptElement = document.createElement('div');
        promptElement.innerHTML = `<span class="prompt">root@saish.io:~#</span> ${command}`;
        output.appendChild(promptElement);

        // Accept commands with first letter capitalized
        const commandKeys = Object.keys(commands);
        let matchedCmd = cmd;
        if (!commands[cmd]) {
            // Try to match with first letter capitalized
            matchedCmd = commandKeys.find(k => k.toLowerCase() === cmd);
        }

        if (cmd === 'clear') {
            output.innerHTML = welcomeMessage;
            return;
        } else if (cmd === 'theme') {
            toggleThemeCommand();
            outputElement.innerHTML = '<span class="success">Theme toggled! 🌓</span>';
        } else if (cmd === 'submitflag') {
            const flag = args[0] || '';
            outputElement.innerHTML = checkFlag(flag);
        } else if (cmd === 'cat' && args[0]) {
            const filename = args[0];
            const fullCommand = `cat ${filename}`;
            if (commands[fullCommand]) {
                outputElement.innerHTML = commands[fullCommand];
            } else {
                outputElement.innerHTML = `<span class="error">cat: ${filename}: No such file or directory</span>`;
            }
        } else if (cmd === 'sudo' && args.length === 0) {
            outputElement.innerHTML = commands.sudo();
        } else if (cmd === 'sudo' && args[0] === 'flag') {
            // Auto-submit the sudo flag
            const sudoFlag = 'flag{sudo_make_me_a_sandwich}';
            let discoveredFlags = JSON.parse(localStorage.getItem('discoveredFlags')) || [];
            
            if (!discoveredFlags.includes(sudoFlag)) {
                discoveredFlags.push(sudoFlag);
                localStorage.setItem('discoveredFlags', JSON.stringify(discoveredFlags));
                
                outputElement.innerHTML = `
<span class="success">🎉 SUDO FLAG CAPTURED! 🎉</span>

<span class="success">Flag:</span> ${sudoFlag}
<span class="success">Difficulty:</span> Easy
<span class="success">Points:</span> 150
<span class="success">Location:</span> Command exploration

<span class="success">Progress: ${discoveredFlags.length}/5 flags discovered</span>
<span class="success">Total Points: ${discoveredFlags.reduce((total, f) => {
    const points = {
        'flag{w3lc0me_t0_my_t3rm1n4l}': 100,
        'flag{oscp_certified_hacker}': 200,
        'flag{sudo_make_me_a_sandwich}': 150,
        'flag{1337_h4x0r_sk1llz}': 300,
        'flag{pwn3d_th3_t3rm1n4l}': 500
    };
    return total + (points[f] || 0);
}, 0)}</span>

<span class="command-description">Excellent! You discovered that administrative privileges reveal hidden secrets!</span>
`;
            } else {
                outputElement.innerHTML = '<span class="status-warning">Sudo flag already discovered! Try other commands.</span>';
            }
        } else if (cmd === 'konami') {
            outputElement.innerHTML = '<span class="success">🎮 Konami Code activated! You\'ve got the spirit of a true gamer-hacker!</span>';
        } else if (cmd === 'matrix') {
            outputElement.innerHTML = '<span class="success">🔴 Take the red pill... 🔵 Take the blue pill... The choice is yours.</span>';
        } else if (cmd === 'hacktheplanet') {
            outputElement.innerHTML = '<span class="success">🌍 HACK THE PLANET! 🌍<br>"They\'re trashing our rights! Trashing! Trashing!"</span>';
        } else if (cmd === 'certs' || cmd === 'certifications') {
            // Handle both certs and certifications commands
            outputElement.innerHTML = commands.certs || commands.certifications;
        } else if (cmd === 'resetflags') {
            outputElement.innerHTML = commands.resetflags();
        } else if (cmd === 'flags') {
            outputElement.innerHTML = commands.flags();
        } else if (matchedCmd && commands[matchedCmd]) {
            outputElement.innerHTML = commands[matchedCmd];
            // Fix resume download button after rendering resume command
            if (matchedCmd === 'resume') {
                setTimeout(() => {
                    const resumeBtn = document.querySelector('button[onclick^="downloadPDF"]');
                    if (resumeBtn) {
                        resumeBtn.onclick = window.downloadPDF;
                    }
                }, 0);
            }
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
                // Add to command history
                if (commandHistory[commandHistory.length - 1] !== command) {
                    commandHistory.push(command);
                }
                historyIndex = -1;
            }
            input.value = '';
            terminal.scrollTop = terminal.scrollHeight;
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex === -1) {
                currentInput = input.value;
                historyIndex = commandHistory.length - 1;
            } else if (historyIndex > 0) {
                historyIndex--;
            }
            if (historyIndex >= 0 && commandHistory[historyIndex]) {
                input.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                input.value = commandHistory[historyIndex];
            } else {
                historyIndex = -1;
                input.value = currentInput;
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            autoCompleteCommand();
        }
    });
    
    // Auto-complete functionality
    function autoCompleteCommand() {
        const currentValue = input.value.toLowerCase();
        const availableCommands = Object.keys(commands);
        const matches = availableCommands.filter(cmd => cmd.startsWith(currentValue));
        
        if (matches.length === 1) {
            input.value = matches[0];
        } else if (matches.length > 1) {
            // Show possible completions
            const outputElement = document.createElement('div');
            outputElement.innerHTML = `<span class="command-description">Possible completions: ${matches.join(', ')}</span>`;
            output.appendChild(outputElement);
            terminal.scrollTop = terminal.scrollHeight;
        }
    }


    terminal.addEventListener('click', (e) => {
        // Only focus the terminal input if the click is NOT on an input, textarea, or button
        const tag = e.target.tagName.toLowerCase();
        if (tag !== 'input' && tag !== 'textarea' && tag !== 'button') {
            input.focus();
        }
    });

    // Add Enter key support for lab input fields
    function addLabInputEnterHandlers() {
        const passwordInput = document.getElementById('passwordInput');
        if (passwordInput) {
            passwordInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    window.analyzePassword();
                }
            });
        }
        const encryptInput = document.getElementById('encryptInput');
        if (encryptInput) {
            encryptInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    window.encryptText();
                }
            });
        }
        const portInput = document.getElementById('portInput');
        if (portInput) {
            portInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    window.simulatePortScan();
                }
            });
        }
        const base64Input = document.getElementById('base64Input');
        if (base64Input) {
            base64Input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    window.checkBase64();
                }
            });
        }
        const osintFlagInput = document.getElementById('osintFlagInput');
        if (osintFlagInput) {
            osintFlagInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    window.checkOsintFlag();
                }
            });
        }
    }

    // Call after DOM and terminal are initialized
    setTimeout(addLabInputEnterHandlers, 100);

    initTerminal();
});

// Enhanced flag system - Define flags globally 
window.flags = {
    "flag{w3lc0me_t0_my_t3rm1n4l}": {
        difficulty: "Easy",
        location: "HTML source code",
        points: 100,
        hint: "Sometimes the best hiding spots are in plain sight"
    },
    "flag{oscp_certified_hacker}": {
        difficulty: "Medium", 
        location: "Social media investigation",
        points: 200,
        hint: "Professional networks often contain valuable intelligence"
    },
    "flag{sudo_make_me_a_sandwich}": {
        difficulty: "Easy",
        location: "Command exploration",
        points: 150,
        hint: "Administrative privileges unlock hidden capabilities"
    },
    "flag{1337_h4x0r_sk1llz}": {
        difficulty: "Hard",
        location: "JavaScript analysis",
        points: 300,
        hint: "The source code holds more secrets than meets the eye"
    },
    "flag{pwn3d_th3_t3rm1n4l}": {
        difficulty: "Expert",
        location: "CSS manipulation",
        points: 500,
        hint: "Style sheets can hide more than just visual formatting"
    }
};
