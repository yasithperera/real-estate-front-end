import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PropertyService} from '../../service/property.service';
import {Property} from '../../models/property.model';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  @Input() property: Property | undefined= {
    id: 0,
    title: '',
    images: [],
    description: '',
    price: 0,
    location: '',
    type:'',
    size: 0,
    bedrooms:0,
    bathrooms:0
  };

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService
  ) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.property = this.propertyService.getPropertyById(id);
    console.log(this.property?.images.length);
  }
}
