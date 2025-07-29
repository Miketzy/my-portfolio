import React from "react";
import ExperieceCard from "./ExperieceCard";

function Experience() {
  return (
    <div className="flex flex-col w-full lg:w-[700px]">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-[#85DFE7] font-bold">Experience</h1>
        <p className="text-base leading-relax text-white mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          similique molestiae magnam facilis vero deserunt ratione delectus
          eaque mollitia ut earum quibusdam, tempore, aliquid ipsam perferendis
          aut nisi rerum laboriosam!
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 ">
        <ExperieceCard
          title="Frontend Development"
          des={
            <>
              <ul className="list-disc list-inside text-sm">
                <li>Graduated from Davao Oriental State University</li>
              </ul>
            </>
          }
        />
        <ExperieceCard
          title="Wordpress"
          des={
            <>
              <ul className="list-disc list-inside text-sm">
                <li>Graduated from Davao Oriental State University</li>
              </ul>
            </>
          }
        />
        <ExperieceCard
          title="data Entry Encoder"
          des={
            <>
              <ul className="list-disc list-inside text-sm">
                <li>Graduated from Davao Oriental State University</li>
              </ul>
            </>
          }
        />
        <ExperieceCard />
      </div>
    </div>
  );
}

export default Experience;
