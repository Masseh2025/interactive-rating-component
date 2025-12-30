import type { ActiveIndex } from "@/App";

const ratings = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
};

export default function SubmittedForm({ rating }: { rating: ActiveIndex }) {
  return (
    <div>
      <h1>Thank you!</h1>
      <h2>You selected {ratings[rating]} out of 5</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}
