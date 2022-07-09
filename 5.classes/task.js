class PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = 1.5 * this.state;
  return this.state;
  }

  set state(newState) {
    if(newState < 0) {this._state = 0;}
    else if(newState > 100) {this._state = 100;}
    else {this._state = newState; this.fix;}
  }

  get state () {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);
    super.fix();
    this.state = 100;
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);
    super.fix();
    this.state = 100;
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super (author, name, releaseDate, pagesCount);
    super.fix(); 
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super (author, name, releaseDate, pagesCount);
    super.fix();
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super (author, name, releaseDate, pagesCount);
    super.fix();
    this.type = "detective";
  }
}
  
const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15
