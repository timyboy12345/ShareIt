# ✉️ ShareIt ✉️
With this package, can easily add buttons to share to different social platforms. You can create buttons for all popular platforms with one easy javascript call, or add data attributes to remove custom javascript altogether.

This package uses FontAwesome by default for the icons, and uses Bootstrap button classes, but you're free to edit these variables in the `src/options.json` file and rebuilding the file.

## Examples
To see some examples, head over to [the ShareIt examples page](https://timyboy12345.github.io/ShareIt/)

## Using this package
The rating.js file is very easy to use, and can run with just a few lines of code. For examples, you can look in the `examples`  folder.

### With data attributes
To add sharing to an element using data attributes, use the code like this:
```
<div data-shareit="twitter whatsapp" data-sharesize="small" 
     data-sharetext="This is a test share button"></div>
```

This code will add small Whatsapp and Twitter share buttons to the element with the message 'This is a test share button'.

### With jQuery
To add sharing to any element using the jQuery implementation, use the following code:
```
<!-- The element to add the review to -->
<div id="share"></div>

<!-- The script to add reviewing to the div, with a click event handler -->
$("#share").share({
    "media": [
        "facebook",
        "pinterest",
        "twitter"
    ],
    "message": "This is an awesome page!"
})
```
This code will add normal sized share buttons to any element matching the jQuery selector (elements with the ID 'share' in this example), for Facebook, Pinterest and Twitter with the message 'This is an awesome page!'.

## Options
To customize the package, you can add options to your `.rating()` call in JSON format, like so:
```
$("#div").share({
    option: value
});
```

To use the options in an element as a data-attribute, use the name specified in the `Data attribute` column, like the examples above or on the [Examples page](https://timyboy12345.github.io/ShareIt)

The following options are available:

| Option        | Type            | Data attribute   | Explanation           |
|---------------|-----------------|------------------|-----------------------|
| media         | array or string | data-sharemedia  | All platforms to enable sharing to |
| message       | string          | data-sharemessage| The message to share |
| title         | string          | data-sharetitle  | If usable, the title of the post |
| size          | string          | data-sharesize   | The size of the buttons, null, small or large |
| successMessage| string          | data-sharesuccess| The message to display if sharing was succesfull, used with the copy share |
| errorMessage  | string          | data-shareerror  | The error message to display if sharing went couldn't be executed, used with the copy share |
| url           | string          | data-shareurl    | The url to share, defaults to the current page url |

### Some more explanations
#### media
In the media attribute, you can put all social media platforms you want your users to be able to share to. If used as an attribute (data-sharemedia), you should use a string like `facebook twitter pintrest`. If using this as an option in the jQuery function, you should provide an array like so: `['facebook', 'twitter', 'pintrest']`.

## Requirements
This package uses FontAwesome by default for the icons, but it is possible to swap these icons in settings.json.

This package can use jQuery, but this isn't needed. If jQuery is not detected on a page, the extension isn't added and you can use data attributes to enable sharing.

## Developing
If you wish to develop with this package, you also need to download all packages with `npm i`, which requires the NPM package manager.

This package uses webpack to package the rating.js file. To customize this package, run the following commands:

1. Clone/Fork this repository.
2. Run `npm i` to install all node packages.
3. Run `npm run watch` to start watching changes to the `src/shareit.js` file.
4. Change the `shareit.js` file in `/src` to have webpack automatically rebuild the file in `/dist`. Never change the `dist/shareit.js` file yourself, since these changes will be overwritten by webpack.
5. When you're done, use `npm run prod` to build the production-ready version of rating.js
