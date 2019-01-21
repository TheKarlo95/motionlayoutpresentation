import React from 'react';
import styled from 'styled-components';
import { Impress, Step } from 'react-impressjs';

import TitleSlide from './slides/TitleSlide';
import MotionLayoutGraph from './components/MotionLayoutGraph';

const primary = "#008eb9"
const accent = "#fecf00"

const PrimaryText = styled.div`
  color: ${primary};
`
const PrimaryUnderlineText = styled.div`
  color: ${primary};
  text-decoration-line: underline;
  text-decoration-color: ${accent};
`
const PrimaryBoldSpan = styled.span`
  font-weight: bold;
`
const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
`
const GridItem = styled.div`
  width: calc(33.333% - 10px);
  display: flex;
  margin: 5px;
`

const a1MotionLayoutSnippet = `<androidx.constraintlayout.motion.widget.MotionLayout
  app:layoutDescription="@xml/scene_collapsing_toolbar">
    <TextView
        android:id="@+id/tvTitle"
        android:layout_width="0dp"
        android:layout_height="wrap_content" />

    <ImageView
        android:id="@+id/ivHeader"
        android:layout_width="0dp"
        android:layout_height="140dp" />

    <com.undabot.motionlayoutexamples.views.SearchEditText
        android:id="@+id/searchField"
        android:layout_width="0dp"
        android:layout_height="wrap_content" />
    <!-- Rest of the layout -->
</androidx.constraintlayout.motion.widget.MotionLayout>`

const a1SceneSnippetTransition = `<MotionScene>
    <Transition
        motion:constraintSetEnd="@id/collapsed"
        motion:constraintSetStart="@id/expanded">

        <OnSwipe
            motion:dragDirection="dragUp"
            motion:touchAnchorId="@id/rvTopics"
            motion:touchAnchorSide="top" />

        <KeyFrameSet>
            <KeyPosition
                motion:framePosition="10"
                motion:keyPositionType="pathRelative"
                motion:percentX="-0.03"
                motion:target="@id/searchField" />
            <KeyAttribute
                android:scaleX="0.90"
                android:scaleY="0.90"
                motion:framePosition="10"
                motion:target="@id/searchField" />
        </KeyFrameSet>
    </Transition>`

const a1SceneSnippetConstraintSet1 = `    <ConstraintSet android:id="@+id/expanded">
        <Constraint
            android:id="@+id/tvTitle"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            motion:layout_constraintEnd_toEndOf="parent"
            motion:layout_constraintStart_toStartOf="parent"
            motionlayout_constraintTop_toTopOf="parent" />

        <Constraint
            android:id="@id/ivHeader"
            android:layout_height="200dp"
            android:elevation="1dp"
            motion:layout_constraintEnd_toEndOf="parent"
            motion:layout_constraintStart_toStartOf="parent"
            motion:layout_constraintTop_toTopOf="parent">
            <CustomAttribute
                motion:attributeName="imageAlpha"
                motion:customIntegerValue="255" />
        </Constraint>

        <Constraint
            android:id="@+id/searchField"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_marginStart="10dp"
            android:layout_marginEnd="10dp"
            motion:layout_constraintBottom_toBottomOf="@+id/ivHeader"
            motion:layout_constraintEnd_toEndOf="parent"
            motion:layout_constraintStart_toStartOf="parent"
            motion:layout_constraintTop_toBottomOf="@+id/ivHeader">
            <CustomAttribute
                motion:attributeName="elevation"
                motion:customDimension="2dp" />
        </Constraint>
    </ConstraintSet>`

const a1SceneSnippetConstraintSet2 = `<ConstraintSet android:id="@+id/collapsed">
        <Constraint
            android:id="@+id/tvTitle"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            motion:layout_constraintEnd_toEndOf="parent"
            motion:layout_constraintStart_toStartOf="parent"
            motionlayout_constraintTop_toTopOf="parent" />

        <Constraint
            android:id="@id/ivHeader"
            android:layout_height="?attr/actionBarSize"
            motion:layout_constraintEnd_toEndOf="parent"
            motion:layout_constraintStart_toStartOf="parent"
            motion:layout_constraintTop_toTopOf="parent">
            <CustomAttribute
                motion:attributeName="imageAlpha"
                motion:customIntegerValue="0" />
        </Constraint>

        <Constraint
            android:id="@+id/searchField"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_marginStart="10dp"
            android:layout_marginEnd="10dp"
            motion:layout_constraintBottom_toTopOf="@+id/ivHeader"
            motion:layout_constraintEnd_toEndOf="parent"
            motion:layout_constraintStart_toStartOf="parent">
            <CustomAttribute
                motion:attributeName="elevation"
                motion:customDimension="-5dp" />
        </Constraint>
    </ConstraintSet>
