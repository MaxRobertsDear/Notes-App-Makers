function testNoteTextDefaults() {
  var text = 'My favourite language is JavaScript';
  var note = new Note(text);
  assert.isTrue(note.text === text);
};

function textNoteGetText() {
  var text = 'My favourite language is JavaScript';
  var note = new Note(text);
  assert.isTrue(note.getText() === text);
};

testNoteTextDefaults();
textNoteGetText();
