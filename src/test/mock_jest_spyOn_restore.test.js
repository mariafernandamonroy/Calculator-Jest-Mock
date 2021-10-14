import * as app from "../app";
import * as math from "../math";

test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");
  // override the implementation
  addMock.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  // restore the original implementation
  addMock.mockRestore();
  expect(app.doAdd(1, 2)).toEqual(3);
});

test("calls math.subtract", () => {
  const substractMock = jest.spyOn(math, "subtract");
  // override the implementation
  substractMock.mockImplementation(() => "mock");
  expect(app.doSubtract(1, 2)).toEqual("mock");
  // restore the original implementation
  substractMock.mockRestore();
  expect(app.doSubtract(1, 2)).toEqual(1);
});

test("calls math.multiply", () => {
  const substractMock = jest.spyOn(math, "multiply");
  // override the implementation
  substractMock.mockImplementation(() => "mock");
  expect(app.doMultiply(1, 2)).toEqual("mock");
  // restore the original implementation
  substractMock.mockRestore();
  expect(app.doMultiply(1, 2)).toEqual(2);
});

test("calls math.divide", () => {
  const substractMock = jest.spyOn(math, "divide");
  // override the implementation
  substractMock.mockImplementation(() => "mock");
  expect(app.doDivide(1, 2)).toEqual("mock");
  // restore the original implementation
  substractMock.mockRestore();
  expect(app.doDivide(1, 2)).toEqual(2);
});