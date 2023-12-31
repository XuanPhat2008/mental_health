import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimeLine from './TimeLine';
import ProductCard from './ProductCard';
import PodCast from './PodCast';
import HomePage from './Homepage';
import QuizSelection from './Selection';
import Quiz1 from './pages/quiz1';
import Quiz2 from './pages/quiz2';
import Quiz3 from './pages/quiz3';
import Quiz4 from './pages/quiz4';
import Quiz5 from './pages/quiz5';
import Quiz6 from './pages/quiz6';
import Blog from './Blog';
import Addiction from './Blogs/A/addiction';
import ADHDChildhood from './Blogs/A/adhd-childhood';
import AdjustmentDisorder from './Blogs/A/adjustment-disorder';
import Antisocial from './Blogs/A/antisocial';
import Anxiety from './Blogs/A/anxiety';
import BipolarDisorder from './Blogs/B/bipolar-disorder';
import Bulimia from './Blogs/B/bulimia';
import BodyDysmorphicDisorder from './Blogs/B/body-dysmorphic-disorder';
import CaffeineAddiction from './Blogs/C/caffeine-addiction';
import ClinicalPsy from './Blogs/C/clinical-psychology';
import CognitiveBehavioral from './Blogs/C/cognitive-behavioral-therpay';
import DrugAddiction from './Blogs/D/drug-addiction';
import DepressionChildhood from './Blogs/D/depression-childhood';
import DelayedSleepSyndrome from './Blogs/D/delayed-sleep-phase-syndrome';
import EatingDisorder from './Blogs/E/eating-disorders';
import PeerPressure from './Blogs/G/genZ-&-peer-pressure';
import GenderDysphoria from './Blogs/G/gender-dysphoria';
import Intellectual from './Blogs/I/intellactual-disability';
import Loneliness from './Blogs/L/loneliness';
import MixedPersonality from './Blogs/M/mixed-personality-disorder';
import MoodDisorder from './Blogs/M/mood-disorder';
import NightEating from './Blogs/N/night-eating-syndrome';
import SleepWake from './Blogs/N/non-24-hour-sleep-wake-disorder';
import ObessiveCompulsive from './Blogs/O/obessive-compulsive-disorder';
import SexAddiction from './Blogs/S/sex-addiction';
import SleepDisorder from './Blogs/S/sleep-disorders';
import SocialAnxietty from './Blogs/S/social-anxiety-disorder';
import TechnologyAddiction from './Blogs/T/technology-addiction';
import AddictionBlog1 from './Blogs/A/addiction-blog-1';
import AddictionBlog2 from './Blogs/A/addiction-blog-2';
import AddictionBlog3 from './Blogs/A/addiction-blog-3';
import GenZBlog1 from './Blogs/G/genZ-blog-1';
import GenZBlog2 from './Blogs/G/genZ-blog-2';
import GenZBlog3 from './Blogs/G/genZ-blog-3';
import GenZBlog4 from './Blogs/G/genZ-blog-4';
import EatingBlog1 from './Blogs/E/eating-blog-1';
import EatingBlog2 from './Blogs/E/eating-blog-2';
import EatingBlog3 from './Blogs/E/eating-blog-3';
import ObBlog1 from './Blogs/O/ob-blog-1';
import ObBlog2 from './Blogs/O/ob-blog-2';
import GenZHas from './Blogs/Blog-for-hastag/genZ';
import MentalhealthHas from './Blogs/Blog-for-hastag/mental-health';
import PsychologicalcrisisHas from './Blogs/Blog-for-hastag/psychologicalcrisis';
import TheraphyhealingHas from './Blogs/Blog-for-hastag/theraphyhealing';
import PsyHas from './Blogs/Blog-for-hastag/psy';
import GenZ1 from './Blogs/Blog-for-hastag/genZ-1';
import GenZ2 from './Blogs/Blog-for-hastag/genZ-2';
import Psy1 from './Blogs/Blog-for-hastag/psy-1';
import Psy2 from './Blogs/Blog-for-hastag/psy-2';
import Psy1more from './Blogs/Blog-for-hastag/psycho-1';
import Psy2more from './Blogs/Blog-for-hastag/pyscho-2';
import Mental2 from './Blogs/Blog-for-hastag/mental-2';
import Mental1 from './Blogs/Blog-for-hastag/mental-1';
import Thera1 from './Blogs/Blog-for-hastag/thera-1';
import Thera2 from './Blogs/Blog-for-hastag/thera-2';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/musics" element={<ProductCard />} />
        <Route path="/movies" element={<TimeLine />} />
        <Route path="/podcasts" element={<PodCast />} />
        <Route path="/quizz" element={<QuizSelection />} />
        <Route path="/quizz/1" element={<Quiz1 />} />
        <Route path="/quizz/2" element={<Quiz2 />} />
        <Route path="/quizz/3" element={<Quiz3 />} />
        <Route path="/quizz/4" element={<Quiz4 />} />
        <Route path="/quizz/5" element={<Quiz5 />} />
        <Route path="/quizz/6" element={<Quiz6 />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/addiction" element={<Addiction />} />
        <Route path="/blog/addiction-blog-1" element={<AddictionBlog1 />} />
        <Route path="/blog/addiction-blog-2" element={<AddictionBlog2 />} />
        <Route path="/blog/addiction-blog-3" element={<AddictionBlog3 />} />
        <Route path="/blog/adhd-childhood" element={<ADHDChildhood />} />
        <Route path="/blog/adjustment-disorder" element={<AdjustmentDisorder />} />
        <Route path="/blog/antisocial-personality-disorder" element={<Antisocial />} />
        <Route path="/blog/anxiety" element={<Anxiety />} />
        <Route path="/blog/bulimia" element={<Bulimia />} />
        <Route path="/blog/body-dysmorphic-disorder" element={<BodyDysmorphicDisorder />} />
        <Route path="/blog/bipolar-disorder" element={<BipolarDisorder />} />
        <Route path="/blog/caffeine-addiction" element={<CaffeineAddiction />} />
        <Route path="/blog/clinical-psychology" element={<ClinicalPsy />} />
        <Route path="/blog/cognitive-behavioral-therapy" element={<CognitiveBehavioral />} />
        <Route path="/blog/drug-addiction" element={<DrugAddiction />} />
        <Route path="/blog/depression-childhood" element={< DepressionChildhood/>} />
        <Route path="/blog/delayed-sleep-phase-syndrome" element={<DelayedSleepSyndrome/>} />
        <Route path="/blog/eating-disorders" element={<EatingDisorder />} />
        <Route path="/blog/eating-blog-1" element={<EatingBlog1 />} />
        <Route path="/blog/eating-blog-2" element={<EatingBlog2 />} />
        <Route path="/blog/eating-blog-3" element={<EatingBlog3 />} />
        <Route path="/blog/genZ-&-peer-pressure" element={<PeerPressure />} />
        <Route path="/blog/genZ-blog-1" element={<GenZBlog1 />} />
        <Route path="/blog/genZ-blog-2" element={<GenZBlog2 />} />
        <Route path="/blog/genZ-blog-3" element={<GenZBlog3 />} />
        <Route path="/blog/genZ-blog-4" element={<GenZBlog4 />} />
        <Route path="/blog/gender-dysphoria" element={<GenderDysphoria />} />
        <Route path="/blog/intellectual-disability" element={<Intellectual />} />
        <Route path="/blog/loneliness" element={<Loneliness />} />
        <Route path="/blog/mixed-personality-disorder" element={<MixedPersonality />} />
        <Route path="/blog/mood-disorders" element={<MoodDisorder />} />
        <Route path="/blog/night-eating-syndrome" element={<NightEating />} />
        <Route path="/blog/non-24-hour-sleep-wake-disorder" element={<SleepWake/>} />
        <Route path="/blog/obessive-compulsive-disorder" element={<ObessiveCompulsive />} />
        <Route path="/blog/ob-blog-1" element={<ObBlog1 />} />
        <Route path="/blog/ob-blog-2" element={<ObBlog2 />} />
        <Route path="/blog/sex-addiction" element={<SexAddiction />} />
        <Route path="/blog/sleep-disorders" element={<SleepDisorder />} />
        <Route path="/blog/social-anxiety-disorder" element={<SocialAnxietty />} />
        <Route path="/blog/technology-addiction" element={<TechnologyAddiction />} />
        <Route path="/blog/has-genZ" element={<GenZHas />} />
        <Route path="/blog/has-psychology" element={<PsyHas />} />
        <Route path="/blog/has-psychologicalcrisis" element={<PsychologicalcrisisHas />} />
        <Route path="/blog/has-theraphy&healing" element={<TheraphyhealingHas />} />
        <Route path="/blog/has-mentalhealth" element={<MentalhealthHas />} />
        <Route path="/blog/genZ-1" element={<GenZ1 />} />
        <Route path="/blog/genZ-2" element={<GenZ2 />} />
        <Route path="/blog/psy-1" element={<Psy1 />} />
        <Route path="/blog/psy-2" element={<Psy2 />} />
        <Route path="/blog/psy-1-more" element={<Psy1more />} />
        <Route path="/blog/psy-2-more" element={<Psy2more />} />
        <Route path="/blog/mental-1" element={<Mental1 />} />
        <Route path="/blog/mental-2" element={<Mental2 />} />
        <Route path="/blog/thera-1" element={<Thera1 />} />
        <Route path="/blog/thera-2" element={<Thera2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
