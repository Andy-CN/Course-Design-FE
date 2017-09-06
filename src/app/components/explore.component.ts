/**
 * Created by Chensonglin on 17.9.6.
 */
import { Component, NgModule} from '@angular/core';
import { NavBarComponent } from './navBar.component';

@NgModule({
  imports: [
    NavBarComponent,
  ],
})
@Component({
  selector: 'app-explore',
  template: `
    <div style="margin-top: 53px;">
      <app-nav-bar></app-nav-bar>
      explore
    </div>
  `,
})

export class ExploreComponent {
  current = '首页';
}
