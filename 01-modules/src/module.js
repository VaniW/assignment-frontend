export function valid(email) {
  makeArray(email);

  if (array[1].length!=3) return false; //degreeProgram 3 letters
  if (!(array[2]=='m' || array[2]=='b')) return false; //level is m or b
  if (array[3].length!=4 || isNaN(array[3])) return false; //year 4 letters or not number
  if (array[4] != "@fh-salzburg.ac.at") return false;
  return true;
}

export function degreeProgram(email) {
  if (valid(email)) {
    return array[1].toUpperCase();
  }
  return false;
}

export function level(email) {
  if (valid(email)) {
    return array[2].toUpperCase()+"A";
  }
  return false;
}

export function graduationYear(email) {
  if (valid(email)) {
    if (array[2]=='b')
      return parseInt(array[3],10)+3;
    else return parseInt(array[3],10)+2;
  }
  return false;
}

var array;

function makeArray(email) {
  array = []
  array.push(email.split('.', 1)[0]);//name
  email = email.substr(email.indexOf('.')+1, email.length-1);
  array.push(email.split('-', 1)[0]);//degreeProgram
  email = email.substr(email.indexOf('-')+1, email.length-1);
  var levelYear = email.split('@', 1)[0]; //level and year
  array.push(levelYear[0]); //level
  array.push(levelYear.substr(1, levelYear.length-1)); //year
  email =  email.substr(email.indexOf('@'), email.length-1);
  array.push(email);//rest
}
