import { User } from './users';
import { Company } from './company';
import { Mapplable } from './mappable';

export class Map {
    private googleMap: google.maps.Map;

    constructor(mapContainer: HTMLElement) {
        this.googleMap = new google.maps.Map(
            mapContainer,
            {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: 0,
                }
            }
        );
    }

    addMarker(mappable: Mappable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });

            infoWindow.open(this.googleMap, marker);
        })
    };
}