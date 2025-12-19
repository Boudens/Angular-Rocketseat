import { Injectable } from '@angular/core';
import { CertificadoI } from '../interfaces/certificado';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {
  certificados: CertificadoI[] = [];

  constructor() { }

  adicionarCertificado(certificado: CertificadoI){
    this.certificados.unshift({ ...certificado });
    localStorage.setItem('certificados', JSON.stringify(this.certificados));
  }


}
