import styles from "./PriceListTable.module.scss";

interface CennikTableProps {
  tableData: TableData;
}

export function PriceListTable({ tableData }: CennikTableProps) {
  return (
    <div className="tabela">
      <table className="cennik-tabela">
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
