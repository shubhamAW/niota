import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";

const Pricing = ({ color, variant, title, price, features }) => {
  return (
    <Card color={color} variant={variant} className="w-full max-w-[25rem] p-8 rounded-md bg-gray-800 mx-5">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-md border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase"
        >
          {title}
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          <span className="mt-2 text-4xl">₹</span>
          {price}
          <span className="self-end text-4xl">/mo</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <li className="flex items-center gap-4" key={index}>
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon strokeWidth={2} className="h-3 w-3" />
              </span>
              <Typography className="font-normal">{feature}</Typography>
            </li>
          ))}
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="text-blue-500 hover:scale-[1.02] rounded-md bg-slate-300 p-4 focus:scale-[1.02] active:scale-100 font-bold"
          ripple={false}
          fullWidth={true}
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Pricing;
