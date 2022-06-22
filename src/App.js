import React from 'react'

export default function Home() {
  return (
    <>
    <div className="reg_page" id="reg_page">
    
    
    <a href="#reg_page" className="reg_top ti ti-arrow-up reg_go"></a>
    
    
    <header>
        
        <div className="container reg_wht_txt">

            
            <div className="reg_header_phone">
                +44 (0) 20 4455 6677
            </div>
            
            
            
            <div className="reg_header_soc">
                <b>Share</b>
                <div className="reg_header_soc_btns">
                    <a href="#" className="ti ti-facebook"></a>
                    <a href="#" className="ti ti-twitter"></a>
                    <a href="#" className="ti ti-instagram"></a>
                    <a href="#" className="ti ti-google"></a>
                </div>
            </div>
            
        </div>
        

        
        <div className="reg_menu clearfix" data-301-end="left:0px" data-300-end="left:-200px">
            <div className="reg_menu_btn">
                <span></span><span></span><span></span>
            </div>
            <b>Regal.</b>
        </div>
        

        
        <div className="reg_book clearfix">
            <i className="ti ti-tag"></i>
        </div>
        

        
        <div className="reg_menu_cont reg_image_bck" style={{backgroundColor: "#292929"}}>
            <div className="reg_menu_cont_txt">

                
                <div className="reg_menu_cont_logo"><div className="reg_menu_cont_logo_close"><span></span><span></span></div>Regal.</div>
                <ul>
                    <li><a href="#about"><span>About</span></a></li>
                    <li><a href="#rooms"><span>Rooms & Prices</span></a></li>
                    <li><a href="#reviews"><span>Reviews</span></a></li>
                    <li><a href="#services"><span>Services</span></a></li>
                    <li><a href="#gallery"><span>Gallery</span></a></li>
                    <li><a href="#instagram"><span>Instagram</span></a></li>
                    <li><a href="#team"><span>Team</span></a></li>
                    <li><a href="#offers"><span>Special Offers</span></a></li>
                </ul>

                
                <div className="reg_menu_cont_social">
                    Follow Us
                    <a href="#" className="ti ti-facebook"></a>
                    <a href="#" className="ti ti-twitter"></a>
                    <a href="#" className="ti ti-instagram"></a>
                    <a href="#" className="ti ti-google"></a>
                </div>
                
            </div>
        </div>
        
    
        

    </header>
    


   
    <div className="reg_slider reg_image_bck reg_fixed" data-stellar-background-ratio="0.2" data-image="http://placehold.it/1400x800" style={{backgroundColor: "#c0c0c0"}}>
        <div className="reg_over" data-color="#333" data-opacity="0.3" data-0="opacity:0.3;" data--400-bottom="opacity:0;"></div>

        <div className="container">
            <div className="reg_slider_content reg_wht_txt">
                
                <div className="reg_slider_copyright reg_slider_copyright_right">© Regal 2016</div>

                
                <div className="reg_slide_txt reg_slide_center_middle text-center"  data-0="opacity:1;" data--400-bottom="opacity:0;">
                    
                    <div className="reg_slide_title">Regal.</div>
                    <div className="reg_slide_subtitle">Our hostel is located in the capital’s hippest and trendiest district.</div>

                </div>
                

                <a className="reg_scroll_down reg_go" href="#reg_content">
                    <b></b>
                    Scroll
                </a>
            </div>


        <div id="reg_slider_review" className='noactive' data-200="@className:active">
            <div className="row">
                <div className="col-md-3 col-sm-12 col-xs-12">
                     <span className="reg_subtitle">
                        <span className="reg_book_close"><span></span><span></span></span>
                        Book Now
                    </span>
                </div>
                <div className="col-md-9 col-sm-12 col-xs-12">
                    <div className="reg_slider_review_form">
                        <div className="row">

                            <form className="reg_form" action="https://formspree.io/your@email.com" method="POST">
                                <div className="col-md-2 reg_book_item">
                                    <input type="text" value="" className="form-control date_picker" name="arrival" required placeholder="Arrival" />
                                </div>
                                <div className="col-md-2 reg_book_item">
                                    <input type="text" value="" className="form-control date_picker" name="departure" required placeholder="Departure" />
                                </div>
                                <div className="col-md-2 reg_book_item">
                                    <input type="text" value="" className="form-control" name="name" required placeholder="Full Name" />
                                </div>
                                <div className="col-md-2 reg_book_item">
                                    <input type="text" value="" className="form-control" name="phone" required placeholder="Phone" />
                                </div>
                                <div className="col-md-2 reg_book_item">
                                    <select className="form-control" id="room" name="room">
                                        <option>Mixed dorms</option>
                                        <option>Girls-only dorms</option>
                                        <option>Private rooms</option>
                                    </select>
                                </div>
                                <div className="col-md-2 reg_book_item">
                                    <input type="submit" className="btn btn-white submit" value="Send" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           
            
        </div>
        
        </div>

    </div>

    <section id="reg_content" className="reg_content">

        <section className="reg_section" id="about">
            <div className="container text-center">
                <h2>About Regal</h2><br />
                <h3 className="reg_subtitle">Our Story</h3>
                

                    <div className="row reg_auto_height">

                    <div className="col-md-6 reg_image_bck reg_wht_txt" style={{backgroundImage: "url(&quot;http://placehold.it/1000x1000&quot;)", height: "608px"}}>
                        <div className="reg_over" style={{backgroundColor: "rgb(51, 51, 51)", opacity: "0.8"}}>
                            <a href="https://www.youtube.com/watch?v=BsekcY04xvQ" className="video reg_fullwidth_link"></a>
                            <div className="reg_block_center">
                                <h3>
                                    <span className="reg_underline_title">Watch</span>  
                                    <br />
                                    <span className="reg_underline_title">About Regal</span>   
                                    <br />
                                    <span className="reg_underline_title">in 1 Minute</span>
                                </h3>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-6 reg_image_bck" style={{backgroundColor:" rgb(242, 242, 242)", height: "608px"}}>
                            <div className="reg_simple_block text-left">
                                <h2>Essential Info</h2>
                                <h3>About Regal</h3>
                                <p>Our hostel is located in the capital’s hippest and trendiest district: Shoreditch. We are all about East London! Our accommodation is the talk of the town and is ideal for guests who want to be part of the creative and cutting-edge world that is East London. There are literally hundreds of cool bars, quirky boutiques and alternative coffee shops all around us.</p>
                                <h3>Jonathan Hayes</h3>
                                <p>Co-founder</p>
                                <img src="\images\signature.png" height="80" alt="" />
                            </div>
                        </div>
                    </div>


            </div>
        </section>

        <section className="reg_section reg_image_bck" style={{backgroundColor: "#f2f2f2"}} id="rooms">
            <div className="container text-center">
                <h2>Explore</h2><br />
                <h3 className="reg_subtitle">Rooms & Prices</h3>
        
                <div className="row row_no_pd reg_auto_height">
                    
                    <div className="col-md-6">
                        <div className="reg_single_carousel reg_rooms_carousel reg_wht_txt" style={{backgroundImage: "url('http://placehold.it/1000x1000')"}}>
                            <div className="reg_room_block reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                                
                                <div className="reg_slider_copyright">Living Room</div>
                            </div>
                            <div className="reg_room_block reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                                
                                <div className="reg_slider_copyright">Kitchen</div>
                            </div>
                            <div className="reg_room_block reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                                
                                <div className="reg_slider_copyright">Bathroom</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 reg_image_bck" style={{backgroundColor: "#fff"}}>
                        <div className="reg_simple_block text-left">
                            <h2>Mixed dorms <a href="#reg_page" className="reg_go"><i className="ti ti-tag"></i><b>Book Now</b></a></h2>
                            <h4>Stylish 4-6, 8-10 and 18-bed dorms!</h4>
                            <ul>
                                <li>18-bed dorm has pod beds with dividing panels, equipped with a bed light and small locker for comfort and privacy</li>
                                <li>8-10 bedded dorm room are mostly used for groups and parties, so everybody can stay together</li>
                                <li>Smaller dorms have normal bunk beds</li>
                                <li>The bigger the room, the cheaper it is! Our 18-bed dorm is the cheapest option for travellers…</li>
                            </ul>
                            <h3>From <span className="reg_underline_title">$13</span> per bed per night </h3>
                        </div>
                    </div>
                    <div className="col-md-6 col-md-push-6" >
                        <div className="reg_single_carousel reg_rooms_carousel reg_wht_txt">
                            <div className="reg_room_block reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                            
                                <div className="reg_slider_copyright">Living Room</div>
                            </div>
                            <div className="reg_room_block reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                            
                                <div className="reg_slider_copyright">Kitchen</div>
                            </div>
                            <div className="reg_room_block reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                            
                                <div className="reg_slider_copyright">Kitchen</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 reg_image_bck col-md-pull-6" style={{backgroundColor: "#fff"}}>
                        <div className="reg_simple_block text-left">
                            <h2>Girls-only dorms <a href="#reg_page" className="reg_go"><i className="ti ti-tag"></i><b>Book Now</b></a></h2>
                            <h4>Girls-only (no guys – sorry!)</h4>
                            <ul>
                                <li>All girls dorms have the same clean and cosy decor and facilities</li>
                                <li>A good value option for girls on a budget, helping you save money and giving you the opportunity to meet fellow travellers, without being surrounded by snoring boys</li>
                                <li>18-bed dorm has pod beds with dividing panels, equipped with a bed light and small locker for comfort and privacy</li>
                            </ul>
                            <h3>From <span className="reg_underline_title">$13</span> per bed per night </h3>
                        </div>
                    </div>
                    
                    <div className="col-md-6" >
                        <div className="reg_single_carousel reg_rooms_carousel reg_wht_txt">
                            <div className="reg_room_block reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                                
                                <div className="reg_slider_copyright">Private Room</div>
                            </div>
                            <div className="reg_room_block reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                                
                                <div className="reg_slider_copyright">Private Kitchen</div>
                            </div>
                            <div className="reg_room_block reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                                
                                <div className="reg_slider_copyright">Private Pool</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 reg_image_bck" style={{backgroundColor: "#fff"}}>
                        <div className="reg_simple_block text-left">
                            <h2>Private rooms <a href="#reg_page" className="reg_go"><i className="ti ti-tag"></i><b>Book Now</b></a></h2>
                            <h4>Private rooms offer you a bit more intimacy. And a cup of tea or coffee.</h4>
                            <ul>
                                <li>18-bed dorm has pod beds with dividing panels, equipped with a bed light and small locker for comfort and privacy</li>
                                <li>8-10 bedded dorm room are mostly used for groups and parties, so everybody can stay together</li>
                                <li>Smaller dorms have normal bunk beds</li>
                                <li>The bigger the room, the cheaper it is! Our 18-bed dorm is the cheapest option for travellers…</li>
                            </ul>
                            <br />
                            <h3>From <span className="reg_underline_title">$20</span> per bed per night </h3>
                        </div>
                    </div>

                </div>
           
            </div>
        </section>
        <section className="reg_section reg_image_bck reg_fixed reg_wht_txt" data-stellar-background-ratio="0.2" data-image="http://placehold.it/1400x800" id="reviews">

            <div className="reg_over" style={{backgroundColor: "#292929"}} data-opacity="0.7"></div>


            <div className="container text-center">
                
                <h2>Reviews</h2><br />
                <h3 className="reg_subtitle">In Social Networks</h3>

                <div className="reg_auto_height reg_single_carousel reg_blc_txt">
                    

                    <div className="reg_review_item">
                        <div className="col-md-6 reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}></div>
                        <div className="col-md-6 reg_image_bck" style={{backgroundColor: "#292929"}}>
                            <div className="reg_simple_block">
                                <h2><i className="ti ti-star"></i><i className="ti ti-star"></i><i className="ti ti-star"></i><i className="ti ti-star"></i><i className="ti ti-star"></i></h2>
                                <h3>Once again, another great stay at Regal!! </h3>
                                <p>Once again, another great stay at Regal!! Great location, great atmosphere, fab staff- so friendly, welcoming and always willing to help.</p>
                                <p><a href="#" className="btn">Read Full Review</a></p>
                                <p><img src="http://placehold.it/200x80" alt="" /></p>
                            </div>
                        </div>
                    </div>
                    

                    <div className="reg_review_item">
                        <div className="col-md-6 reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}></div>
                        <div className="col-md-6 reg_image_bck" style={{backgroundColor: "#292929"}}>
                            <div className="reg_simple_block">
                                <h2><i className="ti ti-star"></i><i className="ti ti-star"></i><i className="ti ti-star"></i><i className="ti ti-star"></i><i className="ti ti-star"></i></h2>
                                <h3>Great stay!!</h3>
                                <p>Thank you for a perfect stay, every thing was very clean and tidy. We were in a private room with a private restroom. Breakfast included, very active bar space and funny people, atmosfere was really nice.</p>
                                <p><a href="#" className="btn">Read Full Review</a></p>
                                <p><img src="http://placehold.it/200x80" alt="" /></p>
                            </div>
                        </div>
                    </div>

                    <div className="reg_review_item">
                        <div className="col-md-6 reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}></div>
                        <div className="col-md-6 reg_image_bck" style={{backgroundColor: "#292929"}}>
                            <div className="reg_simple_block">
                                <h2><i className="ti ti-star"></i><i className="ti ti-star"></i><i className="ti ti-star"></i><i className="ti ti-star"></i><i className="ti ti-star"></i></h2>
                                <h3>Definitely would recommend staying here</h3>
                                <p>Very clean and comfortable hostel in a great location. The atmosphere was very fun and lively. Definitely would recommend staying here. </p>
                                <p><a href="#" className="btn">Read Full Review</a></p>
                                <p><img src="http://placehold.it/200x80" alt="" /></p>
                            </div>
                        </div>
                    </div>

                    
                </div>
                
            </div>
        </section>
        
        <section className="reg_section" id="services">
            <div className="container text-center">
                <h2>Services</h2><br />
                <h3 className="reg_subtitle">Explore Regal</h3>

                <div className="reg_icon_boxes row">
                    
                    <div data-animation="animation_blocks" data-bottom="@className:noactive" data--100-bottom="@className:active">
                        
                        <div className="reg_icon_box col-md-4 col-sm-6">
                            <i className="ti flaticon-hotel"></i>
                            <div className="reg_icon_box_content">
                                <h4><b>Central</b> Location</h4>
                                Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do
                            </div>
                            
                        </div>

                        <div className="reg_icon_box col-md-4 col-sm-6">
                            <i className="ti flaticon-family-room"></i>
                            <div className="reg_icon_box_content">
                                <h4><b>Familiar</b> & Homely</h4>
                                Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do
                            </div>
                        </div> 

                        <div className="reg_icon_box col-md-4 col-sm-6">
                            <i className="ti flaticon-bar"></i>
                            <div className="reg_icon_box_content">
                                <h4><b>Super</b> Social</h4>
                                Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do
                            </div>
                        </div> 

                        <div className="reg_icon_box col-md-4 col-sm-6">
                            <i className="ti flaticon-laundry-service"></i>
                            <div className="reg_icon_box_content">
                                <h4><b>Totally</b> Equipped</h4>
                                Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do
                            </div>
                        </div> 

                        <div className="reg_icon_box col-md-4 col-sm-6">
                            <i className="ti flaticon-hotel-staff"></i>
                            <div className="reg_icon_box_content">
                                <h4><b>Local</b> Knowledge</h4>
                                Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do
                            </div>
                        </div> 

                        <div className="reg_icon_box col-md-4 col-sm-6">
                            <i className="ti flaticon-wifi-room"></i>
                            <div className="reg_icon_box_content">
                                <h4><b>Friendly</b>Staff</h4>
                                Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do
                            </div>
                        </div>
                    
                    </div>

                </div>
                
            </div>
        </section>
        <section className="reg_section reg_image_bck" style={{backgroundColor: "#f2f2f2"}} id="gallery">
            <div className="container text-center">
                <h2>Gallery</h2><br />
                <h3 className="reg_subtitle">Have a look around!</h3>



                <div className="row reg_gallery reg_auto_height reg_wht_txt">

                    <div className="col-md-6" >
                        <div className="reg_gallery_carousel_txt reg_over" style={{backgroundColor: "#292929", opacity: "0.9", height: "530px"}}>
                            <h2>Social Spaces</h2>
                        </div>
                        <div className="reg_single_carousel reg_gallery_carousel reg_rooms_carousel">
                            <div className="reg_room_block reg_gallery_item reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                            </div>
                            <div className="reg_room_block reg_gallery_item reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                            </div>
                            <div className="reg_room_block reg_gallery_item reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6" >
                        <div className="reg_gallery_carousel_txt reg_over" style={{backgroundColor: "#292929", opacity: "0.9", height: "530px"}}>
                            <h2>Rooms & Dorms</h2>
                        </div>
                        <div className="reg_single_carousel reg_gallery_carousel reg_rooms_carousel">
                            <div className="reg_room_block reg_gallery_item reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                            </div>
                            <div className="reg_room_block reg_gallery_item reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                            </div>
                            <div className="reg_room_block reg_gallery_item reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6" >
                        <div className="reg_gallery_carousel_txt reg_over" style={{backgroundColor: "#292929", opacity: "0.9", height: "530px"}}>
                            <h2>Kitchen</h2>
                        </div>
                        <div className="reg_single_carousel reg_gallery_carousel reg_rooms_carousel">
                            <div className="reg_room_block reg_gallery_item reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                            </div>
                            <div className="reg_room_block reg_gallery_item reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>  
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6" >
                        <div className="reg_gallery_carousel_txt reg_over" style={{backgroundColor: "#292929", opacity: "0.9", height: "530px"}} data-opacity="0.8">
                            <h2>Regal Bar</h2>
                        </div>
                        <div className="reg_single_carousel reg_gallery_carousel reg_rooms_carousel">
                            <div className="reg_room_block reg_gallery_item reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                            </div>
                            <div className="reg_room_block reg_gallery_item reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                            </div>
                            <div className="reg_room_block reg_gallery_item reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </section>
        <section className="reg_section" id="instagram">
            <div className="container text-center">
                <h2>Instagram</h2><br />
                <h3 className="reg_subtitle">Follow Us on #maskan</h3>
                
                <div id="instagram-carousel" className="insta_slider clearfix"></div>

                
            </div>
        </section>

        <section className="reg_section" id="team">
            <div className="container text-center">
                <h2>Team</h2><br />
                <h3 className="reg_subtitle">Friendly & Professional</h3>

                <div className="reg_icon_boxes row text-center">
                          
 
                    <div className="reg_team_slider">
                        
                        <div className="reg_icon_box reg_team_box">
                            <div className="reg_icon_box_photo">
                                <img src="http://placehold.it/450x1215" alt="" />
                            </div>
                            <h4><b>William Sanchez</b> <br />CEO/Founder</h4>
                        </div> 

                        <div className="reg_icon_box reg_team_box">
                            <div className="reg_icon_box_photo">
                                <img src="http://placehold.it/450x1215" alt="" />
                            </div>
                            <h4><b>Amber Richards</b> <br />Managing director</h4>
                        </div> 
    
                        <div className="reg_icon_box reg_team_box">
                            <div className="reg_icon_box_photo">
                                <img src="http://placehold.it/450x1215" alt="" />
                            </div>
                            <h4><b>Harold Henry</b> <br />Computer programmer</h4>
                        </div> 

                        <div className="reg_icon_box reg_team_box">
                            <div className="reg_icon_box_photo">
                                <img src="http://placehold.it/450x1215" alt="" />
                            </div>
                            <h4><b>Austin Burton</b> <br />Events organiser</h4>
                        </div> 
                        
                        <div className="reg_icon_box reg_team_box"> 
                            <div className="reg_icon_box_photo">
                                <img src="http://placehold.it/450x1215" alt="" />
                            </div>
                            <h4><b>Jean Gray</b> <br />Publisher</h4>
                        </div> 

                        <div className="reg_icon_box reg_team_box">
                            <div className="reg_icon_box_photo">
                                <img src="http://placehold.it/450x1215" alt="" />
                            </div>
                            <h4><b>Joseph Baker</b> <br />Engineer</h4>
                        </div> 
                                    
                    </div>
                </div>
                
            </div>
        </section>
        <section className="reg_section reg_image_bck"  style={{backgroundColor: "#f2f2f2"}} id="map">
            <div className="container text-center">
                <h2>Find Us</h2><br />
                <h3 className="reg_subtitle">On the Map</h3>
                
                <div className="reg_map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38852.53604898047!2d13.352403003182175!3d52.51020916491075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x042120465b5e3b70!2sBerlin%2C+Germany!5e0!3m2!1sen!2sru!4v1465312283068" allowfullscreen></iframe>
                </div>
                
            </div>
        </section>
        <section className="reg_section" id="offers">
            <div className="container text-center">
                <h2>Special Offers</h2><br />
                <h3 className="reg_subtitle">Best rates guarantee</h3>

                <div className="row">

                    <div className="col-md-4 reg_special_offers_item">
                        <div className="reg_special_offers reg_image_bck reg_wht_txt text-left"  style={{backgroundColor: "#292929"}}>
                            <div className="reg_special_offers_best"><b>Best Rates</b> Guarantee</div>
                            <h3>Put A Pound Back In Your Pocket</h3>
                            <h4>3 nights in LDN from just $60</h4>
                            <ul>
                                <li>Get: 3 nights from $60</li>
                                <li>In: Regal</li>
                                <li>During:  27th - 30th of August</li>
                                <li>Book by:  30th June</li>
                            </ul>
                            <span className="btn">More info and how to book</span>
                            <a href="#" className="reg_room_block reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                                <b className="btn">More info and how to book</b>
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-md-4 reg_special_offers_item">
                        <div className="reg_special_offers reg_image_bck reg_wht_txt text-left" style={{backgroundColor: "#292929"}}>
                            <div className="reg_special_offers_best"><b>Best Rates</b> Guarantee</div>
                            <h3>Bands and live performances</h3>
                            <h4>3 nights in LDN from just $60</h4>
                            <ul>
                                <li>Get: 3 nights from $60</li>
                                <li>In: Regal</li>
                                <li>During:  27th - 30th of August</li>
                                <li>Book by:  30th June</li>
                            </ul>
                            <span className="btn">More info and how to book</span>
                            <a href="#" className="reg_room_block reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                                <b className="btn">More info and how to book</b>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 reg_special_offers_item">
                        <div className="reg_special_offers reg_image_bck reg_wht_txt text-left" style={{backgroundColor: "#292929"}}>
                            <div className="reg_special_offers_best"><b>Best Rates</b> Guarantee</div>
                            <h3>Big Night Out pub crawl</h3>
                            <h4>3 nights in LDN from just $60</h4>
                            <ul>
                                <li>Get: 3 nights from $60</li>
                                <li>In: Regal</li>
                                <li>During:  27th - 30th of August</li>
                                <li>Book by:  30th June</li>
                            </ul>
                            <span className="btn">More info and how to book</span>
                            <a href="#" className="reg_room_block reg_image_bck" style={{backgroundImage: "http://placehold.it/1000x1000"}}>
                                <b className="btn">More info and how to book</b>
                            </a>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </section>

    </section>
        


   

    <footer className="reg_image_bck" style={{backgroundColor: "#292929"}}>
        <div className="container">
            
            <div id="reg_footer_block" className="active" data-300-end="@className:active">
                <i className="ti flaticon-reception-bell"></i><span className="reg_subtitle">Need Help. <b>+44 (0) 20 4455 6677</b></span>
                <p>If you hate forms (and who doesn’t?) or if you want to talk to a human being (and who doesn’t?), then you can ring us on the following number.</p>
            </div>
    
            <div className="row reg_wht_txt">
                <div className="col-md-5 col-sm-3">
                    <div className="reg_subtitle">Regal Hostels</div>
                    <h3>Berlin-London</h3>
                    <p>© 2016 Regal</p>
                </div>
                <div className="col-md-2 col-sm-3">
                    <h4>Address</h4>
                    <p>68 Cardamon Place, Melbourne Vic 3000<br />
                    Berlin</p>
                </div>
                <div className="col-md-3 col-sm-3">
                    <h4>Contact</h4>
                    <p><a href="mailto:contact@regalhostels.com">contact@regalhostels.com</a><br />
                    T / +44 (0) 20 4455 6677<br />
                    <a href="mailto:jobs@regalhostels.com">jobs@regalhostels.com</a>
                    
                    </p>
                </div>
                <div className="col-md-2 col-sm-3">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="#">Behance</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Dribble</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
    </footer>

</div>
    </>
  )
}
