function About() {
    return (
      <div className="flex-col flex px-12 border-green-300 border w-full">
        <div className="flex-row flex border-black px-10 pt-8 pb-8">

          <div className="flex-col flex divide-y-2 divide-gray-300 space-y-4">
            <h1 className="text-4xl font-thin">
              About <span className="pl-1 text-5xl text-med-red font-bold drop-shadow-sm">m-ed</span>
            </h1>
            <div className="pt-4 space-y-4 max-w-2xl">
              <p>
                At M-Ed, our mission is to create a centralized online community bringing together underrepresented students aspiring to contribute to the medical and healthcare fields. We connect them with industry professionals and provide valuable shadowing, volunteering, and pre-medical training opportunities.
              </p>
              <p>
                By fostering connections based on identity, we enable students to connect with peers and mentors who share similar backgrounds and experiences. Our goal is to be a reliable and convenient resource for students pursuing a future in healthcare, helping to cultivate a diverse generation of medical professionals.
              </p>
            </div>
          </div>

        </div>

        <div>

        </div>
      </div>
    );
  }
  
  export default About;