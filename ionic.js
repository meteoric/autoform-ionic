/*
* Template helpers for "ionic" template
*/

Template['quickForm_ionic'].helpers({
  submitButtonAtts: function bsQuickFormSubmitButtonAtts() {
    var qfAtts = this.atts;
    var atts = {};
    if (typeof qfAtts.buttonClasses === "string") {
      atts['class'] = qfAtts.buttonClasses;
    } else {
      atts['class'] = 'button button-positive button-block';
    }
    return atts;
  }
});

Template['afFormGroup_ionic'].helpers({
  skipLabel: function bsFormGroupSkipLabel() {
    var self = this;
    var skipLabelTypes = [
      "checkbox", "checkbox-group", "boolean-checkbox",
      "radio", "radio-group", "radio-group-inline", "boolean-radio", "boolean-radio-group",
      "select", "boolean-select", "select-multiple",
      "toggle"
    ];
    var type = AutoForm.getInputType(self.afFieldInputAtts);
    return (self.skipLabel || _.contains(skipLabelTypes, type));
  },
  ionicFieldLabelAtts: function ionicFieldLabelAtts() {
    var atts = _.clone(this.afFieldLabelAtts);
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "item item-input item-stacked-label");
    return atts;
  }
});

_.each([
  "afSelect_ionic",
  "afBooleanSelect_ionic",
  "afSelectMultiple_ionic",
  "afTextarea_ionic",
  "afInputText_ionic",
  "afInputPassword_ionic",
  "afInputDateTime_ionic",
  "afInputDateTimeLocal_ionic",
  "afInputDate_ionic",
  "afInputMonth_ionic",
  "afInputTime_ionic",
  "afInputWeek_ionic",
  "afInputNumber_ionic",
  "afInputEmail_ionic",
  "afInputUrl_ionic",
  "afInputSearch_ionic",
  "afInputTel_ionic",
  "afInputColor_ionic"
  ], function (tmplName) {
  Template[tmplName].helpers({
    atts: function addFormControlAtts() {
      var atts = _.clone(this.atts);
      return atts;
    }
  });
});

_.each([
  "afInputButton_ionic",
  "afInputSubmit_ionic",
  "afInputReset_ionic",
  ], function (tmplName) {
  Template[tmplName].helpers({
    atts: function addFormControlAtts() {
      var atts = _.clone(this.atts);
      // Add bootstrap class
      atts = AutoForm.Utility.addClass(atts, "button");
      return atts;
    }
  });
});

Template["afRadio_ionic"].helpers({
  atts: function selectedAttsAdjust() {
    var atts = _.clone(this.atts);
    if (this.selected) {
      atts.checked = "";
    }
    return atts;
  }
});

_.each([
  "afCheckboxGroup_ionic",
  "afRadioGroup_ionic",
  "afCheckboxGroupInline_ionic",
  "afRadioGroupInline_ionic"
  ], function (tmplName) {
  Template[tmplName].helpers({
    atts: function selectedAttsAdjust() {
      var atts = _.clone(this.atts);
      if (this.selected) {
        atts.checked = "";
      }
      // remove data-schema-key attribute because we put it
      // on the entire group
      delete atts["data-schema-key"];
      return atts;
    },
    dsk: function dsk() {
      return {
        "data-schema-key": this.atts["data-schema-key"]
      }
    }
  });
});

var selectHelpers = {
  optionAtts: function afSelectOptionAtts() {
    var item = this;
    var atts = {
      value: item.value
    };
    if (item.selected) {
      atts.selected = "";
    }
    return atts;
  }
};
Template["afSelect_ionic"].helpers(selectHelpers);
Template["afSelectMultiple_ionic"].helpers(selectHelpers);
Template["afBooleanSelect_ionic"].helpers(selectHelpers);

Template["afBooleanRadioGroup_ionic"].helpers({
  falseAtts: function falseAtts() {
    var atts = _.omit(this.atts, 'trueLabel', 'falseLabel', 'data-schema-key');
    if (this.value === false) {
      atts.checked = "";
    }
    return atts;
  },
  trueAtts: function trueAtts() {
    var atts = _.omit(this.atts, 'trueLabel', 'falseLabel', 'data-schema-key');
    if (this.value === true) {
      atts.checked = "";
    }
    return atts;
  },
  dsk: function () {
    return {'data-schema-key': this.atts['data-schema-key']};
  }
});


// Custom Ionic input types:

AutoForm.addInputType('toggle', {
  template: 'afToggle_ionic',
  valueOut: function () {
    return !!this.is(":checked");
  }
});
