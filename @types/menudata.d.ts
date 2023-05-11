declare module "@menudata" {
  const burgers: Burger[];
  export default burgers;

  interface Burger {
    id: number;
    title: string;
    ingredients: string;
    price: string;
  }
}
