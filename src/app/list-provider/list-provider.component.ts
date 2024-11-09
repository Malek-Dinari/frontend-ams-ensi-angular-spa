import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';

import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent implements OnInit {

  providers: any[] = [];

  constructor(private providerService: ProviderService) {}

  ngOnInit(): void {
    // Fetch the list of providers when the component is initialized
    this.providerService.listProviders().subscribe(
      (data:any) => {
        this.providers = data;  // Assign fetched providers to the array
      },
      (error:any) => {
        console.error('Error fetching providers:', error);
      }
    );
  }
}
