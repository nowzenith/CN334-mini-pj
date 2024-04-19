import Navbar from '../components/Navbar';
import Item from '../components/Item';
import Image from 'next/image';


export default function ProductPage() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-8 lg:px-12 flex justify-between">
        <div className="container-xxl py-6">
          <div className="container">
            <div className="row g-0 gx- align-items-end">
              <div className="section-header text-start mb-4">
                <h1 className='topic'>Our Products</h1>
                <p>Subscribe to our newsletter to getupdates about our grand offers</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-end py-6" style={{ marginLeft: 'auto' }}>
              <button className="btn btn-best_seller" style={{ marginRight: '10px' }}>Best Seller</button>
              <button className="btn btn-all_product">All Products</button>
            </div>
          </div>
        </div>
        <div className="container-xxl py-6">
          <div className="container">
            <div className="row g-0 gx- align-items-end">
              <div className="section-header text-start mb-4">
                <h1 className='topic'>Our Products</h1>
                <p>Subscribe to our newsletter to getupdates about our grand offers</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-end py-6" style={{ marginLeft: 'auto' }}>
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
          price="30"
          description="A comfortable bed for your dog." // Add the actual description here
        />

        {/* product 2 */}
        <Item
          imgSrc="/product-bowl.jpg"
          title="Feeding Dishes"
          price="17"
          description="A comfortable bed for your dog." // Add the actual description here
        />
        {/* product 3 */}
        <Item
          imgSrc="/product-coffee.jpg"
          title="Pups Coffee"
          price="13"
          description="A comfortable bed for your dog." // Add the actual description here
        />

        {/* product 4 */}
        <Item
          imgSrc="/product-container.jpg"
          title="Dog Food Container"
          price="70"
          description="A comfortable bed for your dog." // Add the actual description here
        />
      </div>

      <div className="four-box-row">

        {/* product 5 */}
        <Item
          imgSrc="/product-feeder.jpg"
          title="Acrylic Feeder Stand"
          price="26"
          description="A comfortable bed for your dog." // Add the actual description here
        />

        {/* product 6 */}
        <Item
          imgSrc="/product-holder.jpg"
          title="Water and Treat Holder ⭐"
          price="16"
          description="A comfortable bed for your dog." // Add the actual description here
        />
        {/* product 7 */}
        <Item
          imgSrc="/product-leash.jpg"
          title="Waterproof Dog Leash"
          price="14"
          description="A comfortable bed for your dog." // Add the actual description here
        />
        {/* product 8 */}
        <Item
          imgSrc="/product-poy.jpg"
          title="Dog Harness Choke"
          price="50"
          description="A comfortable bed for your dog." // Add the actual description here
        />
      </div>

      <div className="four-box-row">

        {/* product 9 */}
        <Item
          imgSrc="/product-rope.jpg"
          title="Rope Toy"
          price="29"
          description="A comfortable bed for your dog." // Add the actual description here
        />

        {/* product 10 */}
        <Item
          imgSrc="/product-set.jpg"
          title="Set pet Dog Toys"
          price="29"
          description="A comfortable bed for your dog." // Add the actual description here
        />
        {/* product 11 */}
        <Item
          imgSrc="/product-shampoo.jpg"
          title="Dog Shampoo ⭐"
          price="16"
          description="A comfortable bed for your dog." // Add the actual description here
        />
        {/* product 12 */}
        <Item
          imgSrc="/product-towel.png"
          title="Bath Towel"
          price="10"
          description="A comfortable bed for your dog." // Add the actual description here
        />
      </div>

      <div className="four-box-row">

        {/* product 13 */}
        <Item
          imgSrc="/product-toy.jpg"
          title="Plush Llama Toy"
          price="18"
          description="A comfortable bed for your dog." // Add the actual description here
        />

        {/* product 14 */}
        <Item
          imgSrc="/product-treat.jpg"
          title="Interactive Treat Bone"
          price="20"
          description="A comfortable bed for your dog." // Add the actual description here
        />
        {/* product 15 */}
        <Item
          imgSrc="/product-waste.jpg"
          title="Dog Waste Bag ⭐"
          price="17"
          description="A comfortable bed for your dog." // Add the actual description here
        />
        {/* product 16 */}
        <Item
          imgSrc="/product-wong.jpg"
          title="Dog Collar"
          price="9"
          description="A comfortable bed for your dog." // Add the actual description here
        />
      </div>
    </div>
  );
}