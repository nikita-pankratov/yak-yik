/**
 * Created by pankratov on 7/9/17.
 */

import React, { Component } from 'react';
import styles from '../container/styles'

class Zone extends Component {
    render(){
        return(
            <div style={styles.zone.container}>
                <h2 style={styles.zone.header}>
                    <a style={styles.zone.title} href="#">{this.props.zone.name}</a>
                </h2>
                <span className="detail">{this.props.zone.zipCodes[0]}</span>
                <br/>
                <span className="detail">{this.props.zone.numComments} comments</span>
            </div>
        )
    }
}

export default Zone;