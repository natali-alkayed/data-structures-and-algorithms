function validateBrackets(string) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];
  
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
    //  console.log(char);
  
      if (openingBrackets.includes(char)) {
        stack.push(char);
      //  console.log(stack);
      } else if (closingBrackets.includes(char)) {
        const expectedBracket = openingBrackets[closingBrackets.indexOf(char)];
 // console.log(expectedBracket);
        if (stack.length === 0 || stack.pop() !== expectedBracket) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }

  module.exports= validateBrackets;
//Create an empty stack.
// Iterate through each character in the input string.
// If the character is an opening bracket (i.e., '(', '[', or '{'), push it onto the stack.
// If the character is a closing bracket (i.e., ')', ']', or '}'),
// check if the stack is empty or if the top of the stack does not match the corresponding opening bracket 
// for the current closing bracket. If either of these conditions is true, the brackets are unbalanced, 
//and we return false.
// If the character is neither an opening nor a closing bracket, continue to the next character.
//After iterating through all the characters, check if the stack is empty. 
//If it is, all brackets are balanced, and we return true. Otherwise,
//there are unmatched opening brackets, and we return false.