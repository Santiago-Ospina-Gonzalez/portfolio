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
}

const PROJECTS: Project[] = [
  {
    name: 'Front-end',
    category: 'Angular · Frontend',
    objective: 'Servir como base para desarrollar una aplicación web con Angular.',
    type: 'Aplicación web frontend de una sola página (SPA).',
    technologies: 'Angular 19, TypeScript 5.7, HTML5, CSS3, RxJS, Node.js, Jasmine y Karma.',
    features: ['Página de bienvenida', 'Diseño responsive', 'Rutas y estructura para nuevos componentes', 'Enlaces a documentación y redes de Angular'],
    repository: 'https://github.com/Santiago-Ospina-Gonzalez/Front-end'
  },
  {
    name: 'Uceva Angular NodeJS',
    category: 'Microfrontends · Microservicios',
    objective: 'Practicar una arquitectura cliente-servidor distribuida con microfrontends Angular y microservicios NodeJS.',
    type: 'Proyecto académico full-stack.',
    technologies: 'Angular 20.3.14, TypeScript, Node.js, Express, Module Federation, Bootstrap, SCSS, RxJS, Swagger, Faker.js y Jest.',
    features: ['Host Angular con carga dinámica mediante remoteEntry.js', 'Módulos de usuarios, productos, canciones, órdenes y departamentos', 'APIs REST por dominio', 'Datos simulados y documentación Swagger'],
    repository: 'https://github.com/Santiago-Ospina-Gonzalez/Uceva-Angular-NodeJS-Taller-Microfrontends-Microservices-Taller'
  },
  {
    name: 'Uceva Astro Angular',
    category: 'SPA · SSG',
    objective: 'Comparar una aplicación Angular SPA con una aplicación Astro SSG en rendimiento, tamaño y experiencia de desarrollo.',
    type: 'Monorepo educativo de aplicaciones web frontend.',
    technologies: 'Angular 20, TypeScript, Astro 5, Angular Router, RxJS, Bootstrap, Jest, HTML, SCSS, CSS, Node.js y npm.',
    features: ['Blog tecnológico en Angular y Astro', 'Rutas para portada, artículos y sección Sobre el blog', 'Componentes y servicios tipados reutilizables', 'Comparación de tiempos y tamaño de construcción'],
    repository: 'https://github.com/Santiago-Ospina-Gonzalez/Uceva-Astro-Angular-SSG-SPA-Taller'
  },
  {
    name: 'Proyecto Integrador',
    category: 'Aplicación educativa',
    objective: 'Ofrecer una aplicación educativa de escritorio con contenidos, herramientas de aprendizaje y actividades prácticas.',
    type: 'Aplicación de escritorio para Windows y Linux.',
    technologies: 'Java, Swing/AWT, NetBeans, Apache Ant, JEP/DJEP, JFreeChart, JavaMail y CSV.',
    features: ['Menú por áreas académicas', 'Calculadora de derivadas y graficadora', 'Operaciones matriciales y sistemas de ecuaciones', 'Simulaciones físicas, cuestionarios y ranking'],
    repository: 'https://github.com/SantiagoOspina155/Proyecto'
  },
  {
    name: 'Inmobiliaria S.A.',
    category: 'Aplicación empresarial',
    objective: 'Administrar la operación de una inmobiliaria centralizando agentes, clientes, propietarios, inmuebles y contratos.',
    type: 'Aplicación web empresarial con arquitectura MVC y operaciones CRUD.',
    technologies: 'Java 8, Servlets, JSP, JDBC, PostgreSQL, Apache Ant, NetBeans, GlassFish, Bootstrap y JavaScript.',
    features: ['Inicio de sesión por tipo de usuario', 'Gestión de agentes, clientes, propietarios e inmuebles', 'Administración y reportes de contratos', 'Persistencia mediante DAOs y PostgreSQL'],
    repository: 'https://github.com/Santiago-Ospina-Gonzalez/inmobiliariaSA'
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
