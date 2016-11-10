const regex = /^[a-zA-Z0-9._%+-]+\.([a-zA-Z]{3,4})-(b|m)(\d{4})@(fh-salzburg.ac.at)$/;

export function valid(email) {
  return regex.test(email);
}

export function degreeProgram(email) {
  if (valid(email)) {
    const array = regex.exec(email);
    return array[1].toUpperCase();
  }
  return false;
}

export function level(email) {
  if (valid(email)) {
    const array = regex.exec(email);
    return array[2].toUpperCase()+"A";
  }
  return false;
}

export function graduationYear(email) {
  if (valid(email)) {
    const array = regex.exec(email);
    if (array[2]=='b')
      return parseInt(array[3],10)+3;
    else return parseInt(array[3],10)+2;
  }
  return false;
}
