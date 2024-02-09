import "./cennik.scss";

export const Cennik = () => {
  return (
    <div className="cennik">
      <h1>
        Biuro rachunkowe DP
        <span style={{ color: "khaki" }}>Z</span> - cennik
      </h1>
      <table className="cennik-table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Ilośc dokumentów</th>
            <th scope="col">Cena brutto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1-10</td>
            <td>180,00 zł</td>
          </tr>
          <tr>
            <td>2</td>
            <td>11-20</td>
            <td>200,00 zł</td>
          </tr>
          <tr>
            <td>3</td>
            <td>21-30</td>
            <td>250,00 zł</td>
          </tr>
          <tr>
            <td>4</td>
            <td>31-40</td>
            <td>300,00 zł</td>
          </tr>
          <tr>
            <td>5</td>
            <td>41-50</td>
            <td>350,00 zł</td>
          </tr>
          <tr>
            <td>6</td>
            <td>51-60</td>
            <td>400,00 zł</td>
          </tr>
          <tr>
            <td>7</td>
            <td>61-70</td>
            <td>450,00 zł</td>
          </tr>
          <tr>
            <td>8</td>
            <td>71-80</td>
            <td>500,00 zł</td>
          </tr>
          <tr>
            <td>9</td>
            <td>81-90</td>
            <td>550,00 zł</td>
          </tr>
          <tr>
            <td>10</td>
            <td>91-100</td>
            <td>600,00 zł</td>
          </tr>
          <tr>
            <td>11</td>
            <td>100-120</td>
            <td>650,00 zł</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
