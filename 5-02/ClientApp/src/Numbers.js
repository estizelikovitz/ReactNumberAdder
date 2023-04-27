import React from 'react';

class Numbers extends React.Component {

    render() {
        const { number, onSelectClick, onUnselectClick, isSelected, isLocked } = this.props;
        return (
            <>
                <tr>
                    <td>{number}</td>
                    <td>
                        <button disabled={isLocked} className={`btn btn-${isSelected ? 'danger' : 'primary'}`} onClick={isSelected ? onUnselectClick : onSelectClick}>
                            {isSelected ? 'Remove from Selected' : 'Add to Selected'}
                        </button>
                    </td>

                </tr>
            </>
        )
    }
}
export default Numbers;