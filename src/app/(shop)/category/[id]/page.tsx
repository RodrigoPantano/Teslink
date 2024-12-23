// pantalla para las diferentes caregorias de usuarios dentro de la pagina

import { ProductGrid, Title } from "@/components";
import { ValidCategory } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
    params: {
        id: ValidCategory;
    }
}

const seedProducts = initialData.products;

export default function ({ params }: Props) {

    const { id } = params;
    const products = seedProducts.filter(product => product.gender === id)

    const labels: Record<ValidCategory, string> = {
        'men':'para hombres',
        'women':'para mujeres',
        'kid':'para niños',
        'unisex':'para todos'  
    }

    // if (id === "kids" )
    //     notFound();

    return (
        <div>
            <>
                <Title
                    title={`Articulos ${labels[id]}`}
                    subtitle='Todos los productos'
                    className="mb2"
                />

                <ProductGrid
                    products={products} />
            </>
        </div>
    )
}

// <h1>category page {id}</h1>