import { Controller, Get, Post } from "@nestjs/common";

@Controller("auth")
export class AuthController {
  @Post("login")
  login() {
    return {
      message: "Auth endpoint scaffolded. Add JWT login before switching the web app away from NextAuth.",
    };
  }

  @Get("me")
  me() {
    return {
      message: "Current user endpoint scaffolded.",
    };
  }
}
