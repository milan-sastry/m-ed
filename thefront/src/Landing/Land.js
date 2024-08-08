import { Card } from "../components/ui/card.jsx";
import { motion } from "framer-motion";
import { AspectRatio } from "../components/ui/aspect-ratio.jsx";
import { useNavigate } from "react-router-dom";
const Thing = ({ head, text, image, direct, alt }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        className={`flex justify-between p-4 flex-col-reverse sm:flex-row items-center ${
          direct === "rtl" ? "sm:flex-row-reverse" : ""
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
        <Card className="size-72 mb-10 sm:mb-0">
          <img src={image} alt={alt} className="w-auto h-auto flex-shrink-0" />
        </Card>
      </div>
    </motion.div>
  );
};

const FrontPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex px-8 h-[calc(100vh-96px)] flex-row max-w-full justify-center relative border-blue-500">
      <div className="w-full h-fit flex flex-row max-w-screen-2xl border-green-300 justify-evenly absolute top-1/4 px-4">
        <div className=" border-red-500 flex flex-col">
          <h1 className="text-2xl sm:text-5xl/snug text-med-red font-semibold">
            <span className="whitespace-nowrap">Empowering Students</span>{" "}
            <br />
            for a Healthier Future
          </h1>
          <p className="text-xl sm:text-4xl mt-4 sm:mt-8">
            Serving <span className="italic">All</span> Communities.
          </p>
          <motion.button
            className="bg-med-red flex rounded-full p-4 w-fit text-white text-md sm:text-xl font-semibold mt-6 sm:mt-12"
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate("https://docs.google.com/forms/d/e/1FAIpQLSfGtMZ5NAaXdKfN1jomV2MKv_r4JumekZo7iESlbBwNZkgcwQ/viewform?usp=sf_link")}
          >
            Find Your Mentor
          </motion.button>
        </div>
        <div className=" border-black w-1/2 hidden lg:block relative">
          <img
            src="doctors.png"
            alt="logo"
            className="w-full "
          />
        </div>
      </div>
    </div>
  );
};

const Video = () => {
  return (
    <div className="h-screen bg-med-gradient flex flex-col items-center justify-center max-w-full">
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-white whitespace-nowrap">
        What's{" "}
        <motion.span
          className="italic whitespace-nowrap"
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          your{" "}
        </motion.span>
        story?
      </h1>
      <div className="mt-10 w-3/4 max-w-screen-lg border-black flex justify-center">
        <AspectRatio ratio={16/9} className="mt-4">
          <iframe
          className="size-full"
            src="https://www.youtube-nocookie.com/embed/23BhvJIqFE0?si=6bY8scDLH7X5urgk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </AspectRatio>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen p-8">
      <div className="max-w-2xl flex flex-col space-y-20 ">
        <Thing
          head="Discover"
          text="Explore internships, shadowing, and volunteering opportunities tailored to your interest."
          image="2.png"
        />
        <Thing
          head="Connect"
          text="Build genuine relationships with students and professionals through dynamic, detailed profiles. Message instantly and directly with peers and mentors."
          direct="rtl"
          image="Giveaway.png"
        />
        <Thing
          head="Schedule"
          text="Schedule calls and meetings within the app, aligning your availability with everything."
          image="3.png"
        />
      </div>
    </div>
  );
};

function Land() {
  return (
    <div className="justify-center border-green-400 w-full">
      <FrontPage />
      <Video />
      <Features />
    </div>
  );
}

export default Land;
