import { MenuItem } from "src/app/shared/models/menu.interface";

export const userNavMenu: MenuItem[] = [{
    name: "Home",
    url: "/",
    mobileOnly: false
},
{
    name: "Classes",
    url: "/classes",
    mobileOnly: false
},
{
    name: "Trainers",
    url: "/trainers",
    mobileOnly: false
},
{
    name: "Timetable",
    url: "/timetable",
    mobileOnly: false
},
{
    name: "Contact Us",
    url: "/contacts",
    mobileOnly: false
},
{
    name: "Login",
    url: "/login",
    mobileOnly: true
}];