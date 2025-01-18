import { ProjectImg1, ProjectImg2, ProjectImg3, ProjectImg4 } from '../assets/Images'


export const projects = [
    {
        title: 'BackLab Strategies',
        subtitle: 'Proyecto Front-End',
        description: 'Desarrollado con ReactJS y utilizando librerías como Toastify y EmailJS, este sitio web dinámico sigue un diseño proporcionado por un equipo de UX/UI bajo la metodología pixel perfect. Integra animaciones avanzadas creadas con CSS y la API Intersection Observer para ofrecer una experiencia visual precisa y atractiva. Entre sus funcionalidades se incluyen un formulario de contacto con opciones, solicitud de turnos en línea y selección de idioma (EN/ES), demostrando un enfoque centrado en la experiencia del usuario.',
        url: 'https://backlab-strategies.vercel.app',
        image: ProjectImg1
    },
    {
        title: 'Notebook Depot',
        subtitle: 'Proyecto Front-End',
        description: 'Desarrollado en ReactJS y utilizando librerías como Toastify y EmailJS, este proyecto es un mockup de una tienda en línea especializada en notebooks. Ofrece un catálogo de productos simple con un carrito de compras avanzado para gestionar los artículos seleccionados. Incluye funcionalidades como notificaciones pop-up en el carrito, loader dinámico para la carga de productos, selección de favoritos, órdenes de compra y sistema de usuarios. Cuenta con una base de datos alojada en Firebase para almacenar y gestionar los datos del sitio.',
        url: 'https://notebook-depot.vercel.app/',
        image: ProjectImg2
    },
    {
        title: 'Gadget Alley',
        subtitle: 'Proyecto Front-End',
        description: 'Desarrollado al estilo old school con HTML, CSS y vanilla JavaScript, este mockup de una tienda en línea de artículos tecnológicos presenta un catálogo de productos con un diseño responsivo y un carrito de compras. Una demostración de desarrollo web que destaca por su simplicidad y claridad en la presentación de productos.',
        url: 'https://gadget-alley.vercel.app',
        image: ProjectImg3
    },
    {
        title: 'E-commerce API REST',
        subtitle: 'Proyecto Back-End',
        description: 'Desarrollada en Java con Spring Boot y JPA, esta API RESTful gestiona Productos, Órdenes, Facturas y Clientes, implementando operaciones CRUD y funciones avanzadas como la creación de facturas asociadas a clientes y la búsqueda de productos por código o marca, promoviendo un enfoque flexible y eficiente. Utiliza DTOs y mappers para evitar ciclos infinitos en relaciones bidireccionales, controladores genéricos que siguen el principio DRY, y está documentada con Swagger, lo que facilita las pruebas y mejora la experiencia de desarrollo.',
        url: 'https://gadget-alley.vercel.app',
        image: ProjectImg4
    }
]