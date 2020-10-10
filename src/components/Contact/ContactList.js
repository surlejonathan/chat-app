import React from "react";
import Contact from "./Contact";

const contacts = [
  {
    name: "Maureen Ruiz",
    online: false,
    avatar: "https://randomuser.me/api/portraits/women/59.jpg"
  },
  {
    name: "Morris Reid",
    online: false,
    avatar: "https://randomuser.me/api/portraits/men/21.jpg"
  },
  {
    name: "Sebastian Bishop",
    online: true,
    avatar: "https://randomuser.me/api/portraits/men/52.jpg"
  },
  {
    name: "Marc Valentine",
    online: true,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  }
];

const ContactList = () => {
  return contacts.map((contact, i) => {
    return <Contact key={i} {...contact} />;
  });
};

export default ContactList;
