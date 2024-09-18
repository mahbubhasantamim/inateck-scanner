import PageWrapper from "@/view/components/layout/page-wrapper"
import { useSymbologyScanner } from "@use-symbology-scanner/react"
import { useState } from "react"

export const DashboardPage = () => {
    const [barcode, setBarcode] = useState<string>("")

    const handleSymbol = (symbol: string) => {
        setBarcode(symbol)
        console.log(`Scanned ${symbol}`)
    }

    useSymbologyScanner(handleSymbol)

    return (
        <PageWrapper hideFooter>
            <div className="text-center py-4">Dashboard</div>
            <p>Barcode: {barcode}</p>
        </PageWrapper>
    )
}
