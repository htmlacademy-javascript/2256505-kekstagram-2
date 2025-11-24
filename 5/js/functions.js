// Строка короче n символов
function getStringLength(string, maxLength) {
  return (string.length <= maxLength) ? `Строка  короче или равна ${maxLength} символов` : `Строка длинее ${maxLength} символов`;
}

getStringLength('dfdf', 4);

// является ли строка полиндромом
function isPolindrom(str) {
  let strWithoutSpace = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      strWithoutSpace += str[i];
    }
  }
  let strOposit = '';
  for (let j = strWithoutSpace.length - 1; j >= 0; j--) {
    strOposit += strWithoutSpace[j];
  }
  if (strWithoutSpace.toUpperCase() === strOposit.toUpperCase()) {
    return 'is polindrom';
  }
  return 'is not polindrom';
}

//isPolindrom('toRot');
isPolindrom('to R ot');
//isPolindrom('toRo R');


// получение чисел из строки

function getInt(str) {
  str = str.toString();
  let num = '';
  for (let i = 0; i < str.length; i++) {
    if (!Number.isNaN(parseInt(str[i], 10))) {
      num += parseInt(str[i], 10);
    }
  }

  if (num === '') {
    return NaN;
  }
  return num;
}

getInt('22');

export const checkMeetingTime = (startWork, endWork, startMeeting, timeMeeting) => {
  const hourToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const startWorkMinutes = hourToMinutes(startWork);
  const endWorkMinutes = hourToMinutes(endWork);
  const meetingStartMinutes = hourToMinutes(startMeeting);
  const meetingEndMinutes = hourToMinutes(startMeeting) + timeMeeting;

  return meetingStartMinutes >= startWorkMinutes && meetingEndMinutes <= endWorkMinutes;
};
