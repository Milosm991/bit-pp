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

function Project(description, pl, git, status) {

    this.description = description;
    this.pl = pl;
    this.git = git;
    this.developStatus = status;
    this.getRipos = function () {
        return this.git;
    };
    this.isWrittenInJs = function () {
        if (this.pl === "java script") {
            return true
        } else {
            return false
        }
    };
    this.isInDevelop = function () {
        if (status) {
            return "Is in develop"
        } else {
            return "Finished!"
        }
    };

}


var res = new Project("Css project", "java script", "bit-web", false)
console.log(res);

console.log(res.getRipos());
console.log(res.isWrittenInJs());
console.log(res.isInDevelop());


/////////////////  4  ////////////////////////

// Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
// Add a method that prints out all the ingredients necessary for the meal preparation. 
// Add a method that checks if a meal can be prepared for 15 minutes. 
// Add a method that changes the type of cuisine to the given value. 
// Add a method that delete a given ingredient from the list of ingredients.  


// function recipe(name, cus, comp, ing, time, inst) {
//     return {
//         name: name,
//         cuisine: cus,
//         complexity: comp,
//         ingredients: ing,
//         prepTime: time,
//         instruction: inst,
//         getIngr: function () {
//             var sastojci = "";
//             for (var i = 0; i < this.ingredients.length; i++) {
//                 sastojci += this.ingredients[i] + " ";
//             }
//             return sastojci
//         },
//         canBePrep: function () {
//             if (this.prepTime <= 15) {
//                 return "Can be prepared"
//             } else {
//                 return "Can t be prepared"
//             }
//         },
//         setCuisine: function (a) {
//             this.cuisine = a;
//         },
//         removeIngred: function (b) {
//             newIngid = "";
//             for (var i = 0; i < this.ingredients.length; i++) {
//                 if (this.ingredients[i] !== b) {
//                     newIngid += this.ingredients[i] + " ";
//                 }

//             }
//             this.ingredients = newIngid;
//         }
//     };


// }

// var res = recipe("Sarma", "RS", 5, ["meso", "kupus", "pirinac"], 60, "savijaca")
// console.log(res.getIngr());
// console.log(res.canBePrep());
// res.setCuisine("SRB");
// console.log(res.cuisine);
// res.removeIngred("pirinac");
// console.log(res.ingredients);

