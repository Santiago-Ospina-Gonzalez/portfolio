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
    name: 'Portfolio Angular',
    category: 'Angular · Portfolio',
    objective: 'Presentar el catálogo de proyectos y demostrar un flujo completo de construcción y publicación con Angular.',
    type: 'Portafolio digital responsive con vista moderna y modo retro.',
    technologies: 'Angular 20, TypeScript, HTML, CSS y GitHub Actions.',
    features: ['Perfil profesional', 'Catálogo interactivo de proyectos', 'Vista moderna y escritorio retro', 'Despliegue automático en GitHub Pages'],
    repository: 'https://github.com/Santiago-Ospina-Gonzalez/portfolio',
    liveUrl: 'https://santiago-ospina-gonzalez.github.io/portfolio/'
  },
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
    name: 'Uceva Angular Modularidad',
    category: 'Angular · Arquitectura modular',
    objective: 'Practicar la organización de una aplicación Angular por módulos, componentes, servicios e interfaces tipadas.',
    type: 'Aplicación web frontend con módulos lazy-loaded.',
    technologies: 'Angular 20, TypeScript, SCSS, RxJS, Jest y Compodoc.',
    features: ['Módulos de home, games, courses y movies', 'Servicios e interfaces tipadas', 'Consumo de la API pública FreeToGame', 'Rutas lazy-loaded y documentación con Compodoc'],
    repository: 'https://github.com/Santiago-Ospina-Gonzalez/Uceva-Angular-Taller-Modularidad',
    liveUrl: 'https://santiago-ospina-gonzalez.github.io/Uceva-Angular-Taller-Modularidad/'
  },
  {
    name: 'Angular-NodeJS Client-Server',
    category: 'Angular · NodeJS · Client-Server',
    objective: 'Practicar una arquitectura cliente-servidor integrando una interfaz Angular con un backend NodeJS.',
    type: 'Aplicación web Angular con API REST NodeJS.',
    technologies: 'Angular 20, TypeScript, NodeJS, Express, Bootstrap, Jest y GitHub Actions.',
    features: ['Gestión de usuarios, productos, libros, música y vuelos', 'Tablas y componentes reutilizables', 'Pruebas unitarias con Jest', 'Cliente publicado en GitHub Pages y backend ejecutable localmente'],
    repository: 'https://github.com/Santiago-Ospina-Gonzalez/Uceva-Angular-NodeJS-Taller-Client-Server',
    liveUrl: 'https://santiago-ospina-gonzalez.github.io/Uceva-Angular-NodeJS-Taller-Client-Server/'
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
