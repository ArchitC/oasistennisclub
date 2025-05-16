import { useState } from 'react'
import { Globe } from './components/Globe'
import styled from '@emotion/styled'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`

const InfoPanel = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  z-index: 1000;
`

const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`

const Title = styled.h2`
  margin: 0;
  color: #333;
  font-size: 1.5rem;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;
  padding: 5px;
  line-height: 1;
  &:hover {
    color: #333;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 15px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
`

const Description = styled.p`
  margin: 0 0 15px 0;
  color: #666;
  line-height: 1.5;
  font-size: 0.95rem;
`

const LocationLink = styled.a`
  display: inline-block;
  color: #0066cc;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 8px 15px;
  background: #f0f7ff;
  border-radius: 5px;
  transition: background-color 0.2s;
  
  &:hover {
    background: #e0f0ff;
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
          <ImageContainer>
            {selectedMarker.imageUrl ? (
              <img 
                src={selectedMarker.imageUrl} 
                alt={selectedMarker.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              'Image coming soon'
            )}
          </ImageContainer>
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
              Open in Maps →
            </LocationLink>
          )}
        </InfoPanel>
      )}
    </AppContainer>
  )
}

export default App
