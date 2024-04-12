import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IconComponent } from './components/icon/icon.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { TimePipe } from './components/pipes/time.pipe';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { ProductFeaturesPipe } from './pipes/product-color.pipe';

@NgModule({
  declarations: [
    BannerComponent,
    HeaderComponent,
    MainMenuComponent,
    FooterComponent,
    IconComponent,
    SvgIconComponent,
    ProductCardComponent,
    ProductFeaturesPipe,
    TimePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BannerComponent,
    HeaderComponent,
    MainMenuComponent,
    FooterComponent,
    IconComponent,
    ProductCardComponent,
    ProductFeaturesPipe,
    TimePipe
  ]
})
export class SharedModule { }
