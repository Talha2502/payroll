'use client';
import { ICardProps } from '../../../utils/interfaces';

export default function SignUpCard({ 
    header, 
    title, 
    content, 
    className 
  }: ICardProps) {
    return (
      <div className="w-full max-w-md shadow-lg rounded-lg border bg-white">
        {header && (
          <div className="px-6 py-4 border-b">
            {header}
          </div>
        )}
        
        {title && (
          <h2 className="text-2xl font-bold text-gray-800 text-center py-4">
            {title}
          </h2>
        )}
        
        {content && (
          <div className="p-6">
            {content}
          </div>
        )}
      </div>
    );
  }