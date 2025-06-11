interface Location {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  imageUrl?: string;
}

export const locations: Location[] = [
  {
    name: 'Sonoran Hills Park',
    description: 'Hours: Sunrise - 10:30pm; 1 tennis court',
    latitude: 59,
    longitude: 344,
  },
  {
    name: 'Grayhawk Park',
    description: 'Hours: Sunrise - 10:30pm; 2 tennis courts',
    latitude: 54,
    longitude: 347,
  },
  {
    name: 'Ironwood Park',
    description: 'Hours: Sunrise - 10:30pm; 1 tennis court',
    latitude: 50,
    longitude: 335,
  },
  {
    name: 'Thunderbird Park',
    description: 'Hours: Sunrise - 10:30pm; 2 tennis courts',
    latitude: 38,
    longitude: 336,
  },
  {
    name: 'Northsight Park',
    description: 'Hours: Sunrise - 10:30pm; 2 tennis courts',
    latitude: 38,
    longitude: 342.5,
  },
  {
    name: 'Aztec Park',
    description: 'Hours: Sunrise - 10:30pm; 2 tennis courts',
    latitude: 36,
    longitude: 332,
  },
  {
    name: 'Rio Montana Park',
    description: 'Hours: Sunrise - 10:30pm; 2 tennis courts',
    latitude: 30,
    longitude: 310,
  },
  {
    name: 'Scottsdale Ranch Park',
    description: 'Reservations Required; 18 tennis courts',
    latitude: 27,
    longitude: 330,
  },
  {
    name: 'Mountain View Park',
    description: 'Hours: Sunrise - 10:30pm; 2 tennis courts',
    latitude: 25.5,
    longitude: 341,
  },
  {
    name: 'Comanche Park',
    description: 'Hours: Sunrise - 10:30pm; 2 tennis courts',
    latitude: 19,
    longitude: 341,
  },
  {
    name: 'Scottsdale Community College',
    description: 'Hours: 6am - 8pm; 6 tennis courts',
    latitude: 12,
    longitude: 335,
  },
  {
    name: 'Chestnutt Park',
    description: 'Hours: Sunrise - 10:30pm; 2 tennis courts',
    latitude: 7,
    longitude: 341,
  },
  {
    name: 'Indian School Park',
    description: 'Reservations Required; 13 tennis courts',
    latitude: 4,
    longitude: 343,
  },
  {
    name: 'Paiute Park',
    description: 'Hours: Sunrise - 10:30pm; 2 tennis courts.',
    latitude: 2,
    longitude: 354,
  },
  {
    name: 'Sandpiper Park',
    description: 'Hours: 5:30am - 10pm; 2 tennis courts',
    latitude: 38.5,
    longitude: 354,
  },
  {
    name: 'Dynamite Park',
    description: 'Hours: 5:30am - 11pm; 2 tennis courts',
    latitude: 74,
    longitude: 8,
  },
  {
    name: 'Deem Hills Park',
    description: 'Hours: 5:30am - 11pm; 1 tennis court',
    latitude: 70,
    longitude: 65,
  },
  {
    name: 'Deer Valley Park',
    description: 'Hours: 5:30am - 11pm; 2 tennis courts',
    latitude: 50.5,
    longitude: 46,
  },
  {
    name: 'Mountain View Community Center Park',
    description: 'Hours: 5:30am - 10pm; 6 tennis courts',
    latitude: 47,
    longitude: 33,
  },
  {
    name: 'Moon Valley Park',
    description: 'Hours: 5:30am - 10pm; 2 tennis courts',
    latitude: 41,
    longitude: 38,
  },
  {
    name: 'Lookout Mountain Park',
    description: 'Hours: 5:30am - 10pm; 2 tennis courts',
    latitude: 38,
    longitude: 27,
  },
  {
    name: 'Roadrunner Park',
    description: 'Hours: 5:30am - 11pm; 2 tennis courts',
    latitude: 33,
    longitude: 16,
  },
  {
    name: 'Rose Mofford Sports Complex',
    description: 'Hours: unknown; 6 tennis courts',
    latitude: 26,
    longitude: 48,
  },
  {
    name: 'Granada Park',
    description: 'Hours: 5:30am - 11pm; 4 tennis courts',
    latitude: 14,
    longitude: 25,
  },
  {
    name: 'Phoenix Tennis Center',
    description: 'Reservations Required; 25 tennis courts',
    latitude: 15,
    longitude: 47,
  },
  {
    name: 'Mariposa Park',
    description: 'Hours: 5:30am - 10pm; 4 tennis courts',
    latitude: 19,
    longitude: 53.5,
  },
  {
    name: 'La Pradera Park',
    description: 'Hours: 5:30am - 11pm; 2 tennis courts',
    latitude: 15,
    longitude: 59,
  },
  {
    name: 'Cielito Park',
    description: 'Hours: 5:30am - 10pm; 2 tennis courts',
    latitude: 7,
    longitude: 55,
  },
  {
    name: 'Madison Park',
    description: 'Hours: 5:30am - 11pm; 2 tennis courts',
    latitude: 6.5,
    longitude: 30,
  },
  {
    name: 'G.R. Herberger Park',
    description: 'Hours: 5:30am - 10pm; 2 tennis courts',
    latitude: 4,
    longitude: 0,
  },
  {
    name: 'Desert West Park',
    description: 'Hours: 5:30am - 11pm; 1 tennis court',
    latitude: 359,
    longitude: 76,
  },
  {
    name: 'Encanto Park',
    description: 'Hours: 5:30am - 11pm; 8 tennis courts',
    latitude: 359,
    longitude: 44,
  },
  {
    name: 'Coronado Park',
    description: 'Hours: 5:30am - 10pm; 2 tennis courts',
    latitude: 358,
    longitude: 30,
  },
  {
    name: 'Pierce Park',
    description: 'Hours: 5:30am - 11pm; 4 tennis courts',
    latitude: 358,
    longitude: 8,
  },
  {
    name: 'Harmon Park',
    description: 'Hours: 5:30am - 11pm; 1 tennis court',
    latitude: 348,
    longitude: 40,
  },
  {
    name: 'Cesar Chavez Park',
    description: 'Hours: 5:30am - 11pm; 8 tennis courts',
    latitude: 331,
    longitude: 59,
  },
  {
    name: 'Esteban Park',
    description: 'Hours: 5:30am - 11pm; 2 tennis courts',
    latitude: 338,
    longitude: 16,
  },
  {
    name: 'El Reposo Park',
    description: 'Hours: 5:30am - 11pm; 3 tennis courts',
    latitude: 334,
    longitude: 35,
  },
  {
    name: 'Highline Park',
    description: 'Hours: 5:30am - 10pm; 1 tennis court',
    latitude: 330,
    longitude: 31,
  },
  {
    name: 'Western Star Park',
    description: 'Hours: 5:30am - 10pm; 2 tennis courts',
    latitude: 326,
    longitude: 8,
  },
  {
    name: 'Desert Foothills Park',
    description: 'Hours: 5:30am - 11pm; 2 tennis courts',
    latitude: 310,
    longitude: 28,
  },
  {
    name: 'Pecos Park',
    description: 'Hours: 5:30am - 11pm; 2 tennis courts',
    latitude: 308,
    longitude: 8,
  },
  {
    name: 'Nevitt Park',
    description: 'Hours: 5:30am - 10pm; 2 tennis courts',
    latitude: 334,
    longitude: 9,
  },
  {
    name: 'Sun Ray Park',
    description: 'Hours: 5:30am - 10pm; 2 tennis courts',
    latitude: 315,
    longitude: 13,
  },
]; 