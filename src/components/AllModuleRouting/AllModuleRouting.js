import AI_Operations from "../StructuredNavbar/ITInfrastructure/Networking/LAN/AI_Operations";
import CloudManagedNetwork from "../StructuredNavbar/ITInfrastructure/Networking/LAN/CloudManagedNetwork";
import InternetBasedNetwork from "../StructuredNavbar/ITInfrastructure/Networking/LAN/IntentBasedNetwork";
import InternetOfThings from "../StructuredNavbar/ITInfrastructure/Networking/LAN/InternetOfThings";
import Routing from "../StructuredNavbar/ITInfrastructure/Networking/LAN/Routing";
import SDN from "../StructuredNavbar/ITInfrastructure/Networking/LAN/SDN";
import Switching from "../StructuredNavbar/ITInfrastructure/Networking/LAN/Switching";
import CMW_Service_Provider from "../StructuredNavbar/ITInfrastructure/Networking/ServiceProvider/CMW_Service_Provider";
import SASE from "../StructuredNavbar/ITInfrastructure/Networking/WAN/SASE";
import SD_WAN from "../StructuredNavbar/ITInfrastructure/Networking/WAN/SD-Wan";
import VirtualPrivateNetwork from "../StructuredNavbar/ITInfrastructure/Networking/WAN/VirtualPrivateNetwork";
import Cloud_Managed_Wireless from "../StructuredNavbar/ITInfrastructure/Networking/Wireless And Mobility/CloudManagedWireless";
import EnterpriseMobility from "../StructuredNavbar/ITInfrastructure/Networking/Wireless And Mobility/EnterpriseMobility";
import LocationBasedServices from "../StructuredNavbar/ITInfrastructure/Networking/Wireless And Mobility/LocationBasedServices";
import UnifiedWireless from "../StructuredNavbar/ITInfrastructure/Networking/Wireless And Mobility/UnifiedWireless";
import WIFI from "../StructuredNavbar/ITInfrastructure/Networking/Wireless And Mobility/WIFI";

export const AllModuleRouting = {
  LAN: [
    {
      id: "Lan_Routing",
      path: "/lan/routing",
      component: <Routing />,
    },
    {
      id: "Lan_Switching",
      path: "/lan/switching",
      component: <Switching />,
    },
    {
      id: "Lan_SDN",
      path: "/lan/software-Defined-networking",
      component: <SDN />,
    },
    {
      id: "Lan_CMN",
      path: "/lan/Cloud-Managed-Network",
      component: <CloudManagedNetwork />,
    },
    {
      id: "Lan_IBN",
      path: "/lan/Intent-based-Networking",
      component: <InternetBasedNetwork />,
    },
    {
      id: "Lan_AI",
      path: "/lan/AI-operations",
      component: <AI_Operations />,
    },
    {
      id: "Lan_IoT",
      path: "/lan/IoT",
      component: <InternetOfThings />,
    },
  ],
  WAN: [
    {
      id: "Wan_sD-wan",
      path: "/wan/sd-wan",
      component: <SD_WAN />,
    },
    {
      id: "Wan_SASE",
      path: "/wan/SASE",
      component: <SASE />,
    },
    {
      id: "Wan_VPN",
      path: "/wan/virtual-private-network",
      component: <VirtualPrivateNetwork />,
    },
  ],
  WAM: [
    {
      id: "Wam_wifi",
      path: "/wireless-and-mobility/wi-fi-6",
      component: <WIFI />,
    },
    {
      id: "Wam_Unified-Wireless",
      path: "/wireless-and-mobility/Unified-Wireless",
      component: <UnifiedWireless />,
    },
    {
      id: "Wam_EM",
      path: "/wireless-and-mobility/Enterprise-mobility",
      component: <EnterpriseMobility />,
    },
    {
      id: "Wam_LBS",
      path: "/wireless-and-mobility/Location-Based-Services",
      component: <LocationBasedServices />,
    },
    {
      id: "Wam_CMW",
      path: "/wireless-and-mobility/Cloud-Managed-wireless",
      component: <Cloud_Managed_Wireless />,
    },
  ],
  SERVICE_PROVIDER: [
    {
      id: "SP_CMW",
      path: "/Service-Provider/cloud-managed-wireless",
      component: <CMW_Service_Provider />,
    },
  ],
  // MISCELLANEOUS: [
  //   {
  //     id: "MISC_OOBManagement",
  //     path: "/miscellaneous/OOB-Management",
  //     component: <OOBManagement />,
  //   },
  //   {
  //     id: "MISC_AMH",
  //     path: "/miscellaneous/Automated-Monitoring-Helpdesk",
  //     component: <AMH_MISC />,
  //   },
  //   {
  //     id: "MISC_OAA",
  //     path: "/miscellaneous/Orchestration-and-Automation",
  //     component: <Orchestration_And_Automation />,
  //   },
  //   {
  //     id: "MISC_SDWANS",
  //     path: "/miscellaneous/SD-WAN-as-a-service",
  //     component: <SDWAN_Service />,
  //   },
  // ],
  // POPULAR: [
  //   {
  //     id: "P_DNA",
  //     path: "/Cisco-DNA-Center",
  //     component: <CiscoDNACenter />,
  //   },
  //   {
  //     id: "P_CUWNS",
  //     path: "/Cisco-Unified-Wireless-Network-Solution",
  //     component: <CiscoUnifiedWirelessNetworkSolution />,
  //   },
  //   {
  //     id: "P_Cisco-Meraki",
  //     path: "/Cisco-Meraki",
  //     component: <CiscoMeraki />,
  //   },
  //   {
  //     id: "P_/vmware",
  //     path: "/vmware-velo-cloud",
  //     component: <VmwareVeloCloud />,
  //   },
  //   {
  //     id: "P_/CloudGenix",
  //     path: "/CloudGenix",
  //     component: <CloudGenix />,
  //   },
  //   {
  //     id: "P_SD-WAN",
  //     path: "/Cisco-SD-WAN",
  //     component: <CiscoSDWAN />,
  //   },
  //   {
  //     id: "P_NSV",
  //     path: "/Cisco-Enterprise-NSV-Infrastructure",
  //     component: <EnterpriseNSVInfrastructure />,
  //   },
  //   {
  //     id: "P_ArubaCentral",
  //     path: "/Aruba-Central",
  //     component: <ArubaCentral />,
  //   },
  //   {
  //     id: "P_SilverPeak",
  //     path: "/Silver-Peak-SD-WAN",
  //     component: <SilverPeakSDWAN />,
  //   },
  //   {
  //     id: "P_Prisma",
  //     path: "/Prisma-SD-WAN",
  //     component: <PrismaSDWAN />,
  //   },
  // ],
};
