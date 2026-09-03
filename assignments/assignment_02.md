# Lab Assignment: Flexbox Quest

## Build Your Own Mini Game UI

---

## Objective

In this lab, you will build a simple **Mini Game UI** using only:

* HTML
* CSS
* CSS Flexbox
* Display properties
* Background colors
* Box model
* Margin and padding

You will also practice making your layout responsive.

> **Do not use CSS Grid or CSS positioning for this assignment.**

---

# What Are You Building?

You are going to build a simple game interface called:

# Flexbox Quest

The final interface will contain:

1. Game Header
2. Game Area
3. Controls
4. Inventory
5. Quest Panel
6. Footer

---

# Rules

For this assignment:

* Use HTML and CSS only.
* Use Flexbox for the layout.
* Do not use CSS Grid.
* Do not use `position: absolute`.
* Do not use `position: fixed`.
* Do not use JavaScript.
* Do not use Bootstrap, Tailwind, or any other CSS framework.
* Do not use random margins to force elements into position.
* You may use MDN to understand CSS properties.
* Keep your HTML properly structured and indented.

---

# Part 1 — Create the HTML Structure

Create the basic HTML document.

Your page should contain:

```text
<body>

    Header

    Main
        Game Area
        Game Panels

    Footer

</body>
```

Use semantic HTML where possible:

```html
<header>
<main>
<section>
<footer>
```

### Suggested Structure

```html
<body>

    <header class="game-header">
        ...
    </header>

    <main>

        <section class="game-area">
            ...
        </section>

        <section class="game-panels">
            ...
        </section>

    </main>

    <footer>
        ...
    </footer>

</body>
```

---

# Part 2 — Understand Display Properties

Before building the game, create a small experiment.

Create:

```html
<div class="box">Box 1</div>
<div class="box">Box 2</div>

<span class="item">Item 1</span>
<span class="item">Item 2</span>

<a href="#">Link 1</a>
<a href="#">Link 2</a>
```

Experiment with:

```css
display: block;
display: inline;
display: inline-block;
```

Then try:

```css
display: flex;
```

### Observe

Check what happens to:

* Width
* Height
* New lines
* Same-line elements
* Margin
* Padding

### Questions

1. What is the default behavior of a `<div>`?
2. What is the default behavior of a `<span>`?
3. What happens when you use `display: inline-block`?
4. What happens when you use `display: flex`?

---

# Part 3 — Build the Game Header

Create the top section of your game.

It should contain:

```text
Flexbox Quest     Lives: 3    Coins: 120    Level: 1    [Pause] [Menu]
```

### Suggested HTML

```html
<header class="game-header">

    <h1>Flexbox Quest</h1>

    <div class="game-info">
        <span>Lives: 3</span>
        <span>Coins: 120</span>
        <span>Level: 1</span>
    </div>

    <div class="header-actions">
        <button>Pause</button>
        <button>Menu</button>
    </div>

</header>
```

### Your Task

Use Flexbox to:

* Put the game title on the left.
* Put game information in the middle.
* Put buttons on the right.
* Vertically align everything.
* Add spacing.

Use properties such as:

```css
display: flex;
justify-content: space-between;
align-items: center;
gap: 20px;
```

### Styling

Use the box model:

```css
padding: 15px;
margin: 10px;
border: 2px solid ...;
border-radius: 10px;
```

Add a background color to make the header look like a game UI.

---

# Part 4 — Build the Game Area

Now create the main game area.

The game area should look something like:

```text
+------------------------------------------------+
|                                                |
|              GAME AREA                         |
|                                                |
|       Player              Star                 |
|                                                |
|              Platform                          |
|                                                |
|   Platform                    Platform         |
|                                                |
+------------------------------------------------+
```

You do **not** need to create a real playable game.

This is only a visual representation.

### Add

* A player
* 2–3 platforms
* At least one star
* A background color

For example:

```html
<section class="game-area">

    <div class="player">PLAYER</div>

    <div class="platform">PLATFORM</div>

    <div class="platform">PLATFORM</div>

    <div class="star">STAR</div>

</section>
```

### Important

Do not use:

```css
position: absolute;
```

Instead, use Flexbox to arrange the elements.

Try:

```css
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
```

You can experiment with different Flexbox directions and alignments.

---

# Part 5 — Create the Game Panels

Below the game area, create three panels:

