import * as app from "../app";
import * as math from "../math";
// Set all module functions to jest.fn
jest.mock("../math.js");
test("calls math.add", () => {
  app.doAdd(2,1);
  expect(math.add).toHaveBeenCalledWith(2,1);
});
test("calls math.subtract", () => {
  app.doSubtract(2,1);
  expect(math.subtract).toHaveBeenCalledWith(2,1);
});
test("calls math.multiply", () => {
  app.doMultiply(2,1);
  expect(math.multiply).toHaveBeenCalledWith(2,1);
});
test("calls math.divide", () => {
  app.doDivide(2,1);
  expect(math.divide).toHaveBeenCalledWith(2,1);
});