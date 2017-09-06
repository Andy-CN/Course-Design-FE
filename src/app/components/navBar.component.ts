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
  templateUrl: './navBar.component.html',
})

export class NavBarComponent {
  appName = '答曰';
  currentFlag= '首页';
  menuList = [
    {
      name: '首页',
      linkTo: '../homePage',
    },
    {
      name: '发现',
      linkTo: '../explore',
    },
    {
      name: '话题',
      linkTo: '../topic',
    }
  ];
  profileSettingList = [
    {
      name: '通知',
      linkTo: '../notice',
    },
    {
      name: '私信',
      linkTo: '../message',
    },
    {
      name: '主页',
      linkTo: '../profile',
    },
    {
      name: '设置',
      linkTo: '../setting',
    }
  ];
  onSelect(menu: any): void {
    this.currentFlag = menu.name;
  }
}
