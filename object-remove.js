// Object Asssignment

// Task 1

const movies = [
    {
        "title": "Blacklist",
        "author": "Raymond Reddington",
        "description": "Crime and love",
        "yearOfRelease": "2004"
    },
     {
        "title": "Prison Break",
        "author": "Micheal Scoffield",
        "description": "Crime and love",
        "yearOfRelease": "2003"
    },
     {
        "title": "Game of Thrones",
        "author": "Ned Stark",
        "description": "Crime and War",
        "yearOfRelease": "2010"
    },
     {
        "title": "Peaky Blinders",
        "author": "Thomas Shelby",
        "description": "Crime and love",
        "yearOfRelease": "2012"
    },
    {
        "title": "Alchemy of Souls ",
        "author": "Jang Uk",
        "description": "Crime and love",
        "yearOfRelease": "2022"
    },
    {
        "title": "The Day of the Jackal",
        "author": "the Jackal",
        "description": "Crime and action",
        "yearOfRelease": "2024"
    }
            
]
movies.splice(2,1);
for (i = 0; i<movies.length; i++){
    console.log(movies[i].title)
   
   
}