README
=======
# meteor-boilerplate
Boilerplate app for meteor

### General app structure

This shows basic app structure for a Meteor project. The important parts:
- `server` folder contains server only code
- `client` folder contains client only code
- `lib` contains code used on both the client and the server

We keep collections in the `lib/collections` folder.

All publications go in the `server/publications` file.

We subscribe to publications on the router or template level. Most subscriptions will happen in `iron:router` `waitOn` blocks.

### Packages used

You can see the packages used in the file `.meteor/packages`.

The current packages used are:
```
// meteor
meteor-platform

// important packages
iron:router // the router most projects use. flow:router is an alternative nowadays
aldeed:collection2 // gives structure to your collections (comes with simple-schema)
dburles:collection-helpers // adds helpers to collections
underscore // utility helpers

alanning:roles // adds roles to user accounts (e.g. admin, ...)
aldeed:autoform // not essential. makes creating forms quick, but can take some time to get to grips with

// for debugging. use ctrl-M to launch these when your app is running. these don't run in production
msavin:mongol
msavin:jetsetter

// ui - remove depending on the project
less
nemo64:bootstrap
fortawesome:fontawesome

// accounts (this needs to be updated. look at the useraccounts:core package for accounts stuff
accounts-password
accounts-ui
useraccounts:bootstrap

// other stuff that might be helpful
mrt:planet
yogiben:admin
yogiben:helpers // can remove
multiply:iron-router-progress
zimme:iron-router-active
```
