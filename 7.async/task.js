class AlarmClock {
    constructor(alarmCollection, timerId) {
      this.alarmCollection = [];
      this.timerId = null;
    }
    
    addClock(time, callback, id) {
  
      if (id === undefined) {
        throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
      }
  
      if(this.alarmCollection.find(element => element.id === id)) {
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
      return (time); 
    }

    start() {
      let checkClock = () => {
        if (this.getCurrentFormattedTime === this.alarmCollection.time)
          return this.alarmCollection.callback;
      }
        if (this.timerId === null) {this.timerId = setInterval(() => this.alarmCollection.forEach(element => element.id.checkClock), 1000);
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
    return this.alarmCollection = [];
  }  
}  

function testCase() {
let phoneAlarm = new AlarmClock;
phoneAlarm.addClock('09:00', () => console.log('Пора вставать'), 1);
phoneAlarm.addClock('09:01', () => {console.log('Давай всавай уже!'); phoneAlarm.removeClock(2)}, 2);
//phoneAlarm.addClock('09:01', () => console.log('Иди умываться'));
phoneAlarm.addClock('09:02', () => {
  console.log('Вставай, а то проспишь');
  phoneAlarm.clearAlarms(); 
  phoneAlarm.printAlarms();
}, 3);
//phoneAlarm.addClock('09:05', 'Вставай, а то проспишь', 1);
phoneAlarm.printAlarms();
console.log(phoneAlarm.start());
}

testCase();
