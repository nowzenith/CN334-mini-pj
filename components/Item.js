import Image from 'next/image';
import Link from 'next/link';

function Item({ imgSrc, title, price, description }) {
    return (
        <div className="box">
            <div className="col-lg-12 d-flex justify-content-center"> {/* Image container */}
                <Image
                    src={imgSrc} // Prop for image source
                    alt={`Image of ${title.toLowerCase()}`}
                    width={250}
                    height={250}
                />
                <p className="font-bold">{title}</p> {/* Title prop */}
                <p className="text-gray-700 colored-home">${price}</p> {/* Price prop */}
                <div className="text-gray-700 text-container">
                    {/* Description prop */}
                </div>
                <div className="col-lg-6 d-flex justify-content-end" style={{ marginLeft: 'auto' }}>
                    <Link href={{
                        pathname: '/detail',
                        query: { imgSrc: imgSrc,title:title,price:price,description:description },
                    }} passHref>
                        <button className="btn btn-primary" style={{ marginRight: '2px' }}>view details</button>
                    </Link>
                    <button className="btn btn-secondary">add to chart</button>
                </div>
            </div>
        </div>
    );
}

export default Item;