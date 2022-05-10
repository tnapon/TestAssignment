import React, { useState, useEffect } from 'react';
import logo from '../icon.png';
import Place_list from './Place_list';
import Posts from '../example_data.json';
import Pagination from './Pagination';

function AppHeader() {

    const [searchRes, setSearchRes] = useState('')

    var d = new Date();
    var timezoneOffset = d.getTimezoneOffset();
    d.setMinutes(d.getMinutes() + timezoneOffset);
    console.log('UTC: '+d);

    var thai_offset =7*60;
    d.setMinutes(d.getMinutes() + thai_offset);
    console.log('UTC: '+d);

    return (
        <div>
            <div class="appheader">

                <ul class="nav justify-content-end ">

                    <div class="position-absolute top-10 start-0 ">  <img src={logo} width="30px" ></img></div>

                    <li class="nav-item">
                        <a class="nav-link " aria-current="page" href="#"> <i class="fa-solid fa-bell position-relative">
                            <span class="position-absolute  top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                                <span class="visually-hidden">New alerts</span>
                            </span></i></a>
                    </li>
                    <li class="nav-item">
                        <img src={logo} width="30px" ></img>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " aria-current="page" >Akkarapol &nbsp;&nbsp;<i class="fa-solid fa-angle-down "></i></a>
                    </li>

                </ul>
                <div class="nav-left  shadow p-3 mb-5 bg-white ">
                    <img class="logo " src={logo} width="40px" />

                    <hr></hr>
                    <div class="bage">   <i class="fas fa-list"> </i> </div>
                    <span>Place</span>
                    <hr></hr>
                </div>

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                </nav>


                <div class="container mb-3">
                    <div class="row mt-4 ">
                        <div class="col-12 col-lg-3 mt-4">
                            <span class="title ">Place List</span>
                        </div>
                        <div class="col-12 col-lg-2">

                        </div>
                        <div class="col-12 col-lg-3 mt-3">
                            <div class="form-group dorp">
                                <select  class="form-control rounded-pill" id="exampleFormControlSelect1">
                                    <option>Restaurent</option>
                                    <option>Bakery</option>
                                    <option>Cafe</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 mt-3">
                            <div class="form-group search">
                                <input type="text" class="form-control rounded-pill" id="" placeholder='Search name...'
                                    onChange={event => { setSearchRes(event.target.value) }} />
                            </div>
                        </div>
                    </div>
                </div>


            </div >

            <div>
                {searchRes == ""
                ?<Place_list/>:
                  <div class="container cards ">
                    <div class="row">
                        {Posts.filter((val) => {
                            if (searchRes == "") {
                                      
                                return val;
                       
                            } else if (val.name.toLowerCase().includes(searchRes.toLowerCase())) {
                                
                                return val
                            }else if (val.name.toLowerCase().includes(searchRes.toLowerCase())) {
                                
                                return val
                            }
                            
                        }).map((post, key) => {
            
                            return (
                                <div class="col-12 col-lg-4">
                                    <div class="card shadow p-3 mb-5 bg-body rounded-3 ">

                                        <div key={key}>
                                            <div class="row">
                                                <div class="col-12 col-lg-3">
                                                    <img class="border rounded-3 " src={post.profile_image_url} width="70px" height="70px"></img>
                                                </div>
                                                <div class="col-12 col-lg-9">

                                                    <div class="titlelist mx-1">{post.name}</div>
                                                    <div class="row">
                                                        <div class="col-8 col-lg-8">
                                                            <div class="time mx-1"><i class="fa-solid fa-calendar-days"></i>  10:00 AM - 6:00 PM</div>
                                                        </div>
                                                        <div class="col-4 col-lg-4 ">
                                                            <div class="star mx-1">  <i class="fa-solid fa-circle"></i> {post.rating}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row mt-2">

                                                <div class="col-lg-12  ">
                                                    <img class="border rounded-start p-0" src={post.images[0]} width="105px" height="105px"></img>
                                                    <img class="border  p-0" src={post.images[1]} width="105px" height="105px"></img>
                                                    <img class="border rounded-end p-0" src={post.images[2]} width="105px" height="105px"></img>
                                                </div>

                                            </div>

                                        </div>
                                    </div></div>


                            )
                        })}

                    </div>
                    {/* <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={Posts.length}
                        paginate={paginate}
                    /> */}
                </div>
                }
              

            </div >
        </div>
    )
}

export default AppHeader;