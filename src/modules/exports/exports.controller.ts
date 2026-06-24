import { Controller, Get, Query, Res } from "@nestjs/common";
import ExcelJS from "exceljs";
import { DebtsService } from "../debts/debts.service";

@Controller("exports")
export class ExportsController {
  constructor(private readonly debtsService: DebtsService) {}

  @Get("debts")
  async debts(@Query() query: Record<string, string | undefined>, @Res() response: any) {
    const debts = await this.debtsService.list({ ...query, page: "1", pageSize: "1000" });
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Cong no");
    sheet.columns = [
      { header: "Mã", key: "code", width: 18 },
      { header: "Đối tác", key: "party", width: 28 },
      { header: "Loại", key: "type", width: 14 },
      { header: "Số tiền", key: "originalAmount", width: 18 },
      { header: "Đã trả", key: "paidAmount", width: 18 },
      { header: "Ngày hạn", key: "dueDate", width: 18 },
      { header: "Trạng thái", key: "status", width: 16 },
    ];
    debts.items.forEach((debt) => {
      sheet.addRow({
        code: debt.code,
        party: debt.party.name,
        type: debt.type,
        originalAmount: debt.originalAmount.toString(),
        paidAmount: debt.paidAmount.toString(),
        dueDate: debt.dueDate.toISOString().slice(0, 10),
        status: debt.status,
      });
    });

    response.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    response.setHeader("Content-Disposition", 'attachment; filename="sales-debt-management.xlsx"');
    await workbook.xlsx.write(response);
    response.end();
  }
}
