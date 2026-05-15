import { useMemo } from 'react';
import L from 'leaflet';
import type { LatLngBoundsExpression } from 'leaflet';
import { ImageOverlay, MapContainer, Marker, Popup } from 'react-leaflet';
import { categoryEmoji } from '@/lib/categoryEmoji';
import type { IngredientCategory } from '@/types/domain';

/** Geographic frame for the fictional village map (covers all seed ingredient coords). */
const VILLAGE_MAP_BOUNDS: LatLngBoundsExpression = [
  [48.312, -4.78],
  [48.358, -4.698],
];

type Props = {
  lat: number;
  lng: number;
  title: string;
  snippet: string;
  category: IngredientCategory;
};

export function IngredientMap({ lat, lng, title, snippet, category }: Props) {
  const icon = useMemo(
    () =>
      L.divIcon({
        className: 'ingredient-map-marker',
        html: `<span class="map-pin" data-category="${category}" aria-hidden="true">${categoryEmoji[category]}</span>`,
        iconSize: [32, 32],
        iconAnchor: [16, 30],
        popupAnchor: [0, -26],
      }),
    [category],
  );

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={15}
      scrollWheelZoom
      maxBounds={VILLAGE_MAP_BOUNDS}
      maxBoundsViscosity={0.85}
      className="h-[280px] w-full z-0"
      aria-label={`Carte : ${title}`}
    >
      <ImageOverlay
        url="/village.png"
        bounds={VILLAGE_MAP_BOUNDS}
      />
      <Marker position={[lat, lng]} icon={icon}>
        <Popup>
          <strong>{title}</strong>
          <p className="m-0 mt-1 max-w-[220px] text-sm">{snippet}</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
