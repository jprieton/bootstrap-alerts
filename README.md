Bootstrap Alerts v1.0.1
===========

A jQuery plugin for displaying Bootstrap alerts.

Usage
---

```javascript
$('#alert-container').bootstrapAlert({
    type: 'success', // Required, values: 'success', 'info', 'warning' or 'danger'
    dismissible: true, // Optional, default: true 
    title: 'My Title', // Optional, default: ''
    message: 'My message.',  // Required,
    clear: true // Optional, Clears the container, default: true 
});
```

License
---

Licensed under the [MIT License](http://opensource.org/licenses/mit-license.html)
