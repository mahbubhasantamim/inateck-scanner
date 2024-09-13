import MyHeader from "../common/my-header"

interface IPageWrapper {
    hideHeader?: boolean
    hideFooter?: boolean
    children: React.ReactNode
}

export default function PageWrapper({ children, hideHeader = false, hideFooter = false }: IPageWrapper) {
    return (
        <div>
            {!hideHeader && <MyHeader />}
            {children}
            {!hideFooter && "Footer"}
        </div>
    )
}
