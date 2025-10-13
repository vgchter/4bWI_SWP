import React, { useEffect, useState } from "react";
import Card from "./Card";

type Props = {};
type Person = { name: string; avatar: string; jobtitle: string };

export default function PeopleContainer({}: Props) {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setfilteredpeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch("https://67b89061699a8a7baef48561.mockapi.io/person").then((res) =>
      res.json().then((data) => {
        setPeople(data);
        setfilteredpeople(data);
      })
    );
  }, []);

  const filterPeople = (filter: string) => {
    let filtered = people.filter((person: Person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
    setfilteredpeople(filtered);
  };

  return (
    <div>
      <div className="fixed flex border mb-4 bg-white w-full h-25 pl-5 pr-5 items-center rounded-b-md">
        <input
          className="border p-4 rounded-lg h-fit"
          type="text"
          placeholder="Search"
          onChange={(el) => {
            console.log(el.target.value);
            filterPeople(el.target.value);
          }}
        />
        <h1 className="font-bold text-4xl p-2 ml-83">People</h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-28 pl-5 pr-5">
        {filteredPeople.map((person: Person) => {
          return (
            <Card
              name={person.name}
              imageUri={person.avatar}
              title={person.jobtitle}
            />
          );
        })}
      </div>
    </div>
  );
}
