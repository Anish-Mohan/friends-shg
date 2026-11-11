import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import usersData from './users.json';

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
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Friends SHG';
  // JSON imports widen string literals, so assert the sample data against the app model.
  users: User[] = usersData as User[];
  selectedUser: User | null = null;

  get totalBalance(): number {
    return this.users.reduce((total, user) => total + user.balance, 0);
  }

  viewUser(user: User): void {
    this.selectedUser = user;
  }

  closeUserDetails(): void {
    this.selectedUser = null;
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  }
}
