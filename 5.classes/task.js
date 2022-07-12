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
  
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book)
        return this.books.name
      }
    }
  
    findBookBy(type, value) {
      let book;
      if (book = this.books.find(item => item[type] == value))
        return book;
      else return null;
    }
  
    
    giveBookByName(bookName) {
      let foundBook;
      let foundBookId;      
      if (foundBook = this.books.find(item => item.name == bookName)) {
        foundBookId = this.books.indexOf(foundBook);
        this.books.splice(foundBookId, 1);
        return foundBook;
      }  
      return null
    }
    
    /*giveBookByName(bookName) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name == bookName) {
          let foundBook = this.books[i]
          this.books.splice([i], 1);
          return foundBook;
        }
      }
      return null;
    }*/
  }
  
  
  const library = new Library("Библиотека имени Ленина");
  const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
  const sherlock = new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 10080);
  const machine = new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138);
  const murzilka = new Magazine("Мурзилка", 1924, 60);
  const markes = new NovelBook("Габриэль Гарсиа Маркес", "Сто лет одиночества", 2016, 544);
  picknick.state = 80;
  sherlock.state = 45;
  machine.state = 65;
  murzilka.state = 150;
  markes.state = 25;
  library.addBook(picknick);
  library.addBook(sherlock);
  library.addBook(machine);
  library.addBook(murzilka);
  library.addBook(new NovelBook("Габриэль Гарсиа Маркес", "Сто лет одиночества", 2016, 544));
  
  
  library.giveBookByName('Сто лет одиночества');
  console.log(library.books);
  markes.state = 25;
  markes.fix();
  library.addBook(markes);
  console.log(library.books);
  