import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isModalOpen = false;
  modalTitle = '';
  modalContent = '';
  modalImage = '';

  // Opciones para el carrusel de imágenes
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 1,
  };

  constructor() {}

  openModal(image: string, title: string) {
    this.modalImage = image;
    this.modalTitle = title;
    this.modalContent = 'Descripción de la receta seleccionada';
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}


