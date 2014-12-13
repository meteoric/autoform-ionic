# Ionic theme for [Autoform](https://github.com/aldeed/meteor-autoform)

Meteor Autoform templates styled for Ionic.

This package depends on [aldeed:autoform](https://atmospherejs.com/aldeed/autoform)

## Bring Your Own Ionic

Adding this package with `meteor add useraccounts:ionic` does not add any other packages providing Ionic. This is to let you choose the flavour you prefer, being it compiled, less, sass, or from CDN!

At the moment it is up to date with Ionic 2.0.0.

## Usage

```
AutoForm.setDefaultTemplate('ionic');
```

or:

```
{{> quickForm schema=mySchema id="myForm" template="ionic"}}
```
