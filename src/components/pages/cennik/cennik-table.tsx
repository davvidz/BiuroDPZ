import { TableData } from "../../../typescript/types";
import "./cennik-table.scss";

interface CennikTableProps {
  tableData: TableData;
}

export const CennikTable = ({ tableData }: CennikTableProps) => {
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
            <tr>
              <td>{item.column1}</td>
              <td>{item.column2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
