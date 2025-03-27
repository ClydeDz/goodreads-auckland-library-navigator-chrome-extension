import * as processModule from "../scripts/process";
import * as documentModule from "../scripts/document";

var getElementsSpy = jest
  .spyOn(documentModule, "getElements")
  .mockImplementation(jest.fn());
var createButtonSpy = jest
  .spyOn(documentModule, "createButton")
  .mockImplementation(jest.fn());
var prependSpy = jest
  .spyOn(documentModule, "prepend")
  .mockImplementation(jest.fn());

describe("process → getAudibleBookIdentifierValue", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  test("should return title", () => {
    var mockElements = [
      {
        innerText: "test title",
      },
    ];
    getElementsSpy.mockReturnValueOnce(mockElements);

    const title = processModule.getGoodreadsTitle();

    expect(getElementsSpy).toHaveBeenCalledWith(".Text__title1");
    expect(title).toBe("test title");
  });

  test("should return title w", () => {
    var mockElements = [];
    getElementsSpy.mockReturnValueOnce(mockElements);

    const title = processModule.getGoodreadsTitle();

    expect(title).toBeUndefined();
  });

  test("should return title zx", () => {
    var mockElements = [
      {
        someOtherProperty: "test title",
      },
    ];
    getElementsSpy.mockReturnValueOnce(mockElements);

    const title = processModule.getGoodreadsTitle();

    expect(getElementsSpy).toHaveBeenCalledWith(".Text__title1");
    expect(title).toBeUndefined();
  });
});
