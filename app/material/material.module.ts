import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  exports: [MatInputModule, MatToolbarModule, MatIconModule, MatButtonModule],
  declarations: [],
})
export class MaterialModule {}
