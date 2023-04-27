import React from 'react';
import { produce } from 'immer';
import SelectedNumbers from './SelectedNumbers';
import Numbers from './Numbers';
class NumberAdder extends React.Component {

    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: []
    }


    onAddClick = () => {
        const min = 1;
        const max = 100;
        let rand = min + (Math.random() * (max - min));

        const newState = produce(this.state, draftState => {
            draftState.numbers.push(Math.round(rand));
        });

        this.setState(newState);
    }
    onSelectClick = n => {
        const newState = produce(this.state, draftState => {
            draftState.selectedNumbers.push(n);
        });
        this.setState(newState);

    }
    onUnselectClick = n => {
        const selectedNumbers = this.state.selectedNumbers.filter(sn => n !== sn);
        this.setState({ selectedNumbers });
    }
    onLockClick = n => {
        const newState = produce(this.state, draftState => {
            draftState.lockedNumbers.push(n);
        });
        this.setState(newState);
    }
    onUnlockClick = n => {
        const lockedNumbers = this.state.lockedNumbers.filter(ln => n !== ln);
        this.setState({ lockedNumbers });
    }
    isSelected = n => {
        const { selectedNumbers } = this.state;
        return selectedNumbers.some(s => s === n);
    }
    isLocked = n => {
        const { lockedNumbers } = this.state;
        return lockedNumbers.some(l => l === n);
    }
    render() {
        const { numbers } = this.state;
        return (
            <div className="container" style={{ marginTop: '60px' }}>
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-success btn-lg btn-block" onClick={this.onAddClick}>Add</button>
                    </div>
                </div>
                <div style={{ maxHeight: '500px overflow-y: scroll' }}>
                    <table className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <th style={{ width: '25%' }}>Number</th>
                                <th>Add/Remove</th>
                            </tr>
                        </thead>
                        <tbody>

                            {numbers.map((n) => {
                                return <Numbers
                                    onUnselectClick={() => this.onUnselectClick(n)}
                                    isSelected={this.isSelected(n)}
                                    onSelectClick={() => this.onSelectClick(n)}
                                    isLocked={this.isLocked(n)}
                                    number={n} />
                            })
                            }

                        </tbody>
                    </table>
                </div>

                <div className="row jumbotron">
                    <div className="col-md-6 col-md-offset-3">
                        <h3>Selected Numbers </h3>
                        <ul className="list-group">
                            {this.state.selectedNumbers.map((sn) => {
                                return <SelectedNumbers
                                    onLockClick={() => this.onLockClick(sn)}
                                    onUnlockClick={() => this.onUnlockClick(sn)}
                                    selectedNumber={sn}
                                    isLocked={this.isLocked(sn)}
                                />
                            }
                            )}

                        </ul>
                    </div>
                </div>

            </div>

        )
    }
}
export default NumberAdder;