// Simplified GeoJSON structure for India's states
const indiaStates = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Maharashtra" },
      geometry: {
        type: "Polygon",
        coordinates: [[[72.6, 15.8], [72.6, 22.1], [80.9, 22.1], [80.9, 15.8], [72.6, 15.8]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Gujarat" },
      geometry: {
        type: "Polygon",
        coordinates: [[[68.1, 20.1], [68.1, 24.7], [74.5, 24.7], [74.5, 20.1], [68.1, 20.1]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Karnataka" },
      geometry: {
        type: "Polygon",
        coordinates: [[[74.1, 11.6], [74.1, 18.4], [78.6, 18.4], [78.6, 11.6], [74.1, 11.6]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Tamil Nadu" },
      geometry: {
        type: "Polygon",
        coordinates: [[[76.2, 8.1], [76.2, 13.5], [80.3, 13.5], [80.3, 8.1], [76.2, 8.1]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Uttar Pradesh" },
      geometry: {
        type: "Polygon",
        coordinates: [[[77.1, 23.9], [77.1, 30.4], [84.7, 30.4], [84.7, 23.9], [77.1, 23.9]]]
      }
    }
  ]
};

export async function getGeoJsonData() {
  return indiaStates;
}

export async function getDiseaseData(disease: string, timeframe: string) {
  // Mock data for India's states
  return indiaStates.features.reduce((acc, feature) => {
    acc[feature.properties.name] = Math.floor(Math.random() * 1500);
    return acc;
  }, {} as Record<string, number>);
}

export function getDiseases() {
  return ['COVID-19', 'Malaria', 'Dengue', 'Tuberculosis', 'Cholera'];
}

export function getTimeframes() {
  return ['Last 7 days', 'Last 30 days', 'Last 90 days', 'Last 6 months', 'Last year'];
}

export function getStates() {
  return indiaStates.features.map(feature => feature.properties.name);
}

