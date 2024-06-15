"use client"

import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Input, Divider, Button, Link } from "@nextui-org/react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  }

  return (
    <Card className="max-w-[330px] max-h-[400px] min-h-[380px] my-32 mx-auto relative">
      <CardHeader className="flex gap-3">
        <h3 className="flex justify-center item-center mx-auto font-bold text-3xl">Login</h3>
      </CardHeader>
      <Divider />
      <CardBody className="flex justify-even">
        <div>
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
        <div className="mt-3.5 flex mx-auto">
          <Button color="primary" variant="ghost" onClick={handleClick} isLoading={isLoading}>
            {isLoading ? "Logging In" : "Login"}
          </Button>
        </div>
        <div className="mx-auto mt-3.5">
          <p>Don't have an account?</p>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex flex-wrap items-center justify-center mx-auto gap-4">
          <div className="flex">
            <Button color="primary" variant="ghost">
              <a href="/register">Sign Up</a>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
