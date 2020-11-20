import React, { Component, Fragment } from 'react'
class RefExample extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.h1Element = React.createRef();
    }
    componentDidCatch(){
        this.h1Element.current.style.backgroud ="red";
        this.h1Element.current.style.color="white";
        this.h1Element.current.style.padding="40px";
        this.h1Element.current.style.bordeRadius="white";
    }
    render() { 
        return (
            <Fragment>
            <h1 ref={this.h1Element} >ref examplr</h1>
            </Fragment>
          );
    }
}
 
export default RefExample;