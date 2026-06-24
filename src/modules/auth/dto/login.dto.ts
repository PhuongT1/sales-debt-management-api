import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDto {
  @ApiProperty({
    example: "admin@debtflow.local",
    description: "Email hoặc số điện thoại đăng nhập.",
  })
  @IsString({ message: "Email hoặc số điện thoại phải là chuỗi." })
  @IsNotEmpty({ message: "Vui lòng nhập email hoặc số điện thoại." })
  identifier!: string;

  @ApiProperty({
    example: "Admin@123456",
    minLength: 8,
    description: "Mật khẩu tài khoản.",
  })
  @IsString({ message: "Mật khẩu phải là chuỗi." })
  @IsNotEmpty({ message: "Vui lòng nhập mật khẩu." })
  @MinLength(8, { message: "Mật khẩu phải có ít nhất 8 ký tự." })
  password!: string;
}
