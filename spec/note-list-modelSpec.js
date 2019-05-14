function testNoteList() {
  // arrange
  var notelist = new NoteList();
  var text = "here you go"
  var note = new Note(text);
  // act
  notelist.array.push(note)
  //assert
  assert.isTrue(notelist.array.length === 1);
};

testNoteList();