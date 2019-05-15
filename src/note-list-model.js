(function(exports) {
  function NoteList() {
    this.array = [];
  };

  NoteList.prototype.getArray = function() {
    return this.array;
  }; 

  NoteList.prototype.addNote = function(text) {
    return this.array.push(new Note(text))
  }

  exports.NoteList = NoteList;
})(this);