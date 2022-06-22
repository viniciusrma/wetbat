import { useState } from "react";
import { QuoteFormWrapper } from "./Style";

export interface QuotesFormProps {
  onFromChange: (from: String) => void;
  onDepartureDateChange: (departureDate: Date) => void;
  onDestinationChange: (destination: String) => void;
  onReturnDateChange: (returnDate: Date) => void;
  onPeopleChange: (people: Number) => void;
  onNameChange: (name: String) => void;
  onEmailChange: (email: String) => void;

  onSubmit: (
    from: String,
    departureDate: Date,
    destination: String,
    returnDate: Date,
    people: Number,
    name: String,
    email: String
  ) => void;
}

function QuoteForm(props: QuotesFormProps) {
  const [from, setFrom] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [destination, setDestination] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [people, setPeople] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFrom(value);
    props.onFromChange(value);
  };

  const handleDepartureDateChange = (e: any) => {
    const { value } = e.target;
    setDepartureDate(value);
    props.onDepartureDateChange(value);
  };

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setDestination(value);
    props.onDestinationChange(value);
  };

  const handleReturnDateChange = (e: any) => {
    const { value } = e.target;
    setReturnDate(value);
    props.onReturnDateChange(value);
  };

  const handlePeopleChange = (e: any) => {
    const { value } = e.target;
    setPeople(value);
    props.onPeopleChange(value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
    props.onNameChange(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    props.onEmailChange(value);
  };

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

        <button type="submit" name="submit" value="submit">
          Create Quote
        </button>
      </form>
    </QuoteFormWrapper>
  );
}

export default QuoteForm;
