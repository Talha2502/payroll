'use client';

import { SignIn } from "@clerk/nextjs";
import Card from "../../../reusable-component/Card";

export default function LoginMain() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card 
        title="Sign into the Payroll Automation System"
        content={
          <div className="flex justify-center">
            <SignIn 
              appearance={{
                elements: {
                  formButtonPrimary: 'bg-blue-500 hover:bg-blue-600 text-white',
                  card: 'shadow-none border-none',
                }
              }} 
            />
          </div>
        }
      />
    </div>
  );
}