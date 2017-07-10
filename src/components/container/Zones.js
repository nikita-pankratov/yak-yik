/**
 * Created by pankratov on 7/9/17.
 */

import React, { Component } from 'react';
import Zone from '../presentation/Zone';
import superagent from 'superagent';

class Zones extends Component {
    constructor(){
        super();

        this.state = {
            newZone: {
                name: '',
                zipCode: '',
                numComments: 0
            },
            list: []
        }
    }

    componentDidMount(){
        superagent
            .get('/api/zone')
            .query(null)
            .set('Accept', 'application/json')
            .end((err, response) => {
                if (err) {
                    alert('ERROR:'+err);
                    return;
                }

                let results = response.body.results;
                this.setState({list: results});
            })
    }

    updateZone(event){
        const id = event.target.id;

        let updatedZone = Object.assign({}, this.state.newZone);

        updatedZone[id] = event.target.value;
        this.setState({newZone: updatedZone});

    }

    submitZone(){
        let updatedList = Object.assign([], this.state.list);
        updatedList.push(this.state.newZone);
        this.setState({list: updatedList});
    }


    render(){
        const listItems = this.state.list.map((zone, i) => {
            return (
                <li key={i}> <Zone zone={zone} /> </li>
            )
        });

        return(
            <div>
                <ol>
                    {listItems}
                </ol>

                <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Name" /> <br/>
                <input id="zipCode" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zip Code" /> <br/>
                <button onClick={this.submitZone.bind(this)} className="btn btn-danger">Submit Zone</button>

            </div>
        )
    }
}

export default Zones;