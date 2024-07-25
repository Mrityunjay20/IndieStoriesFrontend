import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
const buttons1 = [
    { name: "Home", link: "/" },
    { name: "Our Stori", link: "/ourstori" },
    { name: "Our Impact", link: "/ourimpact" },
  ];
  const buttons2 = [
    { name: "Shop", link: "/shop" },
    { name: "Connect", link: "/connect" },
    { name: "Blog", link: "#" }
  ];
const socialMediaLinks = [
    { href: "#", iconClass: "fa-brands fa-instagram" },
    { href: "#", iconClass: "fa-brands fa-facebook-f" },
    { href: "#", iconClass: "fa-brands fa-linkedin" },
    { href: "#", iconClass: "fa-brands fa-youtube" }
  ];
  const footerInformation = [
    { name: "Our Stori", href: "/ourstori" },
    { name: "Connect", href: "/connect" },
    { name: "Terms of Service", href: "#" },
    { name: "Refunds Cancellations", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "Shipping Policy", href: "#" }
  ];
  
  const footerDiscover = [
    { name: "Our Impact", href: "/ourimpact" },
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "#" }
  ];
  const cardsData = [
    {
      bgColor: 'pink-500',
      buttonColor: 'customYellow',
      title: 'Get 10% off on Vegetables',
      description: 'Shop our selection of organic fresh vegetables at a discounted price. 10% off on all vegetables.',
    },
    {
      bgColor: 'customYellow',
      buttonColor: 'pink-500',
      title: 'Get 10% off on Vegetables',
      description: 'Shop our selection of organic fresh vegetables at a discounted price. 10% off on all vegetables.',
    },
    {
      bgColor: 'pink-500',
      buttonColor: 'customYellow',
      title: 'Get 10% off on Vegetables',
      description: 'Shop our selection of organic fresh vegetables at a discounted price. 10% off on all vegetables.',
    },
  ];
  
  const cards = [
    {
      id: 1,
      title: 'Vegetables',
      subtitle: 'Subtitle 1',
      image: 'https://via.placeholder.com/300'
    },
    {
      id: 2,
      title: 'Fresh Fruits',
      subtitle: 'Subtitle 2',
      image: 'https://via.placeholder.com/300'
    },
    {
      id: 3,
      title: 'Nuts & dried food',
      subtitle: 'Subtitle 3',
      image: 'https://via.placeholder.com/300'
    },
    {
      id: 4,
      title: 'Spices',
      subtitle: 'Subtitle 4',
      image: 'https://via.placeholder.com/300'
    }
  ];


const ourStoriInfo = [
    {
        img: img1, 
        title: 'Produce', 
        description: 'We directly source from the Farmers & help them increase the production.'
    },
    {
        img: img1, 
        title: 'Promote', 
        description: 'We promote 100% Authentic Native Products produced by nature & nurtured by humans.'
    },
    {
        img: img1, 
        title: 'Preserve', 
        description: 'We help preserve the Ancient Traditional & Sustainable Techniques.'
    },
    {
        img: img1, 
        title: 'Protect', 
        description: 'We help protect the Environment ethically & maintain ecological balance.'
    }
];
const slides = [img1, img1, img1];



  const testimonials = [
    {
      image: img1,
      paragraph: "‘’Tempor incididunt ut labore et dolore magna aliquat enim veniam quis nostru exercitation ullamco laboris nis aliquip.’’",
      heading1: "Sinira Fro",
      heading2: "Managing Director",
    },
    {
      image: img2,
      paragraph: "‘’Tempor incididunt ut labore et dolore magna aliquat enim veniam quis nostru exercitation ullamco laboris nis aliquip.’’",
      heading1: "Sinira Fro",
      heading2: "Managing Director",
    },
    {
      image: img3,
      paragraph: "‘’Tempor incididunt ut labore et dolore magna aliquat enim veniam quis nostru exercitation ullamco laboris nis aliquip.’’",
      heading1: "Sinira Fro",
      heading2: "Managing Director",
    },
    {
        image: img2,
        paragraph: "‘’Tempor incididunt ut labore et dolore magna aliquat enim veniam quis nostru exercitation ullamco laboris nis aliquip.’’",
        heading1: "Sinira Fro",
        heading2: "Managing Director",
      },
  ];
  const upcomingData = [
    { image: img1, heading: "Heading One" },
    { image: img2, heading: "Heading Two" },
    { image: img3, heading: "Heading Three" },
    { image: img1, heading: "Heading Four" },
  ];
  const blogData = [
    {
      image: img1,
      category: "Organic Food",
      date: "1/17/2021",
      title: "What Should Know About Detox Water",
      link: "#",
    },
    {
      image: img1,
      category: "Organic Food",
      date: "1/17/2021",
      title: "What Should Know About Detox Water",
      link: "#",
    },
    {
      image: img1,
      category: "Organic Food",
      date: "1/17/2021",
      title: "What Should Know About Detox Water",
      link: "#",
    },
  ];
