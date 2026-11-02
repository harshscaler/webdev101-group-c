# 🚀 Class 11 — Builders Day

# 🏗️ What is Builders Day?

Today is different from a regular class.

There will be **no new major CSS topic**.

Instead, you will use everything you have learned so far to build a complete project.

Your challenge is to build:

# 👨‍💻 A Personal Portfolio Website

Your portfolio should tell a visitor:

1. **Who are you?**
2. **What do you do?**
3. **What have you built?**
4. **What technologies do you know?**
5. **How can someone contact you?**

The goal is not to create the most complicated website.

The goal is to create a website that is:

> **Clean + Responsive + Functional + Personal**

---

# 🧑‍💻 Technology Rules

## ✅ Mandatory

Your project **must be built using:**

* **HTML**
* **CSS**

These are the core technologies for this project.

You are expected to demonstrate the concepts taught during the course.

---

## ❌ JavaScript is NOT Mandatory

You **do not need JavaScript** for this project.

In fact, you should be able to complete the entire project using only:

```text
HTML + CSS
```

You may use CSS for:

* Hover effects
* Transitions
* Animations
* Responsive layouts
* Navigation styling
* Interactive-looking UI
* Visual effects

### Example

You can create a hover interaction using only CSS:

```css
.card:hover {
    transform: translateY(-8px);
}
```

You do **not** need JavaScript for this.

---

# 🤖 AI Usage

## AI is Allowed

You are **free to use AI tools** while building your project.

You can use tools such as:

* ChatGPT
* Claude
* Gemini
* GitHub Copilot
* Cursor
* Other AI coding assistants

AI can be used to:

* Generate ideas
* Brainstorm layouts
* Generate HTML/CSS
* Explain CSS concepts
* Debug errors
* Improve responsive design
* Suggest color combinations
* Improve typography
* Explain why something is not working
* Convert a design idea into HTML/CSS
* Review your code
* Help you understand an error

---

# 🧠 But You Must Understand Your Code

Using AI is allowed.

Submitting code that you **cannot explain** is not the goal.

During TA evaluation, you may be asked:

> "Why did you use Grid here?"

> "What does this media query do?"

> "Why is this element positioned absolute?"

> "What does `flex: 1` do?"

> "Why did you use `z-index`?"

> "How does this hover effect work?"

You should be able to explain the important parts of your implementation.

### Remember:

> **AI can help you build faster.
> But you are responsible for understanding what you build.**

---

# 🏆 Expected Outcome

By the end of Builders Day, you should have a working portfolio website containing:

* [ ] Navigation Bar
* [ ] Hero Section
* [ ] About Section
* [ ] Skills Section
* [ ] Projects Section
* [ ] Education / Experience Section
* [ ] Contact Section
* [ ] Footer
* [ ] Responsive layout
* [ ] At least 2–3 projects
* [ ] Working links
* [ ] At least one CSS transition
* [ ] At least one CSS animation
* [ ] Proper use of Flexbox and/or Grid
* [ ] Clean and readable HTML/CSS

---

# 🧠 Concepts You Can Use

This project is an opportunity to demonstrate everything you have learned so far.

## HTML

You can use:

* Semantic HTML
* Headings
* Paragraphs
* Links
* Images
* Lists
* Buttons
* Forms
* Sections
* Navigation
* Footer

---

## CSS

### Basic CSS

* Selectors
* Specificity
* Inheritance
* Colors
* Typography
* Backgrounds

### Box Model

* Width
* Height
* Margin
* Padding
* Border
* Border-radius

### Layout

* `display`
* Flexbox
* CSS Grid

### Positioning

* `relative`
* `absolute`
* `fixed`
* `sticky`
* `z-index`

### Responsive Design

* Media Queries
* Breakpoints
* Mobile-first design

### Animations

* Transitions
* Transforms
* Keyframes
* Hover effects

---

# 🗺️ Recommended Website Structure

You can use the following structure as a starting point:

```text
Portfolio
│
├── Navbar
│
├── Hero
│   ├── Name
│   ├── Role
│   ├── Introduction
│   └── CTA Buttons
│
├── About
│   └── Short Introduction
│
├── Skills
│   ├── HTML
│   ├── CSS
│   └── Other Skills
│
├── Projects
│   ├── Project 1
│   ├── Project 2
│   └── Project 3
│
├── Education / Experience
│
├── Contact
│
└── Footer
```

