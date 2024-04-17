import Navbar from '../components/Navbar';
import Item from '../components/Item';
import Image from 'next/image';


export default function ProductPage() {
  return (
    <div>
    <Navbar />
    <div className="max-w-7xl mx-auto px-8 lg:px-12">
    <div className="container-xxl py-6">
      <div className="container">
        <div className="row g-0 gx- align-items-end">
            <div className="section-header text-start mb-4">
              <h1 className='topic'>Our Products</h1>
              <p>Subscribe to our newsletter to getupdates about our grand offers</p>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-end py-6"  style={{ marginLeft: 'auto' }}>
            <button className="btn btn-best_seller" style={{ marginRight: '10px' }}>Best Seller</button>
            <button className="btn btn-all_product">All Products</button>
          </div>
        </div>
      </div>
    </div>

    <div className="four-box-row">

        {/* product 1 */}
        <Item
                imgSrc="/bed.jpg"
                title="Dog Bed ⭐"
                price="$30"
                description="A comfortable bed for your dog." // Add the actual description here
            />

        {/* product 6 */}
        <Item
                imgSrc="/product-holder.jpg"
                title="Water and Treat Holder ⭐"
                price="$16"
                description="A comfortable bed for your dog." // Add the actual description here
                        />

        {/* product 11 */}
        <Item
                imgSrc="/product-shampoo.jpg"
                title="Dog Shampoo ⭐"
                price="$16"
                description="A comfortable bed for your dog." // Add the actual description here
                    />

        {/* product 15 */}
        <Item
                imgSrc="/product-waste.jpg"
                title="Dog Waste Bag ⭐"
                price="$17"
                description="A comfortable bed for your dog." // Add the actual description here
                        />
</div>
</div>         
);
}