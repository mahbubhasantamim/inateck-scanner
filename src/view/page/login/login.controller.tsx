import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { ILoginWithEmailDto, LoginWithEmailDto } from "../../../service/login/login.dto"
import { useUserStore } from "../../../store/user.store"
import { ErrorUtil } from "../../../utils/error.util"

export const useLoginController = () => {
    const [loading, setLoading] = useState(false)
    const setCurrentUser = useUserStore((state) => state.setCurrentUser)

    const { control, handleSubmit } = useForm<ILoginWithEmailDto>({
        resolver: zodResolver(LoginWithEmailDto),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (input: ILoginWithEmailDto) => {
        try {
            // const userResponse = await LoginService.loginWithEmail(input)

            console.log(input)

            setCurrentUser({
                id: "1",
                fullName: "string",
                email: "string",
                gender: "string",
                avatar: "string",
                isEmailVerified: false,
                lastLoggedIn: new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            toast("successfully login")
        } catch (error) {
            console.error("login with email:onSubmit:->", error)
            const message = ErrorUtil.getErrorMessage(error as Error).message
            toast(message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, control, handleSubmit: handleSubmit(onSubmit) }
}
