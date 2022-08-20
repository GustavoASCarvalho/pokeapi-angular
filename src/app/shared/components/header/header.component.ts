import { Component, OnInit } from '@angular/core';
import { User } from '@firebase/auth';
import { UserService } from '../../data/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user?: User;

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
  }

  ngOnInit(): void {
  }

  sair() {
    this.userService.sair();
    this.user = undefined;
  }
}
