import { RoleEnum } from "../enums/role.enum";
import { IBase } from "./base.interface";

interface IUser extends IBase {
    _id: string;
    email: string;
    password: string;
    name: string;
    surname: string;
    age: number;
    role: RoleEnum;
    isActive: boolean;
    isDeleted: boolean;
    isVerified: boolean;
}

type IUserCreateDTO = Pick<
    IUser,
    "email" | "password" | "name" | "surname" | "age"
>;

type IUserUpdateDTO = Pick<IUser, "name" | "surname" | "age">;

export type { IUser, IUserCreateDTO, IUserUpdateDTO };
