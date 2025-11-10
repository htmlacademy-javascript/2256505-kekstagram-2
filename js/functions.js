// Строка короче n символов
function getStringLength(string, maxLength) {
  return (string.length <= maxLength) ? `Строка  короче или равна ${maxLength} символов` : `Строка длинее ${maxLength} символов`;
}

getStringLength('dfdf', 4);


function isPolindrom(string){
  let result = '';
  for(let i = string.length; i >= 0; i--){
    result += string[i];
  }
  console.log(result);
  if(string.toUpperCase === result.toUpperCase){
    return 'is polindrom';
  }
  return 'is not polindrom';

}


console.log(isPolindrom('topoty'));
