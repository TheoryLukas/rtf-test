sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/mvc/Controller",
    "sap/ui/richtexteditor/RichTextEditor"
], function(MessageToast,
	Controller,
	RichTextEditor) {
    'use strict';

    return {
        handleSelect: function(oEvent) {
            var sSelectedKey = oEvent.getParameters().selectedItem.getKey();
            MessageToast.show(sSelectedKey);
        }
    };
});
