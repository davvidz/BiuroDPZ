import styles from "./PriceListTable.module.scss";
import { PriceListTableData } from "types/types";

interface PriceListTableProps {
  tableData: PriceListTableData;
}

export function PriceListTable({ tableData }: PriceListTableProps) {
  return (
    <div className={styles.tabela}>
      <table>
        <caption>{tableData.caption}</caption>
        <thead>
          <tr>
            <th scope="col">{tableData.column1Name}</th>
            <th scope="col">{tableData.column2Name}</th>
          </tr>
        </thead>
        <tbody>
          {tableData.columnValue.map((item) => (
            <tr key={item.key}>
              <th scope="row">{item.column1}</th>
              <td>{item.column2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
