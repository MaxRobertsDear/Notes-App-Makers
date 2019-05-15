function testNoteListView() {
    // arrange
    var noteListView = new NoteListView(noteList = new NoteList);
    var note = new Note("here you go");
    var note2 = new Note("no thanks")

    //act 
    noteList.array.push(note, note2)
    
    //assert
    assert.isTrue(noteListView.getHTML() === '<ul><li><div>here you go</div></li><li><div>no thanks</div></li></ul>');
};

testNoteListView();