// In memory implementation of user service.
// Database solution (Mongo) to be created

var users = []

// Return all of the users we have stored.
getUsers = function() {
  return users;
}
exports.getUsers = getUsers;

// Retrieve User by Username
getUserByUsername = function(username) {

  console.log("Looking for " + username)

  for (var i = 0; i < users.length; i++) {
    if(users[i].username === username ){
      console.log(username + " found");
      return users[i];
    }
  }

  console.log("User " + username + " not found")
  return {}
}
exports.getUserByUsername = getUserByUsername;

// Return list of user favourites
getUserFavourites = function(username) {
  var user = getUserByUsername(username);
  return user.favourites;
}
exports.getUserFavourites = getUserFavourites;

// Create a list of sample users for testing.
// TODO: remove.
createSampleUsers = function() {
  users = [
    {
      username: "craig",
      name: "Craig Jones",
      roles: ['Admin','User'],
      favourites: ['lemon-chicken']
    },
    {
      username: "joe",
      name : "Joe Cheffery",
      roles: ["User"],
      favourites: []
    }
  ]
}
exports.createSampleUsers = createSampleUsers;
