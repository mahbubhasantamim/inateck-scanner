import { IRegisterWithEmailSchema, RegisterWithEmailSchema } from "@/service/register/register.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export const useRegisterController = () => {
    // const { setCurrentUser } = useUserStore()

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        // reset,
    } = useForm<IRegisterWithEmailSchema>({
        resolver: zodResolver(RegisterWithEmailSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            acceptTC: false,
        },
    })

    const onSubmit = async (input: IRegisterWithEmailSchema) => {
        console.log(input)

        // try {
        //     const userResponse = await RegisterService.registerWithEmail(input)

        //     if (userResponse.responseCode === StatusCode.OK) {
        //         localStorage.setItem(KeyConstant.USER_LOCAL_STORAGE, JSON.stringify(userResponse))
        //         setCurrentUser(userResponse.data)
        //         toast("Operation successfully")
        //         reset()
        //     }
        // } catch (error) {
        //     console.error("register with email:onSubmit:->", error)
        //     const message = ErrorUtil.getErrorMessage(error as Error).message
        //     toast(message)
        // }
    }

    return { control, handleSubmit: handleSubmit(onSubmit), isSubmitting }
}
