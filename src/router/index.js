

import device from '@/components/device';
import itemDevice from '@/components/itemDevice';
import applications from '@/components/applications';
import itemApplication from '@/components/itemApplication';
import currentDevice from '@/components/currentDevice';
import login from "@/components/auth/login"
import HomeComponent from "@/components/HomeComponent"
const routes = [
  {
    path: "/login",
    name: "login",
    component: login,
  },

  // bao gồm danh sách route
  {
    path: "/",
    name: "home",
    component: HomeComponent,
    redirect:{
      name:"devices",
    },
    meta: { requiresAuth: true },
    children: [
      {
        path: "/device",
        name: "devices",
        component: device,
        meta: { requiresAuth: true },
      },
    
      {
        path: "/device/item-device",
        name: "itemDevice",
        component: itemDevice,
        meta: { requiresAuth: true },
      },
      {
        path: "/application",
        name: "applications",
        component: applications,
        meta: { requiresAuth: true },
      },
      {
        path: "/item-application",
        name: "itemApplication",
        component: itemApplication,
        meta: { requiresAuth: true },
      },
      {
        path: "/current-device",
        name: "currentDevice",
        component: currentDevice,
        meta: { requiresAuth: true },
      },
    ]
  }




 
  
  
];
export default routes;