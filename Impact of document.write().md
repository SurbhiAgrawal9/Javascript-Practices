# Document Manipulation and Side Effects of document.write()

# Explaination
The reason you're only seeing "javascript" and "react" printed on the page after clicking the button is because of the use of document.write() in your code.
When you use document.write() after the document has been fully loaded, it replaces the entire content of the document with what you specify. In your case, after creating the h3 element and appending it to the body, you are calling document.write("javascript") and document.write("react"), which replaces the entire content of the document with these strings, thus removing the h3 element you created.
To fix this issue and ensure that the h3 element is displayed along with the text "javascript" and "react", you should remove the document.write() calls.
Here's the code:


```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- <h1>this is title</h1>
    <h2 class="test"></h2> -->

    <button id="btn" onclick="demo()">click you</button>

    <script>

        let BTN = document.querySelector("#btn")

        function demo() {
            BTN.innerHTML = 'you click me';
            let H3 = document.createElement('h3');
            console.log(H3)
            H3.textContent = 'this is h3 tag';
            document.body.appendChild(H3);

         let H4 = document.createElement('h4');
            H4.textContent = Date()
            console.log(H4)
            document.body.appendChild(H4)  //  for print date 
   
            document.write("javascript")
            document.write("react")

        }
      


    </script>
</body>

</html>
```

#output

```js
javascriptreact
```
