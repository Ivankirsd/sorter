class Sorter {
  constructor() {

    this.array = [];
    this.compareFunction = (left, right) => left - right;
  }

  add(element) {

    this.array.push(element);
    return this;
  }

  at(index) {

    return this.array[index];
  }

  get length() {

    return this.array.length;
  }

  toArray() {

    return this.array;
  }

  sort(indices) {

    let sortIndices = indices.sort();
    let subArray = [];

    for (let i = 0; i < sortIndices.length; i++) {
      subArray.push(this.at(sortIndices[ i ] ));      
    }
    console.log('subArray: ', subArray);
    
    subArray = subArray.sort(this.compareFunction);
    console.log('subArray: ', subArray);

    for (let i = 0; i < sortIndices.length; i++) {
      this.array[ sortIndices[ i ] ] = subArray[ i ];
    }

    return this;  
  }

  setComparator(compareFunction) {

    this.compareFunction = compareFunction;
    return this;
  }
}

module.exports = Sorter;