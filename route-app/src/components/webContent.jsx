// import React, { Component } from 'react';
// import { useParams } from 'react-router-dom';

// class WebContent extends Component {
//     state = {  } 
//     render() { 
//         console.log(this.props.params);
//         return (
//             <h1>Web - {this.props.params.chapter}</h1>
//         );
//     }
// }
 
// export default (props) => (
//     <WebContent 
//         {...props}
//         params={useParams()}
//     />
    
// );

import React, { Component } from 'react';
import { useSearchParams, Link} from 'react-router-dom';

class WebContent extends Component {
    state = { 
        searchParams: this.props.params[0],
        setSearchParams: this.props.params[1],
    } 
    render() { 
        console.log(this.state.searchParams.get('chapter'));
        console.log(this.state.searchParams.get('section'));
        return (
            <React.Fragment>
                <h1>Web - {this.state.searchParams.get('chapter')}</h1>
                <div>内容</div> 
                <hr />
                <Link to="/web">返回</Link>
            </React.Fragment>
        );
            
    }
}
 
export default (props) => (
    <WebContent 
        {...props}
        params={useSearchParams()}
    />
    
);