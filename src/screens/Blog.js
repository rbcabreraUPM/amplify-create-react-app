import React, { useState, useEffect } from 'react'
import '../static/css/Blog.css'
import '../static/css/Cards.css'
import sanityClient from '../sanity/client.js'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Loader from 'react-loader-spinner'
import Footer from '../components/Footer'
const Blog = () => {
  const [postData, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => {
        setPost(data)
        setLoading(false)
        console.log(data)
      })
      .catch(console.error)
  }, [])

  return (
    <div>
      {loading ? (
        <div className='center'>
          <Loader type='ThreeDots' color='#00BFFF' height={80} width={80} />
        </div>
      ) : (
        <div className='cards_custom'>
          <div className='cards__container_custom'>
            <div className='cards__wrapper_custom'>
              <ul className='cards__items_custom'>
                {postData.map((post, index) => (
                  <div className='card-blog'>
                    <Grid>
                      <Row>
                        <Col>
                          <img
                            src={post.mainImage.asset.url}
                            alt='Avatar'
                            className='img-blog'
                          ></img>
                        </Col>
                        <Col>
                          <div className='container-blog'>
                            <h4>
                              <b>{post.title}</b>
                            </h4>
                          </div>
                        </Col>
                      </Row>
                    </Grid>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <Footer stickyStyle={true}></Footer>
        </div>
      )}
    </div>
  )
}

export default Blog
