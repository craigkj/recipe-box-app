// In memory implementation of recipeService.
// Alternative 'db' or cloud-storage(s3) implementations should be created.

// Nodes 'exports' take care of JSs inherent global scope bleed for us, so:
var recipes = []

// Return all of the recipes we have stored
getRecipes = function() {
	return recipes;
}
exports.getRecipes = getRecipes;

// Search for a recipe by name, simple lookup
getRecipeByName = function(recipeName) {

	console.log("Looking for " + recipeName)

	for (var i = 0; i < recipes.length; i++) {
		if(recipes[i].name === recipeName ){
			console.log(recipeName + " found");
			return recipes[i];
		}
	}

	console.log("Recipe " + recipeName + " not found")
	return {}

}
exports.getRecipeByName = getRecipeByName;

// Search for recipe by ID, same as above.
getRecipeById = function(recipeId) {
  console.log("Looking for " + recipeId)

  for (var i = 0; i < recipes.length; i++) {
    if(recipes[i].rec_id === recipeId ){
      console.log(recipeId + " found");
      return recipes[i];
    }
  }

  console.log("Recipe ID " + recipeId + " not found")
  return {}
}
exports.getRecipeById = getRecipeById;


// CREATE SOME DUMMY RECIPES
// For testing purposes only
// TODO: Remove
createRecipeList = function() {
  recipes = [
    {
      rec_id : "lemon-chicken",
      name : "Lemon Chicken",
      cookingTime: "30 mins",
      ingredients: [
        {
          name: "Lemon",
          quantity: "1"
        },
        {
          name: "Chicken Breast",
          quantity: "4"
        },
				{
					name: "Thyme",
					quantity: "1tsp"
				}
      ],
      image: "images/lemon_chicken.jpg"
    },
    {
      rec_id : "beef-stroganoff",
      name : "Beef Stroganoff",
      cookingTime: "30 mins",
      ingredients: [
        {
          name: "Beef",
          quantity: "1"
        },
				{
					name: "Mustard",
					quantity: "to taste"
				},
        {
          name: "Mushrooms",
          quantity: "400g"
        }
      ],
      image: "images/beef_stroganoff.jpg"
    },
		{
			rec_id : "chicken-ceasar-salad",
			name : "Chicken Ceasar Salad",
			cookingTime: "25 mins",
			ingredients: [
				{
					name: "Lettuce",
					quantity: "1 small"
				},
				{
					name: "Croutons",
					quantity: "50g"
				},
				{
					name: "Parmesan",
					quantity: "100g"
				}
			],
			image: "images/ceasar_salad.jpg"
		}
  ];
}

exports.createRecipeList = createRecipeList;
