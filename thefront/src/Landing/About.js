import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../components/ui/card.jsx";

const Member = ({ name, role, img, links }) => {
  return (
    <div className="flex flex-col items-center space-y-4 mb-10">
      <Card className="size-72">
        <CardContent className="flex flex-col items-center">
          <img src={img} alt={name} className="max-h-52 h-full w-auto pt-4 rounded-lg" />
        </CardContent>
        <CardFooter>
        <div className="flex flex-col space-y-1">
          <CardTitle>{name}</CardTitle>
          <CardDescription>{role}</CardDescription>
        </div>
        </CardFooter>
      </Card>
    </div>
  );
};

function About() {
  return (
    <div className="flex-col flex px-12 w-full items-center">
      <div className="flex-col flex divide-y-2 divide-gray-300 space-y-8 w-full max-w-screen-2xl pt-20 sm:px-20">
        <div>
          <h1 className="text-4xl font-thin">
            About{" "}
            <span className="pl-1 text-5xl text-med-red font-bold drop-shadow-sm whitespace-nowrap">
              m-ed
            </span>
          </h1>
          <div className="pt-4 space-y-4 max-w-2xl">
            <p>
              At M-Ed, our mission is to create a centralized online community
              bringing together underrepresented students aspiring to contribute
              to the medical and healthcare fields. We connect them with industry
              professionals and provide valuable shadowing, volunteering, and
              pre-medical training opportunities.
            </p>
            <p>
              By fostering connections based on identity, we enable students to
              connect with peers and mentors who share similar backgrounds and
              experiences. Our goal is to be a reliable and convenient resource
              for students pursuing a future in healthcare, helping to cultivate a
              diverse generation of medical professionals.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-semibold whitespace-nowrap py-4">Our Team</h1>
          <div className="flex flex-col xl:flex-row lg:space-x-4 items-center justify-center">
            <Member name="Mark Rajah" role="CEO" img="mark.jpeg" />
            <Member name="Milan Sastry" role="CTO" img="milan.png" />
            <Member name="Klea Tryfoni" role="COO" img="klea.jpeg" />
            <Member name="Dora Shen" role="CNO" img="dora.jpeg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
