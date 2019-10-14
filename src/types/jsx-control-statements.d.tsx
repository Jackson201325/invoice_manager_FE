/*
 * TS don't understand these custom JSX types, therefore
 * defining the types here
 */

export declare function Choose(): any;
export declare function When(props: { condition: boolean }): any;
export declare function Otherwise(): any;
export declare function If(props: { condition: boolean }): any;
export declare function For<T>(props: {
  each: string;
  of: Iterable<T>;
  index?: string;
}): any;
export declare function With(props: { [id: string]: any }): any;
export declare function Else(): any;

export declare namespace JSX {
  type TChildren =
    | Element
    | object
    | string
    | number
    | boolean
    | null
    | typeof undefined;

  interface IntrinsicAttributes {
    children?: TChildren | TChildren[];
  }
}
