import { IGlobalComponentProps } from "./global.interface";
import {   
  ButtonProps 
} from '@chakra-ui/react';
import { TButtonvariantType } from "../types/button.variant";

export interface IButtonProps extends ButtonProps {
  variant: TButtonvariantType;
  colorScheme?: string;
}
