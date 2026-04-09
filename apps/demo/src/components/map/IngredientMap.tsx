import { useMemo } from 'react'
import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

type Props = {
  lat: number
  lng: number
  title: string
  snippet: string
}

export function IngredientMap({ lat, lng, title, snippet }: Props) {
  const icon = useMemo(
    () =>
      L.divIcon({
        className: 'ingredient-map-marker',
        html: '<span class="map-pin" aria-hidden="true">🌿</span>',
        iconSize: [32, 32],
        iconAnchor: [16, 30],
        popupAnchor: [0, -26],
      }),
    []
  )

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom
      className="h-[280px] w-full z-0"
      aria-label={`Carte : ${title}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={icon}>
        <Popup>
          <strong>{title}</strong>
          <p className="m-0 mt-1 max-w-[220px] text-sm">{snippet}</p>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
