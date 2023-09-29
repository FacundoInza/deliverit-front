'use client';

import React, { FC, memo, useCallback, useState } from 'react';
import {
    GoogleMap,
    useJsApiLoader,
    DirectionsRenderer,
} from '@react-google-maps/api';
import dotenv from 'dotenv';
import { useEffect } from 'react';

dotenv.config();
const apikey: string = process.env.NEXT_PUBLIC_GOOGLE_API_KEY!;

const containerStyle = {
    width: '100%',
    height: '100%',
};

interface Coords {
    lat: number;
    lng: number;
}

interface LocationMapProps {
    coords: Coords;
}

const LocationMap: FC<LocationMapProps> = ({
    coords = { lat: -34.6037555, lng: -58.3816287 },
}: LocationMapProps) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apikey,
    });

    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [directions, setDirections] =
        useState<google.maps.DirectionsResult | null>(null);

    const onLoad = useCallback(function callback(map: google.maps.Map) {
        const bounds = new window.google.maps.LatLngBounds();
        bounds.extend(new google.maps.LatLng(coords));

        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback() {
        setMap(null);
    }, []);

    console.log('Map created', map);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const origin = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                const destination = coords;
                const directionsService = new google.maps.DirectionsService();
                directionsService.route(
                    {
                        origin: origin,
                        destination: destination,
                        travelMode: google.maps.TravelMode.DRIVING,
                    },
                    (result, status) => {
                        if (status === google.maps.DirectionsStatus.OK) {
                            setDirections(result);
                        } else {
                            console.error(
                                `error fetching directions ${result}`
                            );
                        }
                    }
                );
            });
        }
    }, [coords]);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={coords}
            zoom={17}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                    position: google.maps.ControlPosition.TOP_LEFT,
                },
            }}
        >
            {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
    ) : (
        <></>
    );
};

export default memo(LocationMap);
