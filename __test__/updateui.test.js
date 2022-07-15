import "babel-polyfill";
import { postData } from "../src/client/js/updateui"
import { postDatatwo } from '../src/client/js/updateui'
import { postDatathree } from '../src/client/js/updateui'

describe("Testing the submit functionality", () => {
    test("Testing the postData() function", () => {  
    expect(postData).toBeDefined();
  });});


  describe("Testing the submit functionality", () => {
    test("Testing the postData() function", () => {  
    expect(postDatatwo).toBeDefined();
  });});


  describe("Testing the submit functionality", () => {
    test("Testing the postData() function", () => {  
    expect(postDatathree).toBeDefined();
  });});