This is only a recommendation.

**You are encouraged to create your own structure and design.**

---

# 🎨 Section 1 — Navigation Bar

Create a navigation bar at the top of your website.

Example:

```text
┌──────────────────────────────────────────────────┐
│ HARSH       About  Skills  Projects  Contact     │
└──────────────────────────────────────────────────┘
```

Your navbar should contain:

* Your name or logo
* Navigation links
* Optional CTA button

For example:

```text
[ HP ]     About   Skills   Projects   Contact   Resume
```

### Think About

* Is the navigation easy to understand?
* Is the spacing consistent?
* Are the links working?
* Is it usable on mobile?
* Should it be sticky?

---

# 🚀 Section 2 — Hero Section

The Hero Section is the first major section visitors see.

It should immediately communicate:

> **Who are you?**

Example:

```text
Hi, I'm Harsh 👋

Frontend Developer

I build clean and interactive web experiences.

[ View My Work ]   [ GitHub ]
```

You can also include:

* Profile image
* Illustration
* Developer terminal
* Code snippet
* Animated text
* Decorative shapes
* CTA buttons

---

# 💻 Hero Design Ideas

## Design A — Minimal

```text
Hello, I'm Alex.

Frontend Developer

Building clean and interactive web experiences.

[ View Projects ]
```

---

## Design B — Developer Terminal

```text
$ whoami

Alex Sharma

$ role

Frontend Developer

$ currently_building

Web Applications
```

---

## Design C — Split Layout

```text
┌─────────────────────────────────────────┐
│                                         │
│  Hello, I'm Alex        [ Profile ]    │
│                                         │
│  Frontend Developer                     │
│                                         │
│  [ Projects ]  [ GitHub ]              │
│                                         │
└─────────────────────────────────────────┘
```

---

# 👨‍💻 Section 3 — About Me

Introduce yourself.

Keep it short and personal.

Example:

```text
I'm a Computer Science student interested
in frontend development and building
interactive web experiences.

I enjoy learning by building projects
and experimenting with new ideas.
```

### Remember

Your portfolio is not a resume copied into a website.

Keep your introduction:

> **Short + Clear + Personal**

---

# 🛠️ Section 4 — Skills

Show the technologies and tools you know.

For example:

```text
Frontend

HTML
CSS

Tools

Git
GitHub
VS Code

Currently Learning

JavaScript
React
Node.js
```

You can present skills using:

### Cards

```text
┌──────────────┐
│ HTML         │
│ Structure    │
└──────────────┘

┌──────────────┐
│ CSS          │
│ Styling      │
└──────────────┘
```

### Pills

```text
[ HTML ] [ CSS ] [ Git ] [ GitHub ]
```

### Grid / Bento

```text
┌─────────────────┬─────────────┐
│                 │             │
│ HTML + CSS      │ Git         │
│                 │             │
├─────────┬───────┴─────────────┤
│ GitHub  │ Responsive Design   │
└─────────┴─────────────────────┘
```

---

# 📂 Section 5 — Projects

This is one of the most important sections.

Don't simply write:

```text
Project 1
Project 2
Project 3
```

Explain what you actually built.

Each project should ideally contain:

```text
Project Name

Short description

Technologies:
HTML • CSS

[ Live Demo ] [ GitHub ]
```

---

# 🧪 Project Ideas

You can use projects you have already built during the course.

## Project 1 — Flexbox Game

A small game/interface using:

* Flexbox
* Display
* Box Model
* Margin
* Padding
* Backgrounds

---

## Project 2 — Responsive Website

Demonstrate:

* CSS Grid
* Flexbox
* Media Queries
* Responsive design

---

## Project 3 — CSS Animation Project

Demonstrate:

* Transitions
* Transform
* Keyframes
* Animated components

---

## Project 4 — Personal Experiment

You can also build something completely new.

For example:

* Landing page
* Product page
* Restaurant website
* Gaming website
* Movie website
* Music website
* Dashboard
* Blog
* Event website

---

# ✨ Project Card Example

```text
┌─────────────────────────────────────┐
│                                     │
│        [ Project Screenshot ]       │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  Space Explorer                     │
│                                     │
│  A responsive space-themed landing  │
│  page built using HTML and CSS.     │
│                                     │
│  HTML  CSS  Flexbox                 │
│                                     │
│  [ Live Demo ]  [ GitHub ]          │
│                                     │
└─────────────────────────────────────┘
```

