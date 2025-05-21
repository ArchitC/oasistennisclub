import { useState } from 'react'
import { Globe } from './components/Globe'
import styled from '@emotion/styled'

// Add Google Fonts import
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`

const InfoPanel = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(212, 208, 200, 0.95);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  z-index: 1000;
  padding: 5px;
`

const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  background: rgba(0, 14, 126, 0.95);
  color: white;
  margin-bottom: 15px;
`

const Title = styled.h2`
  margin: 0;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  font-family: 'Fira Code';
`

const CloseButton = styled.button`
  background: rgba(212, 208, 200, 0.95);
  font-size: 20px;
  cursor: pointer;
  color: black;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  font-family: 'Fira Code';
`

const Description = styled.p`
  margin: 0 0 15px 0;
  color: #666;
  font-size: 0.95rem;
  padding: 0px 10px;
  font-family: 'Fira Code';
  color: black;
`

const LocationLink = styled.a`
  display: block;
  color: black;
  font-size: 0.9rem;
  padding: 10px 15px;
  background: rgba(212, 208, 200, 0.95);
  border-radius: 0px;
  transition: background-color 0.2s;
  margin: 0 auto;
  width: fit-content;
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.3);
  border: 1px solid black;
  font-family: 'Fira Code';
  position: relative;

  &::first-letter {
    text-decoration: underline;
  }
`

interface Marker {
  id: string;
  position: [number, number, number];
  name: string;
  description: string;
  imageUrl?: string;
  locationUrl: string;
  googleMapsUrl: string;
}

// Helper function to calculate position on globe surface
const calculatePosition = (latitude: number, longitude: number, radius: number = 5): [number, number, number] => {
  // Convert latitude and longitude to radians
  const latRad = (latitude * Math.PI) / 180;
  const lonRad = (longitude * Math.PI) / 180;
  
  // Calculate x, y, z coordinates
  const x = radius * Math.cos(latRad) * Math.cos(lonRad);
  const y = radius * Math.sin(latRad);
  const z = radius * Math.cos(latRad) * Math.sin(lonRad);
  
  return [x, y, z];
};

// Helper function to generate Google Maps URL
const getGoogleMapsUrl = (lat: number, lng: number) => {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
};

const markers: Marker[] = [
  {
    id: '1',
    position: calculatePosition(2, 0), // Downtown Phoenix
    name: 'Downtown Phoenix',
    description: 'The heart of Phoenix, featuring the Phoenix Convention Center, Arizona Science Center, and Heritage Square.',
    imageUrl: '/images/downtown-phoenix.jpg',
    locationUrl: 'geo:33.4484,-112.0740?q=Downtown+Phoenix,AZ', // Added location name for better context
    googleMapsUrl: getGoogleMapsUrl(33.4484, -112.0740)
  },
  {
    id: '2',
    position: calculatePosition(30, 30), // Scottsdale
    name: 'Scottsdale',
    description: 'Known for its luxury resorts, golf courses, and vibrant arts scene, including the Scottsdale Museum of Contemporary Art.',
    imageUrl: '/images/scottsdale.jpg',
    locationUrl: 'geo:33.4942,-111.9261?q=Scottsdale,AZ',
    googleMapsUrl: getGoogleMapsUrl(33.4942, -111.9261)
  },
  {
    id: '3',
    position: calculatePosition(-30, 30), // Tempe
    name: 'Tempe',
    description: 'Home to Arizona State University, Tempe Town Lake, and the vibrant Mill Avenue District.',
    imageUrl: '/images/tempe.jpg',
    locationUrl: 'geo:33.4255,-111.9400?q=Tempe,AZ',
    googleMapsUrl: getGoogleMapsUrl(33.4255, -111.9400)
  }
]

function App() {
  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null)

  const handleMarkerClick = (marker: Marker) => {
    setSelectedMarker(marker)
  }

  const handleClose = () => {
    setSelectedMarker(null)
  }

  return (
    <AppContainer>
      <Globe markers={markers} onMarkerClick={handleMarkerClick} />
      {selectedMarker && (
        <InfoPanel>
          <PanelHeader>
            <Title>{selectedMarker.name}</Title>
            <CloseButton onClick={handleClose}>×</CloseButton>
          </PanelHeader>
          <Description>{selectedMarker.description}</Description>
          {selectedMarker.locationUrl && (
            <LocationLink 
              href={selectedMarker.locationUrl}
              onClick={(e) => {
                // Try to open in native maps app
                const opened = window.open(selectedMarker.locationUrl, '_blank');
                // If native maps app doesn't open, fall back to Google Maps
                if (!opened || opened.closed || typeof opened.closed === 'undefined') {
                  e.preventDefault();
                  window.open(selectedMarker.googleMapsUrl, '_blank');
                }
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Location
            </LocationLink>
          )}
        </InfoPanel>
      )}
    </AppContainer>
  )
}

export default App
