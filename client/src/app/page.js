"use client"

import react, { useState } from "react";
import {Card, CardHeader, CardBody, CardFooter, Input, Divider, Button} from "@nextui-org/react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState("");

  const handleClick = () => {
    setisLoading(true);
  }

  return (
    <Card className="max-w-[330px] max-h-[400px] min-h-[380px] my-32 mx-auto">
      <CardHeader className="flex gap-3">
        <h3 className="flex justify-center item-center mx-auto font-bold text-3xl">Login</h3>
      </CardHeader>
      <Divider/>
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
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="mt-3.5 flex mx-auto">
            <Button color="primary" variant="ghost" onclick={handleClick} isLoading={isLoading}>
              {isLoading ? "Logging In" : "Login"}
            </Button>
        </div>
        <div className="mx-auto mt-3.5"> 
          <p>Don't have an account?</p>
        </div>
      </CardBody>
      <Divider/>
      <CardFooter>
        <div className="flex flex-wrap items-center justify-center mx-auto gap-4">
          <div className="flex">
            <a href="./register">
            <Button color="primary" variant="ghost">SignUp</Button>
            </a>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
