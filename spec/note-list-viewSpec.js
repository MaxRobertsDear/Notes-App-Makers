

function testNoteListView() {
    // arrange
    var noteList = new NoteList();
    // act 
    noteList.addNote("here you go")
    noteList.addNote("no thanks")
    var noteListView = new NoteListView(noteList);
    // assert
    assert.isTrue(noteListView.getHTML() === '<ul><li><div>here you go</div></li><li><div>no thanks</div></li></ul>');
};

testNoteListView();