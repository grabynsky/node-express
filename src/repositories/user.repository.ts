import { IUser, IUserDTO } from "../interfaces/user.interface";
import { User } from "../modules/user.module";

class UserRepository {
    public getAll(): Promise<IUser[]> {
        return User.find();
    }

    public create(user: IUserDTO): Promise<IUser> {
        return User.create(user);
    }

    public getById(userId: string): Promise<IUser> {
        return User.findById(userId);
    }
    public updateById(userId: string, user: IUser): Promise<IUser> {
        return User.findByIdAndUpdate(userId, user, {
            returnDocument: "after",
        });
    }

    public deleteById(userId: string) {
        return User.findByIdAndDelete(userId);
    }
}

export const userRepository = new UserRepository();
