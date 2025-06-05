import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-hub',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth-hub.html',
  styleUrl: './auth-hub.css'
})
export class AuthHub {
  authField1 = '';
  authField2 = '';
  authField3 = '';
  authField4 = '';
  authField5 = '';
  authField6 = '';
  authField7 = '';
  authField8 = '';
  authField9 = '';
  authField10 = '';
  authField11 = '';
  authField12 = '';

  submitAuthData() {
    console.log('Submitted Data:', 
      this.authField1, this.authField2, this.authField3, this.authField4, this.authField5, 
      this.authField6, this.authField7, this.authField8, this.authField9, this.authField10,
      this.authField11, this.authField12);

    alert(
      'Submitted: ' + 
      this.authField1 + ', ' + this.authField2 + ', ' + this.authField3 + ', ' + this.authField4 + ', ' + this.authField5 + ', ' +
      this.authField6 + ', ' + this.authField7 + ', ' + this.authField8 + ', ' + this.authField9 + ', ' + this.authField10 + ', ' +
      this.authField11 + ', ' + this.authField12
    );
  }
}
