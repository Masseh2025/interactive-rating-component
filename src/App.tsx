import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";
import iconStar from "/assets/images/icon-star.svg";

function App() {
  return (
    <main className="flex justify-center items-center h-screen bg-neutral-grey-950">
      <div className="bg-white p-4 max-w-104 w-full flex flex-col mx-4">
        <img src={iconStar} alt="icon-star" className="w-10 h-10 mb-4" />
        <h1 className="text-3xl font-bold mb-4">How did we do?</h1>
        <p className="text-neutral-grey-500 mb-4">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <form>
          <RadioGroup defaultValue="option-one" className="flex">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three" id="option-three" />
              <Label htmlFor="option-three">Option Three</Label>
            </div>
          </RadioGroup>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}

export default App;
