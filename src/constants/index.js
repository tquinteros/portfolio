import {
    mobile,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  import undefinedba from "../assets/undefined.png"
  import gmstudios from "../assets/gmstudios.png"
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
  ];
  
  
  const projects = [
    {
      
      name: "GM Studios",
      description:
        "GMStudios is a digital art platform that shows a diverse collection of digital artworks and NFTs. With a keen focus on innovation and creativity, it features a wide range of projects, including digital paintings, animations, and more",
        tags: [
          {
            name: "styledcomponents",
            color: "blue-text-gradient",
          },
          {
            name: "materialui",
            color: "green-text-gradient",
          },
          {
            name: "nextjs",
            color: "pink-text-gradient",
          },
      ],
      image: gmstudios,
      source_code_link: "https://github.com/",
      link_preview: "https://gmstudios.gg"
    },
    {
      
      name: "Undefined BA",
      description:
        "Undefined BA is an e-commerce project built with TiendaNube and enhanced with HTML, CSS, and JavaScript for an intuitive, visually appealing, and responsive shopping experience.",
        tags: [
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "orange-text-gradient",
        },
        {
          name: "tiendanube",
          color: "pink-text-gradient",
        },
      ],
      image: undefinedba,
      source_code_link: "https://github.com/",
      link_preview: "https://undefinedba.com/"
    },
    {
      name: "In Progress",
      description:
      "In Progress.",
      tags: [
        {
          name: "N/A",
          color: "blue-text-gradient",
        },
        {
          name: "N/A",
          color: "green-text-gradient",
        },
        {
          name: "N/A",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
      link_preview: "https://gmstudios.gg"
    },
    {
      name: "In Progress",
      description:
      "In Progress",
      tags: [
        {
          name: "N/A",
          color: "blue-text-gradient",
        },
        {
          name: "N/A",
          color: "green-text-gradient",
        },
        {
          name: "N/A",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      link_preview: "https://gmstudios.gg"
    },
  ];
  



  

  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];




  export { services, technologies, experiences, testimonials, projects };