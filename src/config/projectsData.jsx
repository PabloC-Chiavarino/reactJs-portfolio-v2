import { ProjectImg1, ProjectImg2, ProjectImg3, ProjectImg4, ProjectImg5 } from '../assets/Images'

export const projectsData = {
  es: {
    title: 'Proyectos',
    introduction: <p>Aquí encontrarás algunos de los proyectos en los que he trabajado, cada uno reflejando mis habilidades, mi enfoque en <span className='text-highlightA'>crear soluciones funcionales y bien estructuradas,</span> y mi compromiso con las <span className='text-highlightB'>buenas prácticas</span> en el desarrollo.</p>,
    projects: [
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
        description: 'Desarrollado en ReactJS, este proyecto es un mockup de una tienda en línea especializada en notebooks. Es una SPA (Single Page Application) con navegación fluida y funcionalidades como carrito de compras avanzado, sistema de autenticación y selección de favoritos. Solo los usuarios logueados pueden realizar compras y guardar favoritos. El carrito se sincroniza con el usuario en Firestore y con el carrito de invitado almacenado en local storage. Incluye notificaciones, loader dinámico, gestión de órdenes, uso de librerías externas y actualmente estoy trabajando en el diseño responsive.',
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
        title: 'Beyond Time',
        subtitle: 'Proyecto Front-End',
        description: 'Beyond Time es una aplicación web interactiva que transforma tu fecha de nacimiento en una serie de datos curiosos y visuales sobre tu vida. A partir de tu edad, calcula estimaciones como la cantidad total de latidos de tu corazón, los kilovatios generados por tu cuerpo, cuántos amaneceres has vivido y cuántos minutos han pasado desde tu nacimiento, entre otros. El recorrido culmina con un “reloj de la vida”, una representación analógica de tu edad en una vida promedio de 80 años, mostrando simbólicamente en qué momento vital te encontrás, como si fuera la hora del día.',
        url: 'https://btimeproject.vercel.app',
        image: ProjectImg4
      },
      {
        title: 'E-commerce API REST',
        subtitle: 'Proyecto Back-End',
        description: 'Desarrollada en Java con Spring Boot y JPA, esta API RESTful gestiona Productos, Órdenes, Facturas y Clientes, implementando operaciones CRUD y funciones avanzadas como la creación de facturas asociadas a clientes y la búsqueda de productos por código o marca, promoviendo un enfoque flexible y eficiente. Utiliza DTOs y mappers para evitar ciclos infinitos en relaciones bidireccionales, controladores genéricos que siguen el principio DRY, y está documentada con Swagger, lo que facilita las pruebas y mejora la experiencia de desarrollo.',
        url: 'https://java-jpa-sb-ecommerceapirest-demo.onrender.com/swagger-ui/index.html',
        image: ProjectImg5
      }
    ]
  },
  en: {
    title: 'Projects',
    introduction: <p>Here you will find some of the projects I have worked on, each reflecting my skills, my focus on <span className='text-highlightA'>creating functional and well-structured solutions,</span> and my commitment to <span className='text-highlightB'>best practices</span> in development.</p>,
    projects: [
      {
        title: 'BackLab Strategies',
        subtitle: 'Front-End Project',
        description: [
          'Developed with ReactJS and using libraries like Toastify and EmailJS, this dynamic website follows a design provided by a UX/UI team under the pixel-perfect methodology. It integrates advanced animations created with CSS and the Intersection Observer API to deliver a precise and visually appealing experience.',
          'Features include a contact form with options, online appointment scheduling, and language selection (EN/ES), demonstrating a user-centered approach.'
        ],
        url: 'https://backlab-strategies.vercel.app',
        image: ProjectImg1
      },
      {
        title: 'Notebook Depot',
        subtitle: 'Front-End Project',
        description: [
          'Built with ReactJS and utilizing libraries like Toastify and EmailJS, this project is a mockup of an online store specializing in laptops. It offers a simple product catalog with an advanced shopping cart to manage selected items.',
          'Features include pop-up notifications in the cart, a dynamic loader for product loading, favorite selection, order management, and a user system. It uses a Firebase-hosted database to store and manage site data.'
        ],
        url: 'https://notebook-depot.vercel.app/',
        image: ProjectImg2
      },
      {
        title: 'Gadget Alley',
        subtitle: 'Front-End Project',
        description: [
          'Developed in an old-school style with HTML, CSS, and vanilla JavaScript, this mockup of an online tech store features a responsive product catalog and a shopping cart.',
          'A web development demonstration that stands out for its simplicity and clarity in product presentation.'
        ],
        url: 'https://gadget-alley.vercel.app',
        image: ProjectImg3
      },
      {
        title: 'Beyond Time',
        subtitle: 'Front-End Project',
        description: 'Beyond Time is an interactive web application that transforms your birth date into a series of curious and visual insights about your life. Based on your age, it estimates things like the total number of heartbeats, the kilowatts your body has generated, how many sunrises you’ve experienced, and how many minutes have passed since you were born, among others. The experience concludes with a “life clock” — an analog representation of your age within an average 80-year lifespan, symbolically showing what stage of life you’re in, as if it were a time of day.',
        url: 'https://btimeproject.vercel.app',
        image: ProjectImg4
      },
      {
        title: 'E-commerce API REST',
        subtitle: 'Back-End Project',
        description: [
          'Developed in Java with Spring Boot and JPA, this RESTful API manages Products, Orders, Invoices, and Clients, implementing CRUD operations and advanced functions such as creating invoices linked to clients and searching for products by code or brand, promoting a flexible and efficient approach.',
          'It uses DTOs and mappers to avoid infinite loops in bidirectional relationships, generic controllers following the DRY principle, and is documented with Swagger, making testing easier and improving the development experience.'
        ],
        url: 'https://java-jpa-sb-ecommerceapirest-demo.onrender.com/swagger-ui/index.html',
        image: ProjectImg5
      }
    ]
  }
}
