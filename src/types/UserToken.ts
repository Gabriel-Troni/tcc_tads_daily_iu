import { JwtPayload } from "jsonwebtoken";
import { Role } from "./RoleEnum";

export interface UserToken extends JwtPayload {
  profile: Role;
}
