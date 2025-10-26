const Settings = imports.ui.settings;
const Desklet = imports.ui.desklet;
const Main = imports.ui.main;
const Cinnamon = imports.gi.Cinnamon;
const Mainloop = imports.mainloop;
const St = imports.gi.St;
function main(metadata, desklet_id) {
    return new MyDesklet(metadata, desklet_id);
}

function MyDesklet(metadata, desklet_id) {
    this._init(metadata, desklet_id);
}

MyDesklet.prototype = {
    __proto__: Desklet.Desklet.prototype,

    _init: function(metadata, desklet_id) {
        Desklet.Desklet.prototype._init.call(this, metadata, desklet_id);
        Main.notify("Beautiful System Monitor", "This is a beautiful system monitor desklet!");

        this.setupUI();
    },
    setupUI: function() {
        // Create a main container with background and styling
        this.window = new St.Bin({
            style_class: 'desklet',
            style: 'background-color: rgba(0, 0, 0, 0.3); ' + // Change opacity here (0.7 = 70% opaque)
                  'border-radius: 12px; ' + // Adjust corner radius here
                  'padding: 10px;'
        });
        
        this.text = new St.Label({ text: "Hello, World!" });
        this.text.set_text("Beautiful System Monitor is running!");
        this.text.style = 'color: white;'; // Make text visible on dark background
        
        this.window.add_actor(this.text);
        this.setContent(this.window);
    }
}