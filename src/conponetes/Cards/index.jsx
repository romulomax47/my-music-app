import dataNews from '../../dataCard.js'
import { Componetes, Compontes_div } from './styles.jsx';

const datas = dataNews;


export default function Cards() {

   return (
      <Componetes>
         {datas.map((data, index) => {
            return (
               <Compontes_div key={index}>
                  <div className="data">
                     <h1>{data.title}</h1>
                     <p>{data.text}</p>
                     <i className="bi bi-hand-thumbs-up"></i>
                     <span>{data.like}</span>

                     <i className="bi bi-chat"></i>
                     <span>{data.comentes}</span>

                  </div>
                  <div className='data_img'>
                     <img src={data.imagem} alt="Foto imagem de fake news" />
                  </div>
               </Compontes_div>
            )

         })}

      </Componetes>
   )
}