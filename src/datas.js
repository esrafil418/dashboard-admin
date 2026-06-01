let xAxisData = [
  {
    name: "Jan",
    Sale: 100_030,
  },
  {
    name: "Feb",
    Sale: 50_040,
  },
  {
    name: "Mar",
    Sale: 100_160,
  },
  {
    name: "Apr",
    Sale: 90_120,
  },
  {
    name: "May",
    Sale: 120_800,
  },
  {
    name: "Jun",
    Sale: 180_300,
  },
  {
    name: "Jul",
    Sale: 60_090,
  },
  {
    name: "Agu",
    Sale: 140_020,
  },
  {
    name: "Sep",
    Sale: 80_440,
  },
  {
    name: "Oct",
    Sale: 50_000,
  },
  {
    name: "Nov",
    Sale: 110_000,
  },
  {
    name: "Dec",
    Sale: 130_000,
  },
];

const newMembers = [
  {
    id: 1,
    username: "Hwang In-ho",
    title: "Front Man",
    img: "images/Hwang In-ho.webp",
  },
  {
    id: 2,
    username: "Jo Yuri",
    title: "Player 222",
    img: "images/Jo Yuri.jpg",
  },
  {
    id: 3,
    username: "Wi Ha-jun",
    title: "Police",
    img: "images/Wi Ha-jun.jpg",
  },
  {
    id: 4,
    username: "Yang Dong-geun",
    title: "Player 007",
    img: "images/Yang Dong-geun.jpg",
  },
];

const transactions = [
  {
    id: 1,
    customer: "Seong Gi-hun",
    date: "1 Jun 2026",
    amount: 100,
    status: "Approved",
    img: "images/Seong Gi-hun 456.jpg",
  },
  {
    id: 2,
    customer: "Yim Si-wan",
    date: "2 Jun 2026",
    amount: 200,
    status: "Declined",
    img: "images/Yim Si-wan.jpg",
  },
  {
    id: 3,
    customer: "Yang Dong-geun",
    date: "3 Jun 2026",
    amount: 300,
    status: "Declined",
    img: "images/Yang Dong-geun.jpg",
  },
  {
    id: 4,
    customer: "Hwang In-ho",
    date: "2 Jun 2026",
    amount: 400,
    status: "Pending",
    img: "images/Hwang In-ho.webp",
  },
];

let userRows = [
  {
    id: 1,
    username: "Seong Gi-hun",
    avatar: "images/Seong Gi-hun 456.jpg",
    status: "active",
    transaction: "$200.95",
    email: "squid.game@gmail.com",
  },
  {
    id: 2,
    username: "Jo Yuri",
    avatar: "images/Jo Yuri.jpg",
    status: "active",
    transaction: "$400.95",
    email: "squid.game@gmail.com",
  },
  {
    id: 3,
    username: "Wi Ha-jun",
    avatar: "images/Wi Ha-jun.jpg",
    status: "active",
    transaction: "$100.95",
    email: "squid.game@gmail.com",
  },
  {
    id: 4,
    username: "Hwang In-ho",
    avatar: "images/Hwang In-ho.webp",
    status: "active",
    transaction: "$200.95",
    email: "squid.game@gmail.com",
  },
  {
    id: 5,
    username: "Yang Dong-geun",
    avatar: "images/Yang Dong-geun.jpg",
    status: "active",
    transaction: "$100.75",
    email: "squid.game@gmail.com",
  },
];

export { xAxisData, newMembers, transactions, userRows };
