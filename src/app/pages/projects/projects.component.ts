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
      nombre: '',
      descripcion:
        'Landing page desarrollada con Angular para Roberto Automotores, una agencia cordobesa especializada ventas de autos usados.',
      comentario:
        'Ezequiel es de total confianza, trabaja rápido y explica todo con claridad y amabilidad. Fue muy fácil comunicarme con él y resolvió todo de forma eficiente. Lo súper recomiendo ✨',
      link: 'https://robertoautomotores.com.ar',
      clase: 'roberto-card',
      logo: 'https://robertoautomotores.com.ar/assets/img/Logo.webp',
      estilo: 'theme-roberto',
    },
    {
      nombre: '',
      descripcion:
        'Landing page en Angular y Firebase para Dexus, empresa cordobesa de mantenimiento y armado de PCs personalizadas, con servicios de venta a pedido y entrega sin cargo en Córdoba.',
      comentario:
        'Ezequiel demuestra un alto nivel de compromiso, aprendizaje acelerado y gran capacidad de adaptación. Un perfil en constante evolución y proyección.',
      link: 'https://dexus.com.ar',
      clase: 'dexus-card',
      logo: 'https://dexus.com.ar/assets/img/dexus-logo-white.webp',
      estilo: 'theme-dexus',
    },
    {
      nombre: '',
      descripcion:
        'Sitio web ambientado en Halloween que simula una sala de juegos interactiva. Incluye efectos visuales animados, personajes temáticos y una interfaz amigable con botones que permiten explorar diferentes juegos. Desarrollado con Angular como parte de un sprint académico.',
      link: 'https://ezequiel-monson-sprint-uno.netlify.app/',
      clase: 'yashi-card',
      logo: 'https://ezequiel-monson-sprint-uno.netlify.app/assets/images/YashiMarca.png',
      estilo: 'theme-yashi',
    },
    {
      nombre: 'SleepCraft',
      descripcion:
        'Landing page diseñada para una marca ficticia de productos para el descanso. Presenta una estética suave y relajante con secciones informativas sobre almohadas y colchones, botones de navegación intuitivos, y diseño responsive. Desarrollada con HTML y CSS como parte de un ejercicio académico.',
      link: 'https://sleepcraft.netlify.app/',
      clase: 'sleepcraft-card',
      logo: 'https://sleepcraft.netlify.app/static/img/BEDSALE.png',
      estilo: 'theme-sleepcraft',
    },
    {
      nombre: 'La Pulga<br>Burger',
      descripcion:
        'Sitio web tipo catálogo para una hamburguesería ficticia. Permite visualizar el menú de hamburguesas, agregar productos al carrito y simular una compra. Desarrollado con HTML, JavaScript y CSS implementando Bootstrap, y alimentado por una API simulada. Proyecto enfocado en la interacción con servicios web y manejo de estados en el frontend.',
      link: 'https://pulgaburger.netlify.app/',
      clase: 'pulga-card',
      logo: 'https://pulgaburger.netlify.app/static/img/logo.png',
      estilo: 'theme-pulga',
    },
  ];
  aplicarEstilo(estilo: string) {
    const body = document.body;

    // Quitar cualquier clase anterior que comience con "theme-"
    const clasesTema = Array.from(body.classList).filter((c) =>
      c.startsWith('theme-')
    );

    if (body.classList.contains(estilo)) {
      // Si ya está aplicada, la quitamos
      body.classList.remove(estilo);
    } else {
      // Si no está aplicada, quitamos las otras y la agregamos
      body.classList.remove(...clasesTema);
      body.classList.add(estilo);
    }
  }
}
