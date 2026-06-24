//DESCRIPTION
// `
//   <article id="animals">
//         <h1 class="main-heading">Nature's Wonder</h1>
//         <p>In this article we discuss animals</p>

//         <section id="birds">
//             <h2 class="favourits">Birds</h2>
//             <p>
//              Forest is wonderful place to see birds
//             </p>
//         </section>
//         <section id="butterflies">
//             <h2>Butterflies</h2>
//             <p>Butterfiles possess some of the most striking colout displays found in nature</p>
//         </section>
//     </article>
// `
// nput
// Parameter 1: An HTML markup enclosed by the back-ticks (` `), for example:


// Note that HTML tags may contain attributes.

// Parameter 2: A string representing an HTML tag name, for example: 'h2'
// Because parsing actual HTML is very complex, you can assume the following:

// there will be no angled brackets inside quoted attributes; e.g. don't worry about things such as <tag attribute="></tag>">innerText</tag>
// the tags specified by the second parameter will never contain nested tags, only inner text.
// Output
// An array of strings which represents the contents between the opening and closing tag specified by the 2nd parameter.

// Note that contents may be present on multiple lines. Remove the newline and whitespace characters from both sides of the string.

// An empty array should be returned if a given tag is not found.

// Examples
// getTagContent(htmlString1, 'h1') --> ["Nature's Wonders"]
// getTagContent(htmlString1, 'h2') --> ["Birds","Butterflies"]
// getTagContent(htmlString1, 'p') -->
// [
//   "In this article we discuss animals.",
//   "Forest is a wonderful place to see birds.",
//   "Butterflies possess some of the most striking colour displays found in nature."
// ]
// getTagContent(htmlString1, 'h3') --> []

//SOLUTION
function getTagContent(htmlString, tag) {
  let result = []
  let index = 0
  for (;;) {
    let start = htmlString.indexOf(`<${tag}`, index)
    if (start >= 0) {
      start = htmlString.indexOf(">", start + tag.length + 1) + 1
    } else {
      break
    }
    let end = htmlString.indexOf(`</${tag}>`, start)
    if (end >= 0) {
      result.push(htmlString.slice(start, end).trim())
      index = end + tag.length + 3
    } else {
      break
    }
  }
  return result
}
