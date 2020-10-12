import React, { Component } from 'react'
import Phone1 from './Phone1'
import Phone2 from './Phone2'
import Phone3 from './Phone3'
import Phone4 from './Phone4'

export default class ListPhone extends Component {
    render() {
        return (
            <div className="container-fluid" >
                <section id="smartphone" className="pt-5 pb-5 ">
                    <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                        <div className="col-3">
                            <Phone1 />
                        </div>
                        <div className="col-3">
                            <Phone2 />
                        </div>
                        <div className="col-3">
                            <Phone3 />
                        </div>
                        <div className="col-3">
                            <Phone4 />
                        </div>


                    </div>
                </section>
            </div>

        )
    }
}
