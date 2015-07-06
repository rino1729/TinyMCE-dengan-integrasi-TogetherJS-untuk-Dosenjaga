$(function () {
  tinymce.init({ 
    selector: '.tinymce'
  });
});

/*
  // check for a tinymce instance
  if (tinymce !== undefined) {
    tinymce.on("AddEditor", function (event) {
      var editor = event.editor;
      editor.on("init", function (event) {
        //add EventListener here
      });
    });
  }
});
*/