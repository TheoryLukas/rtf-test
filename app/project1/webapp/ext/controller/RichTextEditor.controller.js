sap.ui.define([
	"sap/ui/core/mvc/ControllerExtension",
	"sap/ui/richtexteditor/RichTextEditor"
], function (ControllerExtension,
	RichTextEditor) {
	'use strict';

	return ControllerExtension.extend('project1.ext.controller.RichTextEditor', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf project1.ext.controller.RichTextEditor
             */
			onInit: function (oObj) {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oExtentionAPI = this.base.getExtensionAPI();
				var oRTE = oExtentionAPI.byId("fe::CustomSubSection::RichTextEditor--idVerticalLayout");
				//var oRTE =  oExtentionAPI.extension.project1.ext.controller.RichTextEditor.getView();
				oRTE.addContent(new RichTextEditor());

				this.byId("idVerticalLayout");
			}
		}
	});
});
