import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private role: 'ANONYMOUS' | 'USER' | 'ADMIN' = 'ANONYMOUS';

  constructor() { }

  getRole(): 'ANONYMOUS' | 'USER' | 'ADMIN' {
    return this.role;
  }

  setRole(role: 'ANONYMOUS' | 'USER' | 'ADMIN'): void {
    this.role = role;
  }
}
