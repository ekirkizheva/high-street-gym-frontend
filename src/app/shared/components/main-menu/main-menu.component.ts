import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IdentityService } from 'src/app/core/services/identity.service';
import { MenuItem } from '../../models/menu.interface';
import { adminNavMenu } from './constants/admin-menu';
import { userNavMenu } from './constants/user-menu';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  menu$: Observable<MenuItem[]>;

  isAuthenticated$: Observable<Boolean>;
  
  isMenuDropDownVisible = false;

  constructor(private identity: IdentityService) {
    this.menu$ = this.identity.isAdmin$.pipe(
      map((isAdmin) => isAdmin ? adminNavMenu : userNavMenu)
    )

    this.isAuthenticated$ = this.identity.user$.pipe(map((user) => !!user.username));
  }

  toggleMenu() {
    this.isMenuDropDownVisible = !this.isMenuDropDownVisible;
  }
}
