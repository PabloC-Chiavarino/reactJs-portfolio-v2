import {
  html5Logo,
  css3Logo,
  muiLogo,
  jsLogo,
  reactjsLogo,
  tsLogo,
  javaLogo,
  sbLogo,
  jpaHibLogo,
  mysqlLogo,
  firebaseLogo,
  swaggerLogo,
  postmanLogo,
  vscLogo,
  intellijLogo,
  gitLogo
} from '../assets/Icons'

export const skillsData = {
  es: {
    introduction: (
      <p>
        Estas son las{' '}
        <span className='text-highlightA'>tecnologías y herramientas</span> que
        utilizo para{' '}
        <span className='text-highlightB'>
          desarrollar, organizar y documentar
        </span>{' '}
        mis proyectos.
      </p>
    )
  },
  en: {
    introduction: (
      <p>
        These are the{' '}
        <span className='text-highlightA'>technologies and tools</span> I use to{' '}
        <span className='text-highlightB'>develop, organize, and document</span>{' '}
        my projects.
      </p>
    )
  },
  content: [
    {
      category: 'Front',
      items: [
        {
          id: 'react',
          name: 'ReactJs',
          logo: reactjsLogo
        },
        {
          id: 'ts',
          name: 'TypeScript',
          logo: tsLogo
        },
        {
          id: 'html',
          name: 'HTML5',
          logo: html5Logo
        },
        {
          id: 'mui',
          name: 'Material UI',
          logo: muiLogo
        },
        {
          id: 'css',
          name: 'CSS3',
          logo: css3Logo
        },
        {
          id: 'js',
          name: 'JavaScript',
          logo: jsLogo
        }
      ]
    },
    {
      category: 'Back',
      items: [
        {
          id: 'java',
          name: 'Java',
          logo: javaLogo
        },
        {
          id: 'spring',
          name: 'Spring Boot',
          logo: sbLogo
        },
        {
          id: 'jpa/hib',
          name: 'JPA/Hib',
          logo: jpaHibLogo
        },
        {
          id: 'mysql',
          name: 'MySQL',
          logo: mysqlLogo
        },
        {
          id: 'fb',
          name: 'Firebase',
          logo: firebaseLogo
        },
        {
          id: 'swagger',
          name: 'Swagger',
          logo: swaggerLogo
        }
      ]
    },
    {
      category: 'Tools',
      items: [
        {
          id: 'postman',
          name: 'Postman',
          logo: postmanLogo
        },
        {
          id: 'vsc',
          name: 'VSCode',
          logo: vscLogo
        },
        {
          id: 'intellij',
          name: 'IntelliJ',
          logo: intellijLogo
        },
        {
          id: 'github',
          name: 'Git',
          logo: gitLogo
        }
      ]
    }
  ]
}
