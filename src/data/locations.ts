interface Location {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  imageUrl?: string;
}

export const locations: Location[] = [
  {
    name: 'Downtown Phoenix',
    description: 'The heart of Phoenix, featuring the Phoenix Convention Center, Arizona Science Center, and Heritage Square.',
    latitude: 33.4484,
    longitude: -112.0740,
    imageUrl: '/images/downtown-phoenix.jpg'
  },
  {
    name: 'Scottsdale',
    description: 'Known for its luxury resorts, golf courses, and vibrant arts scene, including the Scottsdale Museum of Contemporary Art.',
    latitude: 0,
    longitude: -111.9261,
    imageUrl: '/images/scottsdale.jpg'
  },
  {
    name: 'Tempe',
    description: 'Home to Arizona State University, Tempe Town Lake, and the vibrant Mill Avenue District.',
    latitude: 33.4255,
    longitude: -111.9400,
    imageUrl: '/images/tempe.jpg'
  }
]; 