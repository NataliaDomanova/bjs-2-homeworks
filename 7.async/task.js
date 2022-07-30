class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {

    if (id === undefined) {
      throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
    }

    if (this.alarmCollection.find(element => element.id === id)) {
      console.error('Будильник с таким id уже существует');
      return;
    };

    let call = { time, callback, id };
    this.alarmCollection.push(call);
  }

  removeClock(id) {
    if (this.alarmCollection.splice(this.alarmCollection.findIndex(element => element.id === id), 1)) {
      return true;
    } else return false;
  }

  getCurrentFormattedTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    if (hours < 10) {
      hours = '0' + hours;
    }

    let minutes = currentDate.getMinutes();
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    let time = hours + ':' + minutes;

    //const time = (`${hours} : ${minutes}`);
    return time;
  }
/*  //вариант1
  start() {
    let checkClock = (call) => {
      if (this.getCurrentFormattedTime() === call.time)
        return call.callback();
    }

    let forEachCall = () => {
      this.alarmCollection.forEach(checkClock);
    }
    this.timerId = setInterval(forEachCall, 1000);
  }
*/
  //вариант 2
    start() {
      let checkClock = (call) => {
        if (this.getCurrentFormattedTime() === call.time)
         return call.callback();
      }
  
      this.timerId = setInterval(() => this.alarmCollection.forEach(checkClock), 1000);
    
  }
  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    console.log('Печать всех будильников в количестве: ' + this.alarmCollection.length);
    this.alarmCollection.forEach(element => console.log(`Будильник №${element.id} заведен на ${element.time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

function testCase() {


  let phoneAlarm = new AlarmClock;
  phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log('Пора вставать'), 1);
  phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => { console.log('Давай вставай уже!'); phoneAlarm.removeClock(2) }, 2);
  //phoneAlarm.addClock('09:01', () => console.log('Иди умываться'));
  phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => {
    console.log('Вставай, а то проспишь');
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
  }, 3);
  //phoneAlarm.addClock('09:05', 'Вставай, а то проспишь', 1);
  //console.log(phoneAlarm.alarmCollection);
  //console.log(phoneAlarm.alarmCollection[0].time);
  phoneAlarm.printAlarms();
  phoneAlarm.start();
  //phoneAlarm.stop();
}

testCase();