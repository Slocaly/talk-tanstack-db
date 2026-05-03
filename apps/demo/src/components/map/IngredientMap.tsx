import { useMemo } from 'react'
import L from 'leaflet'
import type { LatLngBoundsExpression } from 'leaflet'
import { ImageOverlay, MapContainer, Marker, Popup } from 'react-leaflet'

/** Geographic frame for the fictional village map (covers all seed ingredient coords). */
const VILLAGE_MAP_BOUNDS: LatLngBoundsExpression = [
  [48.312, -4.78],
  [48.358, -4.698],
]

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
      maxBounds={VILLAGE_MAP_BOUNDS}
      maxBoundsViscosity={0.85}
      className="h-[280px] w-full z-0"
      aria-label={`Carte : ${title}`}
    >
      <ImageOverlay url="/village-map-illustration.svg" bounds={VILLAGE_MAP_BOUNDS} />
      <Marker position={[lat, lng]} icon={icon}>
        <Popup>
          <strong>{title}</strong>
          <p className="m-0 mt-1 max-w-[220px] text-sm">{snippet}</p>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
