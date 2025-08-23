import styles from "./PriceListTable.module.scss";
import { PriceListTableData } from "types/types";

interface PriceListTableProps {
  tableData: PriceListTableData;
}

export function PriceListTable({ tableData }: PriceListTableProps) {
  return (
    <div className={styles.tabela}>
      <table>
        <thead>
          <tr>
            <th scope="col">{tableData.column1Name}</th>
            <th scope="col">{tableData.column2Name}</th>
          </tr>
        </thead>
        <tbody>
          {tableData.columnValue.map((item: any) => (
            <tr key={item.key}>
              <td>{item.column1}</td>
              <td>{item.column2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