```text
+----------------+----------------+----------------+
|    CONTROLS    |   INVENTORY    |      QUEST     |
|                |                |                |
|    Buttons     |  Items         |   Tasks        |
|                |                |                |
+----------------+----------------+----------------+
```

Create:

```html
<section class="game-panels">

    <div class="panel controls">
        ...
    </div>

    <div class="panel inventory">
        ...
    </div>

    <div class="panel quest">
        ...
    </div>

</section>
```

### Your Task

Use Flexbox to place the three panels in one row.

Use:

```css
display: flex;
gap: 20px;
```

Make the panels use the available space.

You can use:

```css
flex: 1;
```

---

# Part 6 — Build the Controls

Inside the Controls panel, create:

```text
        [ ↑ ]

    [ ← ] [ ↓ ] [ → ]

        [ JUMP ]
```

### Suggested HTML

```html
<div class="controls">

    <h2>Controls</h2>

    <div class="control-row">
        <button>↑</button>
    </div>

    <div class="control-row">
        <button>←</button>
        <button>↓</button>
        <button>→</button>
    </div>

    <button>Jump</button>

</div>
```

### Your Task

Use Flexbox to:

* Center the buttons.
* Keep buttons in rows.
* Add space between buttons.
* Center the Jump button.

Useful properties:

```css
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
```

---

# Part 7 — Build the Inventory

Create an inventory containing at least four items.

Example:

```text
+--------------------------------+
| Inventory                      |
|                                |
| [Sword] [Shield] [Potion] [Key]|
|                                |
+--------------------------------+
```

### Suggested HTML

```html
<div class="inventory">

    <h2>Inventory</h2>

    <div class="inventory-items">

        <div class="item">Sword</div>
        <div class="item">Shield</div>
        <div class="item">Potion</div>
        <div class="item">Key</div>

    </div>

</div>
```

### Your Task

Use Flexbox to:

* Display items in a row.
* Add spacing.
* Align the items.
* Allow items to wrap.

Use:

```css
display: flex;
gap: 10px;
flex-wrap: wrap;
```

### Box Model

Give every inventory item:

```css
padding: 15px;
border: 2px solid ...;
border-radius: 8px;
```

---

# Part 8 — Build the Quest Panel

Create three quests.

Example:

```text
QUEST

Collect 3 Stars             1 / 3

Find the Golden Key         0 / 1

Defeat the Monster          0 / 1
```

### Suggested HTML

```html
<div class="quest">

    <h2>Quest</h2>

    <div class="quest-item">
        <span>Collect 3 Stars</span>
        <span>1 / 3</span>
    </div>

    <div class="quest-item">
        <span>Find the Golden Key</span>
        <span>0 / 1</span>
    </div>

    <div class="quest-item">
        <span>Defeat the Monster</span>
        <span>0 / 1</span>
    </div>

</div>
```

### Your Task

Each quest item should have:

* Quest name on the left.
* Progress on the right.

Use:

```css
display: flex;
justify-content: space-between;
align-items: center;
```

Add spacing using:

```css
padding;
margin;
gap;
```

---

# Part 9 — Style the Panels

Now make the three panels look like part of a game.

Each panel should have:

```css
background-color;
padding;
border;
border-radius;
```

Experiment with different background colors.

For example:

```text
Game Header  → Dark color

Game Area    → Sky/Blue color

Controls     → Dark panel

Inventory    → Dark panel

Quest        → Dark panel
```

You can choose your own colors.

---

# Part 10 — Practice Margin and Padding

Now intentionally experiment with the box model.

For example:

```css
.panel {
    padding: 20px;
    margin: 10px;
}
```

Try changing:

```css
padding: 10px;
padding: 20px;
padding: 30px;
```

Then change:

```css
margin: 5px;
margin: 15px;
margin: 25px;
```

### Questions

1. What does `padding` change?
2. What does `margin` change?
3. Which one creates space inside the element?
4. Which one creates space outside the element?

---

# Part 11 — Make It Responsive

Your game should work on different screen sizes.

On a large screen:

```text
+----------+----------+----------+
| Controls | Inventory| Quest    |
+----------+----------+----------+
```

On a smaller screen:

```text
+----------------------+
| Controls             |
+----------------------+

+----------------------+
| Inventory            |
+----------------------+

+----------------------+
| Quest                |
+----------------------+
```

Use a Media Query:

```css
@media (max-width: 768px) {

}
```

Inside the Media Query, change the game panels from a row to a column.

For example:

