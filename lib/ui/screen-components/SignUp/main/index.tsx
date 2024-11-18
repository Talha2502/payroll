'use client';

import { SignUp } from "@clerk/nextjs";
import Card from "../../../reusable-component/Card";

export default function SignUpMain() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card 
        title="SignUp into the Payroll Automation System"
        content={
          <div className="flex justify-center">
            <SignUp 
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