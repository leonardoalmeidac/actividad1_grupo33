import React from 'react';
import './Badge.css';

const Badge = ({ count }) => {
    if (count <= 0) return null;
    return <span className="badge">{count > 9 ? '9+' : count}</span>;
};

export default Badge;
