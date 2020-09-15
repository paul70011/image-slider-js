class ImageSlider{
    constructor(sliderContainer) {
        this.sliderContainer = sliderContainer
        this.images = [...sliderContainer.querySelectorAll("img")]

        this.getTallestImage()

        this.setPositionOfImages()
        this.tallestImage.classList.add("height-reference")

        this.createControls()

        this.images.forEach(image => { this.hideImage(image) })
        this.setActiveImageAtIndex(0)
    }

    getTallestImage(){
        this.tallestImage = this.images[0]
        for (let i = 1; i < this.images.length; i++){
            if (this.images[i].clientHeight > this.tallestImage.clientHeight){
                this.tallestImage = this.images[i]
            }
        }
    }

    setPositionOfImages(){
        this.images.forEach(image => {
            if (image != this.tallestImage){
                image.style.position = "absolute"
            }
        })
    }

    hideImage(image){
        image.classList.add("hidden")
    }

    showImage(image){
        image.classList.remove("hidden")
    }

    activateOpacityTransition(){
        if (!this.opacityTransitionActivated){
            this.images.forEach(image => { image.classList.add("opacity-transition") })
        }
    }

    setActiveImageAtIndex(index){
        if (this.currentActiveImageIndex !== undefined){
            this.images[this.currentActiveImageIndex].classList.add("hidden")
            this.indicators[this.currentActiveImageIndex].classList.remove("active")
        }

        if (index < 0){
            index = this.images.length - 1
        }else if (index >= this.images.length){
            index = 0
        }

        this.images[index].classList.remove("hidden")
        this.indicators[index].classList.add("active")
        this.currentActiveImageIndex = index
    }

    createControls(){
        let controlsContainer = document.createElement("div")
        controlsContainer.classList.add("controls")

        let controlsBack = document.createElement("i")
        controlsBack.classList.add("fas", "fa-angle-left", "back")
        controlsContainer.appendChild(controlsBack)
        controlsBack.addEventListener("click", () => {
            this.activateOpacityTransition()
            this.setActiveImageAtIndex(this.currentActiveImageIndex - 1)
        })

        let controlsForward = document.createElement("i")
        controlsForward.classList.add("fas", "fa-angle-right", "forward")
        controlsContainer.appendChild(controlsForward)
        controlsForward.addEventListener("click", () => {
            this.activateOpacityTransition()
            this.setActiveImageAtIndex(this.currentActiveImageIndex + 1)
        })

        let indicatorContainer = document.createElement("div")
        indicatorContainer.classList.add("indicators")
        this.indicators = []
        for (let i = 0; i < this.images.length; i++){
            let indicator = document.createElement("div")
            indicator.classList.add("indicator")
            indicatorContainer.appendChild(indicator)
            this.indicators.push(indicator)
            indicator.addEventListener("click", () => {
                this.activateOpacityTransition()
                this.setActiveImageAtIndex(i)
            })
        }
        controlsContainer.appendChild(indicatorContainer)

        this.sliderContainer.appendChild(controlsContainer)
    }

    static initAllImageSliders(){
        const sliderContainers = document.querySelectorAll(".image-slider")
        let imageSliders = []
        sliderContainers.forEach(sliderContainer => {
            imageSliders.push(new ImageSlider(sliderContainer))
        })
        return imageSliders
    }
}