```css
.game-panels {
    flex-direction: column;
}
```

You may also adjust:

* Padding
* Gap
* Font sizes
* Button sizes

---

# Part 12 — Final Page

Combine all the sections.

Your final page should look approximately like:

```text
==================================================
                 FLEXBOX QUEST
==================================================

       Lives: 3    Coins: 120    Level: 1

==================================================
                    GAME AREA
                                                  
              PLAYER          STAR               
                                                  
                   PLATFORM                     
                                                  
          PLATFORM       PLATFORM               
==================================================

+----------------+----------------+----------------+
|   CONTROLS     |   INVENTORY    |     QUEST      |
|                |                |                |
|      ↑         | Sword Shield   | Collect Stars  |
|    ← ↓ →       | Potion Key     | Find Key       |
|    [JUMP]      |                | Defeat Monster |
+----------------+----------------+----------------+

                    FOOTER
==================================================
```

Your design does not have to look exactly like this.

The important thing is that you use the concepts taught in class.

---

# Required CSS Concepts

Your final project must demonstrate the following.

### Display

```css
display: block;
display: inline;
display: inline-block;
display: flex;
```

### Flexbox

```css
display: flex;
flex-direction;
justify-content;
align-items;
flex-wrap;
gap;
flex: 1;
```

### Box Model

```css
margin;
padding;
border;
border-radius;
```

### Basic Styling

```css
background-color;
color;
font-size;
font-family;
width;
height;
```

### Responsive Design

```css
@media
```

---

# Test Cases

Before submitting, test your page at:

| Screen Size | Expected Result                          |
| ----------- | ---------------------------------------- |
| 1440px      | Three game panels should appear in a row |
| 1024px      | Layout should remain readable            |
| 768px       | Responsive layout should start adapting  |
| 375px       | Panels should stack vertically           |
| Mobile      | No unwanted horizontal scrolling         |

---

# Submission Checklist

Before submitting, make sure:

* [ ] HTML structure is correct.
* [ ] Game Header is created.
* [ ] Game Area is created.
* [ ] Controls panel is created.
* [ ] Inventory panel is created.
* [ ] Quest panel is created.
* [ ] Footer is created.
* [ ] `display: flex` is used.
* [ ] `flex-direction` is used.
* [ ] `justify-content` is used.
* [ ] `align-items` is used.
* [ ] `flex-wrap` is used.
* [ ] `gap` is used.
* [ ] Margin is used.
* [ ] Padding is used.
* [ ] Borders are used.
* [ ] Background colors are used.
* [ ] Buttons are styled.
* [ ] Media Query is used.
* [ ] Layout works on mobile.
* [ ] CSS Grid is not used.
* [ ] Positioning is not used.
* [ ] No CSS framework is used.

---

# Bonus Challenges

If you finish early, try these:

### Bonus 1 — Add More Items

Add more inventory items:

```text
Bow
Magic Potion
Map
Shield
Coin
Key
```

Use `flex-wrap` so they automatically move to another line.

---

### Bonus 2 — Add a Score

Add:

```text
Score: 1250
```

to the game header.

Use Flexbox to position it properly.

---

### Bonus 3 — Add a Game Message

Add a message inside the game area:

```text
Collect all the stars!
```

Style it using:

```css
background-color;
padding;
border;
border-radius;
```

---

### Bonus 4 — Create Your Own Theme

Change the colors and create your own game theme.

For example:

* Space Game
* Adventure Game
* Racing Game
* Treasure Hunt
* Dungeon Game

The layout must still use Flexbox.

---

# Helpful MDN References

Use MDN when you need to understand a CSS property.

* [CSS Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout)
* [Basic Concepts of Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
* [Aligning Items in a Flex Container](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
* [Wrapping Flex Items](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
* [CSS `display` Property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/display)
* [CSS Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries)

---

# Files to Submit

Create the following files:

```text
flexbox-quest/
│
├── index.html
└── style.css
```

Open `index.html` in your browser and test the page before submitting.

---

# Final Challenge

Remember the process:

```text
HTML Structure
      ↓
Identify Parent & Children
      ↓
display: flex
      ↓
Choose flex-direction
      ↓
Understand Main & Cross Axis
      ↓
Align with justify-content / align-items
      ↓
Add gap
      ↓
Use margin & padding
      ↓
Add colors and borders
      ↓
Make it responsive
```

## The goal is not to make a perfect game.

## The goal is to learn how Flexbox can solve layout problems.