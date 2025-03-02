import * as documentModule from "./document";

export function getGoodreadsTitle() {
  var elements = documentModule.getElements(".Text__title1");
  if (!elements) return;
  return elements[0]?.innerText;
}

export function getGoodreadsAuthors() {
  var elements = documentModule.getElements(".ContributorLink__name");
  if (!elements) return;
  return elements[0]?.innerText;
}

export function addRedirectButtonToDom(link) {
  var button = documentModule.createButton(link);

  if (!button) return;

  var domElement =
    documentModule.getElements(".BookActions") ||
    documentModule.getElements("#imageBlockNew_feature_div");

  if (!domElement) return;

  documentModule.prepend(domElement[0], button);
}
