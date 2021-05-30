import React, {useState, useEffect} from 'react';
import {GetServerSideProps} from 'next';

interface IProduct{
  id: string;
  title: string;
}

interface HomeProps{
  recommendedProducts: IProduct[];
}

export default function Home({recommendedProducts} : HomeProps) {
  //CLIENT SIDE RENDERING
  /*  const [recomendedProcuts, setRecomendedProducts] = useState<IProduct[]>([]); */
  /*   useEffect(() => {
    fetch('http://localhost:3333/recommended').then((response) => {
      response.json().then((data) => {
        setRecomendedProducts(data);
        console.log(recomendedProcuts);
      })
    })
  }, []) */
  
  return (
    <div>
      <h1 className="text-white text-5xl">ola</h1>
      <section>
        <h1 className="text-white">Products</h1>
        <ul>
          {recommendedProducts.map((recomendedProduct) => (
            <li className="text-white" key={recomendedProduct.id}>
              {recomendedProduct.title}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

//SERVER SIDE RENDERING
export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('http://localhost:3333/recommended');
  const recommendedProducts = await response.json();
  
  return {
    props: {
      recommendedProducts,
    }
  }

}