// Import the js file to test
import { checkinput } from "../src/client/js/checkinput"

describe("Testing the  vaild text functionality", () => {
  test("should return true", () => {  
  const string="paris";
  expect(checkinput(string)).toBe(true);
  expect(string).toBeDefined();
});



  test("should return false", () => {  
  const string2="";
  expect(checkinput(string2)).toBe(false);
  expect(string2).toBeDefined();
});


test("should return false", () => {  
  const string3=99;
  expect(checkinput(string3)).toBe(false);
  expect(string3).toBeDefined();
});

});