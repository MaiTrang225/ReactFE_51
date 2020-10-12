import React, { Component } from 'react'
import Carousel from './Carousel'
import Header from './Header'
import ListLaptop from './ListLaptop'
import ListPhone from './ListPhone'
import Promotion from './Promotion'



export default class BaiTapLayout extends Component {
    render() {
        return (
            <div class="bg-dark">
                <Header />
                <Carousel />
                <ListPhone />
                <ListLaptop />
                <Promotion />
            </div>

        )
    }
}
