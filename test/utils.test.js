const utils = require('../app/bookshop_utils');
// first block for testing addVat
describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });
  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
});
// new block for testing makeHalfPrice
describe("utils.getFullName", () => {
  test("returns Kinga Czu", () => {
    expect(utils.getFullName("Kinga", "Czu")).toBe("Kinga Czu");
  });
});
describe("utils.makeHalfPrice", () => {
  test("returns price with 50% discount", () => {
    expect(utils.makeHalfPrice(100)).toBe(50);
  });
});
describe("utils.countBooks", () => {
  test("returns total number of books", () => {
    expect(utils.countBooks(["book1", "book2", "book3"])).toBe(3);
  });
  test("returns true if the title is in stock", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 9
    };
  
    expect(utils.isInStock(book)).toBe(true);
  });
});
describe("utils.getTotalOrderPrice", () => {
  test("returns total price", () => {
    expect(utils.getTotalOrderPrice(18, 2)).toBe(43.2);
    expect(utils.getTotalOrderPrice(8, 10).toBe(96));
  });
});