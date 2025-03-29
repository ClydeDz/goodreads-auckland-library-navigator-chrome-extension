import * as processModule from "./process";

export function start() {
  const bookTitle = processModule.getGoodreadsTitle();
  const bookAuthors = processModule.getGoodreadsAuthors();

  if (!bookTitle && !bookAuthors) return;

  const bookSearchText = encodeURIComponent(`${bookTitle} by ${bookAuthors}`);
  const libraryUrl = `https://discover.aucklandlibraries.govt.nz/search?query=${bookSearchText}&searchType=everything&pageSize=10`;

  const goodreadsDesktopButtonSelector = ".BookPage__leftColumn .BookActions";
  const goodreadsMobileButtonSelector =
    ".BookPageMetadataSection__mobileBookActions .BookActions";

  processModule.addRedirectButtonToDom(
    goodreadsDesktopButtonSelector,
    libraryUrl
  );

  processModule.addRedirectButtonToDom(
    goodreadsMobileButtonSelector,
    libraryUrl
  );
}
