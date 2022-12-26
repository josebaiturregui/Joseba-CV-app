import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatDialogModule} from '@angular/material/dialog';
import { MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSliderModule} from '@angular/material/slider';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule} from '@angular/forms';
import { MatSelectModule} from '@angular/material/select';
import { MatListModule} from '@angular/material/list';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CurriculumVitaeComponent } from './pages/curriculum-vitae/curriculum-vitae.component';
      



@NgModule({
  declarations: [
  
    AppComponent,
    SidenavComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    CurriculumVitaeComponent,
   
    
    
    
  
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatGridListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
