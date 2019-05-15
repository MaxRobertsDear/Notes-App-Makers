(function(exports) {
    function NoteListView(noteList) {
        this.noteList = noteList
    };
    NoteListView.prototype.getHTML = function() {
        var whatever = noteList.array.map(i => i.getText())
        var htmlJoined = whatever.join('</div></li><li><div>')
        var htmlOutput = "<ul><li><div>" + htmlJoined + "</div></li></ul>"
        return htmlOutput;
    };

    exports.NoteListView = NoteListView;
})(this);