declare module "bun:test";
declare module "*.css";
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "@/components/*";
declare module "lodash-es/*";
declare module "react-resizable";
declare module "react-sticky";