</MotionScene>`

const sovMotionLayoutSnippet = `<androidx.constraintlayout.motion.widget.MotionLayout
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    app:layoutDescription="@xml/scene_shape_of_view">

    <com.github.florent37.shapeofview.shapes.ArcView
        android:id="@+id/avHeader"
        android:layout_width="0dp"
        android:layout_height="200dp"
        app:shape_arc_height="26dp"
        app:shape_arc_position="bottom">

        <ImageView
            android:id="@+id/ivHeader"
            android:layout_width="410dp"
            android:layout_height="match_parent"
            android:alpha="0.7"
            android:scaleType="centerCrop"
            android:src="@drawable/header" />
    </com.github.florent37.shapeofview.shapes.ArcView>

    <TextView
        android:id="@+id/tvTitle"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content" />
    <!-- Rest of the layout -->
</androidx.constraintlayout.motion.widget.MotionLayout>`

const sovSceneSnippetTransition = `<MotionScene
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:motion="http://schemas.android.com/apk/res-auto">

    <Transition
        motion:constraintSetEnd="@id/collapsed"
        motion:constraintSetStart="@id/expanded">

        <OnSwipe
            motion:dragDirection="dragUp"
            motion:touchAnchorId="@id/rvCards"
            motion:touchAnchorSide="top" />
    </Transition>`

const sovSceneSnippetConstraintSet1 = `    <ConstraintSet android:id="@+id/expanded">
        <Constraint
            android:id="@+id/avHeader"
            android:layout_width="0dp"
            android:layout_height="240dp"
            motion:layout_constraintEnd_toEndOf="parent"
            motion:layout_constraintStart_toStartOf="parent"
            motionlayout_constraintTop_toTopOf="parent">
            <CustomAttribute
                motion:attributeName="arcHeightDp"
                motion:customFloatValue="60"/>
        </Constraint>

        <Constraint
            android:id="@+id/tvTitle"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginStart="23dp"
            motion:layout_constraintEnd_toEndOf="parent"
            motion:layout_constraintStart_toStartOf="parent"
            motion:layout_constraintBottom_toBottomOf="@+id/avHeader"
            motion:layout_constraintTop_toTopOf="@+id/avHeader">
            <CustomAttribute
                motion:attributeName="textSize"
                motion:customFloatValue="40"/>
        </Constraint>
    </ConstraintSet>`

const sovSceneSnippetConstraintSet2 = `    <ConstraintSet android:id="@+id/collapsed">
        <Constraint
            android:id="@+id/avHeader"
            android:layout_width="0dp"
            android:layout_height="80dp"
            motion:layout_constraintEnd_toEndOf="parent"
            motion:layout_constraintStart_toStartOf="parent"
            motion:layout_constraintTop_toTopOf="parent">
            <CustomAttribute
                motion:attributeName="arcHeightDp"
                motion:customFloatValue="0"/>
        </Constraint>

        <Constraint
            android:id="@+id/tvTitle"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginStart="14dp"
            motion:layout_constraintStart_toStartOf="@+id/avHeader"
            motion:layout_constraintBottom_toBottomOf="@+id/avHeader"
            motion:layout_constraintTop_toTopOf="@+id/avHeader">
            <CustomAttribute
                motion:attributeName="textSize"
                motion:customFloatValue="20"/>
        </Constraint>
    </ConstraintSet>
