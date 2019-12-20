import React from 'react';
class LeatestNews extends React.Component{
    render(){
        return(
           <div className="container LeatestNews">
    
            <div className="col-md-8 imgcol ">
    
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner ">
    <div class="carousel-item active">
      <img class="d-block w-100 img1" src="img/devendra.jpg"  alt="" />
      <p className="ptext">CEO of theRapidHire</p>
    </div>
    <div class="carousel-item ">
      <img class="d-block w-100 img2 " src="img/google.jpg"  alt="" />
      <p className="ptext">google</p>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 img3" src="img/im5.jpg" alt="" />
      <p className="ptext">CEO of Google's parent company Alphabet</p>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 img4"  src="img/img6.jpg" alt="" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    </div>
    



  

        </div>


        );
    }
}
export default LeatestNews;