import PageWrapper from "@/view/components/layout/page-wrapper"
import { useDashboardController } from "./dashboard.controller"

export const DashboardPage = () => {
    const { connectScanner, data } = useDashboardController()
    connectScanner()
    return (
        <PageWrapper hideFooter>
            <div className="text-center py-4">Dashboard</div>
            <p>{data}</p>
        </PageWrapper>
    )
}
