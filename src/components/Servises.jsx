import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="About me"
          // text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center min-h-[39rem]  mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[30rem]">
            <p className="text-2xl text-n-1/50 ">
              I am a passionate and highly motivated second-year Bachelor of
              Business Administration student at Curtin University Dubai,
              specializing in Digital Marketing and Tourism and Hospitality
              Essentials. I am interested in using my educational background in
              digital marketing & events management, and would like to apply my
              knowledge to real-life situations. Thanks to my education, I have
              a deep grasp in important marketing principles and digital
              strategies. I am especially interested in how using digital
              innovations can change customer experiences and marketing in ways
              that upgrade company visibility. Besides academics, I am devoted
              to constant professional growth by looking for opportunities to
              expand my skills through hands-on experiences and internships.
            </p>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
