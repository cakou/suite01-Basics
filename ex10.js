/*

    getPerson

    Ecrire une fonction "getPerson", prenant en paramètre:

    "firstName": pour le prénom ("toto"),
    "lastName": pour le nom de famille ("tata"),
    "age": pour l'age (45)

    Nous attendons un objet comme valeur de retour.

    Cet objet contiendra:

        - un attribut "fullName" pour le prénom et le nom ensemble "toto tata"
        - un attribut "age" pour l'age de la personne
        - une fonction "isAdult" pour tester si la personne est majeur;

*/
let person = {
    name: {
        firstName: "toto",
        lastName: "tata"
    }
age: 45,

fullName: function ()
 {
     return this.name.firstName + "" + this.name.lastName;
 }
};

function getHumanTypeByAge (nb) {
    if (nb >= 18) {
        return "majeur"
    }
}