import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../page/home/home.page"
import LoginPage from "../page/login/login.page"
import NotFoundPage from "../page/not-found/not-found.page"
// import ProtectedRoute from "./protected.route"
import { Constant } from "@/config/constant/common.constant"
import { StaticImageList } from "@/constants/image.constant"
import { useUserStore } from "@/store/user.store"
import { PageWrapper, SidebarWrapper } from "@milon27/react-sidebar"
import { ClientsPage } from "../page/clients/clients.page"
import { DashboardPage } from "../page/dashboard/dashboard.page"
import RegisterPage from "../page/register/register.page"
import ProtectedRoute from "./protected.route"
import PublicRoute from "./public.route"
import { useSidebarController } from "./sidebar/sidebar-items"
import { RouteUrl } from "./url"

export default function RootRouter() {
    const logout = useUserStore((state) => state.logout)
    const user = useUserStore((state) => state.user)
    const { navItems } = useSidebarController()
    return (
        <>
            <SidebarWrapper
                title="Scanner"
                logoUrl={StaticImageList.EVO_LOGO_MINI}
                userName={user?.fullName}
                userImageUrl={user?.avatar ? user.avatar : Constant.DEFAULT_AVATAR}
                navItems={navItems}
                activeStyle="fill" // fill , outline
                disableCollapse
                hideBorder
                onLogOut={() => logout()}
                onLogoClick={() => {
                    window.location.replace(RouteUrl.DASHBOARD)
                }}
                onProfileImgClick={() => {}}
            >
                <BrowserRouter>
                    <Routes>
                        <Route
                            path={RouteUrl.HOME}
                            element={
                                <ProtectedRoute>
                                    <PageWrapper className="px-6">
                                        <HomePage />
                                    </PageWrapper>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path={RouteUrl.REGISTER}
                            element={
                                <PublicRoute>
                                    <RegisterPage />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path={RouteUrl.LOGIN}
                            element={
                                <PublicRoute>
                                    <LoginPage />
                                </PublicRoute>
                            }
                        />

                        <Route
                            path={RouteUrl.DASHBOARD}
                            element={
                                <ProtectedRoute>
                                    <PageWrapper className="px-0">
                                        <DashboardPage />
                                    </PageWrapper>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path={RouteUrl.LINKS}
                            element={
                                // <ProtectedRoute>
                                <PageWrapper className="px-0">
                                    <ClientsPage />
                                </PageWrapper>
                                // </ProtectedRoute>
                            }
                        />

                        <Route
                            path={RouteUrl.SETTINGS}
                            element={
                                // <ProtectedRoute>
                                <PageWrapper className="px-6">Settings</PageWrapper>
                                // </ProtectedRoute>
                            }
                        />

                        <Route path={RouteUrl.NOT_FOUND} element={<NotFoundPage />} />
                    </Routes>
                </BrowserRouter>
            </SidebarWrapper>
        </>
    )
}
