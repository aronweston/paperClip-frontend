import React from 'react';
import RemoveClip from './RemoveClip'

const Clip = () => {
    return (
      <div className="clip-list-container">

        <div className="clip-container">
          <div className="clip-message-container">
            <p className="clip-message">Jeff Bezos could Venmo me $5 and still be a billionaire. Let that sink in.
            </p>
            <p className="clip-info">@terry | 8:08pm - 01/02/21</p>
          </div>
          <div className="clip-button-controls">
              <RemoveClip />
          </div>
        </div>

        <div className="clip-container">
          <div className="clip-message-container">
            <p className="clip-message">Jeff Bezos could Venmo me $5 and still be a billionaire. Let that sink in.
            </p>
            <p className="clip-info">@terry | 8:08pm - 01/02/21</p>
          </div>
          <div className="clip-button-controls">
              <RemoveClip />
          </div>
        </div>

        <div className="clip-container">
          <div className="clip-message-container">
            <p className="clip-message">Jeff Bezos could Venmo me $5 and still be a billionaire. Let that sink in.
            </p>
            <p className="clip-info">@terry | 8:08pm - 01/02/21</p>
          </div>
          <div className="clip-button-controls">
              <RemoveClip />
          </div>
        </div>

      </div>
    );
}

export default Clip;
