import {Injectable} from '@angular/core';
import {Property} from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private properties: Property[] = [
    {
      id: 1,
      title: 'Beautiful Beach House',
      price: 500000,
      location: 'Santa Monica, CA',
      description: 'A spacious beach house with ocean views.',
      images: [
        '/assets/images/beach-house.jpg',
        '/assets/images/beach-house-2.jpg'
      ],
      type: 'House',
      bedrooms: 4,
      bathrooms: 3,
      size: 2500
    },
    // Add more properties as needed
  ];

  getProperties() {
    return this.properties;
  }

  getPropertyById(id: number): Property | undefined {
    return this.properties.find(p => p.id === id);
  }
}
