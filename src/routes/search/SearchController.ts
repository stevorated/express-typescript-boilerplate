import { getPlaces } from "./providers/OpenCageDataProvider";

export const getPlacesByName = async (q: string) => {
  const x = 3
  if (q.length < x) {
    return {
      // type: "FeatureCollection",
      // features: []
      type: 'Error',
      message: `Query too short (${x} letters long).`,
      features: [],
    };
  }

  return await getPlaces(q);
};