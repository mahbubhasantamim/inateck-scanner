import MyButton from "@/view/components/common/form/my-button"
import PageWrapper from "@/view/components/layout/page-wrapper"
import { QRCodeSVG } from "qrcode.react"
import { useRef } from "react"
import { useReactToPrint } from "react-to-print"

export const DashboardPage = () => {
    const contentRef = useRef<HTMLDivElement>(null)
    const reactToPrintFn = useReactToPrint({
        contentRef: contentRef,
        pageStyle: `@media print {
            @page {
                margin: 30px;
            }
          }`,
    })

    return (
        <PageWrapper hideFooter>
            <div className="py-4 px-6">
                <h2 className="text-center">Dashboard</h2>

                <p className="py-3">QR Code: </p>

                <div ref={contentRef}>
                    <QRCodeSVG value="test qr" />
                </div>
                <div className="my-4">
                    <MyButton onClick={() => reactToPrintFn()}>Print</MyButton>
                </div>
            </div>
        </PageWrapper>
    )
}
