import Home from "../sections/Home" 
import Navigation from "../sections/Navigation" 
import PersonalInfo from "../sections/PersonalInfo" 
import WaveLine from "../components/WaveLine" 
import Project from "../sections/Project"
import Footer from "../sections/Footer"

import TargetCursor from '../components/TargetCursor';

export default function Landing(){
    return(
        <div className="overflow-x-hidden">
            <TargetCursor 
                spinDuration={0}
                hideDefaultCursor={true}
            />
            <Navigation />
            <Home />
            <PersonalInfo />
            <WaveLine />
            <Project />
            <Footer />
        </div>
    );
}