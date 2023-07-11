const CircleProgressbar = (filmdetails) =>{
    return(
        <div class="progress-bar-container">
        <h2>
          <label for="html">valuation</label>
        </h2>
        <div class="progress-bar html">
          <progress id="html" min="0" max="100" value={(filmdetails?.rating*100)/10}></progress>
        </div>
      </div>
    )
}
export default CircleProgressbar;