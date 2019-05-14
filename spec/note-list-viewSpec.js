function testNoteListView() {
    // arrange
    var notelist = new NoteList();
    var note = new Note("here you go");
    var note2 = new Note("no thanks")

    //act 
    notelist.array.push(note, note2)

    //assert
    assert.isTrue(notelist.getHTML === '<ul><li><div>here you go</div></li><li><div>no thanks</div></li></ul>');
};

testNoteListView();