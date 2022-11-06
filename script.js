const button = {

    init: function(){
        button.addLikeEvents();
    }

    addLikeEvents: function() {
        const buttonElement = document.querySelectorAll(".loading_circle");
        for (const buttonColor of buttonElement)
        buttonColor.addEventListener('click', button.handleClickButton);
    }

    handleClickButton: function() {
        const buttonRainbow = document.querySelector(".loading")
    }

    document.addEventListener('DOMContentLoaded', button.init);
};