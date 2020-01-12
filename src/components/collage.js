  import React, { Component } from 'react';

    class Collage extends Component {

      state = {
        photos: []
      }
      componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ photos: data })
        })
        .catch(console.log)
      }
       render() {
        return (
            <div>
                {photos.map((photo) => (
                <div alt={photo.description} class="card">
                    <div class="card-body">
                    <img src={photo.urls.regular}> </img>
                    <h5 class="card-title">{photo.user.name}</h5>
                    <p class="card-text">{photo.description}</p>
                    </div>
                </div>
                ))}
            </div>
        );
      }
    }

    export default Collage