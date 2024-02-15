import Routing from "../StructuredNavbar/ITInfrastructure/Networking/LAN/Routing";
import SDN from "../StructuredNavbar/ITInfrastructure/Networking/LAN/SDN";
import Switching from "../StructuredNavbar/ITInfrastructure/Networking/LAN/Switching";
import SD_WAN from "../StructuredNavbar/ITInfrastructure/Networking/WAN/SD-Wan";

export const AllModuleRouting = {
  LAN: [{
    id: '',
    path: '/lan/routing',
    component: <Routing />

  },
  {
    id: '',
    path: '/lan/switching',
    component: <Switching />

  },
  {
    id: '',
    path: '/lan/software-Defined-networking',
    component: <SDN />

  },
  // {
  //   id: '',
  //   path: '/lan/switching',
  //   component: <Switching />

  // }
],
  WAN: [{
    id: '',
    path: '/wan/sd-wan',
    component: <SD_WAN />

  }]
}