import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';

import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeEditorComponent } from './theme-editor/theme-editor.component';
import { ThemeDetailComponent } from './theme-detail/theme-detail.component';

import { ThemeRoutingModule } from './theme-routing.module';


@NgModule({
  declarations: [ThemeListComponent, ThemeEditorComponent, ThemeDetailComponent],
  imports: [
    SharedModule,
    ThemeRoutingModule
  ]
})
export class ThemeModule { }
