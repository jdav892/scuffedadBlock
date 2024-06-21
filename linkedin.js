const removeAds = () => {
    //Get all 'span' elements on the page
    const spans = document.getElementsByTagName("span");

    for(let i = 0; i < spans.length; i++){
        //check if they contain Suggested
        if(spans[i].innerHTML === 'Suggested'){
            //get the div that wraps the ad
            let card = spans[i].closest(".feed-shared-update-v2");
            //if class changed get parent
            if (card === null) {
            //could also be card
                const j = 0;
                card = spans[i];
                while(j < 6){
                    card = card.parentNode;
                    j++;
                }
            }
            //change css display to none to hide ad
            card.setAttribute("style", "display: none !important;");
        }
        
    }
}

removeAds();

setInterval(() =>{
    removeAds;
}, 100)