import * as processModule from "./process";

export var settings = {
  waitTime: 500,
  bookTitle: undefined,
  bookAuthors: undefined,
  bookSearchText: undefined,
};

export function start() {
  settings.bookTitle = processModule.getGoodreadsTitle();
  settings.bookAuthors = processModule.getGoodreadsAuthors();

  settings.bookSearchText = encodeURIComponent(
    `${settings.bookTitle} by ${settings.bookAuthors}`
  );

  processModule.addRedirectButtonToDom(
    `https://discover.aucklandlibraries.govt.nz/search?query=${settings.bookSearchText}&searchType=everything&pageSize=10`
  );
}
