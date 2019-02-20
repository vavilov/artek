class Names {  
  constructor (names) {
    this.names = names;
  }
  contains(names) {
    return names.every((name) => this.names.indexOf(name) !== -1);
  }
}
