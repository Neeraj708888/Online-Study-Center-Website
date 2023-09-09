
function myFunction() {
    const navbar = document
  .getElementsByClassName("navbar");
  console.log(navbar);
  navbar[0].classList.toggle('h-nav-resp');

  const navlist = document
  .getElementsByClassName("nav-list");
  navlist[0].classList.toggle('v-class-resp');

  const rightNav = document
    .getElementsByClassName("rightNav");
    rightNav[0].classList.toggle('v-class-resp');
}
