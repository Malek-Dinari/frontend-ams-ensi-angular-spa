import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Import Observable for better type handling

interface Provider {
  id?: number;
  name: string;
  email: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private urlProviders = 'http://127.0.0.1:8080/providers';

  constructor(private http: HttpClient) { }

  // List providers - returns Observable of type Provider[] for better type handling
  listProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(`${this.urlProviders}/list`);
  }

  // Create a provider - posts the form data
  addProvider(myform: any): Observable<Provider> {
    const provider: Provider = {
      name: myform.value.providerName,
      email: myform.value.providerEmail,
      address: myform.value.providerAdress
    };
    return this.http.post<Provider>(`${this.urlProviders}/add`, provider);
  }

  // Update a provider - assuming 'myObj' has the 'id' property
  updateProvider(myObj: Provider): Observable<Provider> {
    return this.http.put<Provider>(`${this.urlProviders}/${myObj.id}`, myObj);
  }

  // Delete a provider
  deleteProvider(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlProviders}/${id}`);
  }

  // Get a specific provider by id
  getProvider(id: number): Observable<Provider> {
    return this.http.get<Provider>(`${this.urlProviders}/${id}`);
  }
}
