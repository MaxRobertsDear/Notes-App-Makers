function testNoteList() {
  // arrange
  var notelist = new NoteList();
  // act
  notelist.addNote("here you go")
  //assert
  assert.isTrue(notelist.array.length === 1);
};

testNoteList();