import { IResponse } from "../_common/common.dto"
import { ApiService } from "../api.service"
import { ICurrentUser } from "../login/login.dto"
import { IAddUser } from "./register.dto"
import { IRegisterWithEmailSchema } from "./register.schema"

export const RegisterService = {
    registerWithEmail: async (schema: IRegisterWithEmailSchema) => {
        const dto: IAddUser = {
            username: schema.userName,
            fullname: schema.fullName,
            email: schema.email,
            password: schema.password,
            org: schema.organization,
            mobile: schema.mobile,
            roleid: schema.role,
        }
        const { data } = await ApiService.post<IResponse<ICurrentUser>>("/api/v1/users/register", dto)
        return data
    },
}
