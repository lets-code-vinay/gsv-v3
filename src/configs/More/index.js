import AboutPageImage from "../../assets/images/aboutPage.png";
import ContactImage from "../../assets/images/contact-us.svg";

// industries images
import PublicSector from "../../assets/images/industriesData/PublicSector.png";
import Education from "../../assets/images/industriesData/education.png";
import Hospitality from "../../assets/images/industriesData/hospitality.png";
import InformationTechnology from "../../assets/images/industriesData/informationTechnology.png";
import Pharmaceutical from "../../assets/images/industriesData/pharmacueticals.png";

// our clients images
import AirportAuthority from "../../assets/images/Testimonials/Government/airportAuthority.png";
import IndianArmy from "../../assets/images/Testimonials/Government/IndianArmy.png";
import BestWestern from "../../assets/images/Testimonials/Hospitality/BestWestern.png";
import EljayEngineering from "../../assets/images/Testimonials/eljayEngineering.png";
import Granitize from "../../assets/images/Testimonials/Manufacturing/granitize.png";
import IBM from "../../assets/images/Testimonials/IT/ibm.png";
import PODAR from "../../assets/images/Testimonials/podar_judicial.png";
import TechBServer from "../../assets/images/Testimonials/techBserver.png";
import TouchBase from "../../assets/images/Testimonials/IT/Touchbase.jpg";
import UAE_Ministry from "../../assets/images/Testimonials/uae_Ministry.png";

export const IndustriesCardData = [
  {
    id: 1,
    img: PublicSector,
  },
  {
    id: 2,
    img: Education,
  },
  {
    id: 3,
    img: Hospitality,
  },
  {
    id: 4,
    img: InformationTechnology,
  },
  {
    id: 5,
    img: Pharmaceutical,
  },
];

export const OUR_CLIENTS_DATA = [
  {
    id: 1,
    img: AirportAuthority,
  },
  {
    id: 2,
    img: IndianArmy,
  },
  {
    id: 3,
    img: BestWestern,
  },
  {
    id: 4,
    img: EljayEngineering,
  },
  {
    id: 5,
    img: Granitize,
  },
  {
    id: 6,
    img: IBM,
  },
  {
    id: 7,
    img: PODAR,
  },
  {
    id: 8,
    img: TechBServer,
  },
  {
    id: 9,
    img: TouchBase,
  },
  {
    id: 10,
    img: UAE_Ministry,
  },
];

export const SideMenu = {
  about_us: {
    id: 1,
    value: "about_us",
    type: "image_text",
    className: "commonClass",
    label: "About Us",
    path: "/about",
    title: "About Us",
    subtitle: `We are growing as a leading information and communication service
    provider and we help organizations in developing next generation
    infrastructure which keeps them operational without any
    disruption. We Design, Deliver & Manage Services that helps our
    customers in improving their customer experience, empower their
    people, create competitive edge and immediately respond to
    changing scenario. We Design, Deliver & Manage Services that helps
    our customers in improving their customer experience, empower
    their people, create competitive edge and immediately respond to
    changing scenario.`,
    image: AboutPageImage,
    alt: "About Us",
  },
  why_choose_us: {
    id: 2,
    value: "why_choose_us",
    type: "image_text_list",
    className: "commonClass",
    label: "Why Choose Us",
    path: "/whyChoose",
    title: "Why Choose Us",
    subtitle: `
    We are growing as a leading information and communication service
    provider and we help organizations in developing next generation
    infrastructure which keeps them operational without any disruption.
    We Design, Deliver & Manage Services that helps our customers in
    improving their customer experience, empower their people, create
    competitive edge and immediately respond to changing scenario. We
    Design, Deliver & Manage Services that helps our customers in
    improving their customer experience, empower their people, create
    competitive edge and immediately respond to changing scenario.
    `,
    image: AboutPageImage,
    alt: "Why Choose us",
    listTitle: "Technology Expense Management and solution",
    list: [
      `Some random text here1 `,
      "Some random text here2",
      "Some random text here3",
      "Some random text here4",
      "Some random text here5",
    ],
  },
  industries: {
    id: 3,
    value: "industries",
    type: "grid",
    className: "commonClass",
    label: "Industries",
    title: "Industries",
    path: "/industries",
    data: IndustriesCardData,
  },
  our_presence: {
    id: 4,
    value: "our_presence",
    type: "map",
    className: "commonClass",
    label: "Our Presence",
    path: "/about",
    title: "Our Presence",
  },
  our_customers: {
    id: 5,
    value: "our_customers",
    type: "grid",
    className: "commonClass",
    label: "Our Customers",
    path: "/about",
    data: OUR_CLIENTS_DATA,
    title: "Our Customers",
  },
  blog: {
    id: 6,
    value: "blog",
    type: "coming_soon",
    className: "commonClass",
    label: "Blog",
    title: "Blog",
    path: "/blogs",
  },
  career: {
    id: 7,
    value: "career",
    type: "coming_soon",
    className: "commonClass",
    label: "Career",
    title: "Career",
    path: "/career",
  },
  contact_us: {
    id: 8,
    type: "contact",
    value: "contact_us",
    className: "commonClass",
    label: "Contact Us",
    title: "Contact Us",
    path: "/contact",
    image: ContactImage,
  },
};
