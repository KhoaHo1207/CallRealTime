"use client";

import { Video } from "lucide-react";
import Container from "./Container";
import React from "react";
import { useRouter } from "next/navigation";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const Navbar = () => {
  const router = useRouter();
  const { userId } = useAuth();
  return (
    <div className="sticky top-0 border border-b-primary/10 ">
      <Container>
        <div className="flex justify-around items-center">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Video />
            <div className="font-bold text-xl">VidChat</div>
          </div>

          <div>
            <UserButton />
            {!userId && (
              <>
                <Button
                  size={"sm"}
                  variant={"outline"}
                  onClick={() => router.push("/sign-in")}
                >
                  Sign In
                </Button>
                <Button size={"sm"} onClick={() => router.push("/sign-up")}>
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
