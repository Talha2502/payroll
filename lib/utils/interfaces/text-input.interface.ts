import { IGlobalComponentProps } from "./global.interface";
import { TinputvariantType } from "../types";
import { InputProps } from "@chakra-ui/react";

export interface IInputProps extends InputProps {
  label?: string;
  variant: TinputvariantType;
}