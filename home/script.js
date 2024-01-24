const landing = document.querySelector('.landing-page')
const event_img = document.querySelector('.event_image')
const event_text = document.querySelector('.event_text')
const team_header = document.querySelector('.team-header')
const team = document.querySelector('.team')

console.log(landing, event_img, event_text,team_header,team)
landing.addEventListener('mouseover', (event)=>{
    event_img.classList.remove("active")
    event_text.classList.remove("active")
    console.log(event_img.classList)


})
team_header.addEventListener('mouseover', (event)=>{
    event_img.classList.remove("active")
    event_text.classList.remove("active")

})
team.addEventListener('mouseover', (event)=>{
    event_img.classList.remove("active")
    event_text.classList.remove("active")

})
event_img.addEventListener('mouseover', (event)=>{
    event_img.classList.add("active")
    event_text.classList.add("active")
    console.log(event_img.classList)

})