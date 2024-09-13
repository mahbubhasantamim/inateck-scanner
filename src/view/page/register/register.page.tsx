// import { StaticIconList } from "@/constants/icon.constants"
import { MyCheckBoxWithRHF } from "@/view/components/common/form/my-checkbox.comp"
// import { MySelectWithRHF } from "@/view/components/common/form/my-select.comp"
import { StaticImageList } from "@/constants/image.constant"
import ContainerSectionWrapper from "@/view/components/layout/container-section-wrapper"
import { Link } from "react-router-dom"
import MyButton from "../../components/common/form/my-button"
import { MyInputWithRHF } from "../../components/common/form/my-input.comp"
import MySpacer from "../../components/common/my-spacer"
import MyTitle from "../../components/common/my-title"
import { useRegisterController } from "./register.control"

export default function RegisterPage() {
    const { control, handleSubmit, isSubmitting } = useRegisterController()

    return (
        <ContainerSectionWrapper className="grid">
            <MySpacer className="h-14" />
            <div className="md:w-2/3 lg:w-2/5 my-auto md:m-auto md:bg-gray-50 p-10 rounded-xl relative">
                <div className="absolute -top-2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <img src={StaticImageList.EVO_LOGO} alt="" />
                </div>
                <MyTitle title="Sign Up Now" className="text-center" />
                <MySpacer className="h-4" />
                <p className="text-center text-[#556987]">Fill up your form here</p>
                <MySpacer className="h-4 md:h-6" />

                <div className="grid gap-4">
                    <MyInputWithRHF
                        control={control}
                        name="fullName"
                        type="text"
                        placeholder="Full Name"
                        className="outline-2"
                    />
                    <MyInputWithRHF control={control} name="email" type="email" placeholder="Enter Your Email" />
                    <MyInputWithRHF
                        control={control}
                        name="password"
                        type="password"
                        placeholder="Enter Your Password"
                    />
                    <MyInputWithRHF
                        control={control}
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <div>
                        <MyCheckBoxWithRHF
                            control={control}
                            name="acceptTC"
                            content={
                                <p className="text-textSecondary dark:text-textSecondaryIn-dark text-sm font-normal">
                                    I had read and accept the{" "}
                                    <Link to={""} className="underline">
                                        Terms & Conditions
                                    </Link>
                                </p>
                            }
                        />
                    </div>
                    <MyButton
                        loading={isSubmitting}
                        onClick={async () => {
                            await handleSubmit()
                        }}
                        className="w-full"
                    >
                        Sign Up
                    </MyButton>
                    <div>
                        <p className="text-textSecondary dark:text-textSecondaryIn-dark text-sm font-normal text-center">
                            Already have an account?{" "}
                            <Link to={"/login"} className="underline">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </ContainerSectionWrapper>
    )
}
