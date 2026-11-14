import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface Project {
  name: string;
  category: string;
  objective: string;
  type: string;
  technologies: string;
  features: string[];
  repository: string;
  liveUrl: string;
}

const PROJECTS: Project[] = [
  {
    name: 'Front-end',
    category: 'Angular · Frontend',
    objective: 'Servir como base para desarrollar una aplicación web con Angular.',
    type: 'Aplicación web frontend de una sola página (SPA).',
    technologies: 'Angular 19, TypeScript 5.7, HTML5, CSS3, RxJS, Node.js, Jasmine y Karma.',
    features: ['Página de bienvenida', 'Diseño responsive', 'Rutas y estructura para nuevos componentes', 'Enlaces a documentación y redes de Angular'],
    repository: 'https://github.com/Santiago-Ospina-Gonzalez/Front-end',
    liveUrl: 'https://santiago-ospina-gonzalez.github.io/Front-end/'
  },
  {
    name: 'Uceva SpringBoot',
    category: 'Backend · Clean Architecture',
    objective: 'Practicar una arquitectura limpia en Spring Boot con módulos independientes para distintos dominios.',
    type: 'Backend REST con datos de ejemplo generados en memoria.',
    technologies: 'Java, Spring Boot, Gradle, JavaFaker, Swagger/OpenAPI y JUnit.',
    features: ['Módulos de usuarios, productos, categorías, órdenes y proveedores', 'Casos de uso separados por capas', 'Endpoints REST bajo /api', 'Documentación Swagger UI'],
    repository: 'https://github.com/Santiago-Ospina-Gonzalez/Uceva-SpringBoot-Taller-Clean-Architecture-Taller',
    liveUrl: 'https://santiago-ospina-gonzalez.github.io/Uceva-SpringBoot-Taller-Clean-Architecture-Taller/'
  },
  {
    name: 'Uceva Astro Angular',
    category: 'SPA · SSG',
    objective: 'Comparar una aplicación Angular SPA con una aplicación Astro SSG en rendimiento, tamaño y experiencia de desarrollo.',
    type: 'Monorepo educativo de aplicaciones web frontend.',
    technologies: 'Angular 20, TypeScript, Astro 5, Angular Router, RxJS, Bootstrap, Jest, HTML, SCSS, CSS, Node.js y npm.',
    features: ['Blog tecnológico en Angular y Astro', 'Rutas para portada, artículos y sección Sobre el blog', 'Componentes y servicios tipados reutilizables', 'Comparación de tiempos y tamaño de construcción'],
    repository: 'https://github.com/Santiago-Ospina-Gonzalez/Uceva-Astro-Angular-SSG-SPA-Taller',
    liveUrl: 'https://santiago-ospina-gonzalez.github.io/Uceva-Astro-Angular-SSG-SPA-Taller/'
  },
  {
    name: 'Taller Uceva Deno',
    category: 'TypeScript · Patrones de diseño',
    objective: 'Aplicar patrones de diseño creacionales, estructurales y de comportamiento con Deno.',
    type: 'Colección de ejercicios ejecutables desde consola.',
    technologies: 'Deno, TypeScript y módulos ES.',
    features: ['Builder, Factory Method y Abstract Factory', 'Adapter, Facade y Flyweight', 'Chain of Responsibility, Memento, Observer y Strategy', 'Ejecución independiente por ejercicio'],
    repository: 'https://github.com/Santiago-Ospina-Gonzalez/Taller-Uceva-Deno-Design-Patterns',
    liveUrl: 'https://santiago-ospina-gonzalez.github.io/Taller-Uceva-Deno-Design-Patterns/'
  },
  {
    name: 'Uceva Angular Modularidad',
    category: 'Angular · Arquitectura modular',
    objective: 'Practicar la organización de una aplicación Angular por módulos, componentes, servicios e interfaces tipadas.',
    type: 'Aplicación web frontend con módulos lazy-loaded.',
    technologies: 'Angular 20, TypeScript, SCSS, RxJS, Jest y Compodoc.',
    features: ['Módulos de home, games, courses y movies', 'Servicios e interfaces tipadas', 'Consumo de la API pública FreeToGame', 'Rutas lazy-loaded y documentación con Compodoc'],
    repository: 'https://github.com/Santiago-Ospina-Gonzalez/Uceva-Angular-Taller-Modularidad',
    liveUrl: 'https://santiago-ospina-gonzalez.github.io/Uceva-Angular-Taller-Modularidad/'
  }
];

@Component({
  selector: 'app-root',
  imports: [NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly projects = PROJECTS;
  protected retroMode = false;
  protected activeWindow: 'sobre-mi' | 'proyectos' | 'contacto' | null = null;
  protected selectedProject: Project | null = null;

  protected toggleDesign(): void {
    this.retroMode = !this.retroMode;
    this.activeWindow = null;
    this.selectedProject = null;
  }

  protected openWindow(window: 'sobre-mi' | 'proyectos' | 'contacto'): void {
    this.activeWindow = window;
    this.selectedProject = null;
  }

  protected closeWindow(): void {
    this.activeWindow = null;
    this.selectedProject = null;
  }

  protected openProject(project: Project): void {
    this.selectedProject = project;
    this.activeWindow = 'proyectos';
  }
}