---

# 🎓 Section 6 — Education / Experience

If you have relevant education or experience, you can include it.

Example:

```text
Education

B.Tech Computer Science
XYZ University

2025 — Present
```

If you don't have professional experience, that's completely fine.

You can simply write:

```text
Currently learning and building projects
as part of my Web Development journey.
```

---

# 📬 Section 7 — Contact

Give visitors a way to contact you.

Example:

```text
Let's build something together.

Email
GitHub
LinkedIn

[ Send Message ]
```

You can also create a frontend-only contact form:

```text
Name

[________________________]

Email

[________________________]

Message

[________________________]

[ Send Message ]
```

A backend is **not required**.

---

# 🦶 Section 8 — Footer

Keep your footer simple.

Example:

```text
© 2026 Alex Sharma

Built with HTML & CSS ❤️
```

You can also include:

```text
GitHub | LinkedIn | Email
```

---

# 🎨 Choose Your Design

Your portfolio does **not** need to look like everyone else's.

Choose a visual direction.

---

## 1. Minimal Developer

### Style

* Simple background
* Large typography
* Lots of whitespace
* Clean cards
* Minimal animations

Think:

```text
Clean
Simple
Readable
```

---

# 2. Dark Developer / Terminal

### Style

```text
Background → Dark
Text → Light
Accent → Green / Blue
Font → Monospace
```

Example:

```text
$ whoami

Alex Sharma

$ role

Frontend Developer

$ skills

HTML CSS
```

---

# 3. Bento Portfolio

Use different sized cards.

```text
┌───────────────────────┬───────────┐
│                       │           │
│ Hello, I'm Alex       │ GitHub    │
│ Frontend Developer    │           │
│                       ├───────────┤
│                       │ Skills    │
├────────────┬──────────┴───────────┤
│ Projects   │ About Me             │
│            │                      │
└────────────┴──────────────────────┘
```

This is a great opportunity to demonstrate **CSS Grid**.

---

# 4. Creative / Playful

Make the portfolio feel like a game.

```text
PLAYER 01

ALEX SHARMA

LEVEL: WEB DEVELOPER

SKILLS

████████ HTML
███████  CSS
```

Use:

* Cards
* Icons
* Animations
* Hover effects
* Fun typography

---

# 5. Magazine / Editorial

Think of the website like a magazine.

Use:

* Large typography
* Large project images
* Interesting layouts
* Grid
* Spacing

Example:

```text
ALEX SHARMA

WEB
DEVELOPER

SELECTED
WORKS

01 — Portfolio
02 — Game
03 — Website
```

---

# 6. Personal Story

Structure your portfolio as a story:

```text
01 — WHO I AM

02 — WHAT I'M LEARNING

03 — WHAT I BUILD

04 — WHAT I'VE BUILT

05 — LET'S CONNECT
```

---

# 🎨 Use What You Have Learned

This is the most important part of Builders Day.

Your portfolio should demonstrate concepts from the course.

## HTML

Use:

* Semantic sections
* Navigation
* Headings
* Links
* Images
* Buttons
* Forms

## Box Model

Use:

* Margin
* Padding
* Border
* Border-radius

## Flexbox

Use it for:

* Navbar
* Buttons
* Cards
* Alignment
* Hero sections

## Grid

Use it for:

* Project galleries
* Skills
* Bento layouts
* Complex sections

## Positioning

Use:

* `relative`
* `absolute`
* `fixed`
* `sticky`
* `z-index`

where appropriate.

## Responsive Design

Your website should work on:

```text
📱 Mobile
    ↓
📱 Tablet
    ↓
💻 Laptop
    ↓
🖥️ Desktop
```

Use Media Queries where necessary.

## Animations

Add subtle interactions such as:

* Button hover
* Card hover
* Image scale
* Fade-in
* Floating elements
* CSS keyframe animations

Remember:

> **Animation should improve the experience, not make the website difficult to use.**

---

# 🚫 Things to Avoid

## ❌ Huge Amounts of Text

Your portfolio is not an essay.

---

## ❌ Fake Skill Percentages

Avoid:

```text
HTML ██████████ 100%
CSS  ████████░░ 80%
```

Instead:

```text
HTML
CSS
Git
GitHub
```

---

## ❌ Too Many Animations