const team = [
    {
        img: img1, 
        title: 'Jasmine Susan Jose', 
        description: 'Director, Operations'
    },
    {
        img: img1, 
        title: 'Jasmine Susan Jose', 
        description: 'Director, Operations'
    },
    {
        img: img1, 
        title: 'Jasmine Susan Jose', 
        description: 'Director, Operations'
    },
    {
        img: img1, 
        title: 'Jasmine Susan Jose', 
        description: 'Director, Operations'
    },
    {
        img: img1, 
        title: 'Jasmine Susan Jose', 
        description: 'Director, Operations'
    },
    {
        img: img1, 
        title: 'Jasmine Susan Jose', 
        description: 'Director, Operations'
    },
];

const partners = [
  {
      img: img1, 
      title: 'Aikya Pictures', 
  },
  {
      img: img1, 
      title: 'The Dais', 
  },
  {
      img: img1, 
      title: 'Tears of Earth', 
  },
];

const products = [
    {
      name: 'Orange Juice',
      price: '$10.00-$20.00',
      rating: 5,
      image: img1
    },
    {
      name: 'Orange Juice',
      price: '$10.00-$20.00',
      rating: 2,
      image: img3
    },
    {
      name: 'Orange Juice',
      price: '$10.00-$20.00',
      rating: 4,
      image: img2
    },
    {
      name: 'Orange Juice',
      price: '$10.00-$20.00',
      rating: 5,
      image: img1
    },
    {
      name: 'Orange Juice',
      price: '$10.00-$20.00',
      rating: 5,
      image: img3
    },
    {
      name: 'Orange Juice',
      price: '$10.00-$20.00',
      rating: 5,
      image: img2
    },
    {
      name: 'Orange Juice',
      price: '$10.00-$20.00',
      rating: 5,
      image: img3
    },
    {
      name: 'Orange Juice',
      price: '$10.00-$20.00',
      rating: 5,
      image: img1
    },
    // Add more products as needed
  ];
 const metricsData = [
    {
      id: 1,
      imageSrc: img1,
      endValue: 5000,
      startValue: 1000,
      description: 'Satisfied Clients',
      timer: 20,
    },
    {
      id: 2,
      imageSrc: img2,
      endValue: 50,
      startValue: 0,
      description: 'Farmers Impacted',
      timer: 65,
    },
    {
      id: 3,
      imageSrc: img3,
      endValue: 5000,
      startValue: 0,
      description: 'Customers',
      timer: 20,
    },
    {
      id: 4,
      imageSrc: img1,
      endValue: 5000,
      startValue: 0,
      description: 'Customers',
      timer: 20,
    },
  ];

export { buttons1,buttons2, socialMediaLinks, footerInformation,cardsData, cards,blogData, slides,testimonials,upcomingData, footerDiscover, ourStoriInfo, team, partners, products, metricsData };
  