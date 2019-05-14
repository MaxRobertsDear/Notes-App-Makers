(function(exports) {
    function NoteListView() {
    };

    NoteListView.prototype.getHTML = function() {
        var notelist = new NoteList()
        return notelist.array.join("/div></li><li><div>")
    };

    exports.NoteListView = NoteListView;
})(this);