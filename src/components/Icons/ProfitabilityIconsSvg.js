import React from "react";

export const ProfitabilityIconsSvg = () => {
  return (
    <div className="profitability-svg">
      <div className="svgDiv1">
        <svg
          width="3"
          height="14"
          viewBox="0 0 3 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.5"
            y1="6.55655e-08"
            x2="1.5"
            y2="14"
            stroke="#D7DFEB"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="svgDiv2">
        <svg
          width="3"
          height="10"
          viewBox="0 0 3 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.5"
            y1="-6.55671e-08"
            x2="1.5"
            y2="10"
            stroke="#D7DFEB"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="svgDiv3">
        <svg
          width="3"
          height="6"
          viewBox="0 0 3 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.5"
            y1="-6.55673e-08"
            x2="1.5"
            y2="6"
            stroke="#4E9616"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="textPercent">85.5%</div>
    </div>
  );
};
