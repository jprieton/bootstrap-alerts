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

###type
required, `success`, `info`, `warning` or `danger`

###dismissible
optional, default: `true`

###title
optional, default: `null`

###message
required

###clear
optional, default: `true`
