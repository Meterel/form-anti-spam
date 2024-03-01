# A Simple To Implement And Client Side Bot Blocking Solution For HTML Forms

This is a simple client side solution to stop bots from submitting spam to HTML forms.

It's less secure than a captcha but it's still effective, easier to implement, completely free and frictionless. This can also [work alongside a captcha](https://meterel.github.io/form-anti-spam/examples/captcha.html), stopping the request from being sent in the first place.

This works by making the form unaccessible from JS.

## Small Example

```html
<body>
    <div id="form-container"></div>

    <script type="module">
        import {formAntiSpam} from "https://meterel.github.io/form-anti-spam/v/1.js";

        formAntiSpam({elem:document.getElementById("form-container"),form:`
            <form>
                <input name="one">
                <input name="two">
                <input name="three">
                <button type="submit">Submit</button>
            </form>
        `});
    </script>
</body>
```

## Examples

[Normal Example](https://meterel.github.io/form-anti-spam/examples/normal.html)

[Captcha Example](https://meterel.github.io/form-anti-spam/examples/captcha.html)

## Features

* Uses the [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
* Removes all properties of the form and its elements making it so even if the [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM) gets accessed the form will still be unusable from JS
* Deletes the script that created the form to make it harder to detect

## Cons

* The form will be unaccessible from JS (duh)
* After the form has been created it's style can't be changed
* In CSS the form has to be selected directly and can't be selected like `#outerElement>form`

## Docs

>`formAntiSpam({elem,exclude,form})`
>
>>`elem`
>>
>>The element to which the form will be appended
>
>>`exclude`
>>
>>A string of CSS selectors of elements that will be accessible with JS (this disables the use of the [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM))
>>
>>This is userful if you want to use a captcha like in [this example](https://meterel.github.io/form-anti-spam/examples/captcha.html)
>
>>`form`
>>
>>A string of the form's HTML