const Park = function (name, ticket_price, walkingFossils) {
    this.name = name;
    this.ticket_price = ticket_price;
    this.walkingFossils = [];
  }
  
  Park.prototype.addDinosaur = function(dinosaur1, dinosaur2, dinosaur3, dinosaur4){
    this.walkingFossils.push(dinosaur1);
    this.walkingFossils.push(dinosaur2);
    this.walkingFossils.push(dinosaur3);
    this.walkingFossils.push(dinosaur4);
};

Park.prototype.removeDinosaur = function(){
    this.walkingFossils.shift();
};

// Park.prototype.findDinosaur = function(dino_list){
//   for(let list in this.walkingFossils){
//     let dino_list = console.log(this.walkingFossils)
//   };
//   return dino_list["t-rex"];
// };



module.exports = Park;