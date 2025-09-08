# Offensive Security Portfolio v2.0 - "Hacker Terminal"

This is a "hacker terminal" themed portfolio designed to be interactive and showcase offensive security skills.

## How to Use

Your website now functions like a command-line interface. Here are the available commands:

*   `help` - Shows a list of available commands.
*   `about` - Displays your bio.
*   `skills` - Lists your technical skills.
*   `projects` - Shows your project portfolio.
*   `contact` - Provides your contact information.
*   `hireme` - Outlines services you offer for freelance work.
*   `secure` - Displays the responsible disclosure policy.
*   `clear` - Clears the terminal screen.

There is also a hidden CTF (Capture The Flag) challenge for visitors to find!

## Customizing Your Portfolio

*   **Content:** All content (about, skills, projects, etc.) is located in the `script.js` file within the `commands` object. Edit the text there to update your information.
*   **CTF Challenge:** The flag is hidden in a comment in the `index.html` file. You can change its value in both `index.html` and `script.js` (in the `checkFlag` function).
*   **Contact Info:** Update your email and social links in the `script.js` file under the `contact` command.