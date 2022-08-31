const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
    let park;
  beforeEach(function () {
     park = new Park('Walking Fossils', 20);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Walking Fossils');
  });


  it('should have a ticket price',function () {
    const actual = park.ticket_price;
    assert.deepStrictEqual(actual, 20)
  });

  it('should have a collection of dinosaurs',function () {
    const actual = park.walkingFossils;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection',function () {
    let dinosaur1 = new Dinosaur("triceratops","herbivore",28)
    let dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 20)
    let dinosaur3 = new Dinosaur('brachiosaurus', 'herbivore', 40);
    let dinosaur4 = new Dinosaur('t-rex', 'carnivore', 50);
    park.addDinosaur(dinosaur1, dinosaur2, dinosaur3, dinosaur4)
    const actual = park.walkingFossils.length;
    assert.deepStrictEqual(actual, 4)
  });
    
    it('should be able to remove a dinosaur from its collection',function () {
        let dinosaur1 = new Dinosaur("triceratops","herbivore",28)
        let dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 20)
        let dinosaur3 = new Dinosaur('brachiosaurus', 'herbivore', 40);
        let dinosaur4 = new Dinosaur('t-rex', 'carnivore', 50);
        park.addDinosaur(dinosaur1, dinosaur2, dinosaur3, dinosaur4)
        park.removeDinosaur(dinosaur2)
        const actual = park.walkingFossils.length;
        assert.deepStrictEqual(actual, 3)
      });


  // let dino_list;
  // it('should be able to find the dinosaur that attracts the most visitors',function () {
    
  //   const actual = park.findDinosaur(dino_list);
  //   assert.strictEqual(actual, "t-rex")
  // });


  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
