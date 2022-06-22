import { useState } from "react";
import { QuoteFormWrapper } from "./Style";

function QuoteForm() {
  const [from, setFrom] = useState<String>("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [destination, setDestination] = useState<String>("");
  const [returnDate, setReturnDate] = useState<Date>();
  const [people, setPeople] = useState<Number>(1);
  const [name, setName] = useState<String>("");
  const [email, setEmail] = useState<String>("");

  return (
    <QuoteFormWrapper>
      <h2>New Quote</h2>
      <form action="submit">
        <label htmlFor="from">Departure place</label>
        <input type="text" name="from" id="from" placeholder="From" />

        <label htmlFor="departure-date">Departure Date</label>
        <input
          type="text"
          name="departure-date"
          id="departure-date"
          placeholder="Departure Date"
        />

        <label htmlFor="destination">Destination</label>
        <input
          type="text"
          name="destination"
          id="destination"
          placeholder="Destination"
        />

        <label htmlFor="return-date">Return date</label>
        <input
          type="text"
          name="return-date"
          id="return-date"
          placeholder="Return Date"
        />

        <label htmlFor="people">Nº of travellers</label>
        <input
          type="number"
          name="people"
          id="people"
          placeholder="Tripulation"
        />

        {/* contact information */}
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="E-mail" />

        <button type="submit" name="submit" value="submit">Create Quote</button>

      </form>
    </QuoteFormWrapper>
  );
}

export default QuoteForm;
