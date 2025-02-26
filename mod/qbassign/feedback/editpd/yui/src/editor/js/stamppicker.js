var STAMPPICKER_NAME = "Colourpicker",
    STAMPPICKER;

/**
 * Provides an in browser PDF editor.
 *
 * @module moodle-qbassignfeedback_editpd-editor
 */

/**
 * This is a drop down list of stamps.
 *
 * @namespace M.qbassignfeedback_editpd
 * @class stamppicker
 * @constructor
 * @extends M.qbassignfeedback_editpd.dropdown
 */
STAMPPICKER = function(config) {
    STAMPPICKER.superclass.constructor.apply(this, [config]);
};

Y.extend(STAMPPICKER, M.qbassignfeedback_editpd.dropdown, {

    /**
     * Initialise the menu.
     *
     * @method initializer
     * @return void
     */
    initializer: function(config) {
        var stamplist = Y.Node.create('<ul role="menu" class="qbassignfeedback_editpd_menu"/>');

        // Build a list of stamped buttons.
        Y.each(this.get('stamps'), function(stamp) {
            var button, listitem, title;

            title = M.util.get_string('stamp', 'qbassignfeedback_editpd');
            button = Y.Node.create('<button><img height="16" width="16" alt="' + title + '" src="' + stamp + '"/></button>');
            button.setAttribute('data-stamp', stamp);
            button.setAttribute('role', 'menuitem');
            button.setStyle('backgroundImage', 'none');
            listitem = Y.Node.create('<li/>');
            listitem.append(button);
            listitem.setAttribute('role', 'none');
            stamplist.append(listitem);
        }, this);


        // Set the call back.
        stamplist.delegate('click', this.callback_handler, 'button', this);
        stamplist.delegate('key', this.callback_handler, 'down:13', 'button', this);

        // Set the accessible header text.
        this.set('headerText', M.util.get_string('stamppicker', 'qbassignfeedback_editpd'));

        // Set the body content.
        this.set('bodyContent', stamplist);

        STAMPPICKER.superclass.initializer.call(this, config);
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
    NAME: STAMPPICKER_NAME,
    ATTRS: {
        /**
         * The list of stamps this stamp picker supports.
         *
         * @attribute stamps
         * @type String[] - the stamp filenames.
         * @default {}
         */
        stamps: {
            value: []
        },

        /**
         * The function called when a new stamp is chosen.
         *
         * @attribute callback
         * @type function
         * @default null
         */
        callback: {
            value: null
        },

        /**
         * The context passed to the callback when a stamp is chosen.
         *
         * @attribute context
         * @type Y.Node
         * @default null
         */
        context: {
            value: null
        }
    }
});

M.qbassignfeedback_editpd = M.qbassignfeedback_editpd || {};
M.qbassignfeedback_editpd.stamppicker = STAMPPICKER;
