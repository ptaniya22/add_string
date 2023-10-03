// strokeArray -  Итоговая строка

let stringArray = [];
let tempStr = [];

// console.log(tempStr);
// console.log(tempStr[0]);

do {
  let command = prompt(
    `Enter command to work with the string. Add Delete Stop.  \nYour string is ${stringArray}`
  );
  tempStr = command.split(', ');
  if (tempStr[0] == 'Add') {
    stringArray.push(tempStr[1]);
    alert('Your string is added');

    console.log(stringArray);
  } else if (tempStr[0] == 'Del') {
    for (let i = 0; i < stringArray.length; i++) {
      // console.log(stringArray[i]);
      // console.log(tempStr[1]);
      stringArray[i] == tempStr[1] ? stringArray.splice(i, 1) : '';
      console.log(stringArray);
    }

    // console.log(tempStr);
  }
} while (tempStr[0] != 'Stop');
console.log('Your finally string is ', stringArray);
