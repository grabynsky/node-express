import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.get("/", userController.getAll);
router.get("/:id", commonMiddleware.isIdValidate("id"), userController.getById);

router.put(
    "/:id",
    authMiddleware.chechAccessToken,
    commonMiddleware.isIdValidate("id"),
    commonMiddleware.validateBody(UserValidator.update),
    userController.updateById,
);

router.delete(
    "/:id",
    authMiddleware.chechAccessToken,
    commonMiddleware.isIdValidate("id"),
    userController.deleteById,
);

export const userRouter = router;
