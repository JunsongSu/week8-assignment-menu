class Movie { // Create a class for movies
    constructor (title){
        this.title = title;
    }

    describe(){ // Describe the movie
        return `"${this.title}".`;
    }
}

class Menu { //Create a class for menu
    constructor(){
        this.movieList = [];// Create an empty array to store input movies
    }

    start(){ // Create start method
        let selection = this.showMainMenuOptions();
        while(selection != 0){ // validate input
            switch(selection){ // User can click on 1, 2, or 3 to achieve different function
                case '1':
                    this.addMovie();
                    break;
                case '2':
                    this.viewMovie();
                    break;
                case '3':
                    this.deleteMovie();
                    break;
                default:
                    selection = 0;
                }
            selection = this.showMainMenuOptions(); // this will let user back to the main menu after using the function
        }
        alert ('Goodbye!'); // Show user this message when they click on 0
    }

    showMainMenuOptions(){// Use this method to show user the menu options 
        return prompt(`
        0) exit
        1) add a new movie
        2) display all the movies
        3) delete a movie
        `);
    }

    addMovie(movie){ // This method let user to add new movie
        let movieTitle = prompt('Enter title for a new movie: ');
        this.movieList.push(new Movie(movieTitle));//Store the movie into array
        alert (`The name for the movie you added is ${movieTitle}`);// Let user know what movie they entered
    }

    viewMovie(){ // This method user can see all the movies they stored
        let description ='';// Create an empty string 
        for (let i = 0; i < this.movieList.length; i++){ // The for loop goes through the array and print out all the movie names
            description += i + ')' + this.movieList[i].describe() + '\n';
        } // Each time the loop goes through a movie it will add the movie to description 
        alert (description); // Shows user all the movies 
    }

    deleteMovie(){ // This method help user delete a movie 
        let index = prompt('Enter the index of the movie that you wish to delete: ');
        if (index > -1 && index <this.movieList.length){//Validate input 
            this.movieList.splice(index, 1);// Delete one movie from this index
        }
    }
}

let menu = new Menu ();
menu.start();

