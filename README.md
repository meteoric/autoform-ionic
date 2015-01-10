![](http://f.cl.ly/items/391y4708420P0H001k1G/meteoric.png)

# autoform-ionic

Meteor Autoform ([aldeed:autoform](https://atmospherejs.com/aldeed/autoform)) templates styled for [Ionic](http://ionicframework.com/).

## Features

- `quickForm` components that generate perfect [Ionic forms](http://ionicframework.com/docs/components/#forms)
- Custom [toggle](http://ionicframework.com/docs/components/#toggle) input type
- Support for multiple label types:
  - [Inline Labels](http://ionicframework.com/docs/components/#forms-inline-labels) (default)
  - [Placeholder Labels](http://ionicframework.com/docs/components/#forms-placeholder-labels) ('label-type': 'placeholder', placeholder: 'Label Here')
  - [Stacked Labels](http://ionicframework.com/docs/components/#forms-stacked-labels) ('label-type': 'stacked')
  - [Floating Labels](http://ionicframework.com/docs/components/#forms-floating-labels) ('label-type': 'floating', placeholder: 'Label Here')

## Examples

### Contacts App
A simple CRUD app to manage contacts.

[Demo](http://meteoric-contacts.meteor.com) |  [Code](https://github.com/meteoric/contacts)

### Meteor Hunt
A [Product Hunt](http://producthunt.com) clone built in Meteor Ionic. (In Progress)

[Demo](http://meteorhunt.meteor.com/) |  [Code](https://github.com/meteoric/meteorhunt)

## Installation

```
meteor add meteoric:autoform-ionic
```

## Bring Your Own Ionic

Adding this package with `meteor add meteoric:autoform-ionic` does not add any other packages providing Ionic. This is to let you choose the flavour you prefer, being it compiled, less, sass, or from CDN!

We recommend including our [meteoric:ionic-sass](https://github.com/meteoric/ionic-sass) and [meteoric:ionicons-sass](https://github.com/meteoric/ionicons-sass) packages.

## Usage

You can either set the theme globally:

```
AutoForm.setDefaultTemplate('ionic');
```

Or on a per-form basis:

```
{{> quickForm schema=mySchema id="myForm" template="ionic"}}
```

## License
[MIT License](https://github.com/meteoric/autoform-ionic/blob/master/LICENSE)
