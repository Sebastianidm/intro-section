import React from 'react'

const Home = () => {
  return (
    <div className='containerHome'>
        <div className='containerHijo'>
        <h1>Make Remote Work</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, id similique atque tempora accusantium doloribus corporis perspiciatis provident magni, ea obcaecati! Adipisci sint placeat laborum ipsum nihil ab quaerat hic.
        Itaque quam atque numquam, voluptatibus, labore reprehenderit deserunt officia asperiores accusamus nesciunt ad libero soluta sunt consequatur harum quaerat assumenda nostrum molestias dolores. Cumque modi nihil facilis, alias reprehenderit blanditiis.</p>

        <button className='botonHome'>Learn More</button>
        <ul className='listaIcono'>
            <li>icono</li>
            <li>icono</li>
            <li>icono</li>
            <li>icono</li>
        </ul>


        </div>

        <div>
        <img  className='imgHome' src="/src/assets/img/image-hero-desktop.png" alt="imagenMain" />
        </div>
    </div>
  )
}

export default Home