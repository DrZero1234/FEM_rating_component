# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Desktop View](./rating_desktop.jpg)
![Mobile View](./rating_mobile.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://drzero1234.github.io/FEM_rating_component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- CSS Grid


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:


Usage of CSS variables
```
:root {
    --title-white: hsl(0, 0%, 100%);
    --text-grey: hsl(217, 12%, 63%);
    --background-grey: hsl(216, 12%, 54%);
    --circe-grey: hsla(217, 12%, 63%,.2);
    --blue: hsl(213, 19%, 18%);
    --v-blue: hsl(216, 12%, 8%);
    --font-normal: 400;
    --font-bold: 700;
    --btn-orange: hsl(25, 97%, 53%);
}
```

By using the !important tag hiding the rating-wrapper div worked because it prioritized the display status below instead of the later defined display: flex

```
.inactive {
    display: none !important;   
}
```

The circle around the score options. By changing the width, height, line-height attributes you can change the size of the circle around the text

```
.circle {
        width: 3em;
        height: 3em;
        line-height: 3em;
        -moz-border-radius: 50%;
        border-radius: 50%;
        text-align: center;
        display: block;   
}
```

By defining data attributes for the element you can manipulate their css  based on the data attribute value

```
!The default gap between elements

.grid-g {
    display: grid;
    gap: 1rem;
}

!Large gap between the star image and the title 

.grid-g[data-spacing="large"] {
    gap: 2rem;
}

!Extra large gap between the selected score in the thank-you card and the title

.grid-g[data-spacing="extra-large"] {
    gap: 3rem;
}
```

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/DrZero1234)
- Twitter - [@yourusername](https://github.com/DrZero1234)

