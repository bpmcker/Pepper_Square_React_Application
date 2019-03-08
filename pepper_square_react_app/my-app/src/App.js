import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeIcon from './home.png';
import heartIcon from './heart.png';
import addIcon from './add.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('http://test.peppersquare.com/api/v1/article')
    .then(res => res.json())
    .then(json => {
        this.setState({
          isLoaded: true,
          items:json,
        })
    });
  }

  render() {
    var {isLoaded, items} = this.state;
    if (!isLoaded) {
      return (<div>Loading...</div>);
    } else {

      function loadHomeFlow() {
        document.getElementById("#MostPopularFlow").style.display = "none";
        document.getElementById("#ItemDetailsFlow").style.display = "none";
        document.getElementById("#AddNewItemFlow").style.display = "none";
        document.getElementById("#HomeFlow").style.display = "inline";
      }

      function loadMostPopularFlow() {
        document.getElementById("#ItemDetailsFlow").style.display = "none";
        document.getElementById("#AddNewItemFlow").style.display = "none";
        document.getElementById("#HomeFlow").style.display = "none";
        document.getElementById("#MostPopularFlow").style.display = "inline";
      }

      function loadDetailsFlow() {
        document.getElementById("#MostPopularFlow").style.display = "none";
        document.getElementById("#AddNewItemFlow").style.display = "none";
        document.getElementById("#HomeFlow").style.display = "none";
        document.getElementById("#ItemDetailsFlow").style.display = "inline";
      }

      function loadAddNewItemFlow(){
        document.getElementById("#MostPopularFlow").style.display = "none";
        document.getElementById("#ItemDetailsFlow").style.display = "none";
        document.getElementById("#HomeFlow").style.display = "none";
        document.getElementById("#AddNewItemFlow").style.display = "inline";
      }

  return (

  <div className="App" style={{backgroundColor:"AliceBlue"}}>
{/*---------------------------------------------------------------------------------------------------------------------------------------------------------*/}
  <center>
      <header style={{width:"100%", fontSize:"18px", fontFamily:"Helvetica", fontWeight:"bold", backgroundColor:"black", color:"white",
        position:"fixed", zIndex:"1"}}>Home</header>

      <footer style={{height:"25px", width:"100%",  backgroundColor:"white", position:"fixed", bottom:"0px", zIndex:"1"}}>
        <div style={{height:"25px", width:"340px"}}>
        <img style={{height:"25px", width:"25px", float:"left"}} src={homeIcon} onClick={loadHomeFlow}/>
        <img style={{height:"25px", width:"25px", float:"center"}} src={heartIcon} onClick={loadMostPopularFlow}/>
        <img style={{height:"25px", width:"25px", float:"right"}} src={addIcon} onClick={loadAddNewItemFlow}/>
        </div>
      </footer>
  </center>
{/*---------------------------------------------------------------------------------------------------------------------------------------------------------*/}
  <div style={{width:"100%", height:"25px"}}></div>
{/*---------------------------------------------------------------------------------------------------------------------------------------------------------*/}
    <div id="#HomeFlow">
        {items.map(item => (

        <div style={{height:"360px", width:"340px", backgroundColor:"white", marginLeft:"auto", marginRight:"auto", marginTop:"12px",
          position: "relative", top:"0", right:"0", left:"0", bottom:"0"}}>

              <img style={{height:"180px", width:"100%"}} src={item.image} onClick={loadDetailsFlow}/>

                      <div style={{height:"100px", width:"100%"}}>
                              <div className="container">
                                      <div className="row">
                                        <div className="col-sm-12">
                                          <div style={{fontWeight:"bold", fontSize:"16px", float:"left"}}>{item.title}</div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-6">
                                          <div style={{color:"lawngreen", fontSize:"14px", float:"left"}}>{item.tags}</div>
                                        </div>
                                        <div className="col-6">
                                          <div style={{color:"gray", fontSize:"14px", float:"right"}}>{item.created_at.substring(0, 10)}</div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-12">
                                          <div style={{height:"56px", color:"black", fontSize:"12px", wordWrap:"break-word", overflow:"hidden"}}>
                                            {item.description}
                                          </div>
                                        </div>
                                      </div>
                              {/* end of container */}
                              </div>
                        {/* end of div */}
                        </div>

                        <div style={{height:"20px", width:"100%"}}>
                          <hr/>
                        </div>

                        <div style={{height:"20px", width:"100%"}}>
                            <div className="row">
                                <div className="col-9">
                                </div>
                                <div className="col-1">
                                  <img style={{height:"20px", width:"20px"}} src={heartIcon}/>
                                </div>
                                <div className="col-1">
                                  <div style={{height:"5px", width:"20px"}}></div>
                                  <div style={{fontSize:"10px", width:"20px"}}>{item.likes}</div>
                                </div>
                                <div className="col-1">
                                </div>
                            </div>
                        {/* end of div */}
                        </div>

        {/* end of 360px item container */}
        </div>

      ))} {/* end of item inflation */}

    {/* end of HomeFlow*/}
    </div>
{/*---------------------------------------------------------------------------------------------------------------------------------------------------------*/}
    <div id="#MostPopularFlow" style={{display:"none"}}>
    {/* need to loop thru items and stack most viewed..*/}
    MostPopularFlow
    </div>
{/*---------------------------------------------------------------------------------------------------------------------------------------------------------*/}
    <div id="#ItemDetailsFlow" style={{display:"none"}}>
    {/* need to load just the picture clicked..so need that id..*/}

    <div style={{height:"100%", width:"340px", backgroundColor:"white", marginLeft:"auto", marginRight:"auto", marginTop:"12px",
      position: "relative", top:"0", right:"0", left:"0", bottom:"0", position:"fixed"}}>

          <img style={{height:"50%", width:"100%"}} src={heartIcon} onClick={loadDetailsFlow}/>

                          <div className="container">
                                  <div className="row" style={{height:"5%", position:"fixed"}}>
                                    <div className="col-sm-12">
                                      <div style={{fontWeight:"bold", fontSize:"18px", float:"left"}}></div>
                                    </div>
                                  </div>
                                  <div className="row" style={{height:"5%", position:"fixed"}}>
                                    <div className="col-6">
                                      <div style={{color:"lawngreen", fontSize:"16px", float:"left"}}></div>
                                    </div>
                                    <div className="col-6">
                                      <div style={{color:"gray", fontSize:"16px", float:"right"}}></div>
                                    </div>
                                  </div>
                                  <div className="row" style={{height:"40%", position:"fixed"}}>
                                    <div className="col-12">
                                      <div style={{height:"65px", color:"black", fontSize:"12px", wordWrap:"break-word", overflow:"scroll"}}>
                                        {heartIcon}
                                      </div>
                                    </div>
                                  </div>
                          {/* end of container */}
                          </div>

                    <div style={{height:"1%", width:"100%"}}>
                      <hr/>
                    </div>

                    <div style={{height:"10%", width:"100%", bottom:"25px", position:"fixed"}}>
                        <div className="row">
                            <div className="col-9">
                            </div>
                            <div className="col-1">
                              <img style={{height:"20px", width:"20px"}} src={heartIcon}/>
                            </div>
                            <div className="col-1">
                              <div style={{height:"5px", width:"20px"}}></div>
                              <div style={{fontSize:"10px", width:"20px"}}></div>
                            </div>
                            <div className="col-1">
                            </div>
                        </div>
                    {/* end of div */}
                    </div>
    {/* end of 360px item container */}
    </div>
    {/* end of ItemDetailsFlow */}
    </div>
{/*---------------------------------------------------------------------------------------------------------------------------------------------------------*/}
    <div id="#AddNewItemFlow" style={{display:"none"}}>
    {/* need JSON post to API*/}
    AddNewItemFlow
    </div>
{/*---------------------------------------------------------------------------------------------------------------------------------------------------------*/}
{/* end of app block */}
{/* end of return block */}
</div>
);

{/* end of else block */}
    }
  }
}
export default App;
