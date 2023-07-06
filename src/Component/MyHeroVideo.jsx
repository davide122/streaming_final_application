import Herovideo from '../Video/Video senza titolo - Realizzato con Clipchamp.mp4';
const MyHeroVideo = () => {
    return(
<div class="video-container">
    
<div className="row position-relative">
    <div className="col col-6  justify-content-center align-items-center">
        
<h1 className='text-light textonvideo '>Benvenuto</h1>
        
    </div>
    <div className="col col-6">

    </div>
</div>


<video src={Herovideo} autoPlay muted loop>

</video>
</div>
    )
}
export default MyHeroVideo;