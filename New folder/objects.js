// var coffee = {
//     name: "espresso",
//     strength: "strong",
//     flavour: "regular",
//     milk: "no",
//     sugar: "little"
// };
// console.log(coffee.name)

// var favMovie = {
//     title: "Lord of the rings",
//     actors: ["Galadriel", "Orlando Blum", "Vigo Mortensen"],
//     director: "J.R. Tolkin",
//     genre: "Fantastic",
//     popularity: "Most popular movie"
// };
// console.log(favMovie.actors[2]);

////////////          3            ///////
// Write a function that creates an object that represents a project.Each project is described by: description, programming language, git repository, boolean status that says if the project is in development or not.Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.

function project(description, pl, git, status) {
    return {
        description: description,
        pl: pl,
        git: git,
        status: status,
        getMetod: function () {
            return this.git;
        },
        isWrittenInJs: function () {
            if (this.pl === "java script") {
                return true
            } else {
                return false
            }
        },
        getThirdM: function () {
            return this.status
        }
    }
}


var res = project("Css project", "java script", "GIT", "TRUE")
console.log(res)
console.log(res.isWrittenInJs());

