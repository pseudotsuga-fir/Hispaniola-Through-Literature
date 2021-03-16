window.onload = function () {
    var mymap = L.map(document.getElementById('mapid')).setView([19.021416, -71.565749], 8)

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'andrewhep/ckmci3m4eaq6p17qyc8cc92d5',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYW5kcmV3aGVwIiwiYSI6ImNrbWF6MTg4ejF1MXcycW9jd2VlNzFjcHcifQ.Pqo0abOQwpbJzUzaeX_lJA'
    }).addTo(mymap)
}