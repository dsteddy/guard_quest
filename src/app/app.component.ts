import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  userRole: string = ''

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const role = this.userService.getRole();
    if (role) {
      this.userRole = role;
    }
  }

  changeRole() {
    if (this.userRole === 'ANONYMOUS') {
      this.userService.setRole('USER')
      this.userRole = this.userService.getRole()
    } else if (this.userRole === 'USER') {
      this.userService.setRole('ADMIN')
      this.userRole = this.userService.getRole()
    } else if (this.userRole === 'ADMIN') {
      this.userService.setRole('ANONYMOUS')
      this.userRole = this.userService.getRole()
    }
  }
}
