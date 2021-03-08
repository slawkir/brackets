module.exports = function check(str, bracketsConfig) {

  let StrBr = [], PairBr = {};
  for(let i = 0; i < bracketsConfig.length; i++) {
    PairBr[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  let strToArr = str.split('');
  for(let i = 0; i < strToArr.length; i++) {
    if(strToArr[i] === (StrBr[StrBr.length - 1] || 0)) {
      StrBr.pop();
    } 
	  else {
      	StrBr.push(PairBr[strToArr[i]]);
	  }

  }
  if(StrBr.length == 0) {
    return true;
  } else {
    return false;
    }

}
