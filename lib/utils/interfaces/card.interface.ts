import { IGlobalComponentProps } from "./global.interface";
import { BoxProps } from "@chakra-ui/react";

export interface ICardProps extends BoxProps  {
  title?: string;
  children: React.ReactNode;
  width?: string;
  padding?: string;
}