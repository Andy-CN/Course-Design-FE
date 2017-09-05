/**
 * Created by Chensonglin on 17.9.4.
 */
import {Component, NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [NgbModule]
})
@Component({
  selector: 'app-nav-bar',
  templateUrl: 'navbar.html',
})

export class NavbarComponent {
  appName = '答曰';
  currentFlag= 0;
  menuList = [
    {
      name: '首页',
      linkTo: '/',
    },
    {
      name: '发现',
      linkTo: '/explore',
    },
    {
      name: '话题',
      linkTo: '/topic',
    }
  ];
  onSelect(index: number, menu: any): void {
    this.currentFlag = index;
  }
}
