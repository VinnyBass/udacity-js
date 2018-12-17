//Notação literal do objeto
var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};

//Recuperar dados :
sister['name'];	//notacão de colchetes
sister.name; //notação de ponto
sister.paintPicture();