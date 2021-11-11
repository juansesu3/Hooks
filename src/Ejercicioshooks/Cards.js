import React, { useEffect, useState } from 'react'

const Cards = ({categoria}) => {


    const [images,setImages] = useState([])

    useEffect(() => {
        imgGif(categoria).then(imgData => setImages(imgData))
        
        
    }, [categoria])

    const imgGif = async (categoria) => {
        const url = "https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=Fo1Wf46Dy54oGkBUmJSghk7fQRvMddk0"
        const resp = await fetch(url)
        const {data} = await resp.json()
        // console.log(data);


        const imgData = data.map((img) => {
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }

        })

        return imgData

    }
    console.log(images);

    imgGif()


    

    return (
        <div>
            <ol>
                {
                    images.map((img)=>(
                        <li key={img.id}>
                            <h3>{img.title}</h3>
                            <img src={img.url} />
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}

export default Cards
