class Puppy {
  constructor(name, breed){
    this.name = name
    this.breed = breed
  }

  speak() {
    console.log(`${name} says 'arf'`)
  }

  to_s() {
    console.log(`${name} is just a lil pup. He's a ${breed}`)
  }
}

module.exports = Puppy