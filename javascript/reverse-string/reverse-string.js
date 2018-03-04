var reverseString = function(input){

  if (input == '' || input == undefined) {

  return '';

  }else {
  return input.split('').reverse().join('');
  }
}
module.exports = reverseString;
