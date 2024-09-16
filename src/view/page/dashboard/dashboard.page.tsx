import PageWrapper from "@/view/components/layout/page-wrapper"
import { ScannerManager } from "inateck-scanner-js-sdk"
import { SetStateAction, useEffect, useState } from "react"

export const DashboardPage = () => {
    const [data, setData] = useState<SetStateAction<any>>()

    useEffect(() => {
        const connectScanner = async () => {
            try {
                await ScannerManager.initialize({ androidNeverForLocation: true })
                ScannerManager.startScan()
                    .then((list) => {
                        if (list.length > 0) {
                            const appInfo = {
                                appId: "M693be162686a",
                                developerId: "bb57d8e1-f911-47ba-b510-693be162686a",
                                appKey: "MC0CFQC85w0MsxDng4wHBICX7+iCOiSqfAIUdSerA4/MJ2kYBGAGgIG/YHemNr8=",
                            }
                            ScannerManager.connect(list[0].device.deviceId, appInfo, (value) => {
                                console.log(value)
                                setData(value.data)
                            })
                                .then((data) => {
                                    console.log(data)
                                    ScannerManager.getBasicProperties(
                                        list[0].device.deviceId,
                                        "firmware_version"
                                    ).then((data) => {
                                        console.log("firmware_version " + data)
                                    })
                                    ScannerManager.getBasicProperties(list[0].device.deviceId, "battery").then(
                                        (data) => {
                                            console.log("readBatteryLevel " + data)
                                        }
                                    )
                                })
                                .catch((err) => {
                                    console.error(err)
                                })
                        }
                    })
                    .catch((err) => {
                        console.error(err)
                    })
            } catch (error) {
                console.error(error)
            }
        }
        connectScanner()
    }, [])

    return (
        <PageWrapper hideFooter>
            <div className="text-center py-4">Dashboard</div>
            <p>Barcode: {data}</p>
        </PageWrapper>
    )
}
