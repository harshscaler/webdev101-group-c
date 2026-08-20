# Lab Assignment: Student Portal

## HTML + Introduction to CSS

### Objective

Build a simple **Student Portal** webpage using HTML and introductory CSS.

This lab will test your understanding of:

- HTML document structure
- Semantic HTML
- Links
- Lists
- Tables
- Forms and form controls
- Labels
- HTML input types
- CSS selectors
- Text colors
- Background colors
- Classes and IDs

> **Important:** You may use [MDN Web Docs](https://developer.mozilla.org/) to look up syntax and element/property usage. Do not copy a complete solution.

---

## Scenario

You are building a simple college **Student Portal**.

The page should allow a student to:

1. View their profile.
2. See their skills.
3. View their weekly class schedule.
4. Register for a course.

---

# Part 1 — Page Structure

Create a complete HTML document using:

- `<!DOCTYPE html>`
- `<html>`
- `<head>`
- `<title>`
- `<body>`

Use semantic elements such as:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<footer>`

---

# Part 2 — Header and Navigation

Create a header containing the title:

**Student Portal**

Add a navigation menu with these links:

- Home
- Profile
- Courses
- Register

The links do not need to navigate to separate pages.

---

# Part 3 — Student Profile

Create a section titled:

**Student Profile**

Display the following information in a table:

| Field | Value |
|---|---|
| Name | Rahul Sharma |
| Student ID | 24BCE1001 |
| Program | Computer Science |
| Year | 1st Year |
| Email | rahul@example.com |

### Requirements

- Use a proper `<table>`.
- Use table headings where appropriate.
- Use table rows and cells correctly.

---

# Part 4 — My Skills

Create a section titled:

**My Skills**

Create an unordered list containing at least **5 skills**.

Example skills:

- HTML
- CSS
- JavaScript
- Python
- Git

You may use your own skills.

---

# Part 5 — Weekly Schedule

Create a section titled:

**Weekly Schedule**

Create a table containing:

- Day
- 9:00 AM
- 11:00 AM
- 2:00 PM

Include Monday to Friday.

Example:

| Day | 9:00 AM | 11:00 AM | 2:00 PM |
|---|---|---|---|
| Monday | HTML | Mathematics | DSA |
| Tuesday | CSS | DBMS | English |
| Wednesday | JavaScript | DSA | Mathematics |
| Thursday | DBMS | HTML | Project |
| Friday | DSA | CSS | Workshop |

You may create your own schedule.

---

# Part 6 — Course Registration Form

Create a section titled:

**Course Registration**

Create a form containing the following.

## Student Information

### Name

Create a text input for the student's name.

### Email

Create an email input.

### Student ID

Create a text input.

---

## Course Selection

Create a `<select>` dropdown containing at least these courses:

- HTML & CSS
- JavaScript
- Python
- Data Structures
- Database Management

The dropdown should have a default option such as:

**Select Course**

---

## Preferred Learning Mode

Create two radio buttons:

- Online
- Offline

The two radio buttons should behave as a single group.

---

## Skills You Already Know

Create checkboxes for:

- HTML
- CSS
- JavaScript
- Python

---

## Form Buttons

Add:

- Submit button
- Reset button

Use appropriate `<label>` elements for your form controls.

---

# Part 7 — Introduction to CSS

Add CSS inside your HTML document using a `<style>` element.

You only need to use the CSS concepts covered in class.

## 7.1 Change Text Color

Change the color of the main `<h1>` heading.

Example:

```css
h1 {
    color: blue;
}
```

Choose your own color.

---

## 7.2 Section Heading Color

Change the text color of the `<h2>` headings.

Example:

```css
h2 {
    color: darkgreen;
}
```

---

## 7.3 Background Color

Give the webpage a light background color.

Example:

```css
body {
    background-color: #f5f5f5;
}
```

---

# Part 8 — CSS Selectors

Your page must demonstrate all three selectors below.

## Element Selector

Use an element selector somewhere in your page.

Example:

```css
body {
    background-color: #f5f5f5;
}
```

---

## Class Selector

Create a class called `highlight`.

Use it to highlight important information such as the student's name or program.

Example:

```html
<p class="highlight">Computer Science</p>
```

Then style it using:

```css
.highlight {
    color: green;
}
```

---

## ID Selector

Create an element with an ID such as `student-name`.

Use an ID selector to style it.

Example:

```html
<h3 id="student-name">Rahul Sharma</h3>
```

```css
#student-name {
    color: blue;
}
```

---

# Requirements Checklist

Before submitting, make sure your webpage contains:

- [ ] Complete HTML document
- [ ] Header
- [ ] Navigation links
- [ ] Main content
- [ ] Footer
- [ ] Student profile section
- [ ] Profile table
- [ ] Skills unordered list
- [ ] Weekly schedule table
- [ ] Course registration form
- [ ] Name input
- [ ] Email input
- [ ] Student ID input
- [ ] Course `<select>`
- [ ] Radio buttons
- [ ] Checkboxes
- [ ] Submit button
- [ ] Reset button
- [ ] Labels for form controls
- [ ] CSS `color`
- [ ] CSS `background-color`
- [ ] Element selector
- [ ] Class selector
- [ ] ID selector

---

# Bonus Challenge

If you finish early, add a **Top Performer** badge next to the student's name.

Use:

- `<span>`
- A CSS class
- Text color
- Background color

For example:

```html
<span class="badge">Top Performer</span>
```

Do not copy the styling above. Decide how you want your badge to look.

---

# Rules

1. Use HTML and CSS only.
2. Do not use JavaScript.
3. Do not use Bootstrap, Tailwind, or other CSS frameworks.
4. Do not use Flexbox or Grid for this lab.
5. You may use MDN to understand syntax.
6. Try to write the code yourself before looking at examples.
7. Keep your HTML semantic and properly indented.

---

# Helpful MDN Topics

You can search MDN for:

- HTML semantic elements
- HTML links
- HTML lists
- HTML tables
- HTML forms
- HTML input
- HTML select
- HTML label
- CSS color
- CSS background-color
- CSS selectors

[MDN Web Docs](https://developer.mozilla.org/)

---

# Submission

Save your file as:

```text
student-portal.html
```

Open it in your browser and verify that:

1. All sections are visible.
2. Tables are displaying correctly.
3. Form controls work correctly.
4. Radio buttons behave as expected.
5. CSS colors are applied.
6. There are no obvious HTML errors.