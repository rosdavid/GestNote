import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { Check } from "lucide-react";
import Link from "next/link";

const CardsPrices = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px]">
      <h2 className="text-4xl text-center"> One plan to make this simple</h2>
      <p className="text-muted-foreground text-center">
        Or give it a try for free
      </p>
      <div className="flex  justify-center gap-4 flex-wrap mt-6">
        <Card className={clsx("w-[300px] flex flex-col justify-between")}>
          <CardHeader>
            <CardTitle
              className={clsx({
                "text-muted-foreground": true,
              })}
            >
              Free Trial
            </CardTitle>
            <CardDescription>Try GestNote for free.</CardDescription>
          </CardHeader>
          <CardContent>
            <span className="text-4xl font-bold">Free</span>
          </CardContent>
          <CardFooter className="flex flex-col  items-start gap-4 ">
            <div>
              <div className="flex gap-2">
                <Check />
                <p>10 pages</p>
              </div>
              <div className="flex gap-2">
                <Check />
                <p>Invitations</p>
              </div>
              <div className="flex gap-2">
                <Check />
                <p>10gb storage</p>
              </div>
            </div>
            <Link
              href="/"
              className={clsx("w-full text-center bg-primary p-2 rounded-md", {
                "!bg-muted-foreground": true,
              })}
            >
              Get Started
            </Link>
          </CardFooter>
        </Card>

        <Card className={clsx("w-[300px] flex flex-col justify-between")}>
          <CardHeader>
            <CardTitle
              className={clsx({
                "text-muted-foreground": true,
              })}
            >
              GestNote Plan
            </CardTitle>
            <CardDescription>Just one plan for everyone.</CardDescription>
          </CardHeader>
          <CardContent>
            <span className="text-4xl font-bold">$9.99</span>
            <span>/ month</span>
          </CardContent>
          <CardFooter className="flex flex-col  items-start gap-4 ">
            <div>
              <div className="flex gap-2">
                <Check />
                <p>Infinite pages</p>
              </div>
              <div className="flex gap-2">
                <Check />
                <p>Invitations</p>
              </div>
              <div className="flex gap-2">
                <Check />
                <p>50gb storage</p>
              </div>
            </div>
            <Link
              href="/"
              className={clsx("w-full text-center bg-primary p-2 rounded-md", {
                "!bg-muted-foreground": true,
              })}
            >
              Get Started
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default CardsPrices;
