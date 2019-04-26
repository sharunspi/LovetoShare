import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
class Frontpage extends Component {
    render() {
        return (
            <div>
                <header className="masthead">
                    <div className="container d-flex h-100 align-items-center">
                        <div className="mx-auto text-center">
                            <h1 className="mx-auto my-0 text-uppercase">LovetoShare</h1>
                            <h2 className="text-white-50 mx-auto mt-2 mb-5">Do you have more food or searching for free food this is the place for you </h2>
                            <div className="row">
                                <div className="col-md-6 col-lg-12">
                                    <a href="#about" class="btn btn-primary js-scroll-trigger">Love to Share my Food</a>
                                </div>
                                <div className="col-md-6 col-lg-12">
                                    <a href="#about" class="btn btn-primary js-scroll-trigger">Anyone have extra Food ?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
export default Frontpage;