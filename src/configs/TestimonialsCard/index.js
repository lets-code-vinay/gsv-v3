// Government
import AIRPORT from "../../assets/images/Testimonials/Government/Airport Authority Of India.png";
import DELHI_POLICE from "../../assets/images/Testimonials/Government/Delhi Police.png";
import ASSAM_POLICE from "../../assets/images/Testimonials/Government/Assam Police.avif";
import AIR_FORCE from "../../assets/images/Testimonials/Government/airForce.png";
import JKL from "../../assets/images/Testimonials/Government/JKL.jpg";
import HP from "../../assets/images/Testimonials/Government/High Court of Himachal Pradesh.png";
import INDIAN_ARMY from "../../assets/images/Testimonials/Government/Indian Army.jpg";
import JHARKHAND from "../../assets/images/Testimonials/Government/High Court of Jharkhand.png";
import UK from "../../assets/images/Testimonials/Government/Uttarakhand High Court.png";
import LAW from "../../assets/images/Testimonials/Government/National Company Law Appellate Tribunal.png";
// import High Court of Jammu & Kashmir  

// IT       
// Stardata Pty Ltd  World Possible
import BLUE_NETWORK from "../../assets/images/Testimonials/IT/Blue Network Infrastructure (Pty) Ltd.png";
import ATNIS from "../../assets/images/Testimonials/IT/Atnis Pty Ltd.jpg";
import ENSTAL from "../../assets/images/Testimonials/IT/Enstal LLC.png";
import GLOBAL_XPERT from "../../assets/images/Testimonials/IT/Globalxpert.jpg";
import GUARIDAN from "../../assets/images/Testimonials/IT/Guardian Technology Group.png";
import HYPER_SHIFT from "../../assets/images/Testimonials/IT/Hypershift.jpg";
import LMQ from "../../assets/images/Testimonials/IT/LMQ.png";
import MIDDLE_GROUND from "../../assets/images/Testimonials/IT/Middleground.png";
import TOUCH_BASE from "../../assets/images/Testimonials/IT/Touchbase.png";
import PCNC from "../../assets/images/Testimonials/IT/PCNC2000.png";
import INTRUM from "../../assets/images/Testimonials/IT/Intrum.png";
import ROYAL from "../../assets/images/Testimonials/IT/Royal Haskoning DHV.svg";
import CLOUD_REACH from "../../assets/images/Testimonials/IT/Cloudreach.webp";
import GEAR_HOST from "../../assets/images/Testimonials/IT/Gearhost.svg";
import FINAL_FRAME from "../../assets/images/Testimonials/IT/Final Frame.svg";
import VIRTUVENT from "../../assets/images/Testimonials/IT/virtuvent.png";
import WORLD_POSSIBLE from "../../assets/images/Testimonials/IT/worldPossible.png";
import VOIPED from "../../assets/images/Testimonials/IT/Voiped Wholesale.jpg";
import WELCOME from "../../assets/images/Testimonials/IT/Welcome Networks.jpg";
import STAR_DATA from "../../assets/images/Testimonials/IT/Stardata Pty Ltd.jpg";
import VGC from "../../assets/images/Testimonials/IT/VGC.png";
import ACCUSYS from "../../assets/images/Testimonials/IT/Accutron Systems.png";
import SONET_TECH from "../../assets/images/Testimonials/IT/Sonet Global Technology Limited.svg";

// Health & Education
import KAILASH_HOSPITAL from "../../assets/images/Testimonials/Health Education/Kailash Hospital.png";
import JOHN_JAY from "../../assets/images/Testimonials/Health Education/John Jay College of Criminal Justice.svg";
import UROLOGY from "../../assets/images/Testimonials/Health Education/Urology of Greater Atlanta.png";

// Hospitality
import BEST_WESTERN from "../../assets/images/Testimonials/Hospitality/BestWestern.png";
import IHG from "../../assets/images/Testimonials/Hospitality/IHG Group.png";
import OYO from "../../assets/images/Testimonials/Hospitality/Oyo Rooms.jpg";

// Retail
import LC from "../../assets/images/Testimonials/Retail/LC Waikiki.png";
import SPAR from "../../assets/images/Testimonials/Retail/spar.png";
import SEVEN_Eleven from "../../assets/images/Testimonials/Retail/7_Eleven.svg";

// Manufacturing
import GRANITIZE from "../../assets/images/Testimonials/Manufacturing/Granitize.jpg";
import BALARAMPUR_CHINI_MILL from "../../assets/images/Testimonials/Manufacturing/Balarampur Chini Mills Limited.webp";
import COLOR from "../../assets/images/Testimonials/Manufacturing/color.jpg";

