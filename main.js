const scrollRevealOption={
    distance:"50px",
    origin:"bottom",
    duration:1000,
};
scrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
});
scrollReveal().reveal(".header_content p",{
    ...scrollRevealOption,
    delay:500,
});
scrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
    delay:1000,
});
scrollReveal().reveal("information_card",{
    ...scrollRevealOption,
    interval:500,
});
scrollReveal().reveal(".testinomial_card",{
    ...scrollRevealOption,
    interval:500,
});
