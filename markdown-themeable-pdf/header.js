/**
 * Your markdown-themeable-pdf custom header.
 * After you have made any changes you need to reload or restart atom.
 *
 * The default file can be found in the folder ~/.atom/packages/markdown-themeable-pdf/templates
 *
 * @returns {{height: string, contents: string}}
 */
module.exports = function () {
    return {
        height: '2cm',
        contents: '<div style="text-align: right;"><span style="color: #EC4634; font-size: 120%; text-transform: uppercase;">Attention Donjon</span> <span>Alpha 0.0.1</span></div>'
    };
};
