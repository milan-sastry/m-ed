import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../components/ui/carousel";
  import SuggestCard from "./SuggestCard";

function PlayDirty(){
    return(
        <div className="flex w-full border-black flex-col items-center justify-center px-10">
      <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <SuggestCard />
            </CarouselItem>
            <CarouselItem >
              <SuggestCard />
            </CarouselItem>
            <CarouselItem >
              <SuggestCard />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-gray-300" />
          <CarouselNext className="bg-gray-300"/>
        </Carousel>
      </div>
    );
}

export default PlayDirty;

  