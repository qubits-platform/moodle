// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Provides an in browser PDF editor.
 *
 * @module moodle-qbassignfeedback_editpd-editor
 */

/**
 * Class representing a line.
 *
 * @namespace M.qbassignfeedback_editpd
 * @class annotationline
 * @extends M.qbassignfeedback_editpd.annotation
 */
var ANNOTATIONLINE = function(config) {
    ANNOTATIONLINE.superclass.constructor.apply(this, [config]);
};

ANNOTATIONLINE.NAME = "annotationline";
ANNOTATIONLINE.ATTRS = {};

Y.extend(ANNOTATIONLINE, M.qbassignfeedback_editpd.annotation, {
    /**
     * Draw a line annotation
     * @protected
     * @method draw
     * @return M.qbassignfeedback_editpd.drawable
     */
    draw: function() {
        var drawable,
            shape;

        drawable = new M.qbassignfeedback_editpd.drawable(this.editor);

        shape = this.editor.graphic.addShape({
        type: Y.Path,
            fill: false,
            stroke: {
                weight: STROKEWEIGHT,
                color: ANNOTATIONCOLOUR[this.colour]
            }
        });

        shape.moveTo(this.x, this.y);
        shape.lineTo(this.endx, this.endy);
        shape.end();
        drawable.shapes.push(shape);
        this.drawable = drawable;

        return ANNOTATIONLINE.superclass.draw.apply(this);
    },

    /**
     * Draw the in progress edit.
     *
     * @public
     * @method draw_current_edit
     * @param M.qbassignfeedback_editpd.edit edit
     */
    draw_current_edit: function(edit) {
        var drawable = new M.qbassignfeedback_editpd.drawable(this.editor),
            shape;

        shape = this.editor.graphic.addShape({
           type: Y.Path,
            fill: false,
            stroke: {
                weight: STROKEWEIGHT,
                color: ANNOTATIONCOLOUR[edit.annotationcolour]
            }
        });

        shape.moveTo(edit.start.x, edit.start.y);
        shape.lineTo(edit.end.x, edit.end.y);
        shape.end();

        drawable.shapes.push(shape);

        return drawable;
    },

    /**
     * Promote the current edit to a real annotation.
     *
     * @public
     * @method init_from_edit
     * @param M.qbassignfeedback_editpd.edit edit
     * @return bool true if line bound is more than min width/height, else false.
     */
    init_from_edit: function(edit) {
        this.gradeid = this.editor.get('gradeid');
        this.pageno = this.editor.currentpage;
        this.x = edit.start.x;
        this.y = edit.start.y;
        this.endx = edit.end.x;
        this.endy = edit.end.y;
        this.colour = edit.annotationcolour;
        this.path = '';

        return !(((this.endx - this.x) === 0) && ((this.endy - this.y) === 0));
    }

});

M.qbassignfeedback_editpd = M.qbassignfeedback_editpd || {};
M.qbassignfeedback_editpd.annotationline = ANNOTATIONLINE;
