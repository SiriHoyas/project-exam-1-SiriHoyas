export function checkLength(value, length) {
  if (value.trim().length > length) {
    return true;
  } else {
    return false;
  }
}

export function validateEmail(email) {
  const regEx = /^([a-z0-9_\.\+-]+)@([\da-z-]+)(\.[a-z]{2,6})+$/;
  const patternMatch = regEx.test(email);
  return patternMatch;
}
