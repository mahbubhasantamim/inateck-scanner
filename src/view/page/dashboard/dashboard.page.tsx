import PageWrapper from "@/view/components/layout/page-wrapper"
import { useEffect, useState } from "react"

export const DashboardPage = () => {
    const [sanitizedBarcode, setSanitizedBarcode] = useState<string>("")
    const [scanning, setScanning] = useState<boolean>(false)

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (!scanning) {
                setScanning(true)
            }
            const newBarcode = event.key

            // Sanitize the new barcode directly before setting the state
            const sanitized = newBarcode.slice(1, -2)

            // Update the barcode state and sanitizedBarcode state together
            setSanitizedBarcode(sanitized)

            // Stop scanning after a short delay (end of barcode scan)
            const timeout = setTimeout(() => {
                setScanning(false)
            }, 100) // Adjust delay based on your scanner's speed

            return () => clearTimeout(timeout)
        }

        window.addEventListener("keydown", handleKeyPress)

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyPress)
        }
    }, [scanning])

    const handleBarcodeScan = (sanitizedBarcode: string) => {
        console.log("Scanned Barcode:", sanitizedBarcode)
    }

    handleBarcodeScan(sanitizedBarcode)

    return (
        <PageWrapper hideFooter>
            <div className="text-center py-4">Dashboard</div>
            <p>Barcode: {sanitizedBarcode}</p>
        </PageWrapper>
    )
}
