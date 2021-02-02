class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => (b > a ? -1 : 1))
    this.length++
  }

  get(pos) {
    if(this.items[pos] == undefined){
      throw new Error ('OutOfBounds')
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.items.length == 0){
      throw new Error('EmptySortedList');
    } else {
      this.items.sort((a,b) => (a > b ? -1 : 1)) 
      return this.items[0]
    }
  }

  min() {
    if (this.items.length == 0){
      throw new Error('EmptySortedList');
    } else {
      this.items.sort((a,b) => (b > a ? -1 : 1)) 
      return this.items[0]
    }
  }

  sum() {
    if (this.items.length == 0){
      return 0
    } else {
      return this.items.reduce(function(acc, val) {return acc + val}, 0)
    }
  }

  avg() {
    if (this.items.length == 0){
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.items.length
    }
  }
}

module.exports = SortedList;
