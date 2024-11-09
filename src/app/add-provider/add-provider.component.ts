import { Component } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent {

  provider = {
    name: '',
    email: '',
    address: ''
  };

  constructor(private providerService: ProviderService, private router: Router) {}

  addProvider(): void {
    this.providerService.addProvider(this.provider).subscribe(
      () => {
        console.log('Provider added successfully!');
        this.router.navigate(['/listProvider']);  // Redirect to list page
      },
      error => {
        console.error('Error adding provider:', error);
      }
    );
  }
}
