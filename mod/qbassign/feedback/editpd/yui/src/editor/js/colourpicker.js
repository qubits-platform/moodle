var COLOURPICKER_NAME = "Colourpicker",
    COLOURPICKER;

/**
 * Provides an in browser PDF editor.
 *
 * @module moodle-qbassignfeedback_editpd-editor
 */

/**
 * COLOURPICKER
 * This is a drop down list of colours.
 *
 * @namespace M.qbassignfeedback_editpd
 * @class colourpicker
 * @constructor
 * @extends M.qbassignfeedback_editpd.dropdown
 */
COLOURPICKER = function(config) {
    COLOURPICKER.superclass.constructor.apply(this, [config]);
};

Y.extend(COLOURPICKER, M.qbassignfeedback_editpd.dropdown, {

    /**
     * Initialise the menu.
     *
     * @method initializer
     * @return void
     */
    initializer: function(config) {
        var colourlist = Y.Node.create('<ul role="menu" class="qbassignfeedback_editpd_menu"/>'),
            body;

        // Build a list of coloured buttons.
        Y.each(this.get('colours'), function(rgb, colour) {
            var button, listitem, title, img, iconname;

            title = M.util.get_string(colour, 'qbassignfeedback_editpd');
            iconname = this.get('iconprefix') + colour;
            img = M.util.image_url(iconname, 'qbassignfeedback_editpd');
            button = Y.Node.create('<button><img alt="' + title + '" src="' + img + '"/></button>');
            button.setAttribute('data-colour', colour);
            button.setAttribute('data-rgb', rgb);
            button.setAttribute('role', 'menuitem');
            button.setStyle('backgroundImage', 'none');
            listitem = Y.Node.create('<li/>');
            listitem.append(button);
            listitem.setAttribute('role', 'none');
            colourlist.append(listitem);
        }, this);

        body = Y.Node.create('<div/>');

        // Set the call back.
        colourlist.delegate('click', this.callback_handler, 'button', this);
        colourlist.delegate('key', this.callback_handler, 'down:13', 'button', this);

        // Set the accessible header text.
        this.set('headerText', M.util.get_string('colourpicker', 'qbassignfeedback_editpd'));

        // Set the body content.
        body.append(colourlist);
        this.set('bodyContent', body);

        COLOURPICKER.superclass.initializer.call(this, config);
    },
    callback_handler: function(e) {
        e.preventDefault();

        var callback = this.get('callback'),
            callbackcontext = this.get('context'),
            bind;

        this.hide();

        // Call the callback with the specified context.
        bind = Y.bind(callback, callbackcontext, e);

        bind();
    }
}, {
    NAME: COLOURPICKER_NAME,
    ATTRS: {
        /**
         * The list of colours this colour picker supports.
         *
         * @attribute colours
         * @type {String: String} (The keys of the array are the colour names and the values are localized strings)
         * @default {}
         */
        colours: {
            value: {}
        },

        /**
         * The function called when a new colour is chosen.
         *
         * @attribute callback
         * @type function
         * @default null
         */
        callback: {
            value: null
        },

        /**
         * The context passed to the callback when a colour is chosen.
         *
         * @attribute context
         * @type Y.Node
         * @default null
         */
        context: {
            value: null
        },

        /**
         * The prefix for the icon image names.
         *
         * @attribute iconprefix
         * @type String
         * @default 'colour_'
         */
        iconprefix: {
            value: 'colour_'
        }
    }
});

M.qbassignfeedback_editpd = M.qbassignfeedback_editpd || {};
M.qbassignfeedback_editpd.colourpicker = COLOURPICKER;
