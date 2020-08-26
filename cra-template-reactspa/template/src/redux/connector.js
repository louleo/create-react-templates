import React from "react";
import * as Actions from "./action-creators"
import {connect} from "react-redux";
import {HelloWorld} from "../component/hello-world/hello-world";

const mapStateToProps = (ds)=>(ds);

const mapDispatchToProps = {
    ...Actions
};

export const Connect = connect(mapStateToProps,mapDispatchToProps)(
    function T(props){
        return(
            <HelloWorld {...props}></HelloWorld>
        );
    }
)
