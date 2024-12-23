// slug: identificador unico humanamente posible del producto

import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector } from "@/components";
import { geistMono } from "@/config/font";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
    params: {
        slug: string;
    }
}

export default function ({ params }: Props) {

    const { slug } = params;
    const product = initialData.products.find(product => product.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <div className=" mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">

            {/* slideshow */}
            <div className="col-span-1 md:col-span-2">

                {/* mobile slideshow */}
                <ProductMobileSlideshow
                    title={product.title}
                    images={product.images}
                    className="block md:hidden"
                />    

                {/* Desktop slideshow */}
                <ProductSlideshow
                    title={product.title}
                    images={product.images}
                    className="md:block hidden"
                />
            </div>


            {/* detalles */}
            <div className="col-span-1 px-5">
                <h1 className={`${geistMono.className} font-bold text-xl`}>
                    {product.title}
                </h1>
                <p className="text-lg mb-5">${product.price}</p>

                {/* Selector de tallas */}
                <SizeSelector
                    selectedSize={product.sizes[0]}
                    availableSizes={product.sizes}    
                />

                {/* Selector de cantidad */}
                <QuantitySelector
                    quantity={2}
                />

                {/* boton */}
                <button className="btn-primary my-5">
                    Agregar al acrrito
                </button>

                {/* descripcion */}
                <h3 className="font-bold text-sm">Descripción</h3>
                <p className="font-ligth">
                    {product.description}
                </p>

            </div>

        </div>
    )
}