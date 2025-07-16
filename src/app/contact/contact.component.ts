import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  email: string = 'manuelvaldez8642@gmail.com';
  phone: string = '+52 618 261 1016';

  copyEmail(element: string) {
    navigator.clipboard.writeText(element).then(() => {
      console.log('Correo copiado al portapapeles');
    });
  }

}
