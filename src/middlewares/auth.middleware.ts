import { NextFunction, Request, Response } from "express";

import { StatusCodesEnum } from "../enums/status-codes.enum";
import { ApiError } from "../errors/api.error";
import { tokenService } from "../services/token.service";

class AuthMiddleware {
    public async chechAccessToken(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const authorizationHeader = req.headers.authorization;
            if (!authorizationHeader) {
                throw new ApiError(
                    "No token provided",
                    StatusCodesEnum.UNAUTHORIZED,
                );
            }

            const accessToken = authorizationHeader.split(" ")[1];
            if (!accessToken) {
                throw new ApiError(
                    "No token provided",
                    StatusCodesEnum.UNAUTHORIZED,
                );
            }
            const tokenPayload = tokenService.verifyToken(
                accessToken,
                "access",
            );

            const isTokenExist = await tokenService.isTokenExist(accessToken);
            if (!isTokenExist) {
                throw new ApiError(
                    "Invalid token",
                    StatusCodesEnum.UNAUTHORIZED,
                );
            }

            req.res.locals.tokenPayload = tokenPayload;
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const authMiddleware = new AuthMiddleware();
