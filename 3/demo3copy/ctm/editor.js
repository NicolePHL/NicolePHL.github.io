(function() {
    var __indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; l > i; i++)
            if (i in this && this[i] === item)
                return i;
        return -1
    }
    ;


window.addEventListener('load', function() {
    var editor;





ContentTools.StylePalette.add([
    new ContentTools.Style('Author', 'author')
]);



editor = ContentTools.EditorApp.get();
editor.init('*[data-editable]', 'data-name');






editor.addEventListener('saved', function (ev) {
    var name, payload, regions, xhr;

    // Check that something changed
    regions = ev.detail().regions;
    if (Object.keys(regions).length == 0) {
        return;
    }

    // Set the editor as busy while we save our changes
    this.busy(true);

    // Collect the contents of each region into a FormData instance
    payload = new FormData();
    for (name in regions) {
        if (regions.hasOwnProperty(name)) {
            payload.append(name, regions[name]);
        }
    }

    // Send the update content to the server to be saved
    function onStateChange(ev) {
        // Check if the request is finished
        if (ev.target.readyState == 4) {
            editor.busy(false);
            if (ev.target.status == '200') {
                // Save was successful, notify the user with a flash
                new ContentTools.FlashUI('ok');
            } else {
                // Save failed, notify the user with a flash
                new ContentTools.FlashUI('no');
            }
        }
    };



// Add support for auto-save
editor.addEventListener('start', function (ev) {
    var _this = this;

    // Call save every 30 seconds
    function autoSave() {
        _this.save(true);
    };
    this.autoSaveTimer = setInterval(autoSave, 30 * 1000);
});

editor.addEventListener('stop', function (ev) {
    // Stop the autosave
    clearInterval(this.autoSaveTimer);
});


    xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', onStateChange);
    xhr.open('POST', '/save-my-page');
    xhr.send(payload);
});





});

}
).call(this);





