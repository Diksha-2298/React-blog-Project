import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/UI/Card';
import RecentPosts from './RecentPosts';
import blogData from '../../Data/blog.json';
import Layout from '../../components/Layout';


const SideImage = props =>{
  return(
    <div style={{height: `${props.height}px`}}>
      <img src={props.src} alt=" "/>
    </div>
  );
}

const ImageGallery = props =>{
return(
              <div className="galleryPost" style={props.galleryStyle}>
                  <section style={{ width: props.largeWidth}} >
                      <div className="mainImageWrapper">
                        <img src={require('../../BlogPostImages/' + props.imagesArray[1])} alt="photo"/>
                      </div>
                  </section>
                  <section className={"sideImageWrapper"} style={{width: props.smallWidth}}>
                    {
                      props.imagesArray.map(image =>
                         <SideImage 
                             height={props.sideImageHeight}
                             src={require('../../BlogPostImages/'+image)}
                         />
                      )
                    }  
                  </section>  
              </div>
  );
}

const Home = props => {

  const galleryHeight =450;
  const galleryStyle ={
    height: galleryHeight + 'px',
    overflow: 'hidden'
  }

  const sideImageHeight = galleryHeight/3;
  const imgAr = blogData.data.map(post => post.blogImage)
    return (
       <div>
         <Card>
           <ImageGallery
               largeWidth="70%"
               smallWidth="30%"
               sideImageHeight={sideImageHeight}
               galleryStyle={galleryStyle}
               imagesArray={imgAr}
            />
         </Card>
        
        
          <Layout>
            <RecentPosts style={{width:'70%'}}/>
          </Layout>
          
        
      </div>
    );  
}

export default Home;