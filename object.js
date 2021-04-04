var post = [
    {
        title: "CAts are mediocre",
        author: "Colt",
        comments: ["awesome post", "terrible post"]
    },
    {
        title: "Cats are actually awesome",
        author: "Cat Luvr",
        comments: ["<3", "go to hell i hate you"] 
    }
]

var movies = [
    {title: "Expendable",
    rating: 5,
    hasWatched: true
    },

    {title: "Frozen",
    rating: 4.5,
    hasWatched: true
    },

    {title: "Mad Max Fury Road",
    rating: 5,
    hasWatched: true
    },

    {title: "Les Miserables",
    rating: 3.5,
    hasWatched: false
    },

    function buildString (movie){
        var result = "You have ";
        if(movie.hasWatched){
            result += "Watched ";
        }else {
            result += "not seen ";
        }
        result += movie.rating + "stars";
        result += "\"" + movie.title + "\" - ";
        return result;
    },

    function print(){
    this.forEach(function(movie){
        console.log(buildString(movie));
    
    }
)}
    ];



