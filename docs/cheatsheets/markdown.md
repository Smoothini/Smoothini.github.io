---
title: Markdown
layout: page
parent: Cheatsheets and resources
has_children: true
date: 2025-06-27
subject: Markdown Live Preview
source: https://markdownlivepreview.com/
area: Programming
---

{% include top-card.html %}

# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2
###### This is a Heading h6

## Emphasis

`*This text will be italic*`
*This text will be italic*

`_This will also be italic_`
_This will also be italic_


`**This text will be bold**`
**This text will be bold**

`__This will also be bold__`
__This will also be bold__

`_You **can** combine them_`
_You **can** combine them_

## Lists

### Unordered

```md
* Item 1
* Item 2
* Item 2a
* Item 2b
    * Item 3a
    * Item 3b
```

* Item 1
* Item 2
* Item 2a
* Item 2b
    * Item 3a
    * Item 3b

### Ordered

```md
1. Item 1
2. Item 2
3. Item 3
    1. Item 3a
    2. Item 3b
```

1. Item 1
2. Item 2
3. Item 3
    1. Item 3a
    2. Item 3b

## Images
`![This is an alt text.](/image/sample.webp "This is a sample image.")`

![This is an alt text.](/image/sample.webp "This is a sample image.")

## Links

You may be using `[Markdown Live Preview](https://markdownlivepreview.com/)` [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes
```md
> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
```


> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

```md
| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |
```

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocks of code

```
let message = 'Hello world';
alert(message);
```

## Inline code

This web site is maybe using `markedjs/marked`.



{% include tags.html %}