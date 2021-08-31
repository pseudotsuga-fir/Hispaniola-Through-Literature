window.onload = function () {


    var mymap = L.map('mapid').setView([19.021416, -71.565749], 8)

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'andrewhep/ckmci3m4eaq6p17qyc8cc92d5',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYW5kcmV3aGVwIiwiYSI6ImNrdDBwMm1nMTA3aGsycHA4OWFrMmxsOXMifQ.U0evxf4uounQU8paDa1zDQ'
    }).addTo(mymap)

    //Markers
    var markerList = []
    var markerNames = []
    
    var citadel = L.marker([19.572939, -72.243542], {title:'Citadel'}).addTo(mymap)
    markerNames.push('Citadel - The Farming of Bones')
    markerList.push(citadel)

    var border = L.marker([19.682296, -71.755576], {title:'Dajabón River'}).addTo(mymap)
    markerNames.push('Dajabón River - The Farming of Bones')
    markerList.push(border)

    var sugar = L.marker([19.349245, -71.550180], {title:'Sugar Fields'}).addTo(mymap)
    markerNames.push('Sugar Fields - The Farming of Bones')
    markerList.push(sugar)

    var santo = L.marker([18.467991, -69.947224], {title:'Santo Domingo'}).addTo(mymap)
    markerNames.push('Santo Domingo - Oscar Wao')
    markerList.push(santo)

    var bani = L.marker([18.281199, -70.335029], {title:'Baní'}).addTo(mymap)
    markerNames.push('Baní - Oscar Wao')
    markerList.push(bani)

    var paterson = L.marker([40.915783, -74.172607], {title:'Baní'}).addTo(mymap)
    markerNames.push('Paterson New Jersey - Oscar Wao')
    markerList.push(paterson)


    var SDNJ = L.polyline([[40.915783, -74.172607],[18.467991, -69.947224]], {color: 'red'}).addTo(mymap)    

    //Marker Popups
    citadel.bindPopup(`
    <div class="popup-left">
        <div class="head-wrapper">
            <h2 class='popup-head'>Citadel<h2/>
            <h3 class='popup-sub'>-The Farming of Bones</h4>
        </div>
        <img src='./citadel.jpeg' class='popup-img'></img> 
        <h4 class='popup-lead'>Themes:</h4>
        <p>Memory & Culture</p>
        <h4 class='popup-lead'>Background:</h4>
        <p>
        The Citadel is a large fortress sitting atop a mountain in the Northern part of Haiti. The tower was built by King Henry I of Haiti who had helped lead the overthrowing of the French colonists occupying Haiti during the Haitian revolution. The fortress was made to protect Henry himself but also to serve as battlements if the French returned to fight back. In the novel The Farming of Bones, the Citadel is mentioned multiple times, both as the location itself and as memory of a place Amabelle grew up near.        </p>
    </div>
    <div class="popup-right">
        <h4 class='popup-lead'>Significance:</h4>
        <p>
        Just as much as the Citadel is a symbol of strength to Haiti, it is a symbol of strength to Amabelle. It stands not only as a marker of her literal home and her childhood, but also as a more abstract idea of a home and of her culture. Her memory of the Citadel is tied up with her childhood; running around inside the empty Citadel and listening to stories about Henry I from her father. The image of the Citadel in the novel serves two roles. The first is a reminder of Amabelle’s home and her life growing up with her parents. The second is an allusion to why Amabelle daydreams to begin with. It is her escape from reality, and she does it to feel protected and to live in the nostalgia of her childhood; a time before her parents had died and she had fled to the Dominican Republic. The Citadel is safety and strength both to Amabelle, but also to Haiti as a whole.        </p>
        <h4 class='popup-lead'>Quote From Novel:</h4>
        <p>“Each time I closed my eyes I saw the river and imagined Sebastien and Mimi drowning the way my mother and father and Odette had. To escape these thoughts, I envisioned Henry Fs citadel as I had seen it again that afternoon, its closeness to the sky, its distance from the river. With my childhood visions of being inside of it, protected, I fell asleep.” (pg. 225)</p>
    </div>
    
    `, {
        closeButton: true
    })

    border.bindPopup(`
    <div class="popup-left">
        <div class="head-wrapper">
            <h2 class='popup-head'>Dajabón River<h2/>
            <h3 class='popup-sub'>-The Farming of Bones</h4>
        </div>
        <img src='./river.jpg' class='popup-img'></img> 
        <h4 class='popup-lead'>Themes:</h4>
        <p>Memory, History, & Culture</p>
        <h4 class='popup-lead'>Background:</h4>
        <p>
        The Dajabón River, or in English: the Massacre River, is the river that makes up the northern part of the Haitian/Dominican border. The river got its name from the conflict between the French and Spanish colonies that fought at this river during 1728, in which many French shipmen were killed by Spanish colonists. In the historical context of The Farming of Bones, the river is also the location of the parsley massacre that happened in 1937. The parsley massacre was the killing of Haitians by Dominican soldiers as ordered by the Dominican Republic’s dictator, Rafael Trujillo. Haitians near the river or attempting to cross the border were forced to say the Spanish word for parsley, perejil, which many Haitians found difficult. Those who could not pronounce “perejil” were killed.        </p>
    </div>
    <div class="popup-right">
        <h4 class='popup-lead'>Significance:</h4>
        <p>
        The Dajabón River was the river Amabelle’s parents were killed by when they were attempting to cross into the Dominican Republic. This river is also the place Amabelle found herself at near the end of the book when attempting to cross back into Haiti with Yves and Odette. The river is another place Amabelle finds herself at literally, and in her head when she is daydreaming. This river and rushing water in general is important because it has taken the lives of many people close to Amabelle. It represents change but also life and death. Despite everyone in her life that the river has killed, she finds herself at the end of the novel laying in the river, letting the grief and trauma the Dajabón River has brought flow with the current past her.        </p>
        <h4 class='popup-lead'>Quote From Novel:</h4>
        <p>“Unclothed, I slipped into the current. 
        The water was warm for October, warm and shallow, so shallow that I could he on my back in it with my shoulders only half submerged, the current floating over me in a less than gentle caress, the pebbles in the riverbed scouring my back.
        I looked to my dreams for softness, for a gentler embrace, for relief from the fear of mudslides and blood bubbling out of the riverbed, where it is said the dead add their tears to the river flow.” (pg 310)
        </p>
    </div>
    
    `, {
        closeButton: true
    })

    sugar.bindPopup(`
    <div class="popup-left">
        <div class="head-wrapper">
            <h2 class='popup-head'>Sugar Cane Fields<h2/>
            <h3 class='popup-sub'>-The Farming of Bones</h4>
        </div>
        <img src='./sugar.jpg' class='popup-img'></img> 
        <h4 class='popup-lead'>Themes:</h4>
        <p>History</p>
        <h4 class='popup-lead'>Background:</h4>
        <p>
        During the 1870’s-1880’s, the Dominican Republic took up the opportunity to get into the sugar market due to interruption of sugar trade from the wars. With sugar cane farms becoming an important piece of the Dominican Republic’s economy, the demand for workers was high and many Haitian migrants found themselves working on a sugar cane farm. Antihaitianismo was rampant, and Haitian workers were horribly mistreated. Many of these Haitians were living in cheap poorly made houses with little money. This made it difficult for workers to afford basic necessities, especially considering it was hard to find work at the end of the sugar cane zafra (the harvest).        </p>
    </div>
    <div class="popup-right">
        <h4 class='popup-lead'>Significance:</h4>
        <p>
        When Amabelle was meeting with Sébastien, it was frequently after he had gotten off working at the sugar cane fields. These fields were really telling of how rough it was being a Haitian migrant in the Dominican Republic. The many sugar plantations that took up a large part of the farmland on the island shaped the land and the lives of people living in the Dominican. The importance of this in the novel is to further the understanding of what it was like to live under Trujillo, as well as develop the readers understanding of the struggles that formed characters such as Sébastien.        </p>
        <h4 class='popup-lead'>Quotes From Novel:</h4>
        <p>“Sometimes the people in the fields, when they’re tired and angry, they say we’re an orphaned people,” he said. “They say we are the burnt crud at the bottom of the pot. They say some people don’t belong anywhere and that’s us. I say we are a group of vwayajè, wayfarers. This is why you had to travel this far to meet me, because that is what we are.” (pg. 56)
        <br><br>““M’renmen darkness,” he said. “In sugar land, a shack’s for sleeping, not for living. Living is only work, the fields. Darkness means rest.” (pg. 104)
        </p>
    </div>
    
    `, {
        closeButton: true
    })

    santo.bindPopup(`
    <div class="popup-left">
        <div class="head-wrapper">
            <h2 class='popup-head'>Santo Domingo<h2/>
            <h3 class='popup-sub'>-Oscar Wao</h4>
        </div>
        <img src='./santo.jpg' class='popup-img'></img> 
        <h4 class='popup-lead'>Themes:</h4>
        <p>Identity</p>
        <h4 class='popup-lead'>Background:</h4>
        <p>
        Santo Domingo is the Capitol of the Dominican Republic and is the most well-known city in the country to this day. In the 18th and 19th century, the city was used as a port by colonists who brought in slaves. Later, during the Trujillo regime, Trujillo had Santo Domingo renamed to Ciudad Trujillo. (Trujillo City in English). Today, the city is the main port for importing and exporting goods, and much of the countries tourism revenue happens in or through Santo Domingo.        </p>
    </div>
    <div class="popup-right">
        <h4 class='popup-lead'>Significance:</h4>
        <p>
        Santo Domingo is where La Inca lives, and where Oscar and Lola find themselves at many different points during the novel. This is of course the area where Oscar dies after moving back to live with a woman named Ybón that he met when he was last in the Dominican. Oscar believes that Santo Domingo is where the curse of fukú originated as stated in the beginning of the book, coming with the slaves who were brought from overseas on European colonist ships. The town serves as a home in the sense of a concept of a home as opposed to a literal home for Oscar and Lola. Despite living in the U.S., their times visiting this town is what helped define their characters and shaped their paths. For Oscar, this meant ultimately dying in Santo Domingo for a woman he loved.        <h4 class='popup-lead'>Quotes From Novel:</h4>
        <p>“Santo Domingo might be fukú’s Kilometer Zero, its port of entry, but we are all of us its children, whether we know it or not.”(pg 2-3)<br><br>
        “Her whole life she had tried to be happy, but Santo Domingo ...FUCKING SANTO DOMINGO had foiled her at every turn. I never want to see it again.” (pg 163)
        </p>
    </div>
    
    `, {
        closeButton: true
    })

    bani.bindPopup(`
    <div class="popup-left">
        <div class="head-wrapper">
            <h2 class='popup-head'>Baní<h2/>
            <h3 class='popup-sub'>-Oscar Wao</h4>
        </div>
        <img src='./Bani.jpg' class='popup-img'></img> 
        <h4 class='popup-lead'>Themes:</h4>
        <p>Identity</p>
        <h4 class='popup-lead'>Background:</h4>
        <p>
        Baní is a smaller town 30 miles or so east of Santo Domingo. The city is most known for its commercial farming and manufacturing. The name Baní is what the natives called the area, and it means “plenty of water.” The city was burned to the ground during the Haitian revolution in 1805.
        </p>
    </div>
    <div class="popup-right">
        <h4 class='popup-lead'>Significance:</h4>
        <p>
        Baní is the home of Beli, who was brought there by La Inca. Baní is somewhere Beli simultaneously dislikes and likes, being the place she was raised and attended school, but also the place she was beat by Trujillo’s thugs. This is where she meets the gangster and is subsequently forced to leave due to their secret child and his connections to Trujillo. Baní serves as an origin for Beli and her kids, despite them being born in New Jersey.
        </p>
        <h4 class='popup-lead'>Quote From Novel:</h4>
        <p>“It seems that as soon as her days in Outer Azua were over, as soon as she reached Baní, that entire chapter of her life got slopped into those containers in which governments store nuclear waste, triple-sealed by industrial lasers and deposited in the dark, uncharted trenches of her soul.” (pg 258)</p>
    </div>
    
    `, {
        closeButton: true
    })

    paterson.bindPopup(`
    <div class="popup-left">
        <div class="head-wrapper">
            <h2 class='popup-head'>Paterson New Jersey<h2/>
            <h3 class='popup-sub'>-Oscar Wao</h4>
        </div>
        <img src='./paterson.jpg' class='popup-img'></img> 
        <h4 class='popup-lead'>Themes:</h4>
        <p>Family & Diaspora</p>
        <h4 class='popup-lead'>Background:</h4>
        <p>
        Paterson New Jersey is a town in the Northern side of New Jersey, sitting only a few miles from New York, New York. Roughly 60 percent of Dominicans who have immigrated to the United states live in New York and New Jersey, so the town of Paterson is likely to be a candidate for those moving to the United States from Hispaniola. Immigration to these areas was seen suddenly following the death of Trujillo which opened the previously tightly locked borders.
        </p>
    </div>
    <div class="popup-right">
        <h4 class='popup-lead'>Significance:</h4>
        <p>
        The town of Paterson in the novel The Brief and Wonderous Life of Oscar Wao is a reminder of the diasporic communities that formed in the United States following the Trujillo regime. Beli came to New York, and then eventually New Jersey to escape the threat to her life imposed by Trujillo. This is where Oscar and Lola are born and live a lot of their lives. Despite Oscar and Lola being born here, the Dominican Republic feels like more of a home to them then Paterson. 
        </p>
        <h4 class='popup-lead'>Quote From Novel:</h4>
        <p>“His sister not acknowledging my presence, so I laughed when she walked by the open door, asked loudly: How’s la muda doing? She hates being here, Oscar said. What’s wrong with Paterson? I asked loudly. Hey, muda, what’s wrong with Paterson? Everything, she yelled from down the hall.” (pg 193)</p>
    </div>
    
    `, {
        closeButton: true
    })

    // PLACE.bindPopup(`
    // <div class="popup-left">
    //     <div class="head-wrapper">
    //         <h2 class='popup-head'>Dajabón River<h2/>
    //         <h3 class='popup-sub'>-Farming of Bones</h4>
    //     </div>
    //     <img src='./citadel.jpeg' class='popup-img'></img> 
    //     <h4 class='popup-lead'>Themes:</h4>
    //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    //     <h4 class='popup-lead'>Background:</h4>
    //     <p>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    //     </p>
    // </div>
    // <div class="popup-right">
    //     <h4 class='popup-lead'>Significance:</h4>
    //     <p>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    //     </p>
    //     <h4 class='popup-lead'>Quote From Novel:</h4>
    //     <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."(pg 72)</p>
    // </div>
    
    // `, {
    //     closeButton: true
    // })


    mymap.on('popupopen', function(e) {
        var px = mymap.project(e.target._popup._latlng)
        px.y -= e.target._popup._container.clientHeight/2
        mymap.panTo(mymap.project(px), {animate: true})
    })

    L.Control.Items = L.Control.extend({
        options: {
            position: 'topright'
        },
    
        onAdd: function (map) {
            this._div = L.DomUtil.create('div', 'places-wrapper')
            L.DomEvent.disableClickPropagation(this._div);
            var placesUI = L.DomUtil.create('div', 'places-selector', this._div)
            placesUI.title = 'Places...';

            var placesTitle = L.DomUtil.create('h2', 'places-title', placesUI)
            placesTitle.innerHTML = "Places:"

            var placesList = L.DomUtil.create('ul', 'places-list', placesUI)

            var placesItem
            var placesLink

            for(i=0; i<markerNames.length; i++){
                placesItem = L.DomUtil.create('li', 'places-item', placesList)
                placesLink = L.DomUtil.create('a', 'places-link', placesItem)
                placesLink.id = i
                placesLink.innerHTML = markerNames[i]

                L.DomEvent.on(placesLink, 'click', function(){
                    console.log("test") 
                    console.log(this.id)
                    markerList[this.id].openPopup()
                })
            }

            return this._div;
        }
    })
    
    L.control.items = function (options) {
        return new L.Control.Items(options);
    }

    L.control.items({ position: 'topright' }).addTo(mymap);

    closeDiv = document.getElementById('intro-close')
    coverDiv = document.getElementById('intro-body')
    closeDiv.addEventListener('click', function() {
        coverDiv.remove()
    })
}
