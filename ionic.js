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
      "checkbox", "checkbox-group", "boolean-checkbox", "select-checkbox",
      "select-radio", "select-radio-group", "select-radio-group-inline", "boolean-radio", "boolean-radio-group",
      "select", "boolean-select", "select-multiple",
      "toggle"
    ];
    var type = AutoForm.getInputType(self.afFieldInputAtts);
    return (self.skipLabel || _.contains(skipLabelTypes, type));
  },
  ionicFieldLabelAtts: function ionicFieldLabelAtts() {
    var atts = _.clone(this.afFieldLabelAtts);
    var classes = ['item', 'item-input'];

    if (atts.type === 'placeholder') {
      atts.placeholderOnly = true;
    } else if (atts.type === 'stacked') {
      classes.push('item-stacked-label');
    }
    else if (atts.type === 'floating') {
      classes.push('item-floating-label');
    }

    atts = AutoForm.Utility.addClass(atts, classes.join(' '));
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

AutoForm.addInputType("toggle", {
  template: "afToggle",
  valueOut: function () {
    return !!this.is(":checked");
  },
  valueConverters: {
    "boolean": function (val) {
      if (val === "true") {
        return true;
      } else if (val === "false") {
        return false;
      }
      return val;
    },
    "string": function (val) {
      if (val === true) {
        return "TRUE";
      } else if (val === false) {
        return "FALSE";
      }
      return val;
    },
    "stringArray": function (val) {
      if (val === true) {
        return ["TRUE"];
      } else if (val === false) {
        return ["FALSE"];
      }
      return val;
    },
    "number": function (val) {
      if (val === true) {
        return 1;
      } else if (val === false) {
        return 0;
      }
      return val;
    },
    "numberArray": function (val) {
      if (val === true) {
        return [1];
      } else if (val === false) {
        return [0];
      }
      return val;
    }
  },
  contextAdjust: function (context) {
    if (context.value === true) {
      context.atts.checked = "";
    }
    //don't add required attribute to checkboxes because some browsers assume that to mean that it must be checked, which is not what we mean by "required"
    delete context.atts.required;
    return context;
  }
});

// Floating Labels: http://ionicframework.com/docs/components/#forms-floating-labels
// 'label-type': 'floating'
Template.afFormGroup_ionic.rendered = function () {
  var template = this;
  var isFloating = template.$('.item-floating-label').length;

  if (isFloating) {
    template.$('input, textarea').on('keyup.item-floating-label', function (event) {
      if ($(this).val() !== '') {
        template.$('.item-floating-label .input-label').addClass('has-input');
      } else {
        template.$('.item-floating-label .input-label').removeClass('has-input');
      }
    });

    template.$('input').trigger('keydown.item-floating-label');
  }
};

Template.afFormGroup_ionic.destroyed = function () {
  var template = this;
  template.$('input').off('keyup.item-floating-label');
};