/**
 * @description constants for testimonial cards
 */
export const TESTIMONIAL_CARD_DATA = {
  health_and_education: {
    label: "Health & Education",
    value: "health_and_education",
    isBlank: false,
    testimonials: {
      client_1: {
        value: "client_1",
        about: "",
        author: "",
        designation: "",
        company: "Kailash Hospital",
        image: KAILASH_HOSPITAL,
        client: "Health & Education",
      },
      client_2: {
        value: "client_2",
        about: "",
        author: "",
        designation: "",
        company: "John Jay College of Criminal Justice",
        image: JOHN_JAY,
        client: "Health & Education",
      },
      client_3: {
        value: "client_3",
        about:
          "Amazing communication, and technical knowledge. Will definitely recommend using GSV services in the future.",
        author: "Eric Davis",
        designation: "Network Admin",
        company: "Urology of Greater Atlanta",
        image: UROLOGY,
        client: "Health & Education",
      },
    },
  },
  hospitality: {
    label: "Hospitality",
    value: "hospitality",
    isBlank: false,
    testimonials: {
      client_1: {
        value: "client_1",
        about:
          "We were getting marked down by our customers for the sluggish wi-fi in our Resort. We were unsure of whom to reach out to get this fixed. One of our staff got in touch with the GSV Team and next morning they were here to assess the problem. After taking tour of the entire property, and doing signal testing, they shared a plan and budget to complete the entire task. Within 2 weeks, they laid fiber across the property and installed access points to cover entire resort. It's been few years now and we have never heard anyone complaining about internet speed or signal issue. I highly recommend their services.",
        author: "Roop Sodhi",
        designation: "Executive Director",
        company: "Best Western Resort Country Club",
        image: BEST_WESTERN,
        client: "hospitality",
      },
      client_2: {
        value: "client_2",
        about: ` We are very pleased with the service and quality of work that GSV Systems have delivered to us. They have demonstrated a high level of Cisco expertise and technical skills, as well as a strong commitment to meeting our deadlines and expectations. GSV Systems have been reliable, responsive and proactive in addressing our needs and solving any issues that arose during the project. We highly recommend GSV Systems to anyone looking for a professional and dependable Cisco partner.`,
        author: "NItin Upadhyay",
        designation: "Area Head",
        company: "IHG Group",
        image: IHG,
        client: "hospitality",
      },
      client_3: {
        value: "client_3",
        about:
          " GSV helped us with a few brilliant resources for some IT operation issues that have been bothering us for quite a long time. Their engineers were patient enough to hear us and did not jump to conclusions immediately. They asked relevant questions that made us believe we had found the right partner to help us.",
        author: "Sunil Kumar",
        designation: "IT Head",
        company: "Oyo Rooms",
        image: OYO,
        client: "hospitality",
      },
      client_4: {
        value: "client_4",
        about:
          `I am very satisfied with the quality and value of the service I received from GSV. Out of 11 contractors who submitted proposals for my project, GSV's was the most competitive and detailed.He delivered the work on time and according to the specifications we agreed on.I highly recommend GSV for anyone looking for a reliable and professional contractor.`,
        author: "Anjali tomar",
        designation: "GM Sales",
        company: "Best Western Resort Country Club",
        image: BEST_WESTERN,
        client: "hospitality",
      },
      client_5: {
        value: "client_5",
        about: "_",
        author: "",
        designation: " ",
        company: "IHG Group",
        image: IHG,
        client: "hospitality",
      },
    },
  },
  government: {
    label: "Government",
    value: "government",
    isBlank: true,
    testimonials: {
      client_1: {
        value: "client_1",
        about: `The team of engineers at GSV is highly skilled and experienced in their field. They provide excellent service and support to their clients, and they always deliver quality results.`,
        author: "Mr. Justice Mamidanna Satya Ratna Sri Ramachandra Rao",
        designation: "",
        company: "High Court of Himachal Pradesh",
        image: HP,
        client: "government",
      },
      client_2: {
        value: "client_2",
        about: "",
        author: "",
        designation: "",
        company: "High Court of Jammu & Kashmir",
        image: JKL,
        client: "government",
      },
      client_3: {
        value: "client_3",
        about: "",
        author: "",
        designation: "",
        company: "High Court of Jharkhand",
        image: JHARKHAND,
        client: "government",
      },
      client_4: {
        value: "client_4",
        about: `I have worked with this vendor for several projects and I can attest to their fantastic performance. They are trustworthy, highly skilled, and experienced in their field of expertise. They deliver high-quality results on time and within budget. They are also easy to communicate with and responsive to feedback. I highly recommend this vendor for any project that requires their services.`,
        author: "Manoj Kumar Tiwari",
        designation: "",
        company: "Uttarakhand High Court",
        image: UK,
        client: "government",
      },
      client_5: {
        value: "client_5",
        about: "-",
        author: "",
        designation: "",
        company: "National Company Law Appellate Tribunal",
        image: LAW,
        client: "government",
      },
      client_6: {
        value: "client_6",
        about: ` 
        GSV services are highly recommended due to their exceptional communication skills and extensive technical knowledge. In the future, I would definitely suggest utilizing their services.`,
        author: "Gyanendra Pratap Singh",
        designation: "Director General",
        company: "Assam Police",
        image: ASSAM_POLICE,
        client: "government",
      },
      client_7: {
        value: "client_7",
        about: "",
        author: "",
        designation: "",
        company: "Delhi Police",
        image: DELHI_POLICE,
        client: "government",
      },
      client_8: {
        value: "client_8",
        about: `We were very satisfied with the quality and efficiency of the services that Gsv delivered to us. They demonstrated a high level of professionalism and expertise in solving our problems within the agreed timeframe.
        `,
        author: "Sameer Islam",
        designation: "Commanding Officer",
        company: "Indian Army",
        image: INDIAN_ARMY,
        client: "government",
      },
      client_9: {
        value: "client_9",
        about: "",
        author: "",
        designation: "",
        company: "Airport Authority Of India",
        image: AIRPORT,
        client: "government",
      },
      client_10: {
        value: "client_10",
        about: "",
        author: "",
        designation: "",
        company: "Indian Air Force",
        image: AIR_FORCE,
        client: "government",
      },
    },
  },
  // ------ uncomment when required---
  //   financial_services: {
  //     label: "Financial Services",
  //     value: "financial_services",
  //     testimonials: {
  //       client_1: {
  //         value: "client_1",
  //         about:
  //           "Financial testimonials client_1-Fortinate's solutions have allowed us to be able to put our patients first as always and focus on satisfying their needs.",
  //         author: "Mubaraka Ibrahim,",
  //         designation: "IT Director MOHAPMministry of Health and Prevention",
  //         image: AIRPORT,
  //         client: "Financial",
  //       },
  //       client_2: {
  //         value: "client_2",
  //         about:
  //           "Financial testimonials client_2,Fortinate's solutions have allowed us to be able to put our patients first as always and focus on satisfying their needs.",
  //         author: "David Ibrahim,",
  //         designation: "IT Director MOHAPMministry of Health and Prevention",
  //         image: AIRPORT,
  //         client: "Financial",
  //       },
  //       client_3: {
  //         value: "client_3",
  //         about:
  //           " Financial testimonials client_3 -Fortinate's solutions have allowed us to be able to put our patients first as always and focus on satisfying their needs.",
  //         author: "John Ibrahim,",
  //         designation: "IT Director MOHAPMministry of Health and Prevention",
  //         image: AIRPORT,
  //         client: "Financial",
  //       },
  //       client_4: {
  //         value: "client_4",
  //         about:
  //           "Financial testimonials client_4-Fortinate's solutions have allowed us to be able to put our patients first as always and focus on satisfying their needs.",
  //         author: "Oliver Ibrahim,",
  //         designation: "IT Director MOHAPMministry of Health and Prevention",
  //         image: AIRPORT,
  //         client: "Financial",
  //       },
  //     },
  //   },
  retail: {
    label: "Retail",
    value: "retail",
    isBlank: false,
    testimonials: {
      client_1: {
        value: "client_1",
        about: `Thanks to the expertise and efficiency of GSV, we managed to resolve long-standing issues that seemed impossible to overcome. They demonstrated great flexibility, speed, thoroughness and problem-solving skills in their work. We are very satisfied with their performance and highly recommend their services.`,
        author: "VİZYON",
        designation: "CEO",
        company: "LC Waikiki",
        image: LC,
        client: "Retail",
      },
      client_2: {
        value: "client_2",
        about:
          "Fantastic vendor. Trustworthy, highly skilled and experienced team members. We've relied on them exclusively since 2013 and look forward to continuing that relationship. As IT Director of the company, I sleep better knowing GSV has got our backs 24/7/365.",
        author: "Nick Spann",
        designation: "IT Director",
        company: "7 Eleven",
        image: SEVEN_Eleven,
        client: "Retail",
      },
      client_3: {
        value: "client_3",
        about:
          "We were having Internet speed and performance issues and server issues that were not getting resolved for quite a long time. Our need for a new managed service provider was inevitable, and GSV was the perfect answer. Kudos to the GSV Team for helping us focus on the future while they handle our day-to-day operations.",
        author: "Rajesh",
        designation: "Operations Head",
        company: "Spar Hypermarket",
        image: SPAR,
        client: "Retail",
      },
      client_4: {
        value: "client_4",
        about:
          `I was very impressed by the quality of service provided by GSV. They demonstrated amazing communication skills, as they listened to my needs and expectations, and delivered the project on time and within budget. They also showed technical knowledge and expertise, as they solved the challenges and issues that arose during the project. They were always responsive, courteous and professional. I will definitely recommend using GSV services in the future to anyone who needs reliable and efficient solutions.`,
        author: "Angelo Swartz",
        designation: "CEO",
        company: "Spar",
        image: SPAR,
        client: "Retail",
      },
    },
  },
  it_infrastructure: {
    label: "IT & Infrastructure",
    value: "it_infrastructure",
    isBlank: false,
    testimonials: {
      client_1: {
        value: "client_1",
        about:
          "I was connected to GSV thru a partner when we where having difficulties with our Cisco telephony environment. With the help of GSV, we were able to fix problems that were there for years that didn't seem that could be solved. They are so flexible, fast, thorough and looking for solutions. All work could be done remotely. The time difference was never a problem. If you need assistance on your Cisco environment (network/telephony) GSV Systems are the place to be!",
        author: "Dennis Van Steenbergen",
        designation: "Product Developer",
        company: "Intrum Justitia",
        image: INTRUM,
        client: "IT",
      },
      client_2: {
        value: "client_2",
        about:
          "I work with GSV engineers under dynamic and hectic circumstances. Despite the difficult circumstances they have never let me down. They are always available  always have focus on the results. They understands how business works and have been willing to invest heavily in the relationship between our companies. I would recommend GSV Systems without any doubt.",
        author: "Marcel Snieder",
        designation: "Service Manager",
        company: "Touchbase",
        image: TOUCH_BASE,
        client: "IT",
      },
      client_3: {
        value: "client_3",
        about:
          "I engaged GSV Systems to fulfill a client support requirement. They provided me with the resources to align with my requirements. They also recognized the strategic value of our partnership, which allowed me to present some very competitive pricing back to my client. On the back of this I was able to bring a valued support partner into the Touchbase portfolio who have constantly delivered value to our clients. I highly recommend GSV Systems.",
        author: "Hamish Macewan,",
        designation: "Project Manager",
        company: "Touchbase",
        image: TOUCH_BASE,
        client: "IT",
      },
      client_4: {
        value: "client_4",
        about: `I found GSV engineers very knowledgeable, easily accessible and patient. Awesome people to work with. I highly recommend their services.
        `,
        author: "Jag Barpagga",
        designation: "Partner",
        company: "Welcome Networks",
        image: WELCOME,
        client: "IT",
      },
      client_5: {
        value: "client_5",
        about: "",
        author: "",
        designation: "",
        company: "VGC IT",
        image: VGC,
        client: "IT",
      },
      client_6: {
        value: "client_6",
        about: "",
        author: "",
        designation: "",
        company: "Hypershift",
        image: HYPER_SHIFT,
        client: "IT",
      },
      client_7: {
        value: "client_7",
        about: "Great job as always working with Vishnu and his team!",
        author: "Issac Sajjad",
        designation: "Chief Technologist",
        company: "Middleground Technologies",
        image: MIDDLE_GROUND,
        client: "IT",
      },
      client_8: {
        value: "client_8",
        about: "",
        author: " -",
        designation: "",
        company: "PCNC2000",
        image: PCNC,
        client: "IT",
      },
      client_9: {
        value: "client_9",
        about: "",
        author: "",
        designation: "",
        company: "Royal Haskoning DHV",
        image: ROYAL,
        client: "IT",
      },
      client_10: {
        value: "client_10",
        about: "",
        author: "",
        designation: "",
        company: "Final Frame",
        image: FINAL_FRAME,
        client: "IT",
      },
      client_11: {
        value: "client_11",
        about:
          "GSV engages skilled resources that leave larger firms, which leads to a highly-qualified team. We got better results than expected.",
        author: "Julia Shacklock",
        designation: "Head of Information Technology",
        company: "Cloudreach",
        image: CLOUD_REACH,
        client: "IT",
      },
      client_12: {
        value: "client_12",
        about: "",
        author: "",
        designation: "",
        company: "Gearhost",
        image: GEAR_HOST,
        client: "IT",
      },
      client_13: {
        value: "client_13",
        about:
          "GSV Systems have provided outstanding Cisco expertise, and have been very dependable",
        author: "Lewis Quin",
        designation: "Owner",
        company: "LMQ Technologies",
        image: LMQ,
        client: "IT",
      },
      client_14: {
        value: "client_14",
        about: "",
        author: "",
        designation: "",
        company: "Virtuvent",
        image: VIRTUVENT,
        client: "IT",
      },
      client_15: {
        value: "client_15",
        about: "",
        author: "",
        designation: "",
        company: "Accutron Systems",
        image: AIRPORT,
        client: "IT",
      },
      client_16: {
        value: "client_16",
        about: "",
        author: "",
        designation: "",
        company: "Guardian Technology Group",
        image: GUARIDAN,
        client: "IT",
      },
      client_17: {
        value: "client_17",
        about:
          "Well worth the price. I had 11 contractors submit proposals and GSV's was the best. He executed as agreed.",
        author: "Jeremy Schwartz",
        designation: "Executive Director",
        company: "World Possible",
        image: WORLD_POSSIBLE,
        client: "IT",
      },
      client_18: {
        value: "client_18",
        about: "",
        author: "",
        designation: "",
        company: "Voiped Wholesale",
        image: VOIPED,
        client: "IT",
      },
      client_19: {
        value: "client_19",
        about:
          "GSV engineers are very professional. Very responsive and knows what they are doing. I highly recommend their services. They are always my favourites for any networking related projects.",
        author: "Maria",
        designation: "Project Manager",
        company: "Sonet Global Technology Limited",
        image: AIRPORT,
        client: "IT",
      },
      client_20: {
        value: "client_20",
        about: "",
        author: "",
        designation: "",
        company: "Enstal LLC",
        image: ENSTAL,
        client: "IT",
      },
      client_21: {
        value: "client_21",
        about: "",
        author: "",
        designation: "",
        company: "Atnis Pty Ltd",
        image: ATNIS,
        client: "IT",
      },
      client_22: {
        value: "client_22",
        about: "",
        author: "",
        designation: "",
        company: "Stardata Pty Ltd",
        image: STAR_DATA,
        client: "IT",
      },
      client_23: {
        value: "client_23",
        about:
          "I found GSV engineers very knowledgeable, easily accessible and patient. Awesome people to work with. I highly recommend their services.",
        author: "Jag Barpagga",
        designation: "Partner",
        company: "Welcome Networks",
        image: WELCOME,
        client: "IT",
      },
      client_24: {
        value: "client_24",
        about:
          "GSV has always been a reliable partner for us. They have delivered beyond expectations not just once but everytime we have engaged them. They have the right team in the right time zone and most importantly in the right cost.",
        author: "Debbie Lane",
        designation: "Product Manager",
        company: "Blue Network Infrastructure (Pty) Ltd",
        image: BLUE_NETWORK,
        client: "IT",
      },
      client_25: {
        value: "client_25",
        about:
          "I hired GSV for an issue with my company's firewall. They had a very quick response time,very quick turn-around to get the work done, all at a very good value. I definitely will use their services in the future.",
        author: "Joseph Bartoli",
        designation: "IT Director",
        company: "Granitize",
        image: GRANITIZE,
        client: "IT",
      },
      client_26: {
        value: "client_26",
        about:
          `GSV have talented network engineers. They have a great technical understanding of firewalling and security`,
        author: "Dale Rogerson",
        designation: "Technical Lead",
        company: "Server Space",
        image: GRANITIZE,
        client: "IT",
      },
    },
  },
  manufacturing: {
    label: "Manufacturing",
    value: "manufacturing",
    isBlank: false,
    testimonials: {
      client_1: {
        value: "client_1",
        about:
          "I hired GSV for an issue with my company's firewall. They had a very quick response time,very quick turn-around to get the work done, all at a very good value. I definitely will use their services in the future.",
        author: "Joseph Bartoli",
        designation: "IT Director",
        company: "Granitize",
        image: GRANITIZE,
        client: "Manufacturing",
      },
      client_2: {
        value: "client_2",
        about: "",
        author: "",
        designation: "",
        company: "Balarampur Chini Mills Limited",
        image: BALARAMPUR_CHINI_MILL,
        client: "Manufacturing",
      },
      client_3: {
        value: "client_3",
        about:
          "Our requirement was quite complex and 3 companies we contacted earlier Defined the possibility of getting that to work. With less hope, we reached out to GSV but on the very first call they captured entire requirement and by early next morning, I had an email from them with the solution. They made it look so so simple. What a great team they have! Highly recommended!",
        author: "Syed Umair",
        designation: "Group Head of IT",
        company: "The Color Company",
        image: COLOR,
        client: "Manufacturing",
      },
    },
  },
};
