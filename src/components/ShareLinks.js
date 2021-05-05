import React from 'react';
//import InstagramIcon from "../images/icons/instagram.inline.svg";
import TwitterIcon from "./icon-components/IconTwitter";
import FacebookIcon from "./icon-components/IconFacebook";
import RedditIcon from "./icon-components/IconReddit";
import { useState, useEffect } from 'react';
//import { ReactComponent as InstagramIcon } from '../images/icons/instagram.svg';

const ShareLinks = (props) => {
  const link = props.path
  const text = props.text
  const fbLink = `https://www.facebook.com/sharer/sharer.php?u=${link}`
  const twitterLink = `https://twitter.com/intent/tweet/?text=${text}&url=${link}%2F&via=person_of_note`
  const redditLink = `http://www.reddit.com/submit?url=${link}`


  const [popup, setPopup] = useState({
    url: ""
  })

  function windowPopup(e) {
    let screenSize = getWindowDimensions();
    var width = screenSize.width/2;
    var height = screenSize.height/2;
    // Only show popup on larger screens
    if (screenSize.width > 750){
      e.preventDefault();
      var url = e.currentTarget.getAttribute('href')
      setPopup(url)
    
      var left = (screenSize.width / 2) - (width / 2),
        top = (screenSize.height / 2) - (height / 2);  
      window.open(
        url,
        "",
        "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
      );
    }

  }

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  return(
    <>
    <div className="share-header"><h4>Like this article? Share it! </h4></div>
    <div style={{
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `space-between`,
      alignContent: `center`,
      alignItems: `center`,
      width: `100%`,
      maxWidth: `500px`,
      margin: `2rem 0`,
    }}>
     <div className="front-page-icons"> 
        <a className="link-button" onClick={windowPopup} href={twitterLink}
    target="_blank" rel="noopener noreferrer" alt="Share on Twitter"> <TwitterIcon /> </a> 
      <a className="link-button" onClick={windowPopup} href={fbLink}
      target="_blank" rel="noopener noreferrer" alt="Share on Facebook"><FacebookIcon/></a>
      <a className="link-button" onClick={windowPopup} href={redditLink}
      target="_blank" rel="noopener noreferrer">
          <RedditIcon/>
      </a>
      </div>
    </div>
    </>
  )
}




export default ShareLinks
