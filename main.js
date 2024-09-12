

let fashion = [
   {
    name : 'Fashion Wears',
    image : 'i (3).jpeg',
    price : "#2000",
    off: 50
  },
  {
    name : 'Fashion Wears',
    image : 'i.jpeg',
    price : "#25000",
    off : 20
  },
  {
    name: 'Fashion Wears',
    image: 'i (1).jpeg',
    price: "#20000",
    off: 30
  },
  {
    name: 'Fashion Wears',
    image: 'i (2).jpeg',
    price: "#5000",
    off: 10
  },
   {
    name: 'Fash Wears',
    image: 'download.jpeg',
    price: "#20000",
    off : 60
  }
];


let appliance= [
   {
    name : 'Shoe',
    image : 'i.jpeg',
    price : "#20000",
    off: 50
  },
  {
    name : 'Wrist watchs',
    image : 'i (1).jpeg',
    price : "#25000",
    off : 20
  },
  {
    name: 'Oraimo Cord',
    image: 'i (2).jpeg',
    price: "#2000",
    off: 30
  },
  {
    name: 'HP laptop',
    image: 'i (3).jpeg',
    price: "#500000",
    off: 10
  },
   {
    name: 'Flash drive',
    image: 'download.jpeg',
    price: "#2000",
    off : 60
  }
];



let accessories = [
   {
    name : 'Computer',
    image : 'download.jpeg',
    price : "#20000",
    off: 50
  },
  {
    name : 'Wrist watchs',
    image : 'i (3).jpeg',
    price : "#25000",
    off : 20
  },
  {
    name: 'Oraimo Cord',
    image: 'i.jpeg',
    price: "#2000",
    off: 30
  },
  {
    name: 'HP laptop',
    image: 'i (1).jpeg',
    price: "#500000",
    off: 10
  },
   {
    name: 'Flash drive',
    image: 'e0068938-622c-41c3-80d6-11f81e8392d6.jpeg',
    price: "#20000",
    off : 60
  }
];



document.querySelector('.login').onclick=()=>{
  open('signup.html');
}
document.querySelectorAll('.top').forEach((e)=>{
//e.setAttribute('data-aos','fade-out');
e.setAttribute('data-aos',"fade-right");
//e.setAttribute('data-aos-offset',"300");
  e.setAttribute('data-aos-easing',"ease-in-sine");
});
