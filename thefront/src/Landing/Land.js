
import { Card } from "../components/ui/card.jsx";
import {motion} from 'framer-motion';

const Thing = ({ head, text, image, direct,alt }) => {
  return (
    <motion.div
  initial={{ opacity: 0, scale: 0.2 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.3 }}
>
    <div
      className={`flex justify-between p-4  items-center ${
        direct === "rtl" ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className={`flex flex-col p-8 ${
          direct === "rtl" ? "border-r-4" : "border-l-4"
        } border-med-red w-72 h-fit`}
      >
        <h1 className="text-4xl font-semibold mb-4">{head}</h1>
        <p>{text}</p>
      </div>
      <Card className="size-72">
        <img src={image} alt={alt} className="w-auto h-auto flex-shrink-0" />
      </Card>
    </div>
    </motion.div>
  );
};

const FrontPage = () => {
  return(      <div className="flex max-h-screen pl-14 h-dvh flex-row w-full justify-center relative border-purple-200">
    <div className="w-full flex flex-row max-w-screen-2xl absolute top-1/4 border-green-300 space-x-36">
      <div className="flex flex-col">
        <h1 className="text-3xl sm:text-5xl/snug text-med-red font-semibold">
          <span className="whitespace-nowrap">Empowering Students</span>{" "}
          <br />
          for a Healthier Future
        </h1>
        <p className="text-2xl sm:text-4xl mt-8">
          Serving <span className="italic">All</span> Communities.
        </p>
        <motion.button className="bg-med-red flex rounded-full p-4 w-fit text-white text-xl font-semibold mt-12"
        whileHover={{scale: 1.1}}>
          Find Your Mentor
        </motion.button>
      </div>
      <div className=" border-black hidden lg:block pr-20 -mt-20">
        <img
          src="doctors.png"
          alt="logo"
          className="flex-shrink-0 w-auto h-auto"
        />
      </div>
    </div>
  </div>)
}

const Video = () => {
  return(
    <div className="h-screen bg-med-gradient flex flex-col items-center justify-center">
        <h1 className="text-8xl text-white">
          What's <span className="italic">your </span>story?
        </h1>
        <div className="mt-20">
          <iframe
            width="888"
            height="500"
            src="https://www.youtube-nocookie.com/embed/23BhvJIqFE0?si=6bY8scDLH7X5urgk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
  );
}

const Features = () => {
  return(
   
    <div className="w-full flex justify-center items-center min-h-screen p-8">
        <div className="max-w-2xl flex flex-col space-y-20 ">
          <Thing
            head="Discover"
            text="Explore internships, shadowing, and volunteering opportunities tailored to your interest."
            image="redLogo.png"
          />
          <Thing
            head="Connect"
            text="Build connections with students and professionals through dynamic, detailed profiles. Message instantly and directly with peers and mentors."
            direct="rtl"
            image="network.png"
          />
          <Thing
            head="Schedule"
            text="Schedule calls and meetings within the app, aligning your availability with everything."
            image="doctors.png"
          />
        </div>
      </div>

  );
}

function Land() {
  return (
    <div className="justify-center border-green-400 w-full">
      <FrontPage/>
      <Video/>
      <Features/>
      
    </div>
  );
}

export default Land;
