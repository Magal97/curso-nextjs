import { GetStaticProps } from "next";

interface IProduct {
  id: string;
  title: string;
}

interface Top10Props {
  products: IProduct[];
}

export default function Home({ products }: Top10Props) {
  return (
    <div>
      <h1 className="text-white text-5xl">TOP 10</h1>
      <section>
        <ul>
          {products.map((recomendedProduct) => (
            <li className="text-white" key={recomendedProduct.id}>
              {recomendedProduct.title}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

//STATIC SITE GENERATION
export const getStaticProps: GetStaticProps<Top10Props> = async (context) => {
  const response = await fetch("http://localhost:3333/recommended");
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
};
