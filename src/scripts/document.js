let doc;

export function initializeDocument(injectedDocument) {
  doc = injectedDocument;
}

export function getElements(selector) {
  var domElements = doc.querySelectorAll(selector);
  return !domElements || domElements.length == 0 ? undefined : domElements;
}

export function createButton(redirectLink) {
  if (!redirectLink) return;

  var div = doc.createElement("div");
  div.className = "goodreads-akllibrary-ext-container";

  var button = doc.createElement("button");
  button.onclick = function () {
    window.open(redirectLink, "_blank");
  };
  button.innerText = "Search in Auckland Library";
  button.className =
    "goodreads-akllibrary-ext-button goodreads-akllibrary-ext-mobile";

  div.appendChild(button);
  return div;
}

export function prepend(parent, child) {
  parent.prepend(child);
}
