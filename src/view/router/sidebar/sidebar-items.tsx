import { createReactNavLink } from "@milon27/react-sidebar"
import { Home, Settings, Users } from "lucide-react"
import { NavLink } from "react-router-dom"
import { RouteUrl } from "../url"

export const useSidebarController = () => {
    const navItems: (() => JSX.Element)[] = [
        createReactNavLink(NavLink, "Dashboard", `${RouteUrl.DASHBOARD}`, <Home size={18} />),
        createReactNavLink(NavLink, "Links", `${RouteUrl.LINKS}`, <Users size={18} />),
        createReactNavLink(NavLink, "Settings", `${RouteUrl.SETTINGS}`, <Settings size={18} />),
    ]

    return {
        navItems,
    }
}
