import React, { Component } from "react";
import { elements } from "./Data";

class Element extends Component {
render(){
    let { num } = this.props;
    let element = elements[num];

    return(
        <div className={`element element-${num} ${element.category}`}>
            <ul className="element__list">
                <li className="number">{element.number}</li>
                <li className="info__symbol symbol">{element.symbol}</li>
                <li className="name">{element.name}</li>
                <li className="weight">{element.atomic_mass}</li>
            </ul>
        </div>
    );
    }
}

export default Element;