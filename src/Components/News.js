import React, { Component } from 'react';
import Newitem from './Newitem';
import dl from './dulieu.json';

class News extends Component {
    render() {
      // var so = [1,3,5,7,9,10];
      // var so2 = so.map((value,key)=> value*10 + "va chi so la:" + key);
      // console.log(so2);
        return (
            <div>
            <header className="masthead tintuc">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-lg-12 my-auto">
                    <div className="header-content mx-auto">
                      <h1 className="mb-5">Tintuc</h1> 
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* beegin tin tuc */}
            <div className="container">
              <div className="row mt-3">
             {
                      dl.map((value,key)=> {
                        return (
                         
                          <Newitem key =  {key}
                          tinId = {value.id}
                          anh={value.anh}
                           tieuDe={value.tieude}
                          trichdan={value.trichdan}>
  
                          </Newitem>
                        )

                       
                      })
                       
                    
             }
               
               {/* <Newitem anh="https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/5/9/a/b/59abf94a149a426e419aa38580073365.jpg " tieuDe="Cung anh"
                trichdan="loadsadasdasdasdasdasdasdsa"></Newitem>
                <Newitem anh="https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/5/9/a/b/59abf94a149a426e419aa38580073365.jpg " tieuDe="Cung anh"
                trichdan="loadsadasdasdasdasdasdasdsa"></Newitem>
                 <Newitem anh="https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/5/9/a/b/59abf94a149a426e419aa38580073365.jpg " tieuDe="Cung anh"
                trichdan="loadsadasdasdasdasdasdasdsa"></Newitem> */}
              </div>
            </div>
            {/* end tin tuc */}
          </div>
          
        );
    }
}

export default News;