import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { Prisma } from "../../generated/prisma";

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(error: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();

    if (error.code === "P2002") {
      const fields = Array.isArray(error.meta?.target) ? error.meta.target : [];
      const message = fields.includes("code")
        ? "Mã này đã tồn tại. Vui lòng nhập mã khác hoặc để trống."
        : fields.includes("email")
          ? "Email này đã tồn tại."
          : "Dữ liệu bị trùng. Vui lòng kiểm tra lại.";

      return response.status(HttpStatus.CONFLICT).json({ error: { message } });
    }

    return response.status(HttpStatus.BAD_REQUEST).json({
      error: { message: "Không thể xử lý dữ liệu. Vui lòng kiểm tra lại." },
    });
  }
}
