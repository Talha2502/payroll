import { IGlobalComponentProps } from "./global.interface";

export interface ICardProps extends IGlobalComponentProps{
    header?: React.ReactNode;
    title?: string;
    content?: React.ReactNode;
    className?: string;
  }