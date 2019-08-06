import React ,{Component} from 'react';
import './App.css';

class App extends Component {
    
    constructor(props) {
        super(props);
        // this.onAddProduct = this.onAddProduct.bind(this);
        this.state = {
            products: [
                {
                id: 1,
                name: "ip6",
                image: "https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/24/636812432713563751_ip-xr-den-4.png",
                price: 151399,  
                status: true
                }, 
                {
                    id: 2,
                    name: "ip7",
                    image: "https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/24/636812432713563751_ip-xr-den-4.png",
                    price: 151399,
                    status: true
                },
                {
                    id: 3,
                    name: "ip8",
                    image: "https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/24/636812432713563751_ip-xr-den-4.png",
                    price: 151399,
                    status: true
                }
            ],
            isActive: true
        };
    }

    onSetState = ()  => {
        // if(this.state.isActive === true){
        //     this.setState({
        //         isActive: false
        //     })
        // }else{
        //    this.setState({
        //         isActive: true
        //     })  
        // }
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render() {
        
        let elements = this.state.products.map((product, index) => {
            let result= '';

            if(product.status){
                result =
                <tr key={index}>
                    <td>{ index }</td>
                    <td>{ product.name }</td>
                    <td>
                        <span className="btn btn-success">{product.price}</span>
                    </td>
                </tr>
            }
            return result;
        });

        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <a className="navbar-brand" >Drops</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Ten San Pham</th>
                                        <th>Gia</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {elements}
                                </tbody>
                            </table>
                            <button type="button" className="btn btn-danger" onClick={this.onSetState}>
                                Active: {this.state.isActive === true ? 'true': 'false'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
