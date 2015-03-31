jQuery Bootstrap Alerts plugin
===========

A jQuery plugin for displaying Bootstrap alerts.

Usage
---

```javascript

$('#alert-container').bootstrapAlert({
      type: 'success',
      dismissible: true,
      title: 'My Title',
      message: 'My message.',
      clear: true
});

```

Options
---

###type *required*
 Type of Bootstrap alert, ie: *`success`, `info`, `warning` or `danger`*

###dismissible
Enable the dismissible alerts functionality
*optional, default: `true`*

###title
Title of alert box
*optional, default: `null`*

###message
Message in alert box
*required*

###clear
Clear the alert container.
*optional, default: `true`*