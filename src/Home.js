import React from 'react'
import "./Home.css";
import Product from './Product';
import iphone from './iphone.jpg'

function Home(){
    return(
        <div className='home'>
            <div className='home__container'>
                <img className='home__image'
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/Changestore/SMP_Desktop_2x_2._CB669743293_.jpg"
                alt=''
                />
{/* ROW-1 */}
                <div className='home__row'>
                <div className='home__row'>
                <Product
                    id="2473833746"
                    title="iPhone 12 MINI"
                    price={64900}
                    rating={5}
                    image={iphone}
                    />

                </div>
                <div className='home__row'>
                <Product
                    id="247222748"
                    title="iPhone 12"
                    price={74900}
                    rating={5}
                    image={iphone}/>

                </div>
                <div className='home__row'>
                <Product
                    id="247555748"
                    title="iPhone 12 PRO"
                    price={115900}
                    rating={5}
                    image={iphone}/>

                </div>
                <div className='home__row'>
                <Product
                    id="2475552458"
                    title="iPhone 12 PRO MAX"
                    price={155900}
                    rating={5}
                    image={iphone}/>
                </div>
                </div>
{/* ROW-2 */}
                <div className='home__row'>
                <div className='home__row'>
                <Product
                    id="2473875746"
                    title="iPhone 11"
                    price={54900}
                    rating={5}
                    image={iphone}
                    />

                </div>
                <div className='home__row'>
                <Product
                    id="247227748"
                    title="iPhone 11 PRO"
                    price={64900}
                    rating={5}
                    image={iphone}/>

                </div>
                <div className='home__row'>
                <Product
                    id="244465748"
                    title="iPhone 11 PRO MAX"
                    price={90900}
                    rating={5}
                    image={iphone}/>

                </div>
                <div className='home__row'>
                <Product
                    id="2472152458"
                    title="iPhone SE-2020"
                    price={33900}
                    rating={5}
                    image={iphone}/>
                </div>
                </div>                
{/* ROW-3 */}
<div className='home__row'>
                <div className='home__row'>
                <Product
                    id="2473824746"
                    title="iPhone XS"
                    price={48900}
                    rating={5}
                    image={iphone}
                    />

                </div>
                <div className='home__row'>
                <Product
                    id="247802748"
                    title="iPhone XS MAX"
                    price={54900}
                    rating={5}
                    image={iphone}/>

                </div>
                <div className='home__row'>
                <Product
                    id="247575748"
                    title="iPhone XR"
                    price={45900}
                    rating={5}
                    image={iphone}/>

                </div>
                <div className='home__row'>
                <Product
                    id="2475242458"
                    title="iPhone X"
                    price={39900}
                    rating={5}
                    image={iphone}/>
                </div>
                </div>                
{/* ROW-4 */} <div className='home__row'>
<div className='home__row'>
                <Product
                    id="2473800746"
                    title="iPhone 8"
                    price={33900}
                    rating={5}
                    image={iphone}
                    />

                </div>
                <div className='home__row'>
                <Product
                    id="247752748"
                    title="iPhone 8 PLUS"
                    price={38900}
                    rating={5}
                    image={iphone}/>

                </div>
                <div className='home__row'>
                <Product
                    id="246555748"
                    title="iPhone 7"
                    price={25900}
                    rating={5}
                    image={iphone}/>

                </div>
                <div className='home__row'>
                <Product
                    id="2475992458"
                    title="iPhone 7 PLUS"
                    price={32900}
                    rating={5}
                    image={iphone}/>
                </div>
                </div>                
{/* ROW-5 */}
<div className='home__row'>
                <div className='home__row'>
                <Product
                    id="2473833746"
                    title="iPhone 6S"
                    price={18900}
                    rating={5}
                    image={iphone}
                    />

                </div>
                <div className='home__row'>
                <Product
                    id="247222748"
                    title="iPhone 6S PLUS"
                    price={20900}
                    rating={5}
                    image={iphone}/>

                </div>
                <div className='home__row'>
                <Product
                    id="247555748"
                    title="iPhone 6"
                    price={11900}
                    rating={5}
                    image={iphone}/>

                </div>
                <div className='home__row'>
                <Product
                    id="2475552458"
                    title="iPhone 6 PLUS"
                    price={14900}
                    rating={5}
                    image={iphone}/>
                </div>
                </div>

            </div> 

        </div>
    );
}
export default Home;