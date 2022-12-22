// Função Construtora inicializada
// Com métodos especiais dentro do construtor

function Movie(title,year){
    this.title = title;
    this.year = year;

    this.getTitle = function(){
        return this.title;
    }

    this.setTitle = function(title){
        return this.title = title;
    }

    this.getYear = function(){
        return this.year;
    }

    this.setYear = function(year){
        return this.year = year;
    }
}

let movie = new Movie("The Shawshank Redemption",1995);
let movie2 = new Movie("Avengers",2012);
let movie3 = new Movie("TrollHunters: Rise of the Titans",2021);

function showMovie(movie){
    console.log(`${movie.getTitle()} - ${movie.getYear()}`);
}

console.log('Meus Filmes')
showMovie(movie);
showMovie(movie2);
showMovie(movie3);