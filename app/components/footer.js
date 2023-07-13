import { Button } from "@nextui-org/react";

export default function Footer() {
  return (
    <div
      className="flex justify-between py-12 px-20"
      style={{ backgroundColor: "#1D4080", color: "#FFFFFF" }}
    >
      <div className="w-96">
        <h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </h3>
        <span className="text-base font-semibold">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </span>
        <br />
        <span className="text-sm ">
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old.
        </span>
      </div>
      <div>
        <div className="flex">
          <Button css={{ bgColor: "#FFFFFF", mr: "40px" }} bordered auto>
            Button A
          </Button>
          <Button css={{ bgColor: "#FFFFFF" }} bordered auto>
            Button B
          </Button>
        </div>
        <div className="flex">
          <div className="flex flex-col mr-8">
            <span className="text-lg font-bold">Text 1</span>
            <span className="text-base font-semibold">Text 1</span>
            <span>Text 1</span>
            <span>Text 1</span>
          </div>
          <div className="flex flex-col mr-8">
            <span className="text-lg font-bold">Text 1</span>
            <span className="text-base font-semibold">Text 1</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold">Text 1</span>
            <span className="text-base font-semibold">Text 1</span>
            <span>Text 1</span>
            <span>Text 1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
