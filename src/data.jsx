import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
  } from 'react-icons/fa';
  import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
  
  import Work1 from './assets/project-1.jpg';
  import Work2 from './assets/project-2.jpg';
  import Work3 from './assets/project-3.webp';
  import Work4 from './assets/project-4.jpg';
  import Work5 from './assets/project-5.png';
  import Work6 from './assets/project-6.png';
  import Work7 from './assets/project-7.png';
  import Work8 from './assets/project-8.png';
  import work9 from './assets/project-9.png';
  
  import Theme1 from './assets/purple.png';
  import Theme2 from './assets/red.png';
  import Theme3 from './assets/blueviolet.png';
  import Theme4 from './assets/blue.png';
  import Theme5 from './assets/goldenrod.png';
  import Theme6 from './assets/magenta.png';
  import Theme7 from './assets/yellowgreen.png';
  import Theme8 from './assets/orange.png';
  import Theme9 from './assets/green.png';
  import Theme10 from './assets/yellow.png';
  
  export const links = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className='nav__icon' />,
      path: '/',
    },
  
    {
      id: 2,
      name: 'About',
      icon: <FaUser className='nav__icon' />,
      path: '/about',
    },
  
    {
      id: 3,
      name: 'Portfolio',
      icon: <FaFolderOpen className='nav__icon' />,
      path: '/portfolio',
    },
  
    {
      id: 4,
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav__icon' />,
      path: '/contact',
    },
  ];
  
  export const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Arunima Ambastha',
    },
  
    // {
    //   id: 2,
    //   title: 'Last Name : ',
    //   description: 'Ambastha',
    // },
  
    {
      id: 3,
      title: 'Age : ',
      description: '22 Years',
    },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'Indian',
    },
  
    // {
    //   id: 5,
    //   title: 'Freelance : ',
    //   description: 'Available',
    // },
  
    // {
    //   id: 6,
    //   title: 'Address : ',
    //   description: 'India',
    // },
  
    {
      id: 7,
      title: 'Phone : ',
      description: '+91 6200110253',
    },
  
    {
      id: 8,
      title: 'Email : ',
      description: 'ambasthaarunima0512@gmail.com',
    },
  
    {
      id: 9,
      title: 'LinkedIn : ',
      description: 'Arunima Ambastha',
      link:'https://www.linkedin.com/in/arunima-ambastha-486667229/'
    },
  
    // {
    //   id: 10,
    //   title: 'Langages : ',
    //   description: 'French, English',
    // },
  ];
  
  export const stats = [
    {
      id: 1,
      no: '2',
      title: 'Years of <br /> Experience',
    },
  
    {
      id: 2,
      no: '15+',
      title: 'Completed <br /> Projects',
    },
  
    // {
    //   id: 3,
    //   no: '81+',
    //   title: 'Happy <br /> Customers',
    // },
  
    // {
    //   id: 4,
    //   no: '53+',
    //   title: ' Awards <br /> Won',
    // },
  ];
  
  export const resume = [
    {
      id: 1,
      category: 'experience',
      icon: <FaBriefcase />,
      year: 'May 2024 - PRESENT',
      title: 'Tech & Product Intern <span> SecureDApp  </span>',
      desc: 'Leveraged skills in software development, blockchain technology, and product management. Developed and managed Web3-focused blockchain products, with a specialization in the Algorand blockchain. Engaged in full product development cycles and focused on frontend development to enhance user experience.',
    },
  
    {
      id: 2,
      category: 'experience',
      icon: <FaBriefcase />,
      year: 'May 2024 - PRESENT',
      title: 'Open Source Contributor <span> GirlScript Summer of Code </span>',
      desc: 'Contributed to open source projects, focusing on software development and improving codebases. Collaborated with the community to develop and implement new features, fix bugs, and enhance documentation. Gained hands-on experience in project management and version control systems.',
    },
  
    {
      id: 3,
      category: 'experience',
      icon: <FaBriefcase />,
      year: 'Aug 2023 - June 2024',
      title: 'Chapter Lead <span> Google Developer Students Club </span>',
      desc: 'Demonstrated strong leadership by managing and delegating tasks to foster an inclusive community of student developers. Organized workshops and hosted over 15 events, including competitions, hackathons, and speaker sessions, reaching over 10,000 students across India. Proficient in team leadership, communication, technical support, event planning, management, and networking.',
    },
    {
      id: 4,
      category: 'experience',
      icon: <FaBriefcase />,
      year: 'April 2023 - July 2023',
      title: 'Frontend Developer Intern <span> 3Ming.Space </span>',
      desc: 'Developed the companys main website using ReactJs, Redux, JavaScript, and TailwindCSS. Collaborated with team members via Git, contributing to backend development and task assignments. Improved Google Search ranking by 40% through SEO optimizations.',
    },
    {
      id: 5,
      category: 'experience',
      icon: <FaBriefcase />,
      year: 'Jan 2023 - May 2023',
      title: 'Student Volunteer <span> DRISTI NGO</span>',
      desc: 'Worked on fostering rural welfare by implementing programs to improve education for children and healthcare, and empowering women through skill development and awareness programs. Collaborated with local communities and stakeholders to identify needs, develop initiatives, and measure impact.',
    },
  
    {
      id: 6,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2021 - 2025',
      title: 'Bachelors in Technology <span> Birla Institute of Technology, Mesra </span>',
      desc: 'Pursuing BTech in Computer Science & Engg.',
    },
  
    {
      id: 7,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2020',
      title: 'Senior Secondary  <span> Chinmaya Vidyalaya (CBSE), Bokaro  </span>',
      desc: 'Completed my 12Th in Physics, Chemistry & Mathematics from Chinmaya Vidyalaya.',
    },
  
    {
      id: 8,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2018',
      title: 'Secondary <span> Chinmaya Vidyalaya (CBSE), Bokaro </span>',
      desc: 'Completed my 10Th from Chinmaya Vidyalaya.',
    },
  ];
  
  export const skills = [
    {
      id: 1,
      title: 'MERN Stack',
      percentage: '80',
    },
  
    {
      id: 2,
      title: 'Vanilla Javascript',
      percentage: '70',
    },
  
    // {
    //   id: 3,
    //   title: 'CSS',
    //   percentage: '70',
    // },
  
    {
      id: 4,
      title: 'Tailwind CSS ',
      percentage: '70',
    },
  
    {
      id: 5,
      title: 'Bootstrap',
      percentage: '95',
    },
  
    {
      id: 6,
      title: 'Jquery',
      percentage: '50',
    },
  
    // {
    //   id: 7,
    //   title: 'MongoDB',
    //   percentage: '65',
    // },
  
    // {
    //   id: 8,
    //   title: 'React',
    //   percentage: '45',
    // },
    // {
    //   id: 9,
    //   title: 'Express JS',
    //   percentage: '45',
    // },
    // {
    //   id: 10,
    //   title: 'Node JS',
    //   percentage: '45',
    // },
    {
      id: 10,
      title: 'C',
      percentage: '60',
    },
    {
      id: 10,
      title: 'Java',
      percentage: '85',
    },
    {
      id: 10,
      title: 'SQL',
      percentage: '70',
    },
    {
      id: 10,
      title: 'Firebase',
      percentage: '60',
    },
    {
      id: 10,
      title: 'Rest API',
      percentage: '70',
    },
    {
      id: 10,
      title: 'GitHub',
      percentage: '78',
    },
    {
      id: 10,
      title: 'Linux',
      percentage: '50',
    },
  ];
  
  export const portfolio = [
    {
      id: 1,
      img: Work1,
      title: 'Shopper',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'E-Commerce WebApp',
        },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'MERN Stack',
        },
        {
          icon: <FiExternalLink />,
          title: 'GitHub : ',
          // desc: 'Shopper Link',
           link:'https://shorturl.at/dLE73'
        },
      ],
    },
  
    {
      id: 2,
      img: Work2, 
      title: 'CRED Clone',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'CRED Clone (Frontend)',
        },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS, Tailwind CSS',
        },
        {
          icon: <FiExternalLink />,
          title: 'GitHub: ',
          // desc: 'CRED Clone Link',
          link:'https://shorturl.at/BhQ7N'
        },
      ],
    },
  
    {
      id: 3,
      img: Work3,
      title: 'Weather Wise',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Weather App',
        },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'HTML, CSS, Javascript',
        },
        {
          icon: <FiExternalLink />,
          title: 'GitHub: ',
          link: 'https://shorturl.at/gPcHo',
        },
      ],
    },
  
    {
      id: 4,
      img: Work4,
      title: 'QR Code Generator',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Generates the QR',
        },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'HTML, CSS, Javascript',
        },
        {
          icon: <FiExternalLink />,
          title: 'GitHub : ',
          link: 'https://shorturl.at/YLMg3',
        },
      ],
    },
  
    {
      id: 5,
      img: Work5,
      title: 'TODO App',
      details: [
        {
          title: 'Project : ',
          desc: 'TODO website',
        },
        // {
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          title: 'Language : ',
          desc: 'React JS, Javascript, CSS',
        },
        {
          title: 'GitHub : ',
          link: 'https://shorturl.at/6DpkL',
        },
      ],
    },
  
    {
      id: 6,
      img: Work6,
      title: 'Tic Tac Toe',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Tic Tac Game',
        },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'JavaScript',
        },
        {
          icon: <FiExternalLink />,
          title: 'GitHub : ',
          link: 'https://shorturl.at/a0eSO',
        },
      ],
    },
    {
      id: 7,
      img: Work7,
      title: 'Calculator',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Calculator',
        },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'HTML, CSS, JavaScript',
        },
        {
          icon: <FiExternalLink />,
          title: 'GitHub : ',
          link: 'https://shorturl.at/kPnwl',
        },
      ],
    },
    {
      id: 8,
      img: Work8,
      title: 'Music Player',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Music System',
        },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'HTML, CSS, JavaScript',
        },
        {
          icon: <FiExternalLink />,
          title: 'GitHub : ',
          link: 'https://shorturl.at/S36Uy',
        },
      ],
    },
    {
      id: 9,
      img: work9,
      title: 'Random Joke Generator',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Random Joke Generator',
        },
        // {
        //   icon: <FiUser />,
        //   title: 'Client : ',
        //   desc: 'Dribble',
        // },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'HTML, CSS, JavaScript',
        },
        {
          icon: <FiExternalLink />,
          title: 'GitHub : ',
          link: 'https://shorturl.at/UrS76',
        },
      ],
    },
  ];
  
  export const themes = [
    {
      id: 1,
      img: Theme1,
      color: 'hsl(252, 35%, 51%)',
    },
  
    {
      id: 2,
      img: Theme2,
      color: 'hsl(4, 93%, 54%)',
    },
  
    {
      id: 3,
      img: Theme3,
      color: 'hsl(271, 76%, 53%)',
    },
  
    {
      id: 4,
      img: Theme4,
      color: 'hsl(225, 73%, 57%)',
    },
  
    {
      id: 5,
      img: Theme5,
      color: 'hsl(43, 74%, 49%)',
    },
  
    {
      id: 6,
      img: Theme6,
      color: 'hsl(339, 81%, 66%)',
    },
  
    {
      id: 7,
      img: Theme7,
      color: 'hsl(80, 61%, 50%)',
    },
  
    {
      id: 8,
      img: Theme8,
      color: 'hsl(19, 96%, 52%)',
    },
  
    {
      id: 9,
      img: Theme9,
      color: 'hsl(88, 65%, 43%)',
    },
  
    {
      id: 10,
      img: Theme10,
      color: 'hsl(42, 100%, 50%)',
    },
  ];
  