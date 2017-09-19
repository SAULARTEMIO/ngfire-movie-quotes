import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

interface MovieQuote {
  movie: string;
  quote: string;
  $key?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  readonly quotesPath = "quotes";

  formMovieQuote: MovieQuote = {
    'quote' : '',
    'movie' : '',
  };

  //Local Only solution
  // movieQuotes: MovieQuote[] = [
  //   {"movie": "Rocky", "quote": "Yo Adrian"},
  //   {"movie": "Terminator", "quote": "I'll be back"},
  //   {"movie": "Titanic", "quote": "I'm the king of the world!"},
  //   {"movie": "The Princess Bride", "quote": "Hello. My name is Inigo Montoya. You killed my father. Prepare to die."}
  // ];

  movieQuotesStream: FirebaseListObservable<MovieQuote[]>;
  
  constructor(db: AngularFireDatabase) {
    this.movieQuotesStream = db.list(this.quotesPath);
  }

  onSubmit(): void {
    console.log("You wish to submit", this.formMovieQuote);
    
    //Local Only solution
    // this.movieQuotes.unshift(this.formMovieQuote);

    this.formMovieQuote = {
      'quote' : '',
      'movie' : ''
    };
  }


}
