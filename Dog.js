class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    
    // setMatchStatus(bool) {
    //     this.hasBeenLiked = bool
    //     this.hasBeenSwiped = true
    // }
    
    getDogHtml(){
        const {name, avatar, age, bio, hasBeenLiked, hasBeenSwiped} = this
        return`
            <div id="imageContainer">
                <img class="dogImage" src="${avatar}">
                ${
                    hasBeenSwiped
                      ? this.showNopedTagHtml()
                      : hasBeenLiked
                      ? this.showLikedTagHtml()
                      : ""
                  }
                <p class="nameAndAge">${name}, ${age}</p>
                <p class="bio">${bio}</p>
           
            </div>
        `
    }
    
    showLikedTagHtml(){
        return `<img class="tag" src="images/liked.png">`
    }
    
    showNopedTagHtml(){
        return `<img class="tag" src="images/noped.png">`
    }
}

export default Dog