import _ from 'lodash';
import React, { PropTypes, Component } from 'react';

import './styles.css';

export default class FlexBlock extends Component {
  render() {
    return (
      <div className='react-flex-block'>
        {this.props.children}
        {_.map(_.range(this.props.maxColumn), i => (
          <div
            key={'empty-placeholder-' + i}
            className={this.props.blockClassName}
            style={{
              width: this.props.width,
              height: 0,
            }}
          />
        ))}
      </div>
    );
  }
}

FlexBlock.propTypes = {
  blockClassName: PropTypes.object,
  children: PropTypes.node,
  maxColumn: PropTypes.number,
  width: PropTypes.number,
};