</MotionScene>`

class App extends React.Component {
  componentDidMount() {
    const elements = document.querySelectorAll(".step")
    for (var i=0, max=elements.length; i < max; i++) {
      var element = elements[i]
      if(element.id !== undefined && element.id !== "step-1") {
        element.style.visibility = "hidden"
      }
    }

    window.onkeyup = (e) => {
      if(e.keyCode === 39||e.keyCode === 37){
        const elements = document.getElementsByClassName("step")
        for (var i = 0, max = elements.length; i < max; i++) {
          var element = elements[i]
          element.style.visibility = "visible"
        }

        const step24 = document.getElementById("step-24")
        if(step24.classList.contains('active')) {
          document.getElementById("root").style.color = "#CC000000"
        } else {
          document.getElementById("root").style.color = "#00000000"
        }
      }
    }
  }

  render() {
    return (
      <Impress
        progress={true}
        fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>}
      >
        <Step data={{x: 0, y: 0}}>
          <TitleSlide />
        </Step>
        <Step data={{x: 1500, y: -50, scale: 1}}>
          <PrimaryText>Animated Vector Drawable</PrimaryText>
        </Step>
        <Step data={{x: 1500, y: 0, scale: 1.2}}>
          <PrimaryText>LayoutTransition animations</PrimaryText>
        </Step>
        <Step data={{x: 1500, y: 50, scale:0.8}}>
          <PrimaryText>LayoutManager</PrimaryText>
        </Step>
        <Step data={{x: 1500, y: 500, rotateZ: 90, scale: 0.4}}>
          <PrimaryUnderlineText>What is <b>MotionLayout</b>?!?</PrimaryUnderlineText>
          <MotionLayoutGraph />
        </Step>
        <Step data={{x: 1500, y: 1150, rotateZ: 90}}>
          <PrimaryText>Subclass of <code style={{fontFamily: "source-code-pro, monospace"}}>ConstraintLayout</code></PrimaryText>
        </Step>
        <Step data={{x: 1825, y: 1435, rotateZ: 180, scale: 1}}>
          <PrimaryText style={{width: "700px", textAlign: "right"}}>
            A mix between the property&nbsp;
            <PrimaryBoldSpan>animation framework</PrimaryBoldSpan>, layout transitions with&nbsp;
            <PrimaryBoldSpan>TransitionManager</PrimaryBoldSpan>, and&nbsp;
            <PrimaryBoldSpan>CoordinatorLayout</PrimaryBoldSpan>.
          </PrimaryText>
        </Step>
        <Step data={{x: 1425, y: 1515, rotateZ: 360, scale: 1.3}}>
          <PrimaryText>
            <div style={{fontSize: "1.3em", lineHeight:"1.1", textTransform: "uppercase", fontWeight: "bold"}}>
              Declarative
            </div>
            <div style={{fontSize: "0.6em", lineHeight:"0.9"}}>
              (XML Only)
            </div>
          </PrimaryText>
        </Step>
        <Step data={{x: 0, y: 600, rotateZ: 0, scale: 0.3}}>
          <PrimaryUnderlineText style={{marginLeft: 80}}>What it looks like?!?</PrimaryUnderlineText>
        </Step>
        <Step data={{x: 0, y: 750, rotateZ: 0, scale: 0.4}}>
          <video width="300" height="510" autoPlay="autoPlay" loop="loop" style={{margin: 175}}>
            <source src="videos/a1-example.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Step>
        <Step data={{x: 0, y: 950, rotateZ: 0, scale: 0.2}}>
          <pre><code className="lang-xml" style={{fontSize: 14}}>{a1MotionLayoutSnippet}</code></pre>
        </Step>
        <Step data={{x: -200, y: 1000, rotateZ: 0, scale: 0.2}}>
          <pre><code className="lang-xml" style={{fontSize: 14}}>{a1SceneSnippetTransition}</code></pre>
        </Step>
        <Step data={{x: 0, y: 1100, rotateZ: 0, scale: 0.2}}>
          <pre><code className="lang-xml" style={{fontSize: 14}}>{a1SceneSnippetConstraintSet1}</code></pre>
        </Step>
        <Step data={{x: 200, y: 1050, rotateZ: 0, scale: 0.2}}>
          <pre><code className="lang-xml" style={{fontSize: 14}}>{a1SceneSnippetConstraintSet2}</code></pre>
        </Step>
        <Step data={{x: 0, y: 1350, rotateZ: 0, scale: 0.4}}>
          <video width="300" height="510" autoPlay="autoPlay" loop="loop" style={{margin: 255}}>
            <source src="videos/shape-of-view-example.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Step>
        <Step data={{x: 0, y: 1550, rotateZ: 0, scale: 0.2}}>
          <pre><code className="lang-xml" style={{fontSize: 14}}>{sovMotionLayoutSnippet}</code></pre>
        </Step>
        <Step data={{x: -200, y: 1650, rotateZ: 0, scale: 0.2}}>
          <pre><code className="lang-xml" style={{fontSize: 14}}>{sovSceneSnippetTransition}</code></pre>
        </Step>
        <Step data={{x: 0, y: 1750, rotateZ: 0, scale: 0.2}}>
          <pre><code className="lang-xml" style={{fontSize: 14}}>{sovSceneSnippetConstraintSet1}</code></pre>
        </Step>
        <Step data={{x: 200, y: 1650, rotateZ: 0, scale: 0.2}}>
          <pre><code className="lang-xml" style={{fontSize: 14}}>{sovSceneSnippetConstraintSet2}</code></pre>
        </Step>
        <Step data={{x: 750, y: 750, rotateZ: 45, rotateX: 25, scale: 0.7}}>
          <PrimaryText>What are <b>keyframes</b>?</PrimaryText>
        </Step>
        <Step data={{x: 625, y: 750, rotateZ: 45, rotateX: 25, scale: 0.5}}>
          <PrimaryText>
            <table style={{width: 1000}}>
              <tbody>
                <tr>
                  <td>Position keyframe</td>
                  <td style={{width: 100}}>→</td>
                  <td><code style={{fontFamily: "source-code-pro, monospace"}}>KeyPosition</code></td>
                </tr>
                <tr>
                  <td>Attribute keyframe</td>
                  <td style={{width: 100}}>→</td>
                  <td><code style={{fontFamily: "source-code-pro, monospace"}}>KeyAttribute</code></td>
                </tr>
                <tr>
                  <td>Cycle keyframe keyframe</td>
                  <td style={{width: 100}}>→</td>
                  <td><code style={{fontFamily: "source-code-pro, monospace"}}>KeyCycle</code></td>
                </tr>
                <tr>
                  <td>TimeCycle keyframe</td>
                  <td style={{width: 100}}>→</td>
                  <td><code style={{fontFamily: "source-code-pro, monospace"}}>KeyTimeCycle</code></td>
                </tr>
              </tbody>
            </table>
          </PrimaryText>
        </Step>
        <Step data={{x: 850, y: 375, rotateZ: -45, rotateX: 25, scale: 0.5}}>
          <GridContainer>
            <GridItem>
              <img src="images/position-keyframe-1.svg" alt="Position keyframe example without keyframe" />
            </GridItem>
            <GridItem><div style={{margin: 'auto'}}>→</div></GridItem>
            <GridItem>
              <img src="images/position-keyframe-2.svg" alt="Position keyframe example with keyframe" />
            </GridItem>
          </GridContainer>
        </Step>
        <Step data={{x: 950, y: 475, rotateZ: -45, rotateX: 25, scale: 0.5}}>
          <img style={{display: "inline"}} src="images/attribute-keyframe.gif" alt="Animation of attribute keyframe"/>
        </Step>
        <Step data={{x: 750, y: 750, scale: 3}} style={{background: "#CC000000"}}>
          <div style={{position: "relative", left: "35%", top:"45%"}}>
            <PrimaryText>Thank you for listening!</PrimaryText>
            <PrimaryUnderlineText>Any questions?</PrimaryUnderlineText>
          </div>
        </Step>
      </Impress>
    );
  }
}

export default App;
