function isValid(s) {
  const brackets = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  const st = [];
  for (let i = 0; i < s.length; i++) {
    if (isClosedBracket(s[i])) {
      if (brackets[s[i]] !== st.pop()) {
        return false;
      }
    } else {
      if (isOpenBracket(s[i])) {
        st.push(s[i]);
      }
    }
  }
  return st.length === 0;
}

function isClosedBracket(ch) {
  return [")", "]", "}"].indexOf(ch) > -1;
}

function isOpenBracket(ch) {
  return ["(", "[", "{"].indexOf(ch) > -1;
}



console.log('1', isValid('((aa))'));
console.log('2', isValid('(((vvvv)'));