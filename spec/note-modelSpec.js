function testNoteTextDefaults() {
  // arrange
  var text = 'My favourite language is JavaScript';
  var note = new Note(text);
  // act 
  // assert
  assert.isTrue(note.text === text);
};

function textNoteGetText() {
  // arrange 
  var text = 'My favourite language is JavaScript';
  var note = new Note(text);
  // act
  // assert
  assert.isTrue(note.getText() === text);
};

testNoteTextDefaults();
textNoteGetText();
