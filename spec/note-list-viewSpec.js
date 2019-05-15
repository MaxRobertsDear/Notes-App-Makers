

function testNoteListView() {
    // arrange
    var noteList = new NoteList();
    var note = new Note("here you go");
    var note2 = new Note("no thanks");
    
    //act 
    noteList.array.push(note, note2)
    var noteListView = new NoteListView(noteList);
    
    //assert
    assert.isTrue(noteListView.getHTML() === '<ul><li><div>here you go</div></li><li><div>no thanks</div></li></ul>');
};

testNoteListView();