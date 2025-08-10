import {PhotoCard} from '@/components/photo-card'


export default function Page() {

    return (
      <section id="photography">
        <div className="mb-8">
          <h1 className="font-semibold text-2xl mb-8">My Photos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <PhotoCard
        location={"Interlaken"}
        date={"Feb 2024"}
        image={"/photo1.jpeg"}>
        </PhotoCard>
        <PhotoCard
        location={"Interlaken"}
        date={"Feb 2024"}
        image={"/photo2.jpg"}>
        </PhotoCard>
        <PhotoCard
        location={"Florida"}
        date={"Feb 2024"}
        image={"/photo3.jpg"}>
        </PhotoCard>
        <PhotoCard
        location={"Paris"}
        date={"Feb 2024"}
        image={"/photo6.jpg"}>
        </PhotoCard>
        <PhotoCard
        location={"Interlaken"}
        date={"Feb 2024"}
        image={"/photo5.jpg"}>
        </PhotoCard>
        <PhotoCard
        location={"Ontario"}
        date={"Feb 2024"}
        image={"/photo10.jpg"}>
        </PhotoCard>
        <PhotoCard
        location={"Interlaken"}
        date={"Feb 2024"}
        image={"/photo4.jpg"}>
        </PhotoCard>

        <PhotoCard
        location={"London"}
        date={"Feb 2024"}
        image={"/photo15.jpg"}>
        </PhotoCard>
        <PhotoCard
        location={"Ontario"}
        date={"Feb 2024"}
        image={"/photo12.jpg"}>
        </PhotoCard>
        <PhotoCard
        location={"Interlaken"}
        date={"Feb 2024"}
        image={"/photo7.jpg"}>
        </PhotoCard>
        <PhotoCard
        location={"Interlaken"}
        date={"Feb 2024"}
        image={"/photo8.jpg"}>
        </PhotoCard>
        <PhotoCard
        location={"Interlaken"}
        date={"Feb 2024"}
        image={"/photo9.jpg"}>
        </PhotoCard>
        
        <PhotoCard
        location={"Florida"}
        date={"Feb 2024"}
        image={"/photo11.jpg"}>
        </PhotoCard>
        <PhotoCard
        location={"Ontario"}
        date={"Feb 2024"}
        image={"/photo13.jpg"}>
        </PhotoCard>
        <PhotoCard
        location={"Paris"}
        date={"Feb 2024"}
        image={"/photo14.jpg"}>
        </PhotoCard>
        </div>
        </div>
        
      </section>
    )
  }