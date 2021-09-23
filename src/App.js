import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="100" />
        <div className="App-name">
          <h1>Jaime Andrés Meza Cristancho</h1>
          <h5>DISEÑADOR INDUSTRIAL / MAGISTER EN EDUCACIÓN EN TECNOLOGÍA</h5>
        </div>
        <img src="LOGO_min.png" className="App-star"/>        
      </header>
      <main>
        <nav className="main"> 
          <div className="main-container">
            <div className="main-container-profile" title="Perfil Profesional">
              <h2>Perfil Profesional</h2>
              <p>Diseñador Industrial con experiencia en docencia e investigación. 
                Enfocado en la creación de contenidos digitales, la enseñanza del 
                dibujo técnico y la innovación tecnológica a través del life long learning.</p>
            </div>
            <div className="main-container-experience" title="Experiencia Laboral">
              <h2>Experiencia Laboral</h2>
              <p><strong>DOCENTE DE DIBUJO TÉCNICO </strong>Instituto Técnico Industrial Francisco José de Caldas, abril 2018 - Actualmente</p>
              <ul> 
                <li><a href="https://sites.google.com/site/andresmezacristancho/archivo/2020/clases-2020" target="_blank" >Clases Virtuales 2020</a></li>
                <li><a href="https://sites.google.com/site/andresmezacristancho/archivo/2019/proyectos" target="_blank" >Muestra Técnica 2019</a></li>
              </ul>
              <p><strong>DOCENTE DE TECNOLOGÍA E INFORMÁTICA </strong>Colegio Carlos Pizarro Leongómez, febrero 2016 - Abril 2018</p>
            </div>
            <div className="main-container-education" title="Educación Formal">
              <h2>Educación Formal</h2>
              <p><strong>UNIVERSIDAD DISTRITAL FRACISCO JOSÉ DE CALDAS</strong></p>
              <p>Magister en Educación en Tecnología, 2018 - 2020</p>
              <ul>
                  <li><a href="https://repository.udistrital.edu.co/handle/11349/22979" target="_blank" > Tesis de grado sobre la Estimulación de la Inteligencia Espacial</a></li>
                  <li><a href="https://www.youtube.com/watch?v=mC59ibnB6Qc&t=16200s" target="_blank" > Ponente en el IV Encuentro de Investigadores y Docentes en Educación en Tecnología</a></li>
                </ul>
              <p><strong>UNIVERSIDAD NACIONAL DE COLOMBIA</strong></p>
              <p>Diseñador Industrial, 2006 - 2012</p>
              <ul>
                  <li><a href="https://www.flickr.com/photos/jamezac/sets/72157631709711084/show/" target="_blank" >Proyectos académicos, practica empresarial en diseño de maquinaria industrial</a></li>                  
                </ul>           
            </div>
            <div className="main-container-s_skills" title="Soft Skills">
              <h6>Hola</h6>
            </div>
            <div className="main-container-h_skills" title="Hard Skills">
              <h6>Hola</h6>
            </div>            
            <div className="main-container-languages" title="Idiomas">
              <h2>Idiomas</h2>
              <p>Español = Nativo</p>
              <a href="https://platzi.com/p/Jamezac/ruta/13-idioma-ingles/diploma/detalle/" target="_blank" >Ingles = B2</a>
            </div>
            <div className="main-container-social" title="Redes Sociales">
              <a href="https://www.youtube.com/user/jamezacristancho/videos" target="_blank" className="main-container-social-y"><img src="youtube_social_icon_red.png"/></a>
              <a href="https://www.youtube.com/user/jamezacristancho/videos" target="_blank" >YouTube Chanel</a>
              <a href= "https://www.linkedin.com/in/jamezac/" target="_blank" className="main-container-social-l"><img src="LI-In-Bug.png" className="main-container-social-l"/></a>
              <a href="https://www.linkedin.com/in/jamezac/" target="_blank" >Linkedin Profile</a>              
            </div>
          </div>
        </nav>
        
      </main>
      <footer>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </footer>
    </div>
  );
}

export default App;

