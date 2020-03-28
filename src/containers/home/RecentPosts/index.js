import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            
            <div style={{textAlign: 'center'}}>
                <span>Featured</span>
                <h2>Fitness Mantra To Live Fit Life</h2>
                <span>posted on July 21, 2016 by Sora Blogging Tips</span>
                <div className="postImageWrapper">
                <img src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            </div>
                <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firm... Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six rapt...</p>
                <button>END</button>     
            </div>
        </Card>
    </div>
   )

 }

export default RecentPosts