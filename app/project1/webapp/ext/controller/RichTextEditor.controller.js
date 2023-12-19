sap.ui.define([
	"sap/ui/core/mvc/ControllerExtension",
	"sap/ui/richtexteditor/RichTextEditor"
], function (
	ControllerExtension,
	RichTextEditor) {
	'use strict';

	// RichTextEditor original state
	var oRichTextEditor = new RichTextEditor("myRTE", {
		editorType: "TinyMCE",
		value: " ",
		editable: false,
		required: true,
		customToolbar: true
	});

	return ControllerExtension.extend('project1.ext.controller.RichTextEditor', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements

		metadata: {

		},
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf project1.ext.controller.RichTextEditor
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
			},
			onPageReady: function () {
				var oExtentionAPI = this.base.getExtensionAPI();
				var oRTE = oExtentionAPI.byId("fe::CustomSubSection::RichTextEditor--idVerticalLayout");
				var value = oExtentionAPI.editFlow.getView().getBindingContext().getObject().bar;
				oRichTextEditor.mProperties.value = value;
				oRTE.addContent(oRichTextEditor);
			},
			editFlow: {
				onAfterEdit: function () {
					var oExtentionAPI = this.base.getExtensionAPI();
					var oRTE = oExtentionAPI.byId("fe::CustomSubSection::RichTextEditor--idVerticalLayout");
					oRichTextEditor.mProperties.editable = true;
					oRTE.addContent(oRichTextEditor);
				},
				onBeforeSave: function () {
					var oExtentionAPI = this.base.getExtensionAPI();
					var oRTE = oExtentionAPI.byId("fe::CustomSubSection::RichTextEditor--idVerticalLayout");
					var content = oRTE.getContent()[0].mProperties.value;
					oRichTextEditor.mProperties.editable = false;
					oRTE.addContent(oRichTextEditor);
				}
			}
		}
	});
});

