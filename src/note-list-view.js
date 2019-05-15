(function(exports) {
    function NoteListView(noteList) {
        this.noteList = noteList
    };
    NoteListView.prototype.getHTML = function() {
        var stringifiedArray = this.noteList.array.map(i => i.getText())
        var htmlJoined = stringifiedArray.join('</div></li><li><div>')
        var htmlOutput = "<ul><li><div>" + htmlJoined + "</div></li></ul>"
        return htmlOutput;
    };

    exports.NoteListView = NoteListView;
})(this);