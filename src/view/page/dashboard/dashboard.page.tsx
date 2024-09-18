import PageWrapper from "@/view/components/layout/page-wrapper"
import { useState } from "react"
import useScanDetection from "use-scan-detection"

export const DashboardPage = () => {
    const [barcode, setBarcode] = useState<String>("")

    useScanDetection({
        onComplete: (code: String) => {
            setBarcode(code)
        },
        minLength: 3,
    })

    return (
        <PageWrapper hideFooter>
            <div className="text-center py-4">Dashboard</div>
            <p>Barcode: {barcode}</p>
        </PageWrapper>
    )
}
