// use assert for basic test assertion
var assert = require("assert")

// use supertest library to provide a few shorcuts
supertest = require('supertest'),
    api = supertest('http://localhost:8081');
    express = require('express');

// create express app for testing
 var app = express();

// Test Reciple Endpoints
describe('Recipe Management', function() {

  it('should host getRecipe endpoint', function(done) {
    api.get('/api/getRecipes')
    .expect(200, done)
  });

  it('should host getRecipeByName endpoint', function(done) {
    api.get('/api/getRecipeByName')
    .expect(200, done)
  });

  it('should host getRecipeById endpoint', function(done) {
    api.get('/api/getRecipeById')
    .expect(200, done)
  });


  it('should host createSampleRecipes endpoint', function(done) {
    api.get('/api/createSampleRecipes')
    .expect(200, done)
  });

})

// Test User Management endpoints
describe('User Management', function() {

  it('should host getUsers endpoint', function(done) {
    api.get('/api/getUsers')
    .expect(200, done)
  });

  it('should host getUserByUsername endpoint', function(done) {
    api.get('/api/getUserByUsername')
    .expect(200, done)
  });

  it('should host getUserFavourites endpoint', function(done) {
    api.get('/api/getUserFavourites')
    .expect(200, done)
  });

  it('should host createSampleUsers endpoint', function(done) {
    api.get('/api/createSampleUsers')
    .expect(200, done)
  });

})
