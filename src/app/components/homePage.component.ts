/**
 * Created by Chensonglin on 17.9.6.
 */
import { Component, NgModule} from '@angular/core';
import { NavBarComponent } from './navBar.component';
import { CardContentComponent } from './cardContent.component';

@NgModule({
  imports: [
    NavBarComponent,
    CardContentComponent
  ],
})
@Component({
  selector: 'app-home-page',
  templateUrl: './homePage.component.html',
})

export class HomePageComponent {
  current = '首页';
}
