document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    const terminal = document.getElementById('terminal');
    const themeToggle = document.getElementById('themeToggle');
    
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
<span class="command-category">📋 NAVIGATION & INFO</span>
  <span class="success">about</span>      - Who I am and my background
  <span class="success">skills</span>     - Technical skills with visual representation
  <span class="success">projects</span>   - Interactive project showcase
  <span class="success">contact</span>    - How to reach me

<span class="command-category">🎓 PROFESSIONAL</span>
  <span class="success">certifications</span> - My cybersecurity certification journey
  <span class="success">resume</span>     - Interactive resume with downloadable PDF
  <span class="success">testimonials</span> - Professional recommendations

<span class="command-category">🏆 ACHIEVEMENTS</span>
  <span class="success">ctf</span>        - CTF achievements and rankings
  <span class="success">github</span>     - GitHub activity and contributions
  <span class="success">blog</span>       - Technical writeups and insights

<span class="command-category">🛡️ SECURITY & SERVICES</span>
  <span class="success">lab</span>        - Interactive security demonstrations
  <span class="success">news</span>       - Latest cybersecurity news
  <span class="success">hireme</span>     - Services I offer
  <span class="success">secure</span>     - Responsible disclosure policy

<span class="command-category">🎮 INTERACTIVE</span>
  <span class="success">submitflag</span> - Submit a flag for the CTF challenge
  <span class="success">theme</span>      - Toggle dark/light mode
  <span class="success">clear</span>      - Clear the terminal screen
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
- Burp Suite Professional, Metasploit, Nmap, Wireshark
- OWASP Testing Framework, BloodHound, Cobalt Strike
- Docker, Kubernetes, Terraform, Ansible
- Git, Jenkins, PowerShell, Windows/Linux environments

<span class="command-category">📜 CERTIFICATIONS</span>
- <span class="success">OSCP</span> - Offensive Security Certified Professional
- <span class="status-warning">In Progress:</span> Advanced certifications

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

<span class="success">3. Security-Enhanced Resume Matcher</span>
   🔗 <a href="https://github.com/saishsolanki/Resume-Matcher" target="_blank">GitHub Repository</a>
   📝 <span class="success">Technical Details:</span>
      • NLP-based keyword extraction and matching
      • Adapted for security role requirements analysis
      • Machine learning classification for skill assessment
   🔍 <span class="success">Security Adaptation:</span> Cybersecurity keyword analysis

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
   • Developed resilience through "Try Harder" methodology
   • Enhanced report writing for technical stakeholders

<span class="command-category">🔄 CONTINUOUS LEARNING PATH</span>

<span class="success">📚 Planned Certifications (2024-2025):</span>
   • OSWE - Web Application Testing
   • CRTP - Certified Red Team Professional
   • CISSP - Information Systems Security Professional

<span class="success">🏗️ Foundation Certifications:</span>
   • CompTIA Security+ concepts (self-studied)
   • Various Cybersecurity specialization courses
   • Continuous training through practical labs

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
   👥 <span class="success">Team Collaborations:</span> Multiple cybersecurity CTF events
   📅 <span class="success">Recent Events:</span> University and online competitions
   🧠 <span class="success">Specialty:</span> Web exploitation, cryptography challenges

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

<span class="success">📧 Email:</span> <a href="mailto:saish.solanki@protonmail.com">saish.solanki@protonmail.com</a>
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
    
    // Resume section functions
    window.toggleSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = section.style.display === 'none' ? 'block' : 'none';
        }
    };
    
    window.downloadPDF = function() {
        // In a real implementation, this would generate/serve a PDF
        alert('PDF download functionality would be implemented here.\nContact me for an updated resume in PDF format.');
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
        } else if (cmd === 'theme') {
            toggleThemeCommand();
            outputElement.innerHTML = '<span class="success">Theme toggled! 🌓</span>';
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
