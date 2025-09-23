import styles from "./PriceListTable.module.scss";
import { PriceListTableData } from "types/types";

interface PriceListTableProps {
  tableData: PriceListTableData;
  table?: "center" | "left";
}

export function PriceListTable({
  tableData,
  table = "center",
}: PriceListTableProps) {
  return (
    <div className={table === "center" ? styles.tabela : styles.tabela2}>
      <table>
        <thead>
          <tr>
            <th scope="col">{tableData.column1Name}</th>
            <th scope="col">{tableData.column2Name}</th>
          </tr>
        </thead>
        <tbody>
          {tableData.columnValue.map((item) => (
            <tr key={item.key}>
              <td className={styles.column1}>{item.column1}</td>
              <td className={styles.column2}>{item.column2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
