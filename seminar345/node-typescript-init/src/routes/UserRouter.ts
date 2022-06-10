import { Router } from "express";
import { UserController } from "../controllers";
import { body } from "express-validator";

const router: Router = Router();

router.post(
  "/",
  [
    body("email").isEmail(),
    body("email").notEmpty(),
    body("password").isLength({ min: 6 }),
    body("password").notEmpty(),
    body("name").notEmpty(),
    body("phone").notEmpty(),
  ],
  UserController.createUser
);
router.put("/:userId", UserController.updateUser);
router.get("/:userId", UserController.findUserById);
router.delete("/:userId", UserController.deleteUserById);

export default router;
