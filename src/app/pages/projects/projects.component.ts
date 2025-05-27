import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  proyectos = [
    {
      nombre: 'Dexus',
      descripcion: 'Landing page desarrollada con Angular y Firebase para Dexus, una empresa cordobesa especializada en el mantenimiento, reparación y armado de computadoras personalizadas. El sitio destaca los servicios ofrecidos, incluyendo el armado de PCs para gamers y profesionales, venta de notebooks y celulares a pedido, y entrega a domicilio sin cargo dentro de Córdoba.',
      link: 'https://dexus.com.ar',
    },
    {
      nombre: 'YashiGames',
      descripcion: 'Sitio web ambientado en Halloween que simula una sala de juegos interactiva. Incluye efectos visuales animados, personajes temáticos y una interfaz amigable con botones que permiten explorar diferentes juegos. Desarrollado con Angular como parte de un sprint académico.',
      link: 'https://ezequiel-monson-sprint-uno.netlify.app/',
    },
    {
      nombre: 'SleepCraft',
      descripcion: 'Landing page diseñada para una marca ficticia de productos para el descanso. Presenta una estética suave y relajante con secciones informativas sobre almohadas y colchones, botones de navegación intuitivos, y diseño responsive. Desarrollada con HTML y CSS como parte de un ejercicio académico.',
      link: 'https://sleepcraft.netlify.app/',
    },
    {
      nombre: 'PulgaBurger',
      descripcion: 'Sitio web tipo catálogo para una hamburguesería ficticia. Permite visualizar el menú de hamburguesas, agregar productos al carrito y simular una compra. Desarrollado con HTML, JavaScript y CSS implementando Bootstrap, y alimentado por una API simulada. Proyecto enfocado en la interacción con servicios web y manejo de estados en el frontend.',
      link: 'https://pulgaburger.netlify.app/',
    }
  ];
}
