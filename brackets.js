const string = '[()]{}{[()()]()}))((';
const string2 = '[{()(()';

function checkForBalancedBrackets(string) {
  let parenthesis = 0;
  let squareBrackets = 0;
  let curlyBraces = 0;
  let correct = true;

  string.split('').forEach((char) => {
    switch (char) {
      case '(':
        parenthesis++;
        break;
      case '[':
        squareBrackets++;
        break;
      case '{':
        curlyBraces++;
        break;
      case ')':
        parenthesis--;
        break;
      case ']':
        squareBrackets--;
        break;
      case '}':
        curlyBraces--;
        break;
      default:
    }

    if (parenthesis === -1 || squareBrackets === -1 || curlyBraces === -1) {
      correct = false;
    }
  });

  if (!correct) return false;

  if (parenthesis > 0 || squareBrackets > 0 || curlyBraces > 0) {
    return false;
  }

  if (parenthesis === 0 || squareBrackets === 0 || curlyBraces === 0) {
    return true;
  }
}

console.log(checkForBalancedBrackets(string));

function getNextClosingBracket(string) {
  let parenthesis = 0;
  let squareBrackets = 0;
  let curlyBraces = 0;
  let stack = string.split('');

  let answer = null;
  while (stack.length) {
    const char = stack.pop();
    switch (char) {
      case ')':
        parenthesis--;
        break;
      case ']':
        squareBrackets--;
        break;
      case '}':
        curlyBraces--;
        break;
      case '(':
        parenthesis++;
        break;
      case '[':
        squareBrackets++;
        break;
      case '{':
        curlyBraces++;
        break;
    }

    if (parenthesis === 1) {
      answer = ')';
      break;
    }
    if (squareBrackets === 1) {
      answer = ']';
      break;
    }
    if (curlyBraces === 1) {
      answer = '}';
      break;
    }
  }

  return answer;
}

console.log(getNextClosingBracket(string2));
