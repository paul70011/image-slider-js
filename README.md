# image-slider-js
Simple image slider for javascript
# Requirements
- https://fontawesome.com/
# Usage
1. Include `imageSlider.css` and `ImageSlider.js`
    ```html
    <head>
      ...
      <link rel="stylesheet" href="imageSlider.css">
      <script src="ImageSlider.js"></script>
      ...
    </head>
    ```
1. Create at leas one `div` with the class `image-slider` and add your images as `<img>` tags
    ```html
    <div class="image-slider">
      <img src="img1.jpg">
      <img src="img2.jpg">
      <img src="img3.jpg">
    </div>
    ```
1. Initialize image sliders individually or collectively
    ##### Individually (add id to `<div>`)
    ```javascript
    const imageSlider1 = document.querySelector("#imageSlider1")
    const imageSlider = new ImageSlider(imageSlider1)
    ```
    ##### Collectively
    ```javascript
    const imageSliders = ImageSlider.initAllImageSliders()
    ```
