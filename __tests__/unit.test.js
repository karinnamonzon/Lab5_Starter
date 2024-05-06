// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//tests for isPhoneNumber
test('Test valid phone number, return true', () => {
  expect(isPhoneNumber("619-555-1234")).toBe(true);
  expect(isPhoneNumber("(619)-555-1234")).toBe(true);
});
test('Test invalid phone number, return false', () => {
  expect(isPhoneNumber('555')).toBe(false);
  expect(isPhoneNumber('big-old-dogs')).toBe(false);
});

//tests for isEmail
test('Test valid email, return true', () => {
  expect(isEmail("example@gmail.com")).toBe(true);
  expect(isEmail("example@mail.co")).toBe(true);
});
test('Test invalid email, return false', () => {
  expect(isEmail("ex@mple@gmail.com")).toBe(false);
  expect(isEmail("invalidEmail@")).toBe(false);
});

//test for isStrongPassword
test('Test valid strong password, return true', () => {
  expect(isStrongPassword('ABC_12345')).toBe(true);
  expect(isStrongPassword('strongP4ssword')).toBe(true);
});
test('Test invalid strong password, return false', () => {
  expect(isStrongPassword('')).toBe(false);
  expect(isStrongPassword('12345')).toBe(false);
});

//test for isDate
test('Test valid date, return true', () => {
  expect(isDate('10/06/2004')).toBe(true);
  expect(isDate('6/1/2004')).toBe(true);
});
test('Test invalid date, return false', () => {
  expect(isDate('10/12/04')).toBe(false);
  expect(isDate('6-1-2004')).toBe(false);
});

//test for isHexColor
test('Test valid hex, return true', () => {
  expect(isHexColor('#def')).toBe(true);
  expect(isHexColor('#123456')).toBe(true);
});
test('Test invalid hex, return false', () => {
  expect(isHexColor('#12345')).toBe(false);
  expect(isHexColor('#xyz')).toBe(false);
});