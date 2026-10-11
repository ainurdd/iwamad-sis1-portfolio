# iwamad-sis1-portfolio

**Live site:** https://ainurdd.github.io/iwamad-sis1-portfolio/

## About the site
This is my personal portfolio website, built with plain HTML, CSS and JavaScript. It has three sections: About Me, Projects and Contact. It shows three of my projects from the first weeks of the course, and it has a dark/light theme switch and a contact form with validation.

## Design decisions
1. **Layout:** I used a simple one-page layout with a navigation menu at the top, so a visitor can reach every section with one click. On a phone the projects are placed one under another, because cards side by side would be too narrow to read. On a desktop the projects are shown in three columns and the header becomes one row, so the wide screen is used well.
2. **Colours:** I chose one blue accent colour and neutral grey backgrounds, so the page looks calm and the links and buttons are easy to find. All colours are stored in CSS variables, and the dark theme only changes these variables. Because of this, the whole page switches theme at once and the text stays readable in both themes.
3. **After testing on a phone:** When I checked the page at 375 px, I made sure that nothing goes outside the screen and there is no horizontal scrolling. I added word wrapping for long text and links, made the navigation wrap onto a new line on small screens, and set all form fields to full width so they are easy to tap.
