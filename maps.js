window.onload = function () {
    var mymap = L.map('mapid').setView([19.021416, -71.565749], 8)

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'andrewhep/ckmci3m4eaq6p17qyc8cc92d5',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYW5kcmV3aGVwIiwiYSI6ImNrbWF6MTg4ejF1MXcycW9jd2VlNzFjcHcifQ.Pqo0abOQwpbJzUzaeX_lJA'
    }).addTo(mymap)

    //Markers
    var markerList = []
    var markerNames = []
    
    var citadel = L.marker([19.572939, -72.243542], {title:'Citadel'}).addTo(mymap)
    markerNames.push('Citadel - Farming of Bones')
    markerList.push(citadel)

    //Marker Popups
    citadel.bindPopup(`
    <div class="popup-left">
        <div class="head-wrapper">
            <h2 class='popup-head'>Citadel<h2/>
            <h4 class='popup-sub'>-Farming of Bones</h4>
        </div>
        <img src='./citadel.jpeg' class='popup-img'></img> 
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
    <div class="popup-right">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
    
    `, {
        closeButton: true
    })


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

            for(i=0; i<markerNames.length; i++){
                var placesItem = L.DomUtil.create('li', 'places-item', placesList)
                var placesLink = L.DomUtil.create('a', 'places-link', placesItem)
                placesLink.id = i
                placesLink.innerHTML = markerNames[i]
            }

        
            return this._div;
        }
    })

    //Menu crap:

    // L.DomEvent.on(document.getElementsByTagName('a'), 'click', function(ev){
    //     console.log("test")
    //     console.log(this.id)
    //     markerList[placesLink.id].openPopup()
    // })


    L.control.items = function (options) {
        return new L.Control.Items(options);
    }

    L.control.items({ position: 'topright' }).addTo(mymap);
}