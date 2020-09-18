import React, { Component } from 'react';
import dl from './dulieu.json'
import NewRelated from './NewRelated';
class New_detail extends Component {
    render() {
      // var x = 2;
      // var y ="2";
      // y = parseInt(y,20);//chuyen string sang int
      // if(x == y) {
      //   console.log("bang nhau");
      // }
      // console.log(typeof(y))
      // console.log(this.props.match.params.id)
      console.log(this.props.match.params.id);
      console.log(typeof(this.props.match.params.id));
      var dem =1;
        return (
            <div>
            <header className="masthead tintuc">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-lg-12 my-auto">
                    <div className="header-content mx-auto">
                      <h1 className="mb-5">Chi tiet</h1> 
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* beegin tin tuc */}
            {
            dl.map((value,key)=>{
       
       if(value.id == this.props.match.params.id)
       {
        return (
         <div className="jumbotron jumbotron-fluid" key={key}>
         <div className="container">
           <img src={value.anh} className="img-fluid rong100" alt="" />
           <p className="lead">{value.tieude}</p>
           <hr className="my-2" />
            {value.noidung}
         </div>
       </div>
        )
       }
     })
    }
        <div className="container">
          <h4 className="card-title text-center">Tin lien quan</h4>
          <div className="row">
            <div className="col-12">
              <div className="card-deck">
                        {
                         
                        dl.map((value,key)=>{
                          console.log(key);
                          if(value.id != this.props.match.params.id)
                          {
                            if(dem <= 4){
                              dem++;
                              return(
                            
                                <NewRelated key =  {key}
                                tinId = {value.id}
                                anh={value.anh}
                                 tieuDe={value.tieude}
                                trichdan={value.trichdan}>
    
                                </NewRelated>
                            
                           
                            )}
                          }
                          
                        })
                     }
                        
              </div>

            </div>
          </div>
        </div>
            {/* end tin tuc */}
          </div>
          
        );
    }
}

export default New_detail;