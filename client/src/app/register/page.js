"use client"

import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Input, Divider, Button, Calendar, DateInput, Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import {CalendarDate, parseDate} from "@internationalized/date";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
  }

  return (
    <Card className="max-w-[330px] max-h-[400px] min-h-[380px] my-32 mx-auto relative">
      <CardHeader className="flex gap-3">
        <h3 className="flex justify-center item-center mx-auto font-bold text-3xl">Register</h3>
      </CardHeader>
      <Divider />
      <CardBody className="flex justify-even">
        <div>
          <Input className="mb-3.5" 
            label="Username"
            type="text"/>
          <Input className="mb-3.5"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <Input className="mt-3.5"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="flex w-full flex-col gap-4 mt-2">
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <DateInput
              label="Date Input"
              defaultValue={parseDate("2024-04-04")} 
              placeholderValue={new CalendarDate(1995, 11, 6)} 
              labelPlacement="outside"
              startContent={
                <Popover>
                  <PopoverTrigger>
                    <CalendarMonthIcon className="text-2xl text-default-400 cursor-pointer flex-shrink-0" />
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <Calendar aria-label="Date Picker" />
                    </div>
                  </PopoverContent>
                </Popover>
              }
            />
          </div>
        </div>  
        <div className="mt-3.5 flex mx-auto">
          <Button color="primary" variant="ghost" onClick={handleClick} isLoading={isLoading}>
            {isLoading ? "Signing Up" : "Sign Up"}
          </Button>
        </div>
        <div className="mx-auto mt-3.5">
          <p>Already have an account?</p>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex flex-wrap items-center justify-center mx-auto gap-4">
          <div className="flex">
              <Button color="primary" variant="ghost">
                <a href="../">Login</a>
              </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
