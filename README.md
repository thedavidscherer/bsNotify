# bsNotify

bsNotify is a configurable interface for working with Boostrap 3 alerts for jQuery. The alert syntax from http://getbootstrap.com/components/#alerts is fully implemented.

## Options

Name | Default | Description
:----|:-------:|------------
type    | `error` | An error type. Each type has a corresponding Botstrap `alert-*className*` defined in `typeClasses`. This can be completely overridden with your own values and mappings.
code    | **none** | This is displayed in **Bold** in the alert
message | **none** | The message for this alert
prepend | `true` | Whether or not to prepend to the collection it was called on, default is to prepend. If you want to append, set this to false
attachTo    | `collection` | Where the alert will be placed, by default this is the collection bsNotify was called on, you can pass a jQuery object, selector, or any other input valid for `$(...)`
dismissable | `true` | Whether or not to add the `.alert-dismissable` class and close button
typeClasses | `hash` | A hash that maps the types you plan to use in `type` to a Boostrap `alert-*className*`. This can be completely overridden with your own values and mappings.

### typeClasses

The default mappings are as follows:

Type    |   Class
--------|---------
success |   alert-success
info    |   alert-info
warning |   alert-warning
error   |   alert-danger

## Examples

### Ex 1 - Standard Usage

```javascript

$(function(){
    
    $('#errorDiv').bsNotify({
        type: 'error',
        code: 'Error 404',
        message: 'Page Not Found'
    });

});

```

### Ex 2 - Disable Dismissable

```javascript

$(function(){
    
    $('#errorDiv').bsNotify({
        type: 'error',
        code: 'Error 404',
        message: 'Page Not Found',
        dismissable: false
    });

});

```

### Ex 3 - Disable Animation (fade)

```javascript

$(function(){
    
    $('#errorDiv').bsNotify({
        type: 'error',
        code: 'Error 404',
        message: 'Page Not Found',
        animate: false
    });

});

```

### Ex 4 - Append to collection

Override the default behavior and place the alert at the bottom of the container.

```javascript

$(function(){
    
    $('#errorDiv').bsNotify({
        type: 'error',
        code: 'Error 404',
        message: 'Page Not Found',
        prepend: false
    });

});

```

### Ex 5 - Add to some other element

Instead of appending/prepending to `#errorDiv`, insert the alert into another element, like `body`

```javascript

$(function(){
    
    $('#errorDiv').bsNotify({
        type: 'error',
        code: 'Error 404',
        message: 'Page Not Found',
        attachTo: 'body' // can be any valid jQuery selector
    });

});

```

### Ex 6 - Custom error types and classes

Normally an alert looks like

    <div class="alert alert-info alert-dismissable"> ... </div>

The example below would produce something like the following

    <div class="alert my-custom-class alert-dismissable"> ... </div>

```javascript

$(function(){
    
    $('#errorDiv').bsNotify({
        type: 'type1',
        code: 'Error 404',
        message: 'Page Not Found',
        typeClasses: {
            type1: 'my-custom-class',
            type2: 'another-custom-class'
        }
    });

});

```

# Customized Bootstrap

This plugin was written to be resilient to customized versions of Bootstrap, though I'm sure there are edge cases. You may need to tweak this plugin to suit those instances where you have very heavily modified bootstrap beyond renamming classes and/or changing some colors. I can't help you with this.

If you have customized your copy of Bootstrap at all, and are experiencing issues, try testing the plugin with a Vanilla copy of Bootstrap.

# Bootstrap 2

The alerts in Bootstrap 2 are fairly similar to those in Bootstrap 3, however there is no gurantee this plugin is perfectly backwards compatible as the two versions of Bootstrap are not compatible. While it is certainly possible to re-write or modify the plugin to support Bootstrap 2, I cannot do this for you. I also encourage you to move to Bootstrap 3, it's nicer.

# License

Copyright 2014 David Scherer

Licensed under the GPL 2.0 License. http://opensource.org/licenses/GPL-2.0