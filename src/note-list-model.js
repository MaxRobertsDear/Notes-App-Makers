(function(exports) {
  function NoteList() {
    this.array = [];
  };

  NoteList.prototype.getArray = function() {
    return this.array;
  }; 

  exports.NoteList = NoteList;
})(this);