If everything moves, nothing feels important.

---

## ❌ Broken Links

Every link should work or be clearly marked as unavailable.

---

## ❌ Fake Experience

Don't add fake internships, companies or achievements.

---

## ❌ Copying Another Student's Portfolio

Take inspiration from layouts and ideas.

Your content and design should be your own.

---

# 🧩 Builders Day — Development Workflow

Build your project in phases.

---

# Phase 1 — Plan

### ⏱️ 15–20 minutes

Before writing code, decide:

```text
My name:
_________________________

My role:
_________________________

My website style:
_________________________

My primary color:
_________________________

My projects:
1. ______________________
2. ______________________
3. ______________________
```

Then sketch your website.

You can use:

* Paper
* Excalidraw
* Figma
* Whiteboard
* Notebook

Don't spend too much time trying to create the perfect design.

Start building.

---

# Phase 2 — Build the HTML

### ⏱️ 20–30 minutes

Create the basic structure first.

```html
<header>
    <nav>
        ...
    </nav>
</header>

<main>

    <section id="hero">
        ...
    </section>

    <section id="about">
        ...
    </section>

    <section id="skills">
        ...
    </section>

    <section id="projects">
        ...
    </section>

    <section id="contact">
        ...
    </section>

</main>

<footer>
    ...
</footer>
```

### Important

Get the content and structure working before worrying about colors.

---

# Phase 3 — Build the Layout

### ⏱️ 30–40 minutes

Now work on:

* Flexbox
* Grid
* Width
* Height
* Margin
* Padding
* Alignment
* Spacing

First make the website look good on desktop.

---

# Phase 4 — Visual Design

### ⏱️ 20–30 minutes

Add:

* Colors
* Typography
* Borders
* Shadows
* Cards
* Images
* Buttons
* Hover states

Create a consistent design system.

Example:

```css
:root {
    --background: #0f172a;
    --surface: #1e293b;
    --text: #f8fafc;
    --accent: #38bdf8;
}
```

---

# Phase 5 — Responsive Design

### ⏱️ 20–30 minutes

Open DevTools and test:

```text
Desktop
Tablet
Mobile
```

Check:

* Navbar
* Hero
* Project cards
* Images
* Text
* Buttons
* Grid
* Spacing

Ask yourself:

> **"If I open this on my phone, does anything break?"**

---

# Phase 6 — Add Polish

### ⏱️ 15–20 minutes

Add one or two special touches.

For example:

```css
.card:hover {
    transform: translateY(-5px);
}
```

or:

```css
.button {
    transition: transform 0.2s ease;
}
```

or a simple keyframe animation.

---

# Phase 7 — Test

Before asking a TA to review your project, check:

## Content

* [ ] My name is correct
* [ ] My introduction is clear
* [ ] My projects are real
* [ ] My links work

## Design

* [ ] Typography is readable
* [ ] Spacing is consistent
* [ ] Colors work together
* [ ] Sections are clearly separated

## Responsive

* [ ] Desktop works
* [ ] Tablet works
* [ ] Mobile works

## Code

* [ ] HTML is semantic
* [ ] CSS is organized
* [ ] No unnecessary duplicate styles
* [ ] No obvious errors

---

# 👨‍🏫 TA Support

TAs are here to help you **build**, not build the project for you.

You can ask a TA for:

* Debugging help
* CSS layout issues
* Flexbox/Grid guidance
* Responsive design help
* Feedback on your design
* Help understanding an error
* Suggestions for improving your UI

### Before asking a TA

Try to answer:

```text
1. What am I trying to do?

2. What did I try?

3. What is happening instead?
```

### ❌ Bad Question

> "My Grid isn't working."

### ✅ Better Question

> "I want these three cards to appear in one row. I used `grid-template-columns: repeat(3, 1fr)`, but the third card is moving to the next row. Can you help me understand why?"

---

# 🧑‍🏫 TA Evaluation

TAs will review your project based on:

| Category       | What we look for                            |
| -------------- | ------------------------------------------- |
| HTML Structure | Proper and semantic HTML                    |
| CSS            | Appropriate use of CSS concepts             |
| Layout         | Flexbox/Grid used appropriately             |
| Styling        | Typography, colors, spacing and consistency |
| Responsiveness | Works across different screen sizes         |
| Projects       | Real and clearly presented projects         |
| Interaction    | CSS hover states/transitions/animations     |
| Code Quality   | Readable and organized code                 |
| Creativity     | Personal design decisions                   |
| Completeness   | Major sections implemented                  |
| Understanding  | Student can explain their implementation    |

