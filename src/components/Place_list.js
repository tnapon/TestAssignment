
import Posts from '../example_data.json';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import { Container } from '@mui/material';
import React, { useState, useEffect } from 'react';

import Pagination from './Pagination';
function Place_list() {
    // console.log(Data);

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(21);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = Posts;
             setPosts(res.data);

          //  console.log(Posts.length);
            setLoading(false);
        };

        fetchPosts();
    }, []);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = Posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
      if (loading) {
          return <h2>Loadding...</h2>
      }

  

      var d = new Date();
      var timezoneOffset = d.getTimezoneOffset();
      d.setMinutes(d.getMinutes() + timezoneOffset);
      
      console.log('UTC: '+d);
  
      var thai_offset =7*60;
      d.setMinutes(d.getMinutes() + thai_offset);
      console.log('UTC: '+d);

    return (

        <div>
            <div class="container cards ">
                <div class="row">

                    {currentPosts.map(post => {
                        console.log(d);
                        return (

                            <div class="col-12 col-lg-4">
                                <div class="card shadow p-3 mb-5 bg-body rounded-3 ">

                                    <div key={post.id}>
                                        <div class="row">
                                            <div class="col-12 col-lg-3">
                                                <img class="border rounded-3 " src={post.profile_image_url} width="70px" height="70px"></img>
                                            </div>
                                            <div class="col-12 col-lg-9">

                                                <div class="titlelist mx-1">{post.name}</div>
                                                <div class="row">
                                                    <div class="col-8 col-lg-8">
                                                        <div class="time mx-1"><i class="fa-solid fa-calendar-days"></i>  
                                                 
                                                    {/* {d == '' ? "dddd" : "ddddss"}     */} 10:00 AM - 6:00 PM
                                                        </div>
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

             
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={Posts.length}
                    paginate={paginate}
                />

                {/*                 
                <Container className="container d-flex justify-content-center m-4">
                    <Stack spacing={2}>
                        <Pagination count={10} color="primary" />
                    </Stack>
                </Container> */}

            </div>

        </div >
    )
}

export default Place_list;