/*
Good morning! Define a function that takes in a positive integer
and returns the Roman Numeral representation of that number.  

Symbol    Value
  I         1
  V         5
  X         10
  L         50
  C         100
  D         500
  M         1,000 

Example: romanNumeralize(1973) should return 'MCMLXXIII'.

*/

function romanNumeralize(int) {
  let intStringSplit = String(int).split('');
  // console.log('intStringSplit.length: ',intStringSplit.length);
  // console.log('intStringSplit: ',intStringSplit);
  let splitNum = [];

  for (let i = 0; i < intStringSplit.length; i++) {
    splitNum[i] = Number(intStringSplit[i]);
  }
  // console.log('splitNum: ', splitNum);

  for (let i = 0; i < splitNum.length;i++) {
    splitNum[splitNum.length-1-i] = splitNum[splitNum.length-1-i] * Math.pow(10,i);
  }
  // console.log('splitNum: ', splitNum);

  let romNumBasic = {
    1: 'I', 
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  };
  let romNumTricky = {
    4: 'IV', 
    9: 'IX', 
    40: 'XL', 
    90: 'XC', 
    400: 'CD', 
    900: 'CM'
  };
  let romNum = [];
  for (let i = 0; i < splitNum.length; i++) {
    let factor = splitNum[i]/Math.pow(10, splitNum.length-i-1);
    // console.log('factor: ',factor);
    for (let j = 0; j < factor; j++) {
      if (romNumTricky[splitNum[i]]) {
        romNum.push(romNumTricky[splitNum[i]]);
        break;
      } else {
          if (splitNum[i]>5 && splitNum[i]<9) {
            romNum.push('V');
            let toAppend = romanNumeralize(splitNum[i]-5);
            romNum = romNum.concat(toAppend);
            break;
          } else {
              if (splitNum[i]>50 && splitNum[i]<90) {
                romNum.push('L');
                let toAppend = romanNumeralize(splitNum[i]-50);
                // console.log('toAppend: ', toAppend);
                romNum = romNum.concat(toAppend);
                // console.log('romNum*: ', romNum);
                break;
              } else {
                  if (romNumBasic[splitNum[i]]) {
                    romNum.push(romNumBasic[splitNum[i]]);
                    break;
                  } else {
                    romNum.push(romNumBasic[splitNum[i]/factor]);
                }
              }
          }
           
        }
    }
  }
  // console.log('romNum: ', romNum.join(''));
  return romNum.join('');
}

console.log(romanNumeralize(9999 ));

// // MORE TIME EFFICIENT SOLUTION I FOUND ONLINE
// function solution(number){
//   var thousand={"1":"M","2":"MM","3":"MMM","4":"MMMM","5":"MMMMM","6":"MMMMMM","7":"MMMMMMM","8":"MMMMMMMM","9":"MMMMMMMMM"};
//   var hundred={"1": "C","2":"CC","3":"CCC","4":"CD","5":"D","6":"DC","7":"DCC","8":"DCCC","9":"CM"};
//   var ten={"1": "X","2":"XX","3":"XXX","4":"XL","5":"L","6":"LX","7":"LXX","8":"LXXX","9":"XC"};
//   var single={"1":"I","2":"II","3":"III","4":"IV","5":"V","6":"VI","7":"VII","8":"VIII","9":"IX"};
//   var numArr=[single,ten,hundred,thousand];
//   return   number.toString().split("").reverse().map(function(ele,index){
//             return numArr[index][ele];
//          }).reverse().join("");
// }