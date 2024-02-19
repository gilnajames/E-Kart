import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <>
            <div className='d-flex align-items-center justify-content-evenly w-100 mb-5 bg-primary text-light' style={{height:"300px"}}>
                <div style={{ width: "400px" }}>
                    <h4><i class="fa-solid fa-cart-shopping me-3"></i>E-Kart</h4>
                    <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam nisi
                        reprehenderit quae perspiciatis ad, eveniet unde repellat harum expedita, neque laudantium,
                        minus quas quos sint laborum ea officia voluptates
                        voluptatem.</h6>
                </div>
                <div>
                    <h4>Links</h4>
                    <Link to={'/'} style={{textDecoration:"none",color:'white'}}><h6>Home</h6></Link>
                    <Link to={'/wishlist'} style={{textDecoration:"none",color:'white'}}><h6>WishList</h6></Link>
                    <Link to={'/cart'} style={{textDecoration:"none",color:'white'}}><h6>Cart</h6></Link>

                </div>
                <div>
                    <h4>Guides</h4>
                    <h6>React</h6>
                    <h6>React Bootstrap</h6>
                    <h6>React Bootswatch</h6>
                </div>
                <div>
                    <h4>Contact Us</h4>

                    <div className='d-flex'>
                        <input type="text" name='' id=''
                            placeholder='Enter your email' className='form-control' />
                        <button class="btn btn-warning ms-2">Subscribe</button>
                    </div>
                    <div className='d-flex align-items-center align-items-center justify-content-evenly fs-4 mt-4'>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-facebook"></i>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <p>Copyright &#169; 2023. E-Kart built with React and Redux</p>
            </div>
        </>
    )
}

export default Footer