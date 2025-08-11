'use client'

import {PhotoCard} from '@/components/photo-card'
import TargetCursor from '@/components/target-cursor';


export default function Page() {

    return (
      <section id="photography">
        <div>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
        <div className="mb-8">
          <h1 className="font-semibold text-2xl mb-8">My Photos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="cursor-target">
          <PhotoCard
        location={"Interlaken"}
        date={"Aug 2023"}
        image={"/photo1.jpeg"}>
        </PhotoCard>
        </div>
        <div className="cursor-target">
        <PhotoCard
        location={"Interlaken"}
        date={"Aug 2023"}
        image={"/photo2.jpg"}>
        </PhotoCard>
        </div>
        <div className="cursor-target">
        <PhotoCard
        location={"Florida"}
        date={"Mar 2025"}
        image={"/photo3.jpg"}>
        </PhotoCard>
        </div>
        <div className="cursor-target">
        <PhotoCard
        location={"Paris"}
        date={"Aug 2023"}
        image={"/photo6.jpg"}>
        </PhotoCard>
        </div>
        <div className="cursor-target">
        <PhotoCard
        location={"Interlaken"}
        date={"Aug 2023"}
        image={"/photo5.jpg"}>
        </PhotoCard>
        </div>
        <div className="cursor-target">
        <PhotoCard
        location={"Ontario"}
        date={"Aug 2024"}
        image={"/photo10.jpg"}>
        </PhotoCard>
        </div>
        <div className="cursor-target">
        <PhotoCard
        location={"Interlaken"}
        date={"Aug 2023"}
        image={"/photo4.jpg"}>
        </PhotoCard>
        </div>
        <div className="cursor-target">
        <PhotoCard
        location={"London"}
        date={"Aug 2023"}
        image={"/photo15.jpg"}>
        </PhotoCard>
        </div>
        <div className="cursor-target">
        <PhotoCard
        location={"Ontario"}
        date={"Aug 2024"}
        image={"/photo12.jpg"}>
        </PhotoCard>
        </div>
        <div className="cursor-target">
        <PhotoCard
        location={"Interlaken"}
        date={"Aug 2023"}
        image={"/photo7.jpg"}>
        </PhotoCard>
        </div>
        <div className="cursor-target">
        <PhotoCard
        location={"Interlaken"}
        date={"Aug 2023"}
        image={"/photo8.jpg"}>
        </PhotoCard>
        </div>
        <div className="cursor-target">
        <PhotoCard
        location={"Interlaken"}
        date={"Aug 2023"}
        image={"/photo9.jpg"}>
        </PhotoCard>
        </div>
        <div className="cursor-target">
        <PhotoCard
        location={"Ontario"}
        date={"Aug 2023"}
        image={"/photo11.jpg"}>
        </PhotoCard>
        </div>
        <div className="cursor-target">
        <PhotoCard
        location={"Ontario"}
        date={"Oct 2023"}
        image={"/photo13.jpg"}>
        </PhotoCard>
        </div>
        <div className="cursor-target">
        <PhotoCard
        location={"Paris"}
        date={"Aug 2023"}
        image={"/photo14.jpg"}>
        </PhotoCard>
        </div>
        </div>
        </div>
        </div>
      </section>
    )
  }