### Important

This is **not a competition for the most complicated website**.

A simple, clean and well-built portfolio is better than a complicated website that is broken.

---

# ⭐ Bonus Point — Tailwind CSS

Want to go one step further?

You can build your portfolio using **Tailwind CSS**.

> **Tailwind CSS is optional and is only for the bonus point.**

The core project **must demonstrate HTML + CSS concepts**.

---

## 🏆 Bonus Challenge

Use Tailwind CSS for the majority of your styling.

You can use Tailwind for:

* Layout
* Flexbox
* Grid
* Spacing
* Colors
* Typography
* Responsive design
* Borders
* Shadows
* Hover states
* Transitions
* Animations

### Example

Instead of:

```css
.card {
    display: flex;
    padding: 24px;
    border-radius: 12px;
    background: #1e293b;
}

.card:hover {
    transform: translateY(-5px);
}
```

You could use:

```html
<div
    class="flex rounded-xl bg-slate-800 p-6
           transition-transform duration-300
           hover:-translate-y-1"
>
    ...
</div>
```

---

## 🎯 What Counts for the Bonus?

Simply adding a few Tailwind classes does not count.

You should be able to explain:

* What utility classes you used
* How Tailwind handles responsive design
* How you created Grid/Flexbox layouts
* How you handled spacing
* How you implemented hover states
* How responsive breakpoints work

For example:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

You should understand:

```text
grid
    ↓
Enables CSS Grid

grid-cols-1
    ↓
1 column by default

md:grid-cols-2
    ↓
2 columns on medium screens

lg:grid-cols-3
    ↓
3 columns on large screens

gap-6
    ↓
Adds spacing between grid items
```

---

# ⚠️ Important

Do not use Tailwind without understanding the CSS behind it.

Remember:

> **Tailwind is a tool. CSS is the concept.**

AI and Tailwind are both allowed.

But you should be able to explain the important parts of your implementation.

---

# 🏅 Tailwind Bonus Evaluation

| Area              | What we look for                              |
| ----------------- | --------------------------------------------- |
| Tailwind Usage    | Tailwind is meaningfully used                 |
| Understanding     | Student can explain the utilities used        |
| Responsive Design | Tailwind breakpoints are used correctly       |
| Layout            | Grid/Flexbox utilities are used appropriately |
| Code Quality      | Classes are reasonably organized              |
| Customization     | Student has made their own design decisions   |

### Remember

You **do not need Tailwind to complete the project**.

A strong portfolio built with regular CSS is completely valid.

> **Core Project → HTML + CSS**
> **Bonus Point → Tailwind CSS** 🚀

---

# 🧑‍💻 Final Presentation

At the end of Builders Day, be prepared to show your website.

You should be able to explain:

1. What did you build?
2. What design did you choose?
3. Why did you choose it?
4. Where did you use Flexbox?
5. Where did you use Grid?
6. How did you make it responsive?
7. What was the hardest part?
8. What would you improve if you had another day?
9. If you used Tailwind, what utilities did you use and why?
10. If you used AI, how did it help you build or debug the project?

---

# 🌐 Portfolio Inspiration

**Do not copy these websites.**

Study them for:

* Layout
* Navigation
* Typography
* Project presentation
* Color usage
* Spacing
* Animations
* Information hierarchy

## Starting Point

Use the portfolio design guide provided for this course:

**Portfolio Design Guide**

https://github.com/mrinal1224/2029-Group-C-WebDev/blob/main/portfolioDesignGudie.md

## Developer Portfolio Collection

You can also explore:

**Developer Portfolios**

https://github.com/emmabostian/developer-portfolios

Look at different approaches and ask yourself:

> What do I like about this design?

> What would I change?

> Can I build something similar using the concepts I already know?

---

# 💡 Portfolio Ideas Based on This Course

You already know enough CSS to create something much more interesting than a simple resume page.

---

## Idea 1 — Developer Terminal

Use:

```text
Flexbox
Positioning
Colors
Typography
Transitions
Animations
```

Create a terminal-inspired developer portfolio.

---

## Idea 2 — Bento Portfolio

Use:

```text
CSS Grid
Flexbox
Box Model
Responsive Design
Hover Effects
```

Create a collection of cards representing different parts of your personality, skills and projects.

---

## Idea 3 — Project Showcase

Make your projects the main focus:

```text
Hero
 ↓
Featured Project
 ↓
More Projects
 ↓
Skills
 ↓
About
 ↓
Contact
```

---

## Idea 4 — Interactive Developer

Create a portfolio where the user interacts with the website using CSS.

Examples:

```text
Hover over skill → animation

Hover over project → visual effect

Button → opens GitHub

Scroll → sections animate
```

No JavaScript is required.

---

## Idea 5 — Personal Story

Structure your portfolio like a journey:

```text
Who I am
     ↓
What I'm learning
     ↓
What I've built
     ↓
What I'm interested in
     ↓
Where I'm going
```

---

# ⭐ Minimum Requirements

Your website **must** have:

* [ ] HTML
* [ ] CSS
* [ ] Navigation
* [ ] Hero section
* [ ] About section
* [ ] Skills section
* [ ] Projects section
* [ ] Contact section
* [ ] Responsive layout
* [ ] Flexbox
* [ ] Grid
* [ ] Box Model
* [ ] At least one CSS transition
* [ ] At least one CSS animation
* [ ] Working links
* [ ] Clean HTML/CSS

### Not Required

* ❌ JavaScript
* ❌ Backend
* ❌ Database
* ❌ React
* ❌ Any JavaScript framework

---

# 🚀 Stretch Goals

Finished early?

Try adding one or more:

* [ ] Dark/light mode using CSS
* [ ] Animated hero
* [ ] Custom cursor using CSS
* [ ] Scroll animations
* [ ] Sticky navigation
* [ ] Animated background
* [ ] CSS-only loader
* [ ] Timeline
* [ ] Interactive skills section
* [ ] Responsive hamburger menu using CSS
* [ ] Custom 404 page
* [ ] Download Resume button
* [ ] GitHub project links
* [ ] Tailwind CSS — **Bonus Point**

Remember:

> **Stretch goals are optional. Don't sacrifice the core project to build them.**

---

# 📦 Final Submission

Your project should contain:

```text
portfolio/
│
├── index.html
│
├── style.css
│
├── images/
│   ├── profile.jpg
│   ├── project-1.png
│   └── project-2.png
│
└── README.md
```

If you use Tailwind CSS, your project structure can be different depending on your setup.

---

# 📝 README.md

Your README should contain:

```text
# My Portfolio

## About

Short description.

## Technologies

- HTML
- CSS

## Projects

### Project 1

Description + link

### Project 2

Description + link

## Author

Your Name
```

If you used Tailwind CSS:

```text
## Technologies

- HTML
- Tailwind CSS
```

You can also mention the AI tools you used if you want to document your workflow.

---

# 🎯 Builders Day Mindset

Today is not about writing the most code.

It is about **building something real**.

Don't spend the first hour choosing the perfect color.

Don't spend 45 minutes finding the perfect font.

Don't wait until everything is perfect before you start coding.

Use the tools available to you.

Use AI when it helps.

Ask your TAs when you're stuck.

But understand what you're building.

Start simple.

**Build → Test → Break → Debug → Improve → Repeat**

---

# 🚀 Final Challenge

By the end of the class, you should be able to say:

> **"I built this website."**

You may have used:

* AI
* Documentation
* Tutorials
* Tailwind CSS
* Your TAs' guidance

That's completely fine.

The important thing is that you:

> **Understand it. Customize it. Improve it. Own it.**

And that is what **Builders Day** is about. 🚀

---

# ✅ Final Submission Checklist

Before you submit:

* [ ] Website works
* [ ] HTML is valid and organized
* [ ] CSS is organized
* [ ] Responsive design works
* [ ] Navigation works
* [ ] Projects are included
* [ ] Links work
* [ ] No placeholder text remains
* [ ] No broken images
* [ ] Website has your own design
* [ ] Code is written/understood by you
* [ ] JavaScript is not required
* [ ] Ready for TA evaluation
* [ ] Tailwind CSS used and understood if attempting the bonus

---

# 🏁 Final Deliverable

## **Your Personal Portfolio Website**

### Core Project

**HTML + CSS**

### Optional

**AI Tools**

### Bonus

**Tailwind CSS**

> **Build it. Break it. Fix it. Ship it. 🚀**