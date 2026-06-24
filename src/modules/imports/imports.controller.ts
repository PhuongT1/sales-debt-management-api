import { Controller, Post } from "@nestjs/common";

@Controller("imports")
export class ImportsController {
  @Post("debts")
  debts() {
    return {
      message: "Import Excel endpoint scaffolded. Port parser from web src/features/imports before enabling production import.",
    };
  }
}
