const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
Here is some **bold** text, some _italic_ text, and some text that is **_both_**.
~~Don't read this!~~

This is a [link](https://github.com/ziidx), and

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![pepeOK](https://cdn.frankerfacez.com/emoticon/293111/4)
`;

export default placeholder;