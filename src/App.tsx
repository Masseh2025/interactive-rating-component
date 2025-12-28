import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";
import iconStar from "/assets/images/icon-star.svg";
import { useState } from "react";

type ActiveIndex = "one" | "two" | "three" | "four" | "five";
function App() {
  const [activeIndex, setActiveIndex] = useState<ActiveIndex>("one");
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <main className="flex justify-center items-center h-screen bg-neutral-grey-950">
      <div className="bg-white p-6 md:p-8 max-w-104 w-full flex flex-col mx-4 bg-(image:--gradient-grey-gradient) rounded-xl">
        {!isSubmitted ? (
          <>
            <div className="p-3 rounded-full bg-neutral-grey-900 w-fit h-fit mb-4">
              <img src={iconStar} alt="" className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-neutral-white">
              How did we do?
            </h1>
            <p className="text-neutral-grey-500 mb-4">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <form onSubmit={() => setIsSubmitted(true)}>
              <RadioGroup
                value={activeIndex}
                className="flex mb-4 w-full justify-between"
                onValueChange={(e) => setActiveIndex(e as ActiveIndex)}
              >
                <div className="flex items-center justify-center fit-content">
                  <RadioGroupItem value="one" id="one" />
                  <Label
                    htmlFor="one"
                    className="absolute text-neutral-grey-950"
                  >
                    1
                  </Label>
                </div>
                <div className="flex items-center justify-center fit-content">
                  <RadioGroupItem value="two" id="two" />
                  <Label htmlFor="two" className="absolute text-extra-bold">
                    2
                  </Label>
                </div>
                <div className="flex items-center justify-center fit-content">
                  <RadioGroupItem value="three" id="three" />
                  <Label htmlFor="three" className="absolute text-extra-bold">
                    3
                  </Label>
                </div>
                <div className="flex items-center justify-center fit-content">
                  <RadioGroupItem value="four" id="four" />
                  <Label htmlFor="four" className="absolute text-extra-bold">
                    4
                  </Label>
                </div>
                <div className="flex items-center justify-center fit-content">
                  <RadioGroupItem value="five" id="five" />
                  <Label htmlFor="five" className="absolute text-extra-bold">
                    5
                  </Label>
                </div>
              </RadioGroup>
              <button
                type="submit"
                className="px-4 py-2 w-full bg-primary-orange-500 text-neutral-white rounded-full"
              >
                Submit
              </button>
            </form>
          </>
        ) : null}
      </div>
    </main>
  );
}

export default App;
