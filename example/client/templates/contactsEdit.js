AutoForm.hooks({
  'contacts-edit-form': {
    onSuccess: function (operation, result, template) {
      console.log('operation', operation);
      console.log('result', result);
      console.log('template', template);
      // Router.go();
    },

    onError: function(operation, error, template) {
      alert(error);
    }
  }
});
