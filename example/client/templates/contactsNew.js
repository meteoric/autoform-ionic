AutoForm.hooks({
  'contacts-new-form': {
    onSuccess: function (operation, result, template) {
      Router.go('contacts.show', {_id: result});
    },

    onError: function(operation, error, template) {
      alert(error);
    }
  }
});
