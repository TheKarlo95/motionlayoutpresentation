import React from 'react';
import "./MotionLayoutGraph.css"

export default function() {
  return <div id="container">
    <div id="motion-layout" className="cyan-dark box">
      <div className="title">MotionLayout</div>
      <div className="multiple-box-container">
        <div className="multiple-box cyan">&lt;View&gt;</div>
        <div className="multiple-box cyan">&lt;Helper&gt;</div>
      </div>
    </div>

    <div id="arrow">
      <svg
         version="1.0"
         viewBox="0 0 246 90">
        <path
           d="M 160,70 L 5,70 L 5,20 L 160,20 L 160,5 C 160,5 245,45 245,45 L 160,85 L 160,70 z"
           style={{fill:"#66ccff", stroke: "#006699", strokeWidth:"2"}}
        />
      </svg>
    </div>

    <div id="motion-scene" className="blue-dark box">
      <div className="title">MotionScene</div>

      <div className="blue box">
        <div className="sub-title">StateSet</div>
        <div className="blue-light box">
          <div className="sub-title">State</div>
          <div className="blue-ultra-light box">
            <div className="sub-title">Variant</div>
          </div>
        </div>
      </div>

      <div className="blue box">
        <div className="sub-title">ConstraintSet</div>
        <div className="blue-light box">
          <div className="sub-title">Constraint</div>
          <div className="blue-ultra-light box">
            <div className="sub-title">CustomAttribute</div>
          </div>
        </div>
      </div>

      <div className="blue box">
        <div className="sub-title">Transition</div>
        <div className="blue-light box sub-title">OnClick</div>
        <div className="blue-light box sub-title">OnSwipe</div>
        <div className="blue-light box">
          <div className="sub-title">KeyFrameSet</div>
          <div className="teal box sub-title">KeyPosition</div>
          <div className="teal box">
            <div className="sub-title">KeyAttributes</div>
            <div className="teal-light box sub-title">CustomAttribute</div>
          </div>
          <div className="teal box">
            <div className="sub-title">KeyCycle</div>
            <div className="teal-light box sub-title">CustomAttribute</div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
