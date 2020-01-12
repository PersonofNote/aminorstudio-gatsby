    import React from 'react'

    const CollagePhotos = ({ photos }) => {
      return (
        <div>
          {photos.map((photo) => (
            <div class="card">
              <div class="card-body">
                <img src={photo.urls.regular}> </img>
                <h5 class="card-title">{photo.user.name}</h5>
                <p class="card-text">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default CollagePhotos