import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  role: string;
  balance: number;
  status: 'Active' | 'Pending';
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Friends SHG';
  totalBalance = 245000;

  users: User[] = [
    { id: 1, name: 'Aarav Sharma', role: 'Treasurer', balance: 12500, status: 'Active' },
    { id: 2, name: 'Sneha Patel', role: 'Member', balance: 9800, status: 'Active' },
    { id: 3, name: 'Nikhil Verma', role: 'Member', balance: 11600, status: 'Pending' },
    { id: 4, name: 'Priya Iyer', role: 'Secretary', balance: 15200, status: 'Active' },
    { id: 5, name: 'Rohit Nair', role: 'Member', balance: 8700, status: 'Active' },
    { id: 6, name: 'Meera Joshi', role: 'Member', balance: 10450, status: 'Pending' }
  ];

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  }
}
