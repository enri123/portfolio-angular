import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import emailjs from '@emailjs/browser';

interface EmailForm {
  from: string;
  reply_to: string;
  title: string;
  message: string;
  [key: string]: unknown;
}

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, MatIconModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css'],
})
export class Contacto {
  private readonly SERVICE_ID = 'service_p7sanii';
  private readonly TEMPLATE_ID = 'template_1j2v4wb';
  private readonly PUBLIC_KEY = '5Ptt9TvHbJRAYMZr_';

  // Modelo del formulario
  model: EmailForm = {
    from: '',
    reply_to: '',
    title: '',
    message: '',
  };

  sending = false;
  successMsg = '';
  errorMsg = '';

  get submitLabel(): string {
    return this.sending
      ? $localize`:@@contact.sending:Enviando...`
      : $localize`:@@contact.send:Enviar`;
  }

  async sendEmail() {
    this.successMsg = '';
    this.errorMsg = '';

    // Validación simple
    if (!this.model.from || !this.model.reply_to || !this.model.title || !this.model.message) {
      this.errorMsg = $localize`:@@contact.requiredError:Por favor, completa todos los campos.`;
      return;
    }

    this.sending = true;

    try {
      const result = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        this.model,
        this.PUBLIC_KEY,
      );

      if (result.status === 200) {
        this.successMsg = $localize`:@@contact.success:Correo enviado correctamente.`;
        this.model = { from: '', reply_to: '', title: '', message: '' };
      } else {
        this.errorMsg = $localize`:@@contact.sendError:Error al enviar el correo.`;
      }
    } catch (err: any) {
      console.error('Error de envío:', err);
      const details =
        err.text || err.message || $localize`:@@contact.unknownError:Error desconocido.`;
      this.errorMsg = $localize`:@@contact.sendErrorPrefix:Error al enviar el correo: ${details}`;
    } finally {
      this.sending = false;
    }
  }
}
