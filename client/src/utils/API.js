import axios from "axios";

export default {
  // Gets all books
  getMatches: function() {
    return axios.get("/api/matches");
  },
  // Gets the book with the given id
  getMatch: function(id) {
    return axios.get("/api/matches/" + id);
  },
  // Deletes the book with the given id
  deleteMatch: function(id) {
    return axios.delete("/api/matches/" + id);
  },
  // Saves a book to the database
  saveMatch: function(matchData) {
    return axios.post("/api/matches", matchData);
  },

  getUsers: function() {
    return axios.get("/api/users");
  },

  logIn: function(userData) {
    return axios.post("/api/user/login", userData);
  },
  signUp: function(userData) {
    return axios.post("/api/user/signup", userData);
  },
  logOut: function() {
    return axios.get("/api/user/logout");
  },
  userData: function() {
    return axios.get("/api/user/user_data");
  }
};
