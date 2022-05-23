function initMap() {
    const { Map } = google.maps
    const map = new Map(
        document.querySelector('#basicMap'),
        {
            center: { lat: 52.36012206913376, lng: 4.885240255965728 },
            zoom: 10,
        }
    )
    //     new Marker({
    //         position: { lat: 52.36012206913376, lng: 4.885240255965728 },
    //         map
    //     })
}