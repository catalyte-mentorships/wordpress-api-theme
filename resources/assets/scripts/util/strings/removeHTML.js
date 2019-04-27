/**
 * Returns the text from a HTML string
 * @see https://ourcodeworld.com/articles/read/376/how-to-strip-html-from-a-string-extract-only-text-content-in-javascript
 * @param {string} html The html string
 */
const stripHtml = (html) => {
  // Create a new div element
  const temporalDivElement = document.createElement('div');
  // Set the HTML content
  temporalDivElement.innerHTML = html;
  // Retrieve the text property of the element (cross-browser support)
  return temporalDivElement.textContent || temporalDivElement.innerText ||'';
};

export default stripHtml;
