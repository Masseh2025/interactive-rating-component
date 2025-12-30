import type { ActiveIndex } from "@/App";
import iconThankYou from "/assets/images/illustration-thank-you.svg";

const ratings = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
};

export default function SubmittedForm({ rating }: { rating: ActiveIndex }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={iconThankYou}
        alt="illustration of a thank you"
        className="mb-4"
      />
      <div className="bg-neutral-grey-900 px-4 py-2 rounded-full w-fit h-fit mb-4">
        <h2 className="text-primary-orange-500">
          You selected {ratings[rating]} out of 5
        </h2>
      </div>
      <h1 className="text-3xl mb-4 text-neutral-white">Thank you!</h1>
      <p className="text-neutral-grey-500 text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}
