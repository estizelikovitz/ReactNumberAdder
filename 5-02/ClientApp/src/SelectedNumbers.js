import React from 'react';

class SelectedNumbers extends React.Component {





    render() {
        const { selectedNumber, onLockClick, onUnlockClick, isLocked } = this.props;
        return (
            <>
                <li className="list-group-item">
                    {selectedNumber}
                    <button className="ml-3 btn btn-primary" onClick={isLocked ? onUnlockClick : onLockClick} >
                        {isLocked ? 'Unlock' : 'Lock'}
                    </button>
                </li>
            </>
        )
    }
}
export default SelectedNumbers;