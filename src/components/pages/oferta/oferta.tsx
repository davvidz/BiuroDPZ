import "./oferta.scss";

export const Oferta = () => {
  return (
    <div className="oferta">
      <h1>Zakres usług</h1>
      <div className="content">
        <div className="jdg">
          <h3>Księgowość JDG</h3>
          Księgowość uproszczona jest jedną z podstawowych form prowadzenia
          ewidencji księgowej. Są to rozliczenia na podstawie księgi przychodów
          i rozchodów lub ewidencji ryczałtu, która polega na ewidencjonowaniu
          zarówno sprzedaży jak i wydatków firmy. Jest ona prowadzona na
          podstawie rachunków i faktur.
        </div>
        <div className="online">
          <h3>Księgowość online</h3>
          Usługi księgowości online pozwalają zaoszczędzić cenny czas, który
          jest tak ważny dla przedsiębiorców. Wszystkie formalności oraz cały
          zakres współpracy odbywa się poprzez formę elektroniczną dzięki czemu
          korzystanie z usług księgowych jest proste i wygodne.
        </div>
        <div className="zakladanie">
          <h3>Zakładanie działalności</h3>
          Rozpoczęcie działalności gospodarczej wiąże się z pewnymi obowiązkami
          i wyborami. Wsparcie księgowe pomoże Ci wybrać i dopasować jak
          najlepsze rozwiązanie dla danej działalności i pomoże przejść przez
          cały etap zakładania firmy.
        </div>
        <div className="pkpir">
          <h3>Podatkowa Księga Przychodów i Rozchodów</h3>
          Forma księgowości polegająca na ewidencjonowaniu osiąganych
          przychodów, czyli faktur sprzedażowych i ponoszonych kosztów
          działalności czyli faktur zakupowych. KPiR pozwala na pomniejszenie
          swoich przychodów, kosztami, dzięki czemu zmniejszamy dochód do
          opodatkowania.
        </div>
        <div className="ryczalt">
          <h3>Ryczałt ewidencjonowany</h3>
          Jest to forma podatku dochodowego, w ramach której odprowadza się
          jedynie podatek od osiąganych przychodów. Ryczałt nie pozwala na
          odliczenie kosztów uzyskania przychodów.
        </div>

        <div className="pit">
          <h3>Rozliczenia podatkowe PIT</h3>
          Roczne zeznania podatkowe są obowiązkiem niemal każdego z nas. Warto w
          tej kwestii powierzyć to księgowemu, który podpowie w jaki sposób
          możemy się rozliczyć oraz z jakich ulg podatkowych możemy skorzystać.
        </div>
      </div>
    </div>
  );
};
