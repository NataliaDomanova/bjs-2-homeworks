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
  // Вариант №1 (параметр min < 60 минут)
  
    getCurrentFormattedTime(min = 0) {
      const currentDate = new Date();
      let hours = currentDate.getHours();
      let minutes = currentDate.getMinutes() + min;

      if (min > 59) {
      console.error('Параметр min превышает 59 минут');
      return;
      }
      if (minutes > 59) {      
        minutes = minutes - 60;
        hours = hours + 1;
      }
      if (hours > 23) {
        hours = '00';
      }
      if (hours < 10) {
        hours = '0' + hours;
      }
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      let time = hours + ':' + minutes;
  
      //const time = (`${hours} : ${minutes}`);
      return time;
    }
  
  
  //Вариант№2 (параметр min не больше 1440 минут = 1 сутки)
  /*
  getCurrentFormattedTime(min = 0) {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes() + min;

    if (min > 1440) {
      throw new Error('Параметр min превышает 1440 минут');
    };

    if (minutes > 59) {
      minutes = (minutes % 60);
      hours = hours + (+(min / 60).toFixed(0));
    }
    if (hours === 24) {
      hours = '00';
    }

    if (hours > 24) {
      hours = hours - 24;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (hours < 10) {
      hours = '0' + hours;
    }

    let time = hours + ':' + minutes;
    //const time = (`${hours} : ${minutes}`);
    return time;
  }
  
   */

  //Вариант 1 start
  /*  
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
  //Вариант 2 start
  start() { 
    let checkClock = (call) => {
      if (this.getCurrentFormattedTime() === call.time)
        return call.callback();
    }

    if (this.timerId === null) {
      this.timerId = setInterval(() => this.alarmCollection.forEach(checkClock), 2000);
    }
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
  phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(1), () => { console.log('Давай вставай уже!'); 
  phoneAlarm.removeClock(2) }, 2);
  //phoneAlarm.addClock('09:01', () => console.log('Иди умываться'));
  phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(58), () => {
  console.log('Вставай, а то проспишь');
  phoneAlarm.clearAlarms();
  phoneAlarm.printAlarms();
  }, 3);

  //phoneAlarm.addClock('09:05', 'Вставай, а то проспишь', 1);
  //console.log(phoneAlarm.alarmCollection);
  //console.log(phoneAlarm.alarmCollection[0].time);
  phoneAlarm.printAlarms();
  phoneAlarm.start();
  //console.log(phoneAlarm.alarmCollection);
  //phoneAlarm.stop();

}

testCase();