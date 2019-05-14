(function(exports) {
  function NoteList() {
    this.array = [];
  };

  NoteList.prototype.getArray = function() {
    return this.array;
  }; 

  NoteList.prototype.getArrayStrings = function() {
    var note = new Note();
    var text = "";
    var i;
    for(i = 0; i < this.array.length; i++) {
      text += this.array[i].getText() + "/"
    }
  }

  exports.NoteList = NoteList;
})(this);