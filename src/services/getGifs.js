import { useState } from "react";

const apiKey = 'r5cTWyYs2WAjHq3KiDIjVrIeJTnfalaV';


export default function getGifs({keyword = 'Lion'} = {}) {

    const APIurl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
    return fetch(APIurl)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response
      if (Array.isArray(data)) {
          const gifs = data.map(image => {
              const {images, title, id} = image
              const { url } = images.downsized_medium
              return {title, id, url}
          });
        return gifs
      }
    })
}