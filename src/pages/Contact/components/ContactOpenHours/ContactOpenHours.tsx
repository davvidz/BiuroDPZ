import styles from "./ContactOpenHours.module.scss";

export function ContactOpenHours() {
  return (
    <div className="zapraszamy">
      <h2>Godziny otwarcia</h2>
      <table>
        <tbody>
          <tr>
            <td>Poniedziałek</td>
            <td>8:00 - 16:00</td>
          </tr>
          <tr>
            <td>Wtorek</td>
            <td>8:00 - 16:00</td>
          </tr>
          <tr>
            <td>Środa</td>
            <td>8:00 - 16:00</td>
          </tr>
          <tr>
            <td>Czwartek</td>
            <td>8:00 - 16:00</td>
          </tr>
          <tr>
            <td>Piątek</td>
            <td>8:00 - 15:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
