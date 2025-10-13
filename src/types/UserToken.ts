import { JwtPayload } from "jsonwebtoken";
import { Profile } from "./ProfileEnum";

export interface UserToken extends JwtPayload {
  profile: Profile
}