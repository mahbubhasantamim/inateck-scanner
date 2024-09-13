import { ZodEmailString, ZodNameString, ZodPasswordString } from "@/utils/zod.util"
import { z } from "zod"

export const RegisterWithEmailSchema = z
    .object({
        fullName: ZodNameString,
        email: ZodEmailString,
        password: ZodPasswordString,
        confirmPassword: ZodPasswordString,
        acceptTC: z.boolean().refine((checked) => checked === true, {
            message: "It's required",
        }),
    })
    .strict()
    .refine((data) => data.password === data.confirmPassword, {
        message: "Password don't match.",
        path: ["confirmPassword"],
    })

export type IRegisterWithEmailSchema = z.infer<typeof RegisterWithEmailSchema>
