import { useEffect, useState } from "react";
import Card from "./Card";

type Person = { id: string; name: string; avatar: string; jobtitle: string };

export default function PeopleContainer() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch("https://67b89061699a8a7baef48561.mockapi.io/person")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#2D2B03]">
      <div className="flex justify-center items-center py-6 bg-[#2f3308]">
        <h1 className="font-extrabold text-4xl md:text-5xl text-white">
          HTL Dornbirn 5bWI
        </h1>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-4 p-4">
        {people.map((person) => (
          <Card
            key={person.id}
            name={person.name}
            title={person.jobtitle}
            imageUri={person.avatar}
          />
        ))}
      </div>
    </div>
  );
}
