import { MenuItem } from "src/app/shared/models/menu.interface";

export const adminNavMenu: MenuItem[] = [{
    name: "Home",
    url: "/admin",
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
    name: "Upload XML Documents",
    url: "/admin/xml-upload",
    mobileOnly: false
},
{
    name: "Manage Users",
    url: "/admin/manage-users",
    mobileOnly: false
},
{
    name: "Login",
    url: "/login",
    mobileOnly: true
}];