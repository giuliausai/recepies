// THIS SCRIPT MANAGES THE create.htlm

var db = firebase.firestore();

function saveRecepie(event) {
   event.preventDefault();

   var currentRecepie = {};
   Object.assign(currentRecepie, recepie);

   currentRecepie.name = $('#name').val();
   currentRecepie.people = $('#people').val();
   currentRecepie.preparationTime = $('#preparationTime').val();
   currentRecepie.cookingTime = $('#cookingTime').val();
   currentRecepie.difficulty = $('#difficulty').val();
   currentRecepie.cost = $('#cost').val();
   currentRecepie.descrioption = $('#descrioption').val();

   db.collection('recepie').doc().set(currentRecepie).
   .then(function() {
    console.log("Document successfully written!");
   })
   .catch(function(error) {
    console.error("Error writing document: ", error);
   });

   return false;
}