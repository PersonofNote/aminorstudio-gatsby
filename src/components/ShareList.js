import React from 'react';
import TwitterIcon from "../components/icon-components/IconTwitter"
//import FacebookIcon from "../components/icon-components/IconFacebook"
//import RedditIcon from "../components/icon-components/IconReddit"
import { useState } from 'react';

const ShareLinks = (props) => {
  const link = props.path.href
  const fbLink = `https://www.facebook.com/sharer/sharer.php?u=${link}`
  const twitterLink = `https://twitter.com/intent/tweet/?text=Test&url=${link}%2F&via=person_of_note`
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
    <div className="share-header"><h2>Like this article? Share it! </h2></div>
    <div style={{
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `space-between`,
      alignContent: `center`,
      alignItems: `center`,
      width: `100%`,
      maxWidth: `500px`,
      margin: `auto`,
    }}>
      <div className="icon share-icon">
        <a  onClick={windowPopup} href={twitterLink}
    target="_blank" rel="noopener noreferrer" alt="Share on Twitter"> <TwitterIcon style={{height: `32px`}} /> </a>   
      </div>
    </div>
    </>
  )
}




export default ShareLinks
