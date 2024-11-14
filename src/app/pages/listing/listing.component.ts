import {Component, OnInit} from '@angular/core';
import {PropertyService} from '../../service/property.service';
import {Property} from '../../models/property.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  properties: Property[] | undefined;

  constructor(private propertyService: PropertyService) {
  }

  ngOnInit(): void {
    this.properties = this.propertyService.getProperties();
  }
}
