import React from 'react';
import './style.css';

import Card from '../../components/UI/Card';
import blogData from '../../Data/blog.json';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';

/**
* @author
* @function Post
**/

const SideImage = props => {
  return (
      <div style={{ height: `${props.height}px`  }}>
          <img src={props.src} alt="" />
      </div>
  );
}

const ImageGallary = props => (
  <div className="gallaryPost" style={props.gallaryStyle}>
          <section style={{ width: props.largeWidth }}>
              <div className="mainImageWrapper">
                  <img src={require('../../blogimages/' + props.imagesArray[1])} alt="" />
              </div>
          </section>
          <section className={"sideImageWrapper"} style={{ width: props.smallWidth }}>
              {
                  props.imagesArray.map(image => 
                      <SideImage 
                          height={props.sideImageHeight}
                          src={require('../../blogimages/' + image)}
                          alt="" />
                  )
              }
          </section>
  </div>
);

const Post = (props) => {

  console.log(props);
  const sideImageHeight = gallaryHeight / 3;
const gallaryHeight = 450;
  const gallaryStyle = {
    height: gallaryHeight+'px',
    overflow: 'hidden'
}

    
   
   const imgAr = blogData.data.map(post => post.blogImage)

return(
  
      <Layout>
        <BlogPost {...props} />
        <Card>
                <ImageGallary 
                            largeWidth="70%"
                            smallWidth="30%"
                            sideImageHeight={sideImageHeight}
                            gallaryStyle={gallaryStyle}
                            imagesArray={imgAr}
                        ></ImageGallary>
            </Card>
           
      </Layout>
 )

}

export default Post;