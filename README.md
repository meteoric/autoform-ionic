# [Ionic](http://ionicframework.com/) theme for [Autoform](https://github.com/aldeed/meteor-autoform)

Meteor Autoform templates styled for Ionic.

This package depends on [aldeed:autoform](https://atmospherejs.com/aldeed/autoform)

## WIP

This project has not yet been published to atmosphere.

## Features

- `quickForm` components that generate perfect [Ionic forms](http://ionicframework.com/docs/components/#forms)
- Custom [toggle](http://ionicframework.com/docs/components/#toggle) input type
- Support for multiple label types:
  - [Inline Labels](http://ionicframework.com/docs/components/#forms-inline-labels) (default)
  - [Placeholder Labels](http://ionicframework.com/docs/components/#forms-placeholder-labels) ('label-type': 'placeholder', placeholder: 'Label Here')
  - [Stacked Labels](http://ionicframework.com/docs/components/#forms-stacked-labels) ('label-type': 'stacked')
  - [Floating Labels](http://ionicframework.com/docs/components/#forms-floating-labels) ('label-type': 'floating', placeholder: 'Label Here')

## Installation

```
meteor add nickw:autoform-ionic
```

## Bring Your Own Ionic

Adding this package with `meteor add nickw:autoform-ionic` does not add any other packages providing Ionic. This is to let you choose the flavour you prefer, being it compiled, less, sass, or from CDN!

At the moment it is up to date with Ionic 2.0.0.

## Usage

You can either set the theme globally:

```
AutoForm.setDefaultTemplate('ionic');
```

Or on a per-form basis:

```
{{> quickForm schema=mySchema id="myForm" template="ionic"}